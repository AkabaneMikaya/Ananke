'use strict';

// 無需伺服器即可開啟；文字從 content.js 讀取，不使用 fetch。
const content = window.WORLD_CONTENT;
const languageSelect = document.querySelector('#language');

function characterLabel(key, language) {
  return window.CHARACTER_LABELS?.[language]?.[key] ?? window.CHARACTER_LABELS?.['zh-Hant']?.[key] ?? key;
}
function characterValue(value, language) {
  if (!value) return '';
  return typeof value === 'string' ? value : value[language] ?? value['zh-Hant'] ?? '';
}
function characterElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function characterName(record, language) {
  const englishName = record.englishName?.trim();
  const japaneseName = record.japaneseName?.trim();

  if (language === "en") {
    return englishName || japaneseName || "Name pending";
  }

  if (language === "ja") {
    return japaneseName || englishName || "名前未設定";
  }

  return record.name;
}
function characterImage(record, language) {
  const empty = () => {
    const box = characterElement('div', 'profile-image-empty');
    const icon = characterElement('span', '', '◇');
    icon.setAttribute('aria-hidden', 'true');
    box.append(icon, characterElement('p', '', characterLabel('portraitPending', language)));
    return box;
  };
  if (!record.portrait) return empty();
  const figure = characterElement('figure', 'profile-image');
  const img = characterElement('img');
  img.src = record.portrait;
  img.alt = characterName(record, language);
  img.loading = 'lazy';
  img.addEventListener('error', () => figure.replaceWith(empty()), {once:true});
  figure.append(img);
  if (record.portraitCredit) figure.append(characterElement('figcaption', '', record.portraitCredit));
  return figure;
}
function renderCharacters(text) {
  const list = document.querySelector('#character-list');
  if (!list || !window.WORLD_CHARACTERS) return;
  const language = document.documentElement.lang;
  list.replaceChildren();
  for (const id of ['shioka', 'bonikka', 'kari']) {
    const record = window.WORLD_CHARACTERS.find(item => item.id === id);
    if (!record) continue;
    const article = characterElement('article', 'character');
    const portrait = characterElement('a', 'portrait');
    portrait.href = record.url;
    portrait.setAttribute('aria-label', characterName(record, language));
    if (record.portrait) {
      const image = characterElement('img');
      image.src = record.portrait;
      image.alt = '';
      image.loading = 'lazy';
      image.addEventListener('error', () => image.replaceWith(characterElement('span', '', '◇')), {once:true});
      portrait.append(image);
    } else portrait.append(characterElement('span', '', '◇'));
    const title = characterElement('h3');
    const nameLink = characterElement('a', '', characterName(record, language));
    nameLink.href = record.url;
    title.append(nameLink);
    article.append(portrait, title);
    list.append(article);
  }
}
function renderCharacterDirectory(language) {
  const directory = document.querySelector('#character-directory');
  if (!directory || !window.WORLD_CHARACTERS) return;
  directory.replaceChildren();
  const intro = document.querySelector('#directory-intro');
  if (intro) intro.textContent = characterLabel('directoryIntro', language);
  for (const world of ['worldZero', 'otherWorlds']) {
    const worldSection = characterElement('section', 'directory-world');
    worldSection.append(characterElement('h2', '', characterLabel(world, language)));
    const groups = [...new Set(window.WORLD_CHARACTERS.filter(item => item.world === world).map(item => item.group))];
    for (const group of groups) {
      const groupSection = characterElement('section', 'directory-group');
      groupSection.append(characterElement('h3', '', characterLabel(group, language)));
      const list = characterElement('ul');
      for (const record of window.WORLD_CHARACTERS.filter(item => item.world === world && item.group === group)) {
        const li = characterElement('li');
        const link = characterElement('a');
        link.href = record.url;
        const arrow = characterElement('span', '', '↗');
        arrow.setAttribute('aria-hidden', 'true');
        link.append(characterElement('span', '', characterName(record, language)), arrow);
        li.append(link); list.append(li);
      }
      groupSection.append(list); worldSection.append(groupSection);
    }
    directory.append(worldSection);
  }
}
// Lift dark representative colors until readable on the profile's darkest cards.
function readableCharacterColor(hex) {
  const rgb=hex.match(/[0-9a-f]{2}/gi).map(v=>parseInt(v,16));
  const luminance=values=>values.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
  const background=luminance([38,40,44]);
  for(let step=0;step<=100;step++){
    const lifted=rgb.map(v=>Math.round(v+(255-v)*step/100));
    if((luminance(lifted)+.05)/(background+.05)>=4.5)return '#'+lifted.map(v=>v.toString(16).padStart(2,'0')).join('');
  }
  return '#ffffff';
}

