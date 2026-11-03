// The teaser at the top of the post: <div class="teaser"> with three panels, read, fix and improve. The markup is in
// index.html. This fills the first panel's wall of weights from Experiment 1's data (the rows of Breakout's network that
// Astra quotes, its quoted numbers marked), and grows the third panel's bar from the base model's score to the
// edited one's, counting up, the first time the teaser is on screen.
(() => {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function wall(el) {
    fetch(el.dataset.src)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        const it = data.items.find((x) => x.label === el.dataset.item) || data.items[0];
        const rows = it.prompt.filter((b) => typeof b === "object" && b.values).map((b) =>
          `<div class="tz-row"><span class="tz-rl">${esc(b.label.split(":")[0])}</span> ${b.values.map((v, c) =>
            (b.marks.includes(c) ? `<mark>${esc(v)}</mark>` : esc(v))).join(" ")}</div>`).join("");
        el.innerHTML = `<div class="tz-scroll">${rows}${rows}</div>`;    // twice, so that the scroll loops
      })
      .catch(() => {});
  }

  function grow(el) {
    const from = +el.dataset.from, to = +el.dataset.to, max = +el.dataset.max;
    const bar = el.querySelector(".tz-bar-after"), num = el.querySelector(".tz-bar-after .tz-v");
    const t0 = Date.now(), T = 1600;
    const step = () => {
      const k = Math.min(1, (Date.now() - t0) / T), e = 1 - (1 - k) ** 3;
      const v = from + (to - from) * e;
      bar.style.height = `${(v / max) * 100}%`;
      num.textContent = `${v.toFixed(1)}%`;
      if (k < 1) setTimeout(step, 16);
    };
    step();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".teaser").forEach((root) => {
      root.querySelectorAll(".tz-wall[data-src]").forEach(wall);
      const bars = root.querySelector(".tz-bars");
      if (!bars) return;
      const before = bars.querySelector(".tz-bar-after");
      before.style.height = `${(+bars.dataset.from / +bars.dataset.max) * 100}%`;
      before.querySelector(".tz-v").textContent = `${(+bars.dataset.from).toFixed(1)}%`;
      new IntersectionObserver((es, obs) => {
        if (!es[0].isIntersecting) return;
        obs.disconnect();
        setTimeout(() => grow(bars), 500);
      }, { threshold: 0.4 }).observe(root);
    });
  });
})();
