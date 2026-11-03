(() => {
  const door = document.querySelector('.door');
  if (!door) return;
  const root = document.documentElement;
  let themeFrame;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const syncTheme = light => {
    root.style.colorScheme = light ? 'light' : 'dark';
    cancelAnimationFrame(themeFrame);
    const until = performance.now() + (light ? 5100 : 600);
    const update = () => {
      if (themeColor) themeColor.content = getComputedStyle(document.body).backgroundColor;
      if (performance.now() < until) themeFrame = requestAnimationFrame(update);
    };
    themeFrame = requestAnimationFrame(update);
  };
  const entry = document.createElement('span');
  entry.className = 'garden-entry';
  const gardenEntryLabels = {
  "zh-Hant": "點擊前往『❦之花園』",
  en: "Enter the Garden of ❦",
  ja: "『❦の庭』へ"
};

function updateGardenEntryLabel() {
  const language = document.documentElement.lang;

  const label =
    gardenEntryLabels[language] || gardenEntryLabels["zh-Hant"];

  entry.textContent = label;
  entry.dataset.text = label;
}

updateGardenEntryLabel();

// 網站語言改變時，同步更新入口及故障效果文字。
const gardenLanguageObserver = new MutationObserver(
  updateGardenEntryLabel
);

gardenLanguageObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["lang"]
});
  entry.hidden = true;
  door.append(entry);
  let dwellTimer, revealTimer, over = false, ready = false, entering = false;
  const hideEntry = () => { ready = false; entry.hidden = true; door.removeAttribute('data-garden-ready'); };
  const reset = () => {
    if (entering) return;
    over = false;
    clearTimeout(dwellTimer); clearTimeout(revealTimer);
    hideEntry(); root.classList.remove('garden-light'); syncTheme(false);
  };
  door.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse' || entering || over) return;
    over = true;
    dwellTimer = setTimeout(() => {
      if (!over) return;
      root.classList.add('garden-light'); syncTheme(true);
      revealTimer = setTimeout(() => {
        if (!over) return;
        ready = true; entry.hidden = false;
        door.dataset.gardenReady = 'true';
      }, 5000);
    }, 10000);
  });
  door.addEventListener('pointerleave', reset);
  window.addEventListener('blur', reset);
  document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); });
  door.addEventListener('click', event => {
    if (!ready || entering) return;
    event.preventDefault(); event.stopImmediatePropagation();
    entering = true;
    door.classList.add('is-open');
    door.setAttribute('aria-pressed', 'true');
    const rect = door.getBoundingClientRect();
    const glow = document.createElement('div');
    glow.className = 'garden-radial-passage';
    glow.setAttribute('aria-hidden', 'true');
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const farthest = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    glow.style.setProperty('--center-x', `${x}px`);
    glow.style.setProperty('--center-y', `${y}px`);
    document.body.append(glow);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 200 : 3000;
    const animation = glow.animate([
      {'--reveal-radius':'0px',opacity:0},
      {'--reveal-radius':`${farthest * .8}px`,opacity:1,offset:.6},
      {'--reveal-radius':`${farthest * 3.5}px`,opacity:1}
    ], {duration,easing:'ease-in-out',fill:'forwards'});
    animation.finished.then(() => {
      // Hold a fully opaque white frame before loading the garden.
      glow.style.background = '#fff';
      requestAnimationFrame(() => requestAnimationFrame(() => location.assign('garden.html')));
    });
  }, true);
})();