function renderCharacterProfile(language) {
  const id = document.body.dataset.character;
  const profile = document.querySelector('#character-profile');
  if (!id || !profile || !window.WORLD_CHARACTERS) return;
  const record = window.WORLD_CHARACTERS.find(item => item.id === id);
  if (!record) return;
  const label = key => characterLabel(key, language);
  const value = data => characterValue(data, language);
  const pending = () => characterElement('p', 'profile-pending', label('pending'));
  const fields = (keys, data) => {
    const dl = characterElement('dl', 'profile-fields');
    for (const key of keys) {
      const row = characterElement('div');
      row.append(characterElement('dt', '', label(key)), characterElement('dd', '', value(data[key]) || label('pending')));
      dl.append(row);
    }
    return dl;
  };
  const disclosure = (key, values) => {
    const details = characterElement('details', 'profile-disclosure');
    details.append(characterElement('summary', '', label(key)));
    if (values?.length) {
      details.open = true;
      const ul = characterElement('ul');
      values.forEach(item => ul.append(characterElement('li', '', value(item))));
      details.append(ul);
    } else details.append(pending());
    return details;
  };
  const section = (key, children) => {
    const block = characterElement('section', 'profile-section');
    block.id = key;
    const heading = characterElement('h2', '', label(key));
    block.setAttribute('aria-labelledby', `${key}-title`);
    heading.id = `${key}-title`;
    block.append(heading, ...children);
    return block;
  };
  const previousTab = profile.dataset.activeTab;
  profile.querySelectorAll('.profile-section').forEach(panel => panel.getAnimations().forEach(animation => animation.cancel()));
  const wasOpen = new Set([...profile.querySelectorAll('details[open]')].map(item => item.dataset.sectionKey).filter(Boolean));
  const wasRendered = profile.dataset.rendered === 'true';
  profile.replaceChildren();
  profile.style.setProperty('--profile-accent', readableCharacterColor(record.representativeColor || '#A58FD1'));
  document.title = `${characterName(record, language)} | ${content[language].name}`;
  const cover = characterElement('div', 'profile-cover');
  cover.style.backgroundColor = record.representativeColor;
  cover.setAttribute('aria-hidden', 'true');
  const intro = characterElement('div', 'profile-intro');
  // 依網站語言決定主要名字，避免顯示重複姓名。
const englishName = record.englishName?.trim() || "";
const japaneseName = record.japaneseName?.trim() || "";
const japaneseReading = record.japaneseReading?.trim() || "";

let primaryName;
let primaryLanguage;

if (language === "en") {
  primaryName = englishName || japaneseName || "Name pending";
  primaryLanguage = englishName
    ? "en"
    : japaneseName ? "ja" : "en";
} else if (language === "ja") {
  primaryName = japaneseName || englishName || "名前未設定";
  primaryLanguage = japaneseName
    ? "ja"
    : englishName ? "en" : "ja";
} else {
  primaryName = record.name;
  primaryLanguage = "zh-Hant";
}

const heading = characterElement("h1", "", primaryName);
heading.id = "detail-title";
heading.lang = primaryLanguage;

intro.append(
  characterElement(
    "p",
    "eyebrow",
    `${label(record.world)} / ${label(record.group)}`
  ),
  heading
);

// 英文名不是大標題時，才顯示在下方。
if (englishName && englishName !== primaryName) {
  const latin = characterElement(
    "p",
    "profile-name-latin",
    englishName
  );

  latin.lang = "en";
  intro.append(latin);
}

// 日文正式名字不是大標題時，顯示在下方。
if (japaneseName && japaneseName !== primaryName) {
  const japanese = characterElement(
    "p",
    "profile-name-kana",
    japaneseName
  );

  japanese.lang = "ja";
  intro.append(japanese);
}

// 有獨立讀音時，另外顯示。
// 避免讀音與正式名字或大標題完全相同。
if (
  japaneseReading &&
  japaneseReading !== japaneseName &&
  japaneseReading !== primaryName
) {
  const reading = characterElement(
    "p",
    "profile-name-reading",
    japaneseReading
  );

  reading.lang = "ja";
  intro.append(reading);
}
  if (value(record.quote)) intro.append(characterElement('blockquote', '', value(record.quote)));
  const toc = characterElement('nav', 'profile-toc');
  toc.setAttribute('aria-label', characterName(record, language));
  const useSectionTabs = true;
  if (useSectionTabs) toc.setAttribute('role', 'tablist');
  for (const key of ['appearance','information','portrait','interests','relationships','role','background','supplement']) {
    if (useSectionTabs) {
      const button = characterElement('button', 'profile-tab', label(key));
      button.type = 'button';
      button.id = `tab-${key}`;
      button.dataset.panel = key;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', key);
      toc.append(button);
    } else {
      const link = characterElement('a', '', label(key));
      link.href = `#${key}`;
      toc.append(link);
    }
  }
  const body = characterElement('div', 'profile-body');
  body.append(section('appearance', [fields(['height','weight','hairColor','hairstyle','eyeColor','clothing'],record.appearance)]));
  body.append(section('information', [fields(['nickname','gender','birthday','birthplace','residence'],record.information)]));
  body.append(section('portrait', [characterImage(record, language)]));
  body.append(section('interests', ['personality','hobbies','likes','dislikes','fears'].map(key => disclosure(key, record.interests[key]))));
  body.append(section('relationships', record.relationships.length ? record.relationships.map(item => {
    if (!item.entries) return characterElement('p','',value(item));
    const group=characterElement('details','profile-disclosure');group.open=true;
    group.append(characterElement('summary','',value(item.title)));
    const list=characterElement('ul');
    item.entries.forEach(entry=>{
      const row=characterElement('li');
      if (entry.url) {const link=characterElement('a','',value(entry.text));link.href=entry.url;row.append(link);}
      else row.textContent=value(entry);
      list.append(row);
    });
    group.append(list);return group;
  }) : [pending()]));
  body.append(section('role', ['debut','arc1','arc2','arc3'].map(key => disclosure(key, record.role[key]))));
  body.append(section('background', ['childhood','growth'].map(key => disclosure(key, record.background[key]))));
  const supplement = [];
  if (record.ability) {
    const ability = characterElement('p', 'character-ability');
    const link = characterElement('a', '', `${label('ability')}：${label(record.ability)}`);
    link.href = 'chroma.html'; ability.append(link); supplement.push(ability);
  }
  record.supplement.forEach(item => supplement.push(characterElement('p','',value(item))));
  body.append(section('supplement', supplement.length ? supplement : [pending()]));
  profile.append(cover, intro, toc, body);
  profile.querySelectorAll('details').forEach((item,index) => {
    item.dataset.sectionKey = String(index);
    if (wasRendered) item.open = wasOpen.has(String(index));
  });
  if (useSectionTabs) setupCharacterTabs(profile, toc, body, previousTab);
  profile.dataset.rendered = 'true';
}

