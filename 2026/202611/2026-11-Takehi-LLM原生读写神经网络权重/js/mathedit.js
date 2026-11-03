// The math-editing figures (scripts/gen_mathedit.py makes their data):
//   <div class="me-bench" data-src="assets/mathedit/benchmarks.json"></div>
//     one line per benchmark: its score for the base (unedited) model and for the edits made with 10, 25 and 50 forward
//     passes, its name and last score at its end. One is in front with its scores written at its points: MATH-500, or
//     the line (or name) pointed at. The lines draw themselves the first time the figure is on screen.
//   <div class="me-traj" data-src="assets/mathedit/trajectories.json"></div>
//     a run turn by turn, played like a training run: the accuracy Astra measured on practice problems for the
//     original weights and its current edit (after each paired generation pass), and under it a tick for every turn,
//     red where it changed the weights. Beside it, that turn: what it did in a line (for an edit, what Astra had seen
//     and what it changed), then what Astra wrote, cut short ("more" shows all of it). Tabs: the 50-pass run (shown
//     first), the 25- and 10-pass runs. It plays while on screen, stopping a moment at the key edits (the turns where the
//     line of attack changed) and passing quickly over the rest; pointing at the chart (or the arrow keys, or the list
//     of edits) stops it at the turn there, and leaving the figure plays on from that turn: every turn has a place on
//     the x axis, the turns between two forward passes side by side.
(() => {
  const NS = "http://www.w3.org/2000/svg";
  const GREEN = "#118659", ORANGE = "#c25a00", GREY = "#8b929b", RED = "#d93a4b", INK = "#333333";
  const GRID = "#e6e8eb", AXIS = "#b9bec6";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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

  // ---------- benchmarks ----------

  function bench(root, data) {
    // drawn at the width it is shown at, so that its text is the page's size; drawn again when that width changes.
    // One benchmark is in front (MATH-500, or the one pointed at): thicker, its scores written at its points, a wash
    // under it; the lines draw themselves the first time the figure is on screen.
    const color = (b) => (b.group === "math" ? GREEN : ORANGE);
    const DEFAULT = 0;                                           // MATH-500
    root.innerHTML = `<div class="me-legend"><span class="me-key" style="--c:${GREEN}"></span>math benchmarks
      <span class="me-key" style="--c:${ORANGE}"></span>other benchmarks</div><div class="me-box"></div>`;
    const box = root.querySelector(".me-box");
    let drawnAt = 0, drawn = false, focusOn = null;

    function render() {
      const W = Math.max(330, Math.round(box.clientWidth));
      if (Math.abs(W - drawnAt) < 2) return;
      drawnAt = W;
      const H = Math.round(Math.min(440, Math.max(320, W * 0.46)));
      const M = { l: 52, r: W < 560 ? 150 : 178, t: 24, b: 60 };
      const X = (p) => M.l + 22 + (p / 50) * (W - M.l - M.r - 22);
      const YMAX = 75, Y = (v) => M.t + (1 - v / YMAX) * (H - M.t - M.b);
      box.replaceChildren();
      const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, class: "me-svg", role: "img",
        "aria-label": "Accuracy on eight benchmarks for the base model and the edits made with 10, 25 and 50 forward passes." }, box);
      const defs = svg("defs", {}, s);
      for (const [id, c] of [["me-wash-math", GREEN], ["me-wash-other", ORANGE]]) {
        const g = svg("linearGradient", { id, x1: 0, x2: 0, y1: 0, y2: 1 }, defs);
        svg("stop", { offset: "0%", "stop-color": c, "stop-opacity": 0.16 }, g);
        svg("stop", { offset: "100%", "stop-color": c, "stop-opacity": 0 }, g);
      }
      for (const v of [0, 20, 40, 60]) {
        svg("line", { x1: M.l, x2: W - M.r + 8, y1: Y(v), y2: Y(v), stroke: v ? GRID : AXIS }, s);
        label(s, M.l - 10, Y(v) + 5, `${v}%`, { "text-anchor": "end" });
      }
      for (const p of [0, 10, 25, 50]) {
        svg("line", { x1: X(p), x2: X(p), y1: M.t, y2: H - M.b, stroke: GRID }, s);
        label(s, X(p), H - M.b + 22, p ? `${p}` : "base", { "text-anchor": "middle", "font-weight": p ? 400 : 600 });
      }
      label(s, (X(0) + X(50)) / 2, H - 8, "forward passes Astra could use", { "text-anchor": "middle", "font-weight": 600 });

      const wash = svg("path", { "pointer-events": "none", class: "me-wash" }, s);
      const series = data.benchmarks.map((b, i) => {
        const pts = b.points.map((p) => [X(p.passes), Y(p.score)]);
        const g = svg("g", { class: "me-series" }, s);
        const line = svg("polyline", { points: pts.map((p) => p.join(",")).join(" "), fill: "none", stroke: color(b),
          "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }, g);
        const dots = pts.map(([cx, cy]) => svg("circle", { cx, cy, r: 4, fill: color(b), stroke: "#ffffff", "stroke-width": 2 }, g));
        return { b, i, pts, g, line, dots };
      });
      // the names at the right end of the lines, with their last score, spread so that they do not overlap
      const ends = series.map((d) => ({ d, y: d.pts[3][1] })).sort((a, b) => a.y - b.y);
      for (let k = 1; k < ends.length; k++) ends[k].y = Math.max(ends[k].y, ends[k - 1].y + 18);
      const over = ends[ends.length - 1].y - (H - M.b);
      if (over > 0) ends.forEach((e) => (e.y -= over));
      for (const e of ends) {
        const x0 = e.d.pts[3][0];
        svg("line", { x1: x0 + 7, y1: e.d.pts[3][1], x2: x0 + 15, y2: e.y, stroke: AXIS, class: "me-lead" }, e.d.g);
        const t = label(e.d.g, x0 + 19, e.y + 5, "", { class: "me-name" });
        const name = svg("tspan", {}, t); name.textContent = e.d.b.name;
        const val = svg("tspan", { dx: 6, class: "me-val" }, t); val.textContent = e.d.b.points[3].score.toFixed(1);
        e.d.name = t;
      }
      const marks = svg("g", { "pointer-events": "none" }, s);       // the scores of the benchmark in front

      function focus(d) {
        if (d === focusOn && drawn) return;
        focusOn = d;
        for (const o of series) {
          const on = o === d;
          o.g.classList.toggle("me-dim", !on);
          o.g.classList.toggle("me-on", on);
          o.line.setAttribute("stroke-width", on ? 3 : 2);
          o.dots.forEach((c) => c.setAttribute("r", on ? 5 : 3.5));
        }
        d.g.parentNode.insertBefore(d.g, marks);                      // in front of the others, under its scores
        const base = H - M.b;
        wash.setAttribute("d", `M${d.pts.map((p) => p.join(",")).join(" L")} L${d.pts[3][0]},${base} L${d.pts[0][0]},${base} Z`);
        wash.setAttribute("fill", `url(#${d.b.group === "math" ? "me-wash-math" : "me-wash-other"})`);
        marks.replaceChildren();
        d.b.points.slice(0, 3).forEach((p, k) => {
          const [x, y] = d.pts[k];
          label(marks, x, y - 12, `${p.score.toFixed(1)}${p.note ? "*" : ""}`, { "text-anchor": "middle", "font-weight": 700,
            class: "me-halo" });
        });
      }

      function nearest(evt) {
        const pt = s.createSVGPoint();
        pt.x = evt.clientX; pt.y = evt.clientY;
        const p = pt.matrixTransform(s.getScreenCTM().inverse());
        let best = null, dist = 22;
        for (const d of series) {
          for (let k = 0; k < 3; k++) {
            const [x1, y1] = d.pts[k], [x2, y2] = d.pts[k + 1];
            const t = Math.max(0, Math.min(1, ((p.x - x1) * (x2 - x1) + (p.y - y1) * (y2 - y1)) / ((x2 - x1) ** 2 + (y2 - y1) ** 2)));
            const dd = Math.hypot(p.x - (x1 + t * (x2 - x1)), p.y - (y1 + t * (y2 - y1)));
            if (dd < dist) { dist = dd; best = d; }
          }
          const bb = d.name.getBBox();
          if (p.x >= bb.x - 4 && p.x <= bb.x + bb.width + 4 && p.y >= bb.y - 2 && p.y <= bb.y + bb.height + 2) return d;
        }
        return best;
      }
      s.addEventListener("pointermove", (e) => { const d = nearest(e); if (d) focus(d); });
      s.addEventListener("pointerleave", () => focus(series[DEFAULT]));
      focus(focusOn ? series[focusOn.i] : series[DEFAULT]);

      if (!drawn) {                                                   // drawn in, once, when it is first on screen
        s.classList.add("me-hidden");
        new IntersectionObserver((es, obs) => {
          if (!es[0].isIntersecting) return;
          obs.disconnect();
          drawn = true;
          s.classList.remove("me-hidden");
          series.forEach((d, k) => {
            const len = d.line.getTotalLength();
            d.line.style.strokeDasharray = `${len}`;
            d.line.style.strokeDashoffset = `${len}`;
            d.line.getBoundingClientRect();
            d.line.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.3,.7,.3,1) ${k * 70}ms`;
            d.line.style.strokeDashoffset = "0";
            d.g.style.setProperty("--delay", `${k * 70}ms`);
          });
          s.classList.add("me-drawing");
          setTimeout(() => s.classList.remove("me-drawing"), 2600);   // later scores appear at once
        }, { threshold: 0.4 }).observe(s);
      }
    }

    render();
    new ResizeObserver(render).observe(box);
  }

  // ---------- a run, turn by turn ----------

  function md(text) {
    // the final answer: headings, paragraphs, lists, tables, bold and code
    const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/`([^`]+)`/g, "<code>$1</code>");
    const out = [];
    let table = null, list = false;
    const close = () => {
      if (table) { out.push(`<table>${table.join("")}</table>`); table = null; }
      if (list) { out.push("</ul>"); list = false; }
    };
    for (const raw of text.split("\n")) {
      const line = raw.trim();
      if (line.startsWith("|")) {
        if (/^[|\s:-]+$/.test(line)) continue;
        if (list) { out.push("</ul>"); list = false; }
        table = table || [];
        const cells = line.replace(/^\||\|$/g, "").split("|").map((c) => inline(c.trim()));
        table.push(`<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`);
        continue;
      }
      if (!line) { close(); continue; }
      const h = line.match(/^#+\s*(.*)$/);
      if (h) { close(); out.push(`<div class="me-h">${inline(h[1])}</div>`); continue; }
      if (/^[-*]\s+/.test(line)) {
        if (table) { out.push(`<table>${table.join("")}</table>`); table = null; }
        if (!list) { out.push("<ul>"); list = true; }
        out.push(`<li>${inline(line.replace(/^[-*]\s+/, ""))}</li>`);
        continue;
      }
      close();
      out.push(`<p>${inline(line)}</p>`);
    }
    close();
    return out.join("");
  }

  function action(t) {
    if (t.not_run) return "Not run: the reply had no explanation, so it was sent back";
    if (t.kind === "final") return "Final answer";
    if (t.kind === "python") {
      if (t.error) return `Ran Python, which stopped at an error (${t.error.split(":")[0]})`;
      return t.edit ? "Ran Python and changed the weights" : "Ran Python on the weights and the results";
    }
    const p = t.pass || {};
    if (p.failed && !p.number) return "Asked for a forward pass, which failed and was not counted";
    const what = p.type === "generate"
      ? `generation, ${p.model === "both" ? "original and edited weights" : `${p.model} weights`}, ${p.items} problem${p.items === 1 ? "" : "s"}${p.samples > 1 ? ` × ${p.samples}` : ""}`
      : `teacher-forced, ${p.model} weights, ${p.texts} text${p.texts === 1 ? "" : "s"}`;
    return `Forward pass ${p.number}: ${what}${p.failed ? " (failed, not counted)" : ""}`;
  }

  function result(p) {
    if (!p || p.failed) return "";
    if (p.model === "both" && p.edited != null)
      return `original <b>${p.original}%</b> → edited <b>${p.edited}%</b> (${p.difference > 0 ? "+" : ""}${p.difference} ± ${p.se} points) &middot; cut off at the token limit: ${Math.round(p.cut_original * 100)}% → ${Math.round(p.cut_edited * 100)}%`;
    if (p.type === "generate") return `${p.model} weights: <b>${p[p.model]}%</b> correct &middot; cut off at the token limit: ${Math.round(p.cut * 100)}%`;
    return "";
  }

  function traj(root, data) {
    const runs = data.runs;                                      // the 50-pass run first
    let r = 0, i = 0, timer = null, playing = true, visible = false, open = false;
    let resume = false;   // play again when the pointer leaves the figure: it was playing when the reader pointed at it
    // how long it stays on a turn while it plays: a key edit long enough to read what it did in a line, another edit or
    // a measurement long enough to see it, anything else hardly at all
    const dwell = (t) => (t.key ? 1700 : t.edit || (t.pass && t.pass.edited != null) ? 280 : 80);
    root.innerHTML = `
      <div class="tp-tabs me-tabs" role="tablist"><div class="tp-tabrow"><span class="tp-tabset">${runs.map((run, k) => `
        <button type="button" role="tab" class="tp-tab" data-k="${k}" aria-selected="${k === 0}">${run.budget} forward passes</button>`).join("")}
      </span></div></div>
      <div class="me-bar">
        <button type="button" class="tp-btn me-play"></button>
        <button type="button" class="tp-btn me-restart" aria-label="Start again">↻</button>
        <span class="me-pos"></span>
        <span class="me-legend"><span class="me-item"><span class="me-key" style="--c:${GREEN}"></span>edited (Astra’s current edit)</span>
          <span class="me-item"><span class="me-key" style="--c:${GREY}"></span>original</span>
          <span class="me-item"><span class="me-tick"></span>weights changed</span></span>
      </div>
      <div class="me-main">
        <div class="me-plotbox"><div class="me-plot"></div></div>
        <div class="me-panel"></div>
      </div>
      <details class="me-list"><summary></summary><ol></ol></details>`;
    const $ = (q) => root.querySelector(q);
    const plot = $(".me-plot"), panel = $(".me-panel");
    let draw = null, drawnAt = 0, explore = false;   // explore: the reader is pointing at the chart (it shows the whole run)

    function setup() {
      const run = runs[r], turns = run.turns, B = run.budget;
      const W = Math.max(300, Math.round(plot.clientWidth));      // drawn at the width it is shown at
      const H = Math.round(Math.min(390, Math.max(280, W * 0.7))), M = { l: 46, r: 10, t: 10, b: 84 };
      const S0 = H - M.b + 10, S1 = S0 + 24;                      // the strip of turns under the chart
      drawnAt = W;
      panel.style.height = `${H}px`;                              // the panel is as tall as the chart
      // every turn has a place on the x axis: the turns between forward pass k and pass k + 1 share [k, k + 1)
      // evenly, so that moving along the chart goes through the turns in order
      const groups = {};
      turns.forEach((t, k) => (groups[t.used_after] = groups[t.used_after] || []).push(k));
      const pos = [];
      for (const [g, ks] of Object.entries(groups)) ks.forEach((k, j) => (pos[k] = +g + j / ks.length));
      const X = (p) => M.l + (p / (B + 1)) * (W - M.l - M.r);
      const Y = (v) => M.t + (1 - v / 80) * (H - M.t - M.b);
      plot.replaceChildren();
      const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, class: "me-svg", role: "img",
        "aria-label": `Practice accuracy Astra measured during the ${B}-forward-pass run, and the turns at which it changed the weights.` }, plot);
      for (const v of [0, 20, 40, 60, 80]) {
        svg("line", { x1: M.l, x2: W - M.r, y1: Y(v), y2: Y(v), stroke: v ? GRID : AXIS }, s);
        label(s, M.l - 8, Y(v) + 5, String(v), { "text-anchor": "end" });
      }
      svg("line", { x1: M.l, x2: W - M.r, y1: S1, y2: S1, stroke: AXIS }, s);
      const step = B <= 10 ? 2 : B <= 25 ? 5 : 10;
      for (let p = 0; p <= B; p += step) label(s, X(p), S1 + 20, String(p), { "text-anchor": "middle" });
      label(s, (M.l + W - M.r) / 2, H - 8, "forward passes used", { "text-anchor": "middle", "font-weight": 600 });
      label(s, 0, 0, "practice accuracy (%)", { transform: `translate(14 ${(M.t + H - M.b) / 2}) rotate(-90)`,
        "text-anchor": "middle", "font-weight": 600 });
      // the strip: a short grey tick for every turn, a tall red one where it changed the weights
      const strip = svg("g", {}, s);
      const tickEls = turns.map((u, k) => svg("line", { x1: X(pos[k]), x2: X(pos[k]), y1: u.edit ? S0 : S1 - 8, y2: S1,
        stroke: u.edit ? RED : "#a3a9b1", "stroke-width": u.edit ? 2.5 : 1 }, strip));
      turns.forEach((u, k) => { if (u.key) svg("circle", { cx: X(pos[k]), cy: S0, r: 3.5, fill: RED }, strip); });
      const pulse = svg("circle", { r: 4, fill: "none", stroke: RED, "stroke-width": 2, class: "me-pulse", opacity: 0 }, s);
      // the gap between the edit's line and the original's, the lines, their points, and the latest scores
      const band = svg("g", {}, s), lines = svg("g", {}, s), dots = svg("g", {}, s), values = svg("g", {}, s);
      let pulsed = -1;
      const cursor = svg("line", { y1: M.t, y2: S1, stroke: INK, "stroke-width": 1.2, "stroke-dasharray": "3 3" }, s);
      const marker = svg("path", {}, s);
      const hover = svg("rect", { x: M.l, y: M.t, width: W - M.l - M.r, height: S1 - M.t, fill: "transparent",
        class: "me-hover" }, s);
      const toTurn = (evt) => {                            // the turn under the pointer
        const pt = s.createSVGPoint();
        pt.x = evt.clientX; pt.y = evt.clientY;
        const p = ((pt.matrixTransform(s.getScreenCTM().inverse()).x - M.l) / (W - M.l - M.r)) * (B + 1);
        let best = 0;
        pos.forEach((q, k) => { if (Math.abs(q - p) < Math.abs(pos[best] - p)) best = k; });
        // a red tick close by wins, so that the edits are easy to land on
        turns.forEach((u, k) => { if (u.edit && Math.abs(X(pos[k]) - X(p)) < 5 && !turns[best].edit) best = k; });
        return best;
      };
      hover.addEventListener("pointermove", (e) => {
        const k = toTurn(e);
        if (!explore || k !== i) { hold(); go(k); }
      });
      // the measurements: [turn index, x, original, edited]
      const meas = [];
      turns.forEach((t, k) => {
        const p = t.pass;
        if (p && !p.failed && p.type === "generate") meas.push([k, X(pos[k]), p.original ?? null, p.edited ?? null]);
      });
      const lastSeen = (k) => meas.reduce((a, m) => (m[0] <= k ? m[0] : a), -1);
      draw = () => {
        const t = turns[i], x = X(pos[i]);
        cursor.setAttribute("x1", x); cursor.setAttribute("x2", x);
        marker.setAttribute("d", `M${x - 6},${S0 - 10} L${x + 6},${S0 - 10} L${x},${S0 - 1} Z`);
        marker.setAttribute("fill", t.edit ? RED : INK);
        tickEls.forEach((el, k) => el.setAttribute("opacity", k <= i ? 1 : 0.35));
        if (t.key && pulsed !== i) {                     // a ring goes out from a key edit when it is reached
          pulse.setAttribute("cx", x); pulse.setAttribute("cy", S0);
          pulse.classList.remove("me-pulse-on"); pulse.getBoundingClientRect(); pulse.classList.add("me-pulse-on");
        }
        pulsed = i;
        // while it plays, the run so far; while the reader points at it, the whole run, what comes later faded
        const shown = explore ? meas : meas.filter((m) => m[0] <= i);
        lines.replaceChildren(); dots.replaceChildren(); band.replaceChildren(); values.replaceChildren();
        for (const [part, op] of [[shown.filter((m) => m[0] <= i), 0.12], [shown.filter((m) => m[0] >= lastSeen(i)), 0.05]]) {
          const pp = part.filter((m) => m[2] != null && m[3] != null);
          if (pp.length > 1) svg("path", { d: `M${pp.map((m) => `${m[1]},${Y(m[3])}`).join(" L")} L${pp.slice().reverse()
            .map((m) => `${m[1]},${Y(m[2])}`).join(" L")} Z`, fill: GREEN, opacity: op }, band);
        }
        const now = meas.find((m) => m[0] === lastSeen(i));
        if (now) {                                       // the latest scores, beside their points
          const right = now[1] > W - M.r - 70;
          const at = (v, dy, bold) => label(values, now[1] + (right ? -10 : 10), Y(v) + dy, `${v}%`, {
            "text-anchor": right ? "end" : "start", "font-weight": bold ? 700 : 600, class: "me-halo" });
          const [o, e] = [now[2], now[3]];
          if (e != null) at(e, o != null && e - o < 6 ? -8 : 5, true);
          if (o != null) at(o, e != null && e - o < 6 ? 18 : 5, false);
        }
        for (const [col, key] of [[GREY, 2], [GREEN, 3]]) {
          for (const [part, op] of [[shown.filter((m) => m[0] <= i), 1], [shown.filter((m) => m[0] >= lastSeen(i)), 0.3]]) {
            const pts = part.filter((m) => m[key] != null).map((m) => `${m[1]},${Y(m[key])}`);
            if (pts.length > 1) svg("polyline", { points: pts.join(" "), fill: "none", stroke: col, "stroke-width": 2,
              "stroke-linejoin": "round", opacity: op }, lines);
          }
        }
        for (const m of shown) {
          for (const [col, key] of [[GREY, 2], [GREEN, 3]]) {
            if (m[key] == null) continue;
            svg("circle", { cx: m[1], cy: Y(m[key]), r: m[0] === i ? 6 : 4, fill: col, stroke: "#ffffff", "stroke-width": 1.5,
              opacity: m[0] <= i ? 1 : 0.3 }, dots);
          }
        }
        $(".me-pos").textContent = `turn ${i + 1} of ${turns.length} · ${t.used_after} of ${B} forward passes used`;
        show(turns, i);
      };
      // the list of every edit in this run, to jump to one
      const edits = turns.map((u, k) => [u, k]).filter(([u]) => u.edit);
      $(".me-list summary").textContent = `All ${edits.length} edits in this run`;
      $(".me-list ol").innerHTML = edits.map(([u, k]) => `<li><button type="button" class="me-jump" data-k="${k}">Turn ${u.turn}</button>
        <span>${esc(u.summary)}</span></li>`).join("");
      root.querySelectorAll(".me-jump").forEach((b) => b.addEventListener("click", () => { hold(); go(+b.dataset.k); }));
    }

    function show(turns, k) {
      // what Astra did at turn k, in a line, then what it wrote, cut short; "more" shows all of it
      const t = turns[k], run = runs[r];
      const tag = t.not_run ? "not run" : t.edit ? "changed the weights" : t.kind === "final" ? "final answer"
        : t.kind === "forward" ? "forward pass" : "Python";
      const res = result(t.pass);
      let body = "", extra = [];
      if (t.kind === "final") body = `<div class="me-clip me-final">${md(run.final)}</div>`;
      else if (t.said) {
        body = `<p class="me-clip me-said">“${esc(t.said)}”</p>`;
        if (t.hypothesis) extra.push(["Hypothesis", esc(t.hypothesis)]);
      } else if (t.hypothesis) body = `<p class="me-clip me-said">Hypothesis: ${esc(t.hypothesis)}</p>`;
      if (t.summary) extra.push(["Step", esc(action(t))]);
      if (t.error) extra.push(["Error", esc(t.error)]);
      panel.innerHTML = `<div class="me-head">Turn ${k + 1}${t.pass && t.pass.number ? `, forward pass ${t.pass.number}` : ""}</div>
        <span class="me-tag${t.edit ? " me-tag-edit" : ""}">${tag}</span>
        <div class="me-sum">${esc(t.summary || action(t))}</div>
        ${res ? `<div class="me-res">${res}</div>` : ""}
        ${body}
        ${extra.map(([lab, v]) => `<div class="me-extra"><b>${lab}:</b> ${v}</div>`).join("")}
        <button type="button" class="me-more" hidden></button>`;
      panel.classList.toggle("me-open", open);
      panel.classList.remove("me-enter");
      if (t.key && playing) { panel.getBoundingClientRect(); panel.classList.add("me-enter"); }
      const clip = panel.querySelector(".me-clip"), more = panel.querySelector(".me-more");
      const cut = clip && (open || clip.scrollHeight > clip.clientHeight + 1);
      more.hidden = !(cut || extra.length);
      more.textContent = open ? "▾ less" : "▸ more";
      more.addEventListener("click", () => { open = !open; hold(); show(turns, k); });
      if (t.kind === "final" && open && window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([panel]).catch(() => {});
    }

    function go(k) { i = Math.max(0, Math.min(runs[r].turns.length - 1, k)); draw(); }
    function label_() { $(".me-play").textContent = playing ? "❚❚ Pause" : "▶ Play"; }
    function tick() {
      clearTimeout(timer);
      if (!playing || !visible) return;
      const turns = runs[r].turns;
      if (i >= turns.length - 1) { playing = false; label_(); return; }
      go(i + 1);
      timer = setTimeout(tick, dwell(turns[i]));
    }
    function play() { explore = false; open = false; resume = false; playing = true; label_(); clearTimeout(timer); timer = setTimeout(tick, 600); }
    function pause() { playing = false; label_(); clearTimeout(timer); }
    function hold() {                                    // the reader looks at a turn: stop there, and show the whole run
      if (!explore) resume = playing || resume;
      pause(); explore = true;
    }

    $(".me-play").addEventListener("click", () => {
      if (playing) { resume = false; pause(); }
      else { if (i >= runs[r].turns.length - 1) go(0); play(); }
    });
    // pointing at the chart stops it at the turn there; leaving the figure plays on from that turn
    root.addEventListener("pointerleave", () => { if (explore && resume && i < runs[r].turns.length - 1) play(); });
    $(".me-restart").addEventListener("click", () => { go(0); play(); });
    root.querySelectorAll(".tp-tab").forEach((b) => b.addEventListener("click", () => {
      r = +b.dataset.k;
      root.querySelectorAll(".tp-tab").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      i = 0; explore = false; open = false; setup(); draw(); play();
    }));
    root.tabIndex = 0;
    root.addEventListener("keydown", (e) => {
      if (e.target.closest("button")) return;
      const d = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
      if (d) { e.preventDefault(); hold(); go(i + d); }
    });
    setup(); draw(); label_();
    new ResizeObserver(() => { if (Math.abs(plot.clientWidth - drawnAt) >= 2) { setup(); draw(); } }).observe(plot);
    new IntersectionObserver((es) => {
      visible = es[0].isIntersecting;
      if (visible && playing) { clearTimeout(timer); timer = setTimeout(tick, 600); }
    }, { threshold: 0.35 }).observe(root);
  }

  document.addEventListener("DOMContentLoaded", () => {
    for (const [sel, make] of [[".me-bench[data-src]", bench], [".me-traj[data-src]", traj]]) {
      document.querySelectorAll(sel).forEach((root) => {
        fetch(root.dataset.src)
          .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
          .then((data) => make(root, data))
          .catch(() => { root.textContent = "(This figure loads when the page is served, not opened as a file.)"; });
      });
    }
  });
})();
