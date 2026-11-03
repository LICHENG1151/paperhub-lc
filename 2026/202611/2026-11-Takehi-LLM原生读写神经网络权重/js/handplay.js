// The game beside each tab of Experiment 4's card (js/traces.js calls HandPlay.mount): one episode of the network Astra
// wrote, played on a canvas, the 10 x 10 screen as the network sees it with one colour per channel, and the score so
// far. `play` (scripts/gen_handplay.py): {channels, frames: the squares that changed at each step (the square in 2
// base-64 digits, then its channel mask), rewards: step -> points}. It plays while on screen and starts again at the end.
window.HandPlay = (() => {
  const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  const DEC = Object.fromEntries([...B64].map((c, i) => [c, i]));
  // the first channel present in this order gives a square its colour (the trail drawn smaller)
  const ORDER = ["player", "projectile", "danger", "reward", "gauge", "trail"];
  const COL = { player: "#4c8dff", projectile: "#f4f6ff", danger: "#ff5468", reward: "#ffc23d", gauge: "#36d399",
                trail: "#8d9cbf" };
  const FPS = 15;

  function mount(cv, play, score) {
    const T = play.frames.length, grid = new Uint8Array(T * 100), cur = new Uint8Array(100), cum = new Float64Array(T);
    play.frames.forEach((f, t) => {
      for (let k = 0; k < f.length; k += 3) cur[DEC[f[k]] * 64 + DEC[f[k + 1]]] = DEC[f[k + 2]];
      grid.set(cur, t * 100);
      if (t) cum[t] = cum[t - 1] + (play.rewards[t - 1] || 0);
    });
    const bit = Object.fromEntries(ORDER.map((o) => [o, 1 << play.channels.indexOf(o)]));
    let t = 0, timer = null, visible = false;

    function draw() {
      const dpr = window.devicePixelRatio || 1, w = Math.round((cv.clientWidth || 108) * dpr);
      if (cv.width !== w) { cv.width = w; cv.height = w; }
      const c = cv.getContext("2d"), s = w / 10, base = t * 100;
      c.fillStyle = "#0b1020";
      c.fillRect(0, 0, w, w);
      for (let q = 0; q < 100; q++) {
        const m = grid[base + q];
        if (!m) continue;
        const name = ORDER.find((o) => m & bit[o]), pad = name === "trail" ? s * 0.3 : s * 0.08;
        c.globalAlpha = name === "trail" ? 0.55 : 1;
        c.fillStyle = COL[name];
        c.fillRect((q % 10) * s + pad, Math.floor(q / 10) * s + pad, s - 2 * pad, s - 2 * pad);
      }
      c.globalAlpha = 1;
      if (score) score.textContent = cum[t].toLocaleString("en-US");
    }

    function tick() {
      timer = null;
      if (!visible || !cv.isConnected) return;
      t = t + 1 < T ? t + 1 : 0;
      draw();
      timer = setTimeout(tick, t === T - 1 ? 2000 : 1000 / FPS);
    }

    draw();
    new IntersectionObserver((es) => {
      visible = es[0].isIntersecting;
      if (visible && !timer) timer = setTimeout(tick, 1000 / FPS);
    }, { threshold: 0.2 }).observe(cv);
  }

  return { mount };
})();