// Character section tabs: one selected panel, with a 200 ms directional slide.
function setupCharacterTabs(profile, tablist, body, previousTab) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = [...body.children];
  const frame = characterElement('div', 'profile-panels');
  frame.append(...panels);
  body.append(frame);
  let activeIndex = -1;
  let generation = 0;
  const stopTransitions = () => {
    generation++;
    panels.forEach(panel => {
      panel.getAnimations().forEach(animation => animation.cancel());
      panel.classList.remove('is-leaving');
    });
    frame.style.height = '';
  };
  const activate = (index, animate = true, updateHash = true) => {
    if (index < 0 || index >= tabs.length || index === activeIndex) return;
    const previousIndex = activeIndex;
    stopTransitions();
    const token = generation;
    const oldPanel = previousIndex >= 0 ? panels[previousIndex] : null;
    const oldHeight = oldPanel && !oldPanel.hidden ? oldPanel.offsetHeight : 0;
    activeIndex = index;
    profile.dataset.activeTab = panels[index].id;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
      panels[i].inert = i !== index;
      panels[i].setAttribute('aria-hidden', String(i !== index));
    });
    if (updateHash) {
      try { history.replaceState(null, '', `#${panels[index].id}`); } catch { /* File previews can still switch tabs. */ }
    }
    if (!animate || !oldPanel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nextPanel = panels[index];
    const direction = index > previousIndex ? 1 : -1;
    frame.style.height = `${Math.max(oldHeight, nextPanel.offsetHeight)}px`;
    oldPanel.hidden = false;
    oldPanel.classList.add('is-leaving');
    const options = {duration:200, easing:'ease-out'};
    const outgoing = oldPanel.animate([
      {opacity:1, transform:'translateX(0)'},
      {opacity:0, transform:`translateX(${-direction * 28}px)`}
    ], options);
    const incoming = nextPanel.animate([
      {opacity:0, transform:`translateX(${direction * 28}px)`},
      {opacity:1, transform:'translateX(0)'}
    ], options);
    Promise.allSettled([outgoing.finished, incoming.finished]).then(() => {
      if (token !== generation) return;
      oldPanel.hidden = true;
      oldPanel.classList.remove('is-leaving');
      frame.style.height = '';
    });
  };
  panels.forEach((panel,index) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabs[index].id);
    panel.tabIndex = 0;
    tabs[index].addEventListener('click', () => activate(index));
    tabs[index].addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') target = 0;
      else if (event.key === 'End') target = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(target);
      tabs[target].focus();
    });
  });
  const hash = location.hash.slice(1);
  const initial = panels.findIndex(panel => panel.id === (previousTab || hash));
  activate(initial >= 0 ? initial : 0, false, false);
  profile.activateSection = key => activate(panels.findIndex(panel => panel.id === key), true, false);
}
window.addEventListener('hashchange', () => {
  const profile = document.querySelector('#character-profile');
  profile?.activateSection?.(location.hash.slice(1));
});

