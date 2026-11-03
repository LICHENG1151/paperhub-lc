// Experiment 5's figure: <div class="gh-fig" data-src="assets/gohand/gohand.json"></div> (scripts/gen_gohand.py).
// Left: the share of games the network Astra wrote wins, for each number of passes it could use, one line per opponent:
// two small PPO networks (243 -> 32 -> 32 -> 82), and a PPO network as large as Astra's, trained on the same 20 million games
// (played only at 0 and 50 passes: the mean of its three seeds, with a bar from the lowest to the highest). One column is
// in front, its scores written at its points: 50 passes, or the last column pointed at. The chart is drawn at the width
// it is shown at.
// Right: that run, turn by turn, played like a training run (as Experiment 7's run, smaller): the % of games it won in
// each games pass against the strong practice opponent (PPO, seed 1) and the weak one (REINFORCE), under it a tick per
// turn, red where it changed the weights (a dot where its next games pass was its best yet against the strong one), and
// that turn: what it did in a line (in quotes when Astra's code printed it, or it is the first comment of the code), its
// code, and at the end Astra's final answer. The 50-pass run plays the first time the figure is on screen; pointing at
// the small chart stops it at the turn there, and leaving it plays on. Another run pointed at shows whole, paused.
(() => {
  const NS = "http://www.w3.org/2000/svg";
  const GREEN = "#118659", LIGHT = "#6cb690", ORANGE = "#c25a00", INK = "#333333", GRID = "#e6e8eb", AXIS = "#b9bec6";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const GREY = "#8b929b", RED = "#d93a4b";
  const TAG = { edit: "changed the weights", python: "Python", games: "forward pass (games)", positions: "forward pass (positions)",
                final: "final answer" };

  function svg(tag, attrs = {}, parent) {
    const el = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    if (parent) parent.appendChild(el);
    return el;
  }

  function label(parent, x, y, text, attrs = {}) {
    const t = svg("text", { x, y, "font-size": 14, fill: INK, ...attrs }, parent);
    t.textContent = text;
    return t;
  }

  function md(text) {                                   // Astra's answer: paragraphs, lists, bold
    const out = [];
    let list = false;
    for (const raw of text.split("\n")) {
      const line = raw.trim();
      const html = esc(line.replace(/^[-*]\s+/, "")).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
      if (/^[-*]\s+/.test(line)) {
        if (!list) { out.push("<ul>"); list = true; }
        out.push(`<li>${html}</li>`);
      } else {
        if (list) { out.push("</ul>"); list = false; }
        if (line) out.push(`<p>${html}</p>`);
      }
    }
    if (list) out.push("</ul>");
    return out.join("");
  }

  const name = (b) => (b.passes ? `${b.passes} forward pass${b.passes > 1 ? "es" : ""}` : "One shot (no forward passes)");
  const mean = (v) => v.reduce((a, b) => a + b, 0) / v.length;

  // one turn: what it did in a line, its result, its code; the final answer at the end
  function turn(b, t, k) {
    const head = `<div class="gh-thead">Turn ${k + 1}${b.passes ? `, ${t.used} forward passes used` : ""}
      <span class="me-tag${t.kind === "edit" ? " me-tag-edit" : ""}">${TAG[t.kind]}</span></div>`;
    if (t.kind === "final") return `${head}<div class="gh-ans">${md(b.answer)}</div>`;
    if (t.kind === "games") {
      const opp = Object.entries(t.opp).map(([o, [g, v]]) => `${o} <b>${v.toFixed(1)}%</b> (${g} games)`).join(" &middot; ");
      return `${head}<div class="gh-note">Forward pass ${t.pass} (games): it won ${opp}</div>`;
    }
    if (t.kind === "positions") return `${head}<div class="gh-note">Forward pass ${t.pass} (positions): the network&rsquo;s moves on ${t.positions} positions Astra chose</div>`;
    const lines = t.code.split("\n").length;
    return `${head}<div class="gh-note">${t.said ? `&ldquo;${esc(t.note)}&rdquo;` : esc(t.note)}</div>
      <details class="tp-fold"><summary><b>Its code</b> &middot; ${lines} lines</summary><pre class="tp-pre">${esc(t.code)}</pre></details>`;
  }

  // the run in front, turn by turn
  function player(el, b, autoplay) {
    const steps = b.steps || [];
    const runs = `${b.runs} Python run${b.runs > 1 ? "s" : ""}`;
    const used = b.passes ? `${runs} and ${b.passes} forward passes: ${b.games} of games${b.positions ? `, ${b.positions} of positions` : ""}` : `${runs}, then its answer`;
    const plays = b.passes > 0 && steps.length > 2;
    el.innerHTML = `<div class="gh-ptitle">${name(b)}${plays ? ' <button type="button" class="tp-btn gh-play"></button>' : ""}</div>
      ${plays ? `<div class="gh-plot"></div><div class="gh-pkey">
        <span class="me-item"><span class="me-key" style="--c:${GREEN}"></span>won in practice vs. PPO, by forward passes used</span>
        <span class="me-item"><span class="me-tick"></span>weights changed</span></div>`
        : `<div class="gh-pline">${used}</div>`}
      <div class="gh-turn"></div>`;
    const box = el.querySelector(".gh-turn");
    let i = plays && autoplay ? 0 : steps.length - 1, playing = false, explore = false, resume = false, timer = null;
    let visible = false, draw = () => {};
    const show = () => { box.innerHTML = steps.length ? turn(b, steps[i], i) : ""; draw(); };
    if (!plays) {                                       // one shot: its one Python run and its answer, both shown
      box.innerHTML = steps.map((t, k) => turn(b, t, k)).join("");
      return { stop() {} };
    }

    const plot = el.querySelector(".gh-plot"), btn = el.querySelector(".gh-play");
    const label_ = () => { btn.textContent = playing ? "❚❚ Pause" : "▶ Play"; };
    const dwell = (t) => (t.best ? 1400 : t.kind === "edit" ? 450 : t.kind === "games" ? 220 : 120);
    function setup() {
      const W = Math.max(260, Math.round(plot.clientWidth)), H = 132, M = { l: 38, r: 8, t: 6, b: 34 };
      const S0 = H - M.b + 4, S1 = S0 + 12;               // the strip of turns under the chart, then the axis
      const groups = {}, pos = [];
      steps.forEach((t, k) => (groups[t.used] = groups[t.used] || []).push(k));
      for (const [g, ks] of Object.entries(groups)) ks.forEach((k, j) => (pos[k] = +g + j / ks.length));
      const X = (p) => M.l + (p / (b.passes + 1)) * (W - M.l - M.r);
      const Y = (v) => M.t + (1 - (v - 30) / 70) * (S0 - 12 - M.t);
      plot.replaceChildren();
      const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, class: "gh-svg", role: "img",
        "aria-label": `The ${b.passes}-forward-pass run, turn by turn.` }, plot);
      for (const v of [50, 75, 100]) {
        svg("line", { x1: M.l, x2: W - M.r, y1: Y(v), y2: Y(v), stroke: v === 50 ? "#9aa1aa" : GRID,
          "stroke-dasharray": v === 50 ? "4 4" : "none" }, s);
        label(s, M.l - 6, Y(v) + 5, `${v}%`, { "text-anchor": "end", "font-size": 13 });
      }
      svg("line", { x1: M.l, x2: W - M.r, y1: S1, y2: S1, stroke: AXIS }, s);
      const step = b.passes <= 10 ? 2 : b.passes <= 25 ? 5 : 10;
      for (let p = 0; p <= b.passes; p += step) label(s, X(p), S1 + 15, String(p), { "text-anchor": "middle", "font-size": 13 });
      const ticks = steps.map((t, k) => svg("line", { x1: X(pos[k]), x2: X(pos[k]), y1: t.kind === "edit" ? S0 : S1 - 6, y2: S1,
        stroke: t.kind === "edit" ? RED : "#a3a9b1", "stroke-width": t.kind === "edit" ? 2 : 1 }, s));
      steps.forEach((t, k) => { if (t.best) svg("circle", { cx: X(pos[k]), cy: S0, r: 3, fill: RED }, s); });
      const lines = svg("g", {}, s), dots = svg("g", {}, s), vals = svg("g", { "pointer-events": "none" }, s);
      const cursor = svg("line", { y1: M.t, y2: S1, stroke: INK, "stroke-width": 1.2, "stroke-dasharray": "3 3" }, s);
      const meas = { strong: [], weak: [] };
      steps.forEach((t, k) => { if (t.opp) for (const o of ["strong", "weak"]) if (t.opp[o]) meas[o].push([k, X(pos[k]), Y(t.opp[o][1]), t.opp[o][1]]); });
      draw = () => {
        const x = X(pos[i]);
        cursor.setAttribute("x1", x); cursor.setAttribute("x2", x);
        ticks.forEach((el2, k) => el2.setAttribute("opacity", k <= i || explore ? 1 : 0.35));
        lines.replaceChildren(); dots.replaceChildren(); vals.replaceChildren();
        for (const [o, col] of [["strong", GREEN]]) {
          const seen = meas[o].filter((m) => m[0] <= i), later = meas[o].filter((m) => m[0] >= (seen.length ? seen[seen.length - 1][0] : 0));
          for (const [part, op] of [[seen, 1], [explore ? later : [], 0.3]]) {
            if (part.length > 1) svg("polyline", { points: part.map((m) => `${m[1]},${m[2]}`).join(" "), fill: "none", stroke: col,
              "stroke-width": 2, "stroke-linejoin": "round", opacity: op }, lines);
          }
          for (const m of explore ? meas[o] : seen) svg("circle", { cx: m[1], cy: m[2], r: m[0] === i ? 4.5 : 2.6, fill: col,
            opacity: m[0] <= i ? 1 : 0.3 }, dots);
          const last = seen[seen.length - 1];
          if (last && o === "strong") label(vals, last[1] + (last[1] > W - M.r - 48 ? -6 : 6), last[2] - 7, `${last[3].toFixed(1)}%`,
            { "text-anchor": last[1] > W - M.r - 48 ? "end" : "start", "font-size": 13, "font-weight": 700, class: "me-halo" });
        }
      };
      const hover = svg("rect", { x: M.l, y: M.t, width: W - M.l - M.r, height: S1 - M.t, fill: "transparent" }, s);
      hover.addEventListener("pointermove", (e) => {
        const pt = s.createSVGPoint();
        pt.x = e.clientX; pt.y = e.clientY;
        const p = ((pt.matrixTransform(s.getScreenCTM().inverse()).x - M.l) / (W - M.l - M.r)) * (b.passes + 1);
        let best = 0;
        pos.forEach((q, k) => { if (Math.abs(q - p) < Math.abs(pos[best] - p)) best = k; });
        if (!explore) { resume = playing; pause(); explore = true; }
        if (best !== i) { i = best; show(); } else draw();
      });
    }
    function tick() {
      clearTimeout(timer);
      if (!playing || !visible || !el.isConnected) return;
      if (i >= steps.length - 1) { playing = false; label_(); return; }
      i += 1; show();
      timer = setTimeout(tick, dwell(steps[i]));
    }
    function play() { explore = false; resume = false; playing = true; label_(); clearTimeout(timer); timer = setTimeout(tick, 500); }
    function pause() { playing = false; label_(); clearTimeout(timer); }
    btn.addEventListener("click", () => {
      if (playing) pause();
      else { if (i >= steps.length - 1) i = 0; explore = false; show(); play(); }
    });
    plot.addEventListener("pointerleave", () => { if (explore) { explore = false; draw(); if (resume && i < steps.length - 1) play(); } });
    setup(); show(); label_();
    new ResizeObserver(() => { setup(); draw(); }).observe(plot);
    new IntersectionObserver((es) => {
      visible = es[0].isIntersecting;
      if (visible && autoplay && !playing && !explore && i === 0) play();
      else if (visible && playing) { clearTimeout(timer); timer = setTimeout(tick, 400); }
    }, { threshold: 0.3 }).observe(el);
    return { stop() { pause(); } };
  }

  function build(root, data) {
    const B = data.budgets, DEFAULT = B.length - 1;
    root.innerHTML = `<div class="gh-legend"><span class="gh-lhead">Wins against</span>
        <span class="me-key" style="--c:${GREEN}"></span>Small PPO, seed 0
        <span class="me-key" style="--c:${LIGHT}"></span>seed 2
        <span class="me-key" style="--c:${ORANGE}"></span>PPO as large as Astra&rsquo;s (512 &times; 6)</div>
      <div class="gh-box"></div><div class="gh-panel"></div>`;
    const box = root.querySelector(".gh-box"), side = root.querySelector(".gh-panel");
    let drawnAt = 0, on = DEFAULT, current = null, shown = -1, first = true;

    function render() {
      const W = Math.max(300, Math.round(box.clientWidth));
      if (Math.abs(W - drawnAt) < 2) return;
      drawnAt = W;
      const H = 300, M = { l: 46, r: 56, t: 18, b: 48 };
      const X = (i) => M.l + 26 + (i / (B.length - 1)) * (W - M.l - M.r - 52);
      const Y = (v) => M.t + (1 - v / 100) * (H - M.t - M.b);
      box.replaceChildren();
      const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, class: "gh-svg", role: "img",
        "aria-label": "Share of games won by the network Astra wrote, for 0 to 50 forward passes, against three PPO networks." }, box);
      const col = svg("rect", { y: M.t, height: H - M.t - M.b, width: 44, rx: 4, fill: "#edf5f0" }, s);
      for (const v of [0, 25, 50, 75, 100]) {
        svg("line", { x1: M.l, x2: W - M.r + 10, y1: Y(v), y2: Y(v), stroke: v === 50 ? "#7c848e" : v ? GRID : AXIS,
          "stroke-dasharray": v === 50 ? "5 4" : "none" }, s);
        label(s, M.l - 8, Y(v) + 5, `${v}%`, { "text-anchor": "end" });
      }
      label(s, W - M.r + 14, Y(50) + 5, "even", { "font-weight": 600 });
      B.forEach((b, i) => label(s, X(i), H - M.b + 22, b.passes ? `${b.passes}` : "one shot",
        { "text-anchor": "middle", "font-weight": b.passes ? 400 : 600 }));
      label(s, (X(0) + X(B.length - 1)) / 2, H - 6, "forward passes Astra could use", { "text-anchor": "middle", "font-weight": 600 });

      const lines = [["ppo_s0", GREEN], ["ppo_s2", LIGHT]].map(([k, c]) => {
        const pts = B.map((b, i) => [X(i), Y(b[k])]);
        svg("polyline", { points: pts.map((p) => p.join(",")).join(" "), fill: "none", stroke: c, "stroke-width": 2.5,
          "stroke-linejoin": "round" }, s);
        pts.forEach(([cx, cy]) => svg("circle", { cx, cy, r: 4, fill: c, stroke: "#ffffff", "stroke-width": 2 }, s));
        return { k, pts };
      });
      const same = B.map((b, i) => (b.same_size ? { i, b, x: X(i), y: Y(mean(b.same_size)) } : null)).filter(Boolean);
      if (same.length > 1) svg("polyline", { points: same.map((p) => `${p.x},${p.y}`).join(" "), fill: "none", stroke: ORANGE,
        "stroke-width": 2, "stroke-dasharray": "6 5" }, s);
      for (const p of same) {
        svg("line", { x1: p.x, x2: p.x, y1: Y(Math.max(...p.b.same_size)), y2: Y(Math.min(...p.b.same_size)), stroke: ORANGE,
          "stroke-width": 2 }, s);
        svg("rect", { x: p.x - 4.5, y: p.y - 4.5, width: 9, height: 9, fill: ORANGE, stroke: "#ffffff", "stroke-width": 2 }, s);
      }
      const marks = svg("g", { "pointer-events": "none" }, s);

      function focus(i) {
        on = i;
        col.setAttribute("x", X(i) - 22);
        marks.replaceChildren();
        const b = B[i], vals = [[b.ppo_s0, GREEN], [b.ppo_s2, LIGHT]];
        if (b.same_size) vals.push([mean(b.same_size), ORANGE]);
        const at = vals.map(([v, c]) => ({ v, c, y: Y(v) })).sort((a, c) => a.y - c.y);
        for (let k = 1; k < at.length; k++) at[k].y = Math.max(at[k].y, at[k - 1].y + 16);   // kept apart
        at.forEach(({ v, c, y }) => label(marks, X(i) + 10, y + 5, v.toFixed(1),
          { "font-weight": 700, fill: c === LIGHT ? "#0a734b" : c, class: "me-halo" }));
        if (shown !== i) {                               // the run in front, in the panel
          if (current) current.stop();
          current = player(side, b, first && i === DEFAULT);
          shown = i; first = false;
        }
      }
      s.addEventListener("pointermove", (e) => {
        const pt = s.createSVGPoint();
        pt.x = e.clientX; pt.y = e.clientY;
        const x = pt.matrixTransform(s.getScreenCTM().inverse()).x;
        let best = 0;
        B.forEach((b, i) => { if (Math.abs(X(i) - x) < Math.abs(X(best) - x)) best = i; });
        if (best !== on) focus(best);
      });
      focus(on);
    }

    render();
    new ResizeObserver(render).observe(box);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".gh-fig[data-src]").forEach((root) => {
      fetch(root.dataset.src)
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((data) => build(root, data))
        .catch(() => { root.textContent = "The figure could not be loaded."; });
    });
  });
})();
