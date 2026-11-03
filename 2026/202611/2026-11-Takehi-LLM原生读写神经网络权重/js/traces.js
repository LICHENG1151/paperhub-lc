// Our prompts and Astra's reasoning: <div class="taskpages" data-src="assets/traces/exp1_games.json"></div>
// The JSON (scripts/gen_traces.py) has {items}; an item is one network: {label, gif (optional), correct, prompt (blocks
// of text, with a number where that many weights are left out), question, weights, quoted, brief (the key sentences of
// Astra's answer, a code block, its final answer and confidence, in its order), answer (its whole answer, markdown),
// tokens, thinking_tokens, effort, thinking (the headings of its hidden thinking, which is all the API returns of it)}.
// One tab per item, a compact card: a replay across its top (`media`, an SVG, with the right answer under it) or an
// exchange (`chat`: {user, guess, replies: [{model, says, follows}]}, the user's guess in red where a reply follows it), the
// network's animation (or, for a
// diffusion model, six images it generates) beside three parts, each with its label: the Prompt (the question in a
// sentence, what it rules out, and what comes with it; the whole prompt on "Show the full prompt"), the
// Answer (the core of Astra's final answer, its confidence and whether it is right, or the weights it
// wrote), and the Reasoning (the key sentences of its reply as steps in a box that scrolls, its bold terms
// highlighted; the whole reply on "Read full reasoning"). Marked (between ⦃ ⦄ in the JSON, and
// the numbers of `marks` in the rows of weights): where Astra reads the weights, in its answer and in the prompt. The
// left / right keys switch the tabs. An item may give its question line (`ask`, `rule`), what came with it (`given`,
// for weights that were not given as text), its number of runs instead of token counts, a score to show instead of
// right or wrong (`result`), and an episode to play beside it (`play`, played by js/handplay.js). A figure's setup sits in <details class="fig-setup"> at its top right; a click
// elsewhere, or Escape, closes it.
(() => {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const n = (x) => x.toLocaleString("en-US");
  // the final answer: a heading "## Game" / "## Answer: A", or a label "Game: ..." / "**Images:** ..." / "Ranking: ..."
  const ANSWER = /^(?:#+\s*)?(?:\*\*)?(Game|Images|Answer|Ranking)\b(?:\*\*)?\s*(?::(?:\*\*)?\s*(.*))?$/;

  function inline(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s).,;:]|$)/g, "$1<i>$2</i>")
      .replace(/`([^`]+)`/g, '<span class="tp-code">$1</span>')
      .replace(/⟦/g, '<span class="tp-key">').replace(/⟧/g, "</span>")
      .replace(/⦃/g, '<mark class="tp-read">').replace(/⦄/g, "</mark>");
  }

  // Prompt text: as it is, with the parts Astra needs to read the weights marked (between ⦃ ⦄).
  const ptext = (s) => esc(s).replace(/⦃/g, '<mark class="tp-read">').replace(/⦄/g, "</mark>");

  // A code block without the indent it has inside a list item.
  function pre(lines) {
    const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
    return `<pre class="tp-pre">${esc(lines.map((l) => l.slice(indent)).join("\n"))}</pre>`;
  }

  // A markdown table (its lines) -> HTML.
  function table(lines) {
    const cells = (l) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => inline(c.trim()));
    const rows = lines.filter((l) => !/^[\s|:-]+$/.test(l));
    const [head, ...body] = rows.map(cells);
    return `<table class="tp-table"><thead><tr>${head.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>` +
      body.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("") + "</tbody></table>";
  }

  // An answer in markdown -> HTML: headings, paragraphs, lists, tables, code blocks, display math (typeset by
  // MathJax afterwards); the final answer marked.
  function reply(md) {
    const out = [];
    let list = false, fence = null, rows = null, math = null, markNext = false;
    const closeList = () => { if (list) { out.push("</ul>"); list = false; } };
    const closeTable = () => { if (rows) { out.push(table(rows)); rows = null; } };
    for (const raw of md.split("\n")) {
      if (/^\s*```/.test(raw)) {
        if (fence === null) { closeList(); closeTable(); fence = []; } else { out.push(pre(fence)); fence = null; }
        continue;
      }
      if (fence !== null) { fence.push(raw); continue; }
      const line = raw.trim();
      if (math !== null || line.startsWith("\\[")) {
        if (math === null) { closeList(); closeTable(); math = []; }
        math.push(line);
        if (line.endsWith("\\]")) { out.push(`<div class="tp-math">${esc(math.join("\n"))}</div>`); math = null; }
        continue;
      }
      if (line.startsWith("|")) { closeList(); (rows = rows || []).push(line); continue; }
      closeTable();
      if (!line) { closeList(); continue; }
      const m = line.match(ANSWER);
      if (m) {
        closeList();
        const rest = (m[2] || "").trim();
        out.push(`<div class="tp-h">${esc(m[1])}</div>` + (rest ? `<p><mark>${inline(rest)}</mark></p>` : ""));
        markNext = !rest;
        continue;
      }
      const head = line.match(/^#+\s*(.*)$/) || line.match(/^(?:\*\*)?([A-Z][A-Za-z ]{2,30}):(?:\*\*)?$/);
      if (head) { closeList(); out.push(`<div class="tp-h">${inline(head[1].replace(/:$/, ""))}</div>`); continue; }
      let html = inline(line.replace(/^[-*]\s+/, ""));
      if (markNext) { html = `<mark>${html}</mark>`; markNext = false; }
      if (/^[-*]\s+/.test(line)) {
        if (!list) { out.push("<ul>"); list = true; }
        out.push(`<li>${html}</li>`);
      } else {
        closeList();
        out.push(`<p>${html}</p>`);
      }
    }
    closeList();
    closeTable();
    if (fence !== null) out.push(pre(fence));
    return out.join("");
  }

  const typeset = (el) => { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([el]).catch(() => {}); };

  // The whole prompt: its text, "[n numbers left out]" for the weights, and the lines of weights Astra quotes, with
  // the quoted numbers marked and, beside each line, where it is (for W1: the cell and channel of its input).
  function fullPrompt(blocks) {
    return blocks.map((b) => {
      if (typeof b === "number") return `<div class="tp-omit">[${n(b)} numbers left out]</div>`;
      if (typeof b === "string") return `<div class="tp-text">${ptext(b.replace(/^\n+|\n+$/g, ""))}</div>`;
      const vals = b.values.map((v, c) => (b.marks.includes(c) ? `<mark class="tp-read">${esc(v)}</mark>` : esc(v)));
      return `<div class="tp-wline"><div class="tp-wlabel">${esc(b.label)}</div><div class="tp-wvals">${vals.join(" ")}</div></div>`;
    }).join("");
  }

  // A toggle: the button shows `long` in `body` (with `onText` on it), or `short` again.
  function toggle(button, body, short, long, offText, onText) {
    let open = false;
    button.addEventListener("click", () => {
      open = !open;
      body.innerHTML = open ? long : short;
      body.classList.toggle("open", open);
      button.textContent = open ? onText : offText;
      button.setAttribute("aria-expanded", String(open));
      typeset(body);
    });
  }

  // A small image on black, from rows of grey levels (0 to 1), lit in `color`: a diffusion model's sample, or the
  // image Astra drew (its "#" pixels).
  function pixels(rows, color, cls) {
    let lit = "";
    rows.forEach((r, y) => r.forEach((v, x) => {
      if (v > 0) lit += `<rect x="${x}" y="${y}" width="1" height="1" fill="${color}" fill-opacity="${v}"/>`;
    }));
    return `<svg class="${cls}" viewBox="0 0 ${rows[0].length} ${rows.length}" shape-rendering="crispEdges" role="img">` +
      `<rect width="${rows[0].length}" height="${rows.length}" fill="#000000"/>${lit}</svg>`;
  }

  // A code block that is a drawing: rows of "#" and "." of one length.
  function drawing(text) {
    const rows = text.split("\n").map((l) => l.trim()).filter(Boolean);
    if (rows.length < 6 || !rows.every((r) => /^[.#]+$/.test(r) && r.length === rows[0].length)) return null;
    return rows.map((r) => [...r].map((ch) => (ch === "#" ? 1 : 0)));
  }

  // The question itself, in a sentence: the one that asks (ends in "?", or says what to do), without "QUESTION." or
  // "YOUR TASK:"; and what the prompt rules out, in a sentence.
  function ask(question) {
    const q = question.replace(/[⦃⦄]/g, "").replace(/\s+/g, " ").trim();
    const sentences = q.match(/[^.?!]+[.?!]/g) || [q];
    const pick = sentences.filter((x) => x.trim().endsWith("?"));
    let a = (pick.length ? pick : sentences.filter((x) => /^\s*(QUESTION\. )?(Rank|Change|Predict|Write)\b|YOUR TASK:/.test(x)))[0] || sentences[0];
    a = a.replace(/^\s*(QUESTION\.|YOUR TASK:)\s*/, "").trim();
    a = a.replace(/\b(was|does|is|did|can) it\b/, "$1 this neural network");   // "Which game was it trained on?"
    const tools = /no tools/i.test(q), forward = /forward-pass calculation/i.test(q);
    const rule = tools && forward ? "No tools or forward passes are allowed." : tools ? "No tools are allowed."
      : forward ? "No forward passes are allowed." : "";
    return { text: a.charAt(0).toUpperCase() + a.slice(1), rule };
  }

  // The final answer at its core: the bold part when only part of it is bold, before " — " or ", or ".
  function core(final) {
    const plain = final.replace(/\*\*/g, "");
    const bold = final.match(/\*\*(.+?)\*\*/);
    const a = bold && bold[1].length < plain.length - 2 ? bold[1] : plain;
    return a.split(/ — |, or /)[0].replace(/\.$/, "");
  }

  // One key sentence of the reply, as a step: its label ("Channel 0 — agent:"), its bold terms highlighted, and where it
  // reads the weights marked, the numbers it quotes in a monospace font.
  function step(p) {
    const m = p.key.match(/^\*\*([^*]+?:)\*\*\s*(.*)$/);
    let html = inline(m ? m[2] : p.key);
    if (p.read) html = `<mark class="tp-read">${html.replace(/(^|[\s(,])([−-]?\d+\.\d+)/g, '$1<span class="tp-num">$2</span>')}</mark>`;
    return `<li${p.read ? ' class="tp-reads"' : ""}>${m ? `<span class="tp-slab">${inline(m[1])}</span> ` : ""}${html}</li>`;
  }

  // The reply in parts, for the card: its final answer and confidence, the drawing that goes beside them, its key
  // sentences as steps (all of them, in a box that scrolls), and any other code block (the weights Astra wrote).
  function parts(pieces) {
    const keys = [], beside = [], below = [], answer_ = [];
    let final = false, answer = null, label = null, conf = null;
    for (const p of pieces) {
      if ("key" in p) keys.push(p);
      else if ("pre" in p) {
        const lines = p.pre.split("\n");
        const img = final && drawing(p.pre);              // a drawing after the final answer: as an image
        if (img) beside.push(`${pixels(img, "#118659", "tp-drawn")}<div class="tp-cap">Astra&rsquo;s drawing</div>`);
        else if (p.title && lines.length > 10)            // the weights Astra wrote: its answer, folded in a line
          answer_.push(`<details class="tp-fold"><summary><b>${esc(p.title)}</b> &middot; ${lines.length} lines</summary>${pre(lines)}</details>`);
        else if (lines.length > 10)                       // a long block: folded in a line
          below.push(`<details class="tp-fold"><summary><b>${esc(p.title || "Code")}</b> &middot; ${lines.length} lines</summary>${pre(lines)}</details>`);
        else (final ? beside : below).push((p.title ? `<div class="tp-h">${esc(p.title)}</div>` : "") + pre(lines));
      }
      if ("final" in p) { answer = core(p.final); label = p.label; final = true; }
      if ("confidence" in p) conf = p.confidence;
    }
    return { answer, label, conf, beside: beside.join(""), below: below.join(""), weights: answer_.join(""),
             steps: keys.length ? `<ol class="tp-steps">${keys.map(step).join("")}</ol>` : "" };
  }

  // An SVG shown with <img> cannot use the page's fonts: put it into the page instead (as the page does for figures).
  const svgs = new Map();
  function inlineSvg(img) {
    if (!img) return;
    const src = img.getAttribute("src");
    if (!svgs.has(src)) svgs.set(src, fetch(src).then((r) => (r.ok ? r.text() : Promise.reject(r.status))));
    svgs.get(src).then((text) => {
      const svg = new DOMParser().parseFromString(text, "image/svg+xml").documentElement;
      if (svg.localName !== "svg" || svg.querySelector("parsererror") || !img.isConnected) return;
      svg.setAttribute("aria-label", img.alt);
      img.replaceWith(document.importNode(svg, true));
    }).catch(() => {});
  }

  // a user's message and each model's reply, the guess marked where it is given back
  function chat(c, truth) {
    const mark = (t) => esc(t).replace(`answer is ${esc(c.guess)}`, `answer is <span class="tp-guess">${esc(c.guess)}</span>`);
    return `<div class="tp-chat"><div class="tp-convo">
        <div class="tp-msg tp-user"><span class="tp-who">User</span>${mark(c.user)}</div>
        ${c.replies.map((r) => `<div class="tp-msg"><span class="tp-who">Model ${esc(r.model)}</span>${r.follows ? mark(r.says) : esc(r.says)}</div>`).join("")}
      </div>${truth ? `<div class="tp-mcap">${esc(truth)}</div>` : ""}</div>`;
  }

  function build(root, data) {
    const items = data.items;
    let i = 0;
    root.tabIndex = 0;
    let host = root;                                   // where the card is drawn
    if (data.fold) {                                   // the whole card folded to one line, opened by a click
      root.innerHTML = `<details class="tp-whole"><summary><span class="tp-wshow">Show the prompt and Astra&rsquo;s answers</span>` +
        `<span class="tp-whide">Hide the prompt and Astra&rsquo;s answers</span></summary><div class="tp-wbody"></div></details>`;
      host = root.querySelector(".tp-wbody");
      root.querySelector(".tp-whole").addEventListener("toggle", (e) => { if (e.target.open) show(); });   // drawn when seen
    }

    function show() {
      const it = items[i];
      const nets = it.nets > 1 ? ["A", "B", "C"].slice(0, it.nets) : null;
      const whose = it.given ? "" : nets ? `the weights of networks ${nets.slice(0, -1).join(", ")} and ${nets[nets.length - 1]} ` +
        `(${n(it.weights)} each)` : `the ${data.what || (it.gif ? "policy" : "model")}&rsquo;s ${n(it.weights)} weights`;
      const pmore = "Show the full prompt";
      const q = it.ask ? { text: it.ask, rule: it.rule || "" } : ask(it.question);   // given in the data, or taken from the prompt
      const part = parts(it.brief);
      const row = (it.prompt || []).find((x) => x && typeof x === "object" && x.values);   // a line of the weights as pasted
      const tab = (x, k) => `<button type="button" role="tab" class="tp-tab" data-k="${k}" aria-selected="${k === i}">${esc(x.label)}</button>`;
      const groups = [...new Set(items.map((x) => x.group || ""))];
      const shown = it.thinking.slice(0, 12), more = it.thinking.length - shown.length;
      const verdict = it.result ? `<span class="tp-result">${esc(it.result)}</span>`      // a score, not right or wrong
        : `<span class="tp-verdict ${it.correct ? "" : "wrong"}">${it.correct ? "&check;" : "&cross;"} ${esc(it.verdict || (it.correct ? "Correct" : "Wrong"))}</span>`;
      host.innerHTML = (items.length < 2 ? "" : `
        <div class="tp-tabs" role="tablist">${groups.map((g) => `
          <div class="tp-tabrow">${g && groups.length > 1 ? `<span class="tp-tabgroup">${esc(g)}</span>` : ""}<span class="tp-tabset">${items
            .map((x, k) => ((x.group || "") === g ? tab(x, k) : "")).join("")}</span></div>`).join("")}
        </div>`) + `
        <div class="tp-card${it.gif || it.samples || it.play ? " has-anim" : ""}">
          ${it.media ? `<div class="tp-media"><img src="${it.media}" alt="Replays of the level by the networks.">
            <div class="tp-mside">${(it.mkey || []).map((k) => `<div class="tp-mkey"><span class="tp-msw" style="background-color:${k.color};opacity:${k.alpha || 1}"></span>${esc(k.text)}</div>`).join("")}
            ${it.truth ? `<div class="tp-mcap">${esc(it.truth)}</div>` : ""}</div></div>` : ""}
          ${it.chat ? chat(it.chat, it.truth) : ""}
          ${it.gif ? `<div class="tp-side"><img class="tp-anim" src="${it.gif}" alt="The ${esc(it.label)} networks playing.">
            ${data.anim ? `<div class="tp-cap">${esc(data.anim)}</div>` : ""}</div>` : ""}
          ${it.play ? `<div class="tp-side"><canvas class="tp-anim tp-play" aria-label="The ${esc(it.label)} network playing"></canvas>
            <div class="tp-cap">Score <span class="tp-score">0</span></div></div>` : ""}
          ${it.samples ? `<div class="tp-side"><div class="tp-samples">${it.samples.map((img) => pixels(img, "#ffffff", "tp-sample")).join("")}</div>
            <div class="tp-cap">${esc(data.anim || "Samples")}</div></div>` : ""}
          <div class="tp-main">
            ${it.truth && !it.media && !it.chat ? `<div class="tp-truth"><span class="tp-lab">Truth</span> ${esc(it.truth)}</div>` : ""}
            <div class="tp-q tp-sec">
              <div class="tp-bubble">
                <div class="tp-file"><span class="tp-ficon" aria-hidden="true"></span><span class="tp-fname">${it.given || `${whose} as text`}</span>
                  ${row ? `<div class="tp-paste">${esc(row.label.split(":")[0])} &nbsp;${row.values.slice(0, 12).map(esc).join(" ")} &hellip;</div>` : ""}</div>
                <div class="tp-ask">${esc(q.text)}</div>
                ${q.rule ? `<div class="tp-rule">${q.rule}</div>` : ""}
                <div class="tp-pbody"></div>
                <div class="tp-pbar"><button type="button" class="tp-link tp-pmore" aria-expanded="false">${pmore} &#9656;</button></div>
              </div>
            </div>
            <div class="tp-a tp-sec">
              <div class="tp-ahead"><span class="tp-chip tp-chip-a">Answer</span>
                ${part.answer ? `<span class="tp-ans">${part.label ? `<span class="tp-alab">${esc(part.label)}:</span> ` : ""}<mark>${inline(part.answer)}</mark></span>` : ""}
                <span class="tp-meta">${part.conf ? `${esc(part.conf)} confident &middot; ` : ""}${verdict}${it.tokens != null ? ` &middot; ${n(it.tokens - it.thinking_tokens)} tokens` : it.runs ? ` &middot; ${it.runs} runs` : ""}</span></div>
              ${part.weights}
            </div>
            <div class="tp-r tp-sec">
              <div class="tp-rbox">
                <div class="tp-rhead"><span class="tp-chip tp-chip-r">Reasoning</span></div>
                <div class="tp-abody${part.beside ? " has-draw" : ""}">
                  <div class="tp-rbody">${part.steps}</div>
                  ${part.beside ? `<div class="tp-draw">${part.beside}</div>` : ""}
                </div>
                ${part.below}
                <button type="button" class="tp-link tp-rmore" aria-expanded="false">Read full reasoning &#9656;</button>
              </div>
            </div>
          </div>
        </div>`;
      const $ = (s) => host.querySelector(s);
      toggle($(".tp-pmore"), $(".tp-pbody"), "", fullPrompt(it.prompt), `${pmore} ▸`, "Show less ▴");
      toggle($(".tp-rmore"), $(".tp-rbody"), part.steps,
        (it.thinking_tokens != null ? `<div class="tp-thinking">[Before writing this, Astra thought for ${n(it.thinking_tokens)} tokens. That thinking
           is hidden. ${it.thinking.length ? `The API returns only its ${it.thinking.length > 1 ? `${it.thinking.length} headings` : "heading"}:
           ${shown.map(esc).join(" / ")}${more > 0 ? ` / &hellip; and ${more} more` : ""}` : "The API returned none of it"}]</div>` : "") +
        `<div class="tp-reply">${reply(it.answer)}</div>`, "Read full reasoning ▸", "Show less ▴");
      const fade = () => {                                // fade the foot of the steps while more is below
        const ol = $(".tp-rbody:not(.open) .tp-steps");
        if (!ol || !ol.offsetParent) return;              // folded away: measured when it is opened
        if (ol.scrollHeight - ol.clientHeight < 14) ol.classList.add("fits");   // a few pixels more: no need to scroll
        ol.classList.toggle("more", ol.scrollTop + ol.clientHeight < ol.scrollHeight - 2);
      };
      $(".tp-rbody").addEventListener("scroll", fade, true);
      $(".tp-rmore").addEventListener("click", fade);         // after the toggle has put the steps back
      fade();
      inlineSvg($(".tp-media img"));
      if (it.play && window.HandPlay) HandPlay.mount($(".tp-play"), it.play, $(".tp-score"));
      typeset($(".tp-card"));
      host.querySelectorAll(".tp-tab").forEach((b) => b.addEventListener("click", () => { i = +b.dataset.k; show(); }));
    }

    root.addEventListener("keydown", (e) => {
      if (e.target !== root && !e.target.classList.contains("tp-tab")) return;
      const d = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
      if (!d) return;
      i = (i + d + items.length) % items.length;
      show();
      root.querySelector(`.tp-tab[data-k="${i}"]`).focus();
    });
    show();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".taskpages[data-src]").forEach((root) => {
      fetch(root.dataset.src)
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((data) => build(root, data))
        .catch(() => { root.textContent = "(This figure loads when the page is served, not opened as a file.)"; });
    });
  });
  document.addEventListener("click", (e) => {
    document.querySelectorAll("details.fig-setup[open]").forEach((d) => { if (!d.contains(e.target)) d.open = false; });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelectorAll("details.fig-setup[open]").forEach((d) => (d.open = false));
  });
})();