function setLanguage(requestedLanguage) {
  const language = Object.hasOwn(content, requestedLanguage) ? requestedLanguage : 'zh-Hant';
  const text = content[language];
  document.documentElement.lang = language;
  const page = document.body.dataset.page;
  document.title = page ? `${text[page]} | ${text.name}` : text.title;
  document.querySelector('meta[name="description"]').setAttribute('content', text.description);
  document.querySelector('.brand').setAttribute('aria-label', text.name);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = text[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
    if (element.dataset.i18n === 'tagline') element.style.whiteSpace = 'pre-line';
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', text[element.dataset.i18nAria]);
  });
  languageSelect.value = language;
  renderCharacters(text);
  renderCharacterDirectory(language);
  renderCharacterProfile(language);
  document.querySelectorAll('[data-character-label]').forEach(element => {
    element.textContent = characterLabel(element.dataset.characterLabel, language);
  });
  try { localStorage.setItem('original-sin-language', language); } catch { /* 儲存被封鎖時仍可正常使用 */ }
}

let savedLanguage = 'zh-Hant';
try { savedLanguage = localStorage.getItem('original-sin-language') || savedLanguage; } catch { /* 保留預設語言 */ }
setLanguage(savedLanguage);
languageSelect.addEventListener('change', event => setLanguage(event.target.value));

const door = document.querySelector('.door');
if (door) {
  door.addEventListener('click', () => {
    door.classList.add('is-open');
    door.setAttribute('aria-pressed', 'true');
  });
}

// 角色頁折疊列表：向下展開／向上收起。
document.addEventListener("click", event => {
  const summary = event.target.closest(
    "#character-profile details.profile-disclosure > summary"
  );

  if (!summary) return;

  const details = summary.parentElement;
  event.preventDefault();

  // 先取得動畫當下的高度，讓快速重複點擊也能平順切換。
  const startHeight = details.getBoundingClientRect().height;

  // 動畫途中再次點擊，反轉原本的目標狀態。
  const wasOpening =
    details.dataset.animationTarget === "open";

  const wasAnimating =
    details.dataset.animationTarget !== undefined;

  const shouldOpen = wasAnimating
    ? !wasOpening
    : !details.open;

  details.getAnimations().forEach(animation => {
    animation.cancel();
  });

  // 減少動態效果的使用者，直接切換。
  if (window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches) {
    details.open = shouldOpen;
    delete details.dataset.animationTarget;
    return;
  }

  details.dataset.animationTarget = shouldOpen
    ? "open"
    : "closed";

  // 暫時保持開啟，讓收合內容也能參與高度動畫。
  details.open = true;

  const expandedHeight =
    details.getBoundingClientRect().height;

  // 取得只剩 summary 時的實際高度。
  details.open = false;

  const collapsedHeight =
    details.getBoundingClientRect().height;

  details.open = true;

  const animation = details.animate(
    [
      { height: `${startHeight}px` },
      {
        height: `${
          shouldOpen ? expandedHeight : collapsedHeight
        }px`
      }
    ],
    {
      duration: 200,
      easing: "ease-in-out",
      fill: "both"
    }
  );

  animation.onfinish = () => {
    details.open = shouldOpen;
    delete details.dataset.animationTarget;
    animation.cancel();
  };
});

