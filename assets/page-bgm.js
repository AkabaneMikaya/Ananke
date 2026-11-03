(() => {
  const source = document.body.dataset.bgm;

  // 沒有設定音樂的頁面不建立播放器。
  if (!source || document.querySelector(".page-bgm-toggle")) {
    return;
  }

  const audio = document.createElement("audio");
  audio.src = source;
  audio.loop = true;
  audio.preload = "auto";
  audio.hidden = true;

  const requestedVolume = Number(
    document.body.dataset.bgmVolume || "0.3"
  );

  audio.volume = Number.isFinite(requestedVolume)
    ? Math.max(0, Math.min(1, requestedVolume))
    : 0.3;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "page-bgm-toggle";
  button.setAttribute("aria-pressed", "false");

  const speaker = `
    <path d="M11 5 6 9H3v6h3l5 4Z"></path>
  `;

  const icons = {
    playing: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        ${speaker}
        <path d="M15 8a6 6 0 0 1 0 8"></path>
        <path d="M18 5a10 10 0 0 1 0 14"></path>
      </svg>
    `,
    paused: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        ${speaker}
        <path d="m16 9 5 6m0-6-5 6"></path>
      </svg>
    `
  };

  const translations = {
    "zh-Hant": {
      play: "播放背景音樂",
      pause: "暫停背景音樂",
      loading: "正在載入背景音樂",
      error: "音樂載入失敗，點擊重試"
    },
    en: {
      play: "Play background music",
      pause: "Pause background music",
      loading: "Loading background music",
      error: "Music failed to load. Select to retry."
    },
    ja: {
      play: "BGMを再生",
      pause: "BGMを一時停止",
      loading: "BGMを読み込み中",
      error: "BGMを読み込めませんでした。押して再試行"
    }
  };

  let loading = false;
  let failed = false;

  function updateButton() {
    const language = document.documentElement.lang;

    const text = Object.prototype.hasOwnProperty.call(
      translations,
      language
    )
      ? translations[language]
      : translations["zh-Hant"];

    const playing = !audio.paused && !audio.ended;

    const label = loading
      ? text.loading
      : failed
        ? text.error
        : playing
          ? text.pause
          : text.play;

    button.innerHTML = playing ? icons.playing : icons.paused;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.setAttribute("aria-pressed", String(playing));
    button.setAttribute("aria-busy", String(loading));
  }

  button.addEventListener("click", async () => {
    // 載入中再次點擊，可取消這次播放。
    if (loading) {
      audio.pause();
      loading = false;
      updateButton();
      return;
    }

    if (!audio.paused) {
      audio.pause();
      return;
    }

    if (failed) {
      audio.load();
    }

    failed = false;
    loading = true;
    updateButton();

    try {
      await audio.play();
    } catch (error) {
      if (error.name !== "AbortError") {
        failed = true;
      }
    } finally {
      loading = false;
      updateButton();
    }
  });

  audio.addEventListener("playing", () => {
    loading = false;
    failed = false;
    updateButton();
  });

  audio.addEventListener("pause", updateButton);

  audio.addEventListener("error", () => {
    loading = false;
    failed = true;
    updateButton();
  });

  // 切換網站語言時，同步按鈕提示文字。
  const observer = new MutationObserver(updateButton);

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });

  // 離開頁面時停止播放。
  window.addEventListener("pagehide", () => {
    audio.pause();
    loading = false;
    updateButton();
  });

// 音樂元素仍然加入頁面。
document.body.append(audio);

// 只有允許顯示控制按鈕時，才加入按鈕。
if (document.body.dataset.bgmControls !== "false") {
  document.body.classList.add("has-page-bgm");
  document.body.append(button);
}

updateButton();

// 只有明確設定 autoplay 的頁面才嘗試自動播放。
if (document.body.dataset.bgmAutoplay === "true") {
  loading = true;
  updateButton();

  audio.play()
    .catch(error => {
      if (error.name === "NotAllowedError") {
        // 瀏覽器阻擋自動播放時，保留按鈕讓訪客手動播放。
        failed = false;
      } else if (error.name !== "AbortError") {
        failed = true;
      }
    })
    .finally(() => {
      loading = false;
      updateButton();
    });
}

})();