// Citations, <d-cite key="a,b">: the Distill template numbers them ([1], [2, 3]) and lists them at the end. This shows
// them in the page's ink, and gives each number its own small card on hover (or tap), in place of the template's wide
// box that lists every reference of a group at once.
(() => {
  const INK = ".citation, .citation-number { color: #03623f; } " +
    ".citation-number { font-family: inherit; font-size: 85%; font-weight: 600; } d-hover-box { display: none !important; } " +
    ".cn { cursor: pointer; border-radius: 2px; } .cn:hover, .cn.on { background: #cee7d9; }";
  const esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  let card = null, hideTimer = null, current = null;

  function authors(s) {
    const names = String(s || "").split(" and ").map((n) => {
      const [last, first] = n.includes(",") ? n.split(",").map((x) => x.trim()) : [n.trim().split(" ").pop(), n.trim().split(" ").slice(0, -1).join(" ")];
      return first ? `${first.split(/[\s-]+/).filter(Boolean).map((w) => w[0] + ".").join(" ")} ${last}` : last;
    }).filter(Boolean);
    return names.length > 4 ? `${names.slice(0, 3).join(", ")} et al.` : names.join(", ");
  }

  function show(span, entry) {
    clearTimeout(hideTimer);
    if (!card) {
      card = document.createElement("div");
      card.className = "cite-card";
      card.addEventListener("mouseenter", () => clearTimeout(hideTimer));
      card.addEventListener("mouseleave", hide);
      document.body.appendChild(card);
    }
    if (current) current.classList.remove("on");
    current = span;
    span.classList.add("on");
    const venue = entry.journal || entry.booktitle || "";
    const title = entry.url ? `<a href="${esc(entry.url)}" target="_blank" rel="noopener">${esc(entry.title)}</a>` : esc(entry.title);
    card.innerHTML = `<div class="cite-title">${title}</div>` +
      (entry.author ? `<div>${esc(authors(entry.author))}</div>` : "") +
      `<div>${esc([venue, entry.year].filter(Boolean).join(", "))}</div>`;
    card.hidden = false;
    const r = span.getBoundingClientRect(), w = card.offsetWidth;
    const left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, document.documentElement.clientWidth - w - 8));
    card.style.left = `${left + window.scrollX}px`;
    card.style.top = `${r.bottom + window.scrollY + 6}px`;
  }

  function hide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (card) card.hidden = true;
      if (current) current.classList.remove("on");
      current = null;
    }, 250);
  }

  // The template writes "[24, 25, 26]" as one text: split it into one span per number.
  function split(cite) {
    const span = cite.shadowRoot.querySelector(".citation-number");
    if (!span || span.querySelector(".cn") || !cite.numbers || !cite.numbers.length) return;
    const entries = cite.entries || [];
    span.textContent = "";
    span.append("[");
    cite.numbers.forEach((n, k) => {
      if (k) span.append(", ");
      const s = document.createElement("span");
      s.className = "cn";
      s.textContent = n < 0 ? "?" : String(n + 1);
      if (entries[k]) {
        s.addEventListener("mouseenter", () => show(s, entries[k]));
        s.addEventListener("mouseleave", hide);
        s.addEventListener("click", (e) => { e.stopPropagation(); if (current === s && card && !card.hidden) hide(); else show(s, entries[k]); });
      }
      span.appendChild(s);
    });
    span.append("]");
  }

  function setUp(cite) {
    const root = cite.shadowRoot;
    if (!root || root.querySelector("style.ink")) return;
    const st = document.createElement("style");
    st.className = "ink";
    st.textContent = INK;
    root.appendChild(st);
    const span = root.querySelector(".citation-number");
    if (span) new MutationObserver(() => split(cite)).observe(span, { childList: true, characterData: true, subtree: true });
    split(cite);
  }

  customElements.whenDefined("d-cite").then(() => {
    const all = () => document.querySelectorAll("d-cite").forEach(setUp);
    all();
    document.addEventListener("DOMContentLoaded", all);
    window.addEventListener("load", () => setTimeout(() => document.querySelectorAll("d-cite").forEach((c) => { setUp(c); split(c); }), 0));
    document.addEventListener("click", (e) => { if (card && !card.contains(e.target)) hide(); });
  });
})();