// 共用折疊動畫：角色頁 + 宇宙跳躍計算方法。
document.addEventListener("click", event => {
  const summary = event.target.closest(
    "#character-profile details.profile-disclosure > summary, " +
    'details.lore-details.profile-disclosure > summary[data-i18n="deltaFormula"]'
  );

  if (!summary) return;

  event.preventDefault();

  const details = summary.parentElement;
  const startHeight = details.getBoundingClientRect().height;

  const previousTarget = details.dataset.foldTarget;
  const shouldOpen = previousTarget
    ? previousTarget !== "open"
    : !details.open;

  details.getAnimations().forEach(animation => {
    animation.cancel();
  });

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    details.open = shouldOpen;
    delete details.dataset.foldTarget;
    return;
  }

  details.open = true;
  const expandedHeight = details.getBoundingClientRect().height;

  details.open = false;
  const collapsedHeight = details.getBoundingClientRect().height;

  details.open = true;
  details.dataset.foldTarget = shouldOpen ? "open" : "closed";

  const animation = details.animate(
    [
      { height: `${startHeight}px` },
      {
        height: `${
          shouldOpen ? expandedHeight : collapsedHeight
        }px`
      }
    ],
    {
      duration: 200,
      easing: "ease-in-out",
      fill: "both"
    }
  );

  animation.onfinish = () => {
    details.open = shouldOpen;
    delete details.dataset.foldTarget;
    animation.cancel();
  };
});

// 角色曲光碟播放器
(() => {
  const characterId = document.body.dataset.character;
  const profile = document.querySelector("#character-profile");

  if (!characterId || !profile) return;
  if (document.querySelector("#character-theme-player")) return;

  const character = window.WORLD_CHARACTERS?.find(
    item => item.id === characterId
  );

  const song = character?.themeSong;

  // 沒有設定歌曲時，不顯示播放器。
  if (!song?.src) return;

  const labels = {
    "zh-Hant": {
      fallbackTitle: "角色曲",
      loading: "正在載入角色曲……",
      ready: "點擊光碟播放",
      playing: "播放中 · 點擊光碟暫停",
      paused: "已暫停 · 點擊光碟繼續",
      blocked: "點擊光碟播放角色曲",
      error: "無法播放，請檢查音樂檔案與路徑",
      play: "播放角色曲",
      pause: "暫停角色曲",
      volume: "音量"
    },

    en: {
      fallbackTitle: "Character theme",
      loading: "Loading character theme…",
      ready: "Select the disc to play",
      playing: "Playing · Select the disc to pause",
      paused: "Paused · Select the disc to resume",
      blocked: "Select the disc to play the theme",
      error: "Unable to play. Check the audio file and path.",
      play: "Play character theme",
      pause: "Pause character theme",
      volume: "Volume"
    },

    ja: {
      fallbackTitle: "キャラクターテーマ曲",
      loading: "テーマ曲を読み込み中……",
      ready: "ディスクを押して再生",
      playing: "再生中 · ディスクを押して一時停止",
      paused: "一時停止中 · ディスクを押して再開",
      blocked: "ディスクを押してテーマ曲を再生",
      error: "再生できません。音声ファイルとパスを確認してください。",
      play: "テーマ曲を再生",
      pause: "テーマ曲を一時停止",
      volume: "音量"
    }
  };

  let state = "ready";

  const currentLanguage = () => {
    const language = document.documentElement.lang;

    return Object.prototype.hasOwnProperty.call(labels, language)
      ? language
      : "zh-Hant";
  };

  const translatedValue = value => {
    if (typeof value === "string") return value;

    return value?.[currentLanguage()]
      || value?.["zh-Hant"]
      || "";
  };

  // 建立播放器外框。
  const player = document.createElement("section");
  player.id = "character-theme-player";
  player.className = "character-music";

  // 播放器放在角色 article 外，所以另外帶入角色代表色。
  player.style.setProperty(
    "--profile-accent",
    profile.style.getPropertyValue("--profile-accent")
      || character.representativeColor
      || "#A58FD1"
  );

  // 光碟按鈕。
  const disc = document.createElement("button");
  disc.type = "button";
  disc.className = "character-disc";
  disc.setAttribute("aria-pressed", "false");

  const face = document.createElement("span");
  face.className = "character-disc-face";
  face.setAttribute("aria-hidden", "true");

  // 有封面就顯示；載入失敗時使用 CSS 唱片紋路。
  if (song.cover) {
    const image = document.createElement("img");
    image.src = song.cover;
    image.alt = "";

    image.addEventListener(
      "error",
      () => image.remove(),
      { once: true }
    );

    face.append(image);
  }

  disc.append(face);

  // 歌名與播放狀態。
  const info = document.createElement("div");
  info.className = "character-music-info";

  const title = document.createElement("p");
  title.className = "character-music-title";

  const status = document.createElement("p");
  status.className = "character-music-status";
  status.setAttribute("role", "status");

  info.append(title, status);

  // 音量控制。
  const volumeLabel = document.createElement("label");
  volumeLabel.className = "character-music-volume";

  const volumeText = document.createElement("span");

  const volume = document.createElement("input");
  volume.type = "range";
  volume.min = "0";
  volume.max = "1";
  volume.step = "0.01";
  volume.value = "0.3";

  volumeLabel.append(volumeText, volume);

  // 音訊元素不使用原生控制列，交給光碟按鈕操作。
  const audio = document.createElement("audio");
  audio.src = song.src;
  audio.preload = "metadata";
  audio.loop = true;
  audio.volume = 0.5;
  audio.hidden = true;

  player.append(disc, info, volumeLabel, audio);

  // 這個位置不會被角色模板重建。
  profile.insertAdjacentElement("afterend", player);

  function updateInterface() {
    const text = labels[currentLanguage()];
    const playing = !audio.paused && !audio.ended;

    title.textContent =
      translatedValue(song.title) || text.fallbackTitle;

    status.textContent = text[state] || text.ready;
    volumeText.textContent = text.volume;

    player.setAttribute("aria-label", title.textContent);
    player.classList.toggle("is-playing", playing);

    disc.setAttribute("aria-pressed", String(playing));
    disc.setAttribute(
      "aria-label",
      playing ? text.pause : text.play
    );

    volume.setAttribute("aria-label", text.volume);
  }

  async function startPlayback() {
    state = "loading";
    updateInterface();

    try {
      await audio.play();
    } catch (error) {
      // 暫停或離開頁面造成的取消，不視為載入錯誤。
      if (error.name === "AbortError") {
        state = audio.paused ? "paused" : "playing";
      } else if (error.name === "NotAllowedError") {
        state = "blocked";
      } else {
        state = "error";
      }

      updateInterface();
    }
  }

  disc.addEventListener("click", () => {
    if (audio.paused) {
      startPlayback();
    } else {
      audio.pause();
    }
  });

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value);
  });

  audio.addEventListener("playing", () => {
    state = "playing";
    updateInterface();
  });

  audio.addEventListener("pause", () => {
    if (state !== "error") {
      state = "paused";
    }

    updateInterface();
  });

  audio.addEventListener("error", () => {
    state = "error";
    updateInterface();
  });

  // 切換網站語言時，只更新文字，不重新建立 audio。
  const languageObserver = new MutationObserver(
    updateInterface
  );

  languageObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });

  // 離開頁面時停止播放。
  window.addEventListener("pagehide", () => {
    audio.pause();
  });

  // 從瀏覽器上一頁返回時，同步播放狀態。
  window.addEventListener("pageshow", updateInterface);

  updateInterface();

  // 嘗試自動播放；若瀏覽器阻擋，顯示點擊播放提示。
  startPlayback();
})();