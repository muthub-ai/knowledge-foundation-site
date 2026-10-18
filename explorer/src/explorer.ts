/**
 * Knowledge graph explorer: Sigma.js 4 (WebGL) over graphology, reading /graph.json from the knowledge release.
 *
 * Design (see docs/explorer-design.md): a "constellation" of notes coloured by their theme, themes as labelled hubs,
 * node shape by kind, soft curved connections tinted by their source. Motion is used to explain, not to decorate:
 * the graph assembles itself from its themes on load, hover fades the rest of the map away and lights the
 * neighbourhood (directed arrows appear only then), a selected note gets a slow pulsing halo, the camera glides to
 * what you pick, and a theme in the legend focuses its cluster. prefers-reduced-motion turns every animation off.
 *
 * Positions come precomputed from the knowledge repository (a seeded layout), so the picture is stable between builds.
 * Keyboard: "/" searches, Escape closes. A list view gives a table for keyboard and screen-reader use, and
 * /graph/?node=<id> opens on one note (every note page links here that way).
 */
import Graph from "graphology";
import Sigma, { DEFAULT_STYLES } from "sigma";
import { extremityArrow, layerFill, layerPlain, pathCurved, pathLine, sdfCircle, sdfDiamond, sdfSquare, sdfTriangle } from "sigma/rendering";

type GNode = {
  id: string; type: string; label: string; url: string; summary: string; trust: string; status: string;
  updated: string; tags: string[]; degree: number; community: number; x: number; y: number; canonical?: string;
  verified?: string; stale_after?: string; source_date?: string; entityKind?: string; aliases?: string[];
};
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// "2026-03-07" -> "Mar 7, 2026"; anything else is passed through.
function humanDay(d?: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(d || "");
  return m ? `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}` : d || "";
}
// Where a reader should land: the essay on muthub.org when the note summarises one, else the wiki page.
const primaryUrl = (n: GNode) => n.canonical || n.url;
type GEdge = { source: string; target: string; type: string; origin: string; weight?: number; evidence?: string };

// Theme colours: one hue per theme, tuned for each background (light: deep and inky; dark: luminous).
const THEME_LIGHT = ["#0b6b7a", "#3d4fc4", "#b5650f", "#b2306b", "#2d7a4c", "#6a4c9c", "#7a6400"];
const THEME_DARK = ["#5fd3e0", "#93a2ff", "#f5b360", "#f584b8", "#74d6a0", "#c3a6f5", "#e6cf5c"];
const SHAPE: Record<string, string> = { Theme: "circle", Essay: "circle", Initiative: "diamond", Playbook: "square", Source: "triangle", Entity: "circle" };
// Entities are the semantic layer (Semantica, ids "ext:..."): grey, small, hidden until the reader turns them on.
const DEFAULT_OFF_TYPES = new Set(["Source", "Entity"]);
const NOT_NOTES = new Set(["Source", "Theme", "Entity"]);
const isNote = (n: GNode) => !NOT_NOTES.has(n.type);
// A node type and the only edges that reach it are shown and hidden together.
const TYPE_ORIGIN: Record<string, string> = { Source: "source", Entity: "extracted" };
const DEFAULT_OFF_ORIGINS = new Set(["source", "extracted"]);
const ORIGIN_LABEL: Record<string, string> = {
  frontmatter: "Declared relations", link: "Links in text", folder: "Theme membership", source: "Sources", extracted: "Extracted (machine)",
};
const EDGE_ALPHA: Record<string, number> = { frontmatter: 0.85, link: 0.5, folder: 0.16, source: 0.32, extracted: 0.3 };

const REDUCE = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
const T = (ms: number) => (REDUCE ? 0 : ms);

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const container = $("g-canvas"), panel = $("g-panel"), statusEl = $("g-status"), listEl = $("g-list");
const viewBtn = $<HTMLButtonElement>("g-view"), search = $<HTMLInputElement>("g-search"), suggest = $("g-suggest"), legend = $("g-legend");
const emptyEl = $("g-empty"), announcer = $("g-announce"), toolbar = document.querySelector<HTMLElement>(".toolbar")!;

const esc = (s: unknown) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const isExternal = (url: string) => /^https?:\/\//.test(url);
const trustLabel = (t: string) => (t === "human-reviewed" ? "Reviewed by Muthu" : t === "machine-confirmed" ? "Machine-confirmed" : "Not yet reviewed");
const cssVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const isDark = () => document.documentElement.getAttribute("saved-theme") === "dark";
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t: number) => { const c = 1.6; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function hexA(hex: string, a: number) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

let offTypes = new Set(DEFAULT_OFF_TYPES), offOrigins = new Set(DEFAULT_OFF_ORIGINS);
let selected: string | null = null, hovered: string | null = null, focusTheme: string | null = null;
const graph = new Graph({ multi: true, type: "directed", allowSelfLoops: false });
let renderer: any = null;
const byId: Record<string, GNode> = {};
const themeOf: Record<string, string> = {}; // node id -> theme id
let themes: string[] = [];

// -- tweens: a tiny rAF scheduler; every animation goes through it so reduced motion is one switch ----------------
type Tween = { from: number; to: number; dur: number; start: number; ease: (t: number) => number; set: (v: number) => void; done?: () => void };
const tweens = new Map<string, Tween>();
let raf = 0;
function tween(key: string, from: number, to: number, dur: number, set: (v: number) => void, ease = easeOut, done?: () => void) {
  if (dur <= 0) { set(to); tweens.delete(key); done?.(); return; }
  tweens.set(key, { from, to, dur, start: performance.now(), ease, set, done });
  if (!raf) raf = requestAnimationFrame(tick);
}
function tick(now: number) {
  raf = 0;
  for (const [key, tw] of tweens) {
    const p = Math.min(1, (now - tw.start) / tw.dur);
    tw.set(tw.from + (tw.to - tw.from) * tw.ease(p));
    if (p >= 1) { tweens.delete(key); tw.done?.(); }
  }
  // The selected note's halo pulses while the panel is open and the tab is visible.
  const pulsing = !!selected && !REDUCE && !document.hidden;
  if (pulsing) renderer?.setGraphState({ pulse: (Math.sin(now / 520) + 1) / 2 });
  renderer?.refresh({ skipIndexation: true });
  if (tweens.size || pulsing) raf = requestAnimationFrame(tick);
}
const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };

// -- colour ----------------------------------------------------------------------------------------------------------
function paint() {
  const pal = isDark() ? THEME_DARK : THEME_LIGHT;
  const ink = cssVar("--ink"), muted = cssVar("--muted"), page = cssVar("--page");
  const colourOf = (id: string) => {
    const t = byId[id]?.type === "Theme" ? id : themeOf[id];
    return t ? pal[themes.indexOf(t) % pal.length] : muted;
  };
  graph.updateEachNodeAttributes((n, a: any) => ({
    ...a, color: a.kind === "Source" || a.kind === "Entity" ? muted : colourOf(n), labelColor: ink, page,
    halo: hexA(colourOf(n).startsWith("#") ? colourOf(n) : "#888888", isDark() ? 0.75 : 0.55),
    ring: hexA(colourOf(n).startsWith("#") ? colourOf(n) : "#888888", isDark() ? 0.35 : 0.22),
    pill: hexA(page.startsWith("#") ? page : "#ffffff", isDark() ? 0.82 : 0.9), pillLine: isDark() ? "rgba(255,255,255,0.10)" : "rgba(21,23,28,0.08)",
  }));
  graph.updateEachEdgeAttributes((_e, a: any, s) => {
    const c = a.origin === "extracted" ? muted : colourOf(s); // machine-found edges stay grey, like their entities
    return { ...a, color: c.startsWith("#") ? hexA(c, EDGE_ALPHA[a.origin] ?? 0.4) : c, activeColor: c };
  });
  document.querySelectorAll<HTMLElement>("[data-theme-dot]").forEach((el) => (el.style.background = colourOf(el.dataset.themeDot!)));
  renderer?.refresh();
}

// Node sizes are in screen pixels; small screens get smaller nodes so clusters stay readable.
const SIZE_SCALE = Math.min(1, Math.max(0.6, Math.min(innerWidth, innerHeight) / 850));
function nodeSize(n: GNode) {
  return SIZE_SCALE * (n.type === "Theme" ? 16 + Math.sqrt(n.degree || 0) * 2 : (n.type === "Source" || n.type === "Entity" ? 4 : 6) + Math.sqrt(n.degree || 0) * 2.1);
}

/**
 * The constellation layout (deterministic, computed here rather than taken from graph.json's force layout, which piles
 * the clusters on top of each other): theme hubs sit on a ring, ordered so strongly linked themes are neighbours; each
 * theme's notes orbit their hub, and each note is turned toward the themes it links to, so cross-theme links are
 * short and the picture reads like a designed map. Sources sit just outside their note.
 */
function layout(nodes: GNode[], edges: GEdge[]) {
  const pos: Record<string, { x: number; y: number; side: "left" | "right" }> = {};
  const R = 100;
  const members: Record<string, string[]> = {};
  themes.forEach((t) => (members[t] = []));
  nodes.forEach((n) => { if (isNote(n) && themeOf[n.id]) members[themeOf[n.id]].push(n.id); });
  // Theme ring order: greedy walk from the largest theme to its most linked unplaced neighbour.
  const w: Record<string, number> = {};
  const key = (a: string, b: string) => (a < b ? a + "|" + b : b + "|" + a);
  edges.forEach((e) => {
    const a = themeOf[e.source], b = themeOf[e.target];
    if (a && b && a !== b && e.origin !== "source" && e.origin !== "folder") w[key(a, b)] = (w[key(a, b)] || 0) + 1;
  });
  const ring = themes.length ? [themes[0]] : [];
  while (ring.length < themes.length) {
    const last = ring[ring.length - 1];
    const next = themes.filter((t) => !ring.includes(t)).sort((a, b) => (w[key(last, b)] || 0) - (w[key(last, a)] || 0))[0];
    ring.push(next);
  }
  const hub: Record<string, { x: number; y: number }> = {};
  ring.forEach((t, i) => {
    const a = -Math.PI / 2 + (i / Math.max(1, ring.length)) * Math.PI * 2;
    hub[t] = { x: Math.cos(a) * R, y: Math.sin(a) * R };
    pos[t] = { ...hub[t], side: Math.cos(a) < 0 ? "left" : "right" };
  });
  const neighbours: Record<string, string[]> = {};
  edges.forEach((e) => {
    if (e.origin === "folder" || e.origin === "source") return;
    (neighbours[e.source] ||= []).push(e.target);
    (neighbours[e.target] ||= []).push(e.source);
  });
  const TAU = Math.PI * 2;
  for (const t of ring) {
    const h = hub[t];
    const ids = members[t].sort((a, b) => (byId[b].degree || 0) - (byId[a].degree || 0) || a.localeCompare(b));
    // Preferred direction: toward the hubs of linked notes in other themes, else away from the centre.
    const pref = (id: string) => {
      let vx = 0, vy = 0;
      for (const nb of neighbours[id] || []) {
        const ot = themeOf[nb];
        if (ot && ot !== t && hub[ot]) { vx += hub[ot].x - h.x; vy += hub[ot].y - h.y; }
      }
      if (!vx && !vy) { vx = h.x; vy = h.y; }
      return Math.atan2(vy, vx);
    };
    // Slots run round the hub except for a gap straight below it, where the theme's name sits (+y is down on screen).
    const GAP = 0.62, A0 = Math.PI / 2 + GAP, ARC = TAU - 2 * GAP;
    const r1 = Math.max(30, 19 + 1.15 * ids.length), cap = Math.max(6, Math.floor((ARC * r1) / 7.5));
    const along = (p: number) => (((p - A0) % TAU) + TAU) % TAU; // a note's preferred angle, measured along the arc
    for (let ringNo = 0, start = 0; start < ids.length; ringNo++, start += cap) {
      // Ordered by preferred direction, so each note lands near the side facing the themes it links to.
      const chunk = ids.slice(start, start + cap).map((id) => ({ id, p: along(pref(id)) })).sort((a, b) => a.p - b.p);
      const r = r1 + ringNo * 9, step = ARC / chunk.length;
      chunk.forEach((c, i) => {
        const a = A0 + (i + 0.5) * step;
        pos[c.id] = { x: h.x + Math.cos(a) * r, y: h.y + Math.sin(a) * r, side: Math.cos(a) < 0 ? "left" : "right" };
      });
    }
  }
  // Notes without a theme: a small ring at the centre.
  const loose = nodes.filter((n) => isNote(n) && !pos[n.id]);
  loose.forEach((n, i) => {
    const a = (i / Math.max(1, loose.length)) * TAU;
    pos[n.id] = { x: Math.cos(a) * 18, y: Math.sin(a) * 18, side: Math.cos(a) < 0 ? "left" : "right" };
  });
  // Sources: just outside the first note that draws on them, fanned a little.
  const fan: Record<string, number> = {};
  edges.filter((e) => e.origin === "source").forEach((e) => {
    const [note, src] = byId[e.target].type === "Source" ? [e.source, e.target] : [e.target, e.source];
    if (pos[src] || !pos[note]) return;
    const t = themeOf[note], c = t ? hub[t] : { x: 0, y: 0 };
    const a = Math.atan2(pos[note].y - c.y, pos[note].x - c.x) + ((fan[note] = (fan[note] || 0) + 1) - 1) * 0.35;
    pos[src] = { x: pos[note].x + Math.cos(a) * 9, y: pos[note].y + Math.sin(a) * 9, side: Math.cos(a) < 0 ? "left" : "right" };
  });
  // Entities: at the centre of the notes that mention them, pulled a little toward the middle of the map (an entity
  // shared across themes lands between them), with a small deterministic offset so entities on one note do not stack.
  const mentions: Record<string, string[]> = {};
  edges.filter((e) => e.origin === "extracted").forEach((e) => {
    const [ent, note] = byId[e.target].type === "Entity" ? [e.target, e.source] : [e.source, e.target];
    if (pos[note]) (mentions[ent] ||= []).push(note);
  });
  nodes.filter((n) => n.type === "Entity").forEach((n, i) => {
    const ns = mentions[n.id] || [];
    if (!ns.length) return;
    const cx = ns.reduce((a, id) => a + pos[id].x, 0) / ns.length, cy = ns.reduce((a, id) => a + pos[id].y, 0) / ns.length;
    const pull = ns.length > 1 ? 0.8 : 1.08, a = i * 2.399963, r = 5 + (i % 4) * 2.5; // golden-angle spread
    const x = cx * pull + Math.cos(a) * r, y = cy * pull + Math.sin(a) * r;
    pos[n.id] = { x, y, side: x < 0 ? "left" : "right" };
  });
  nodes.forEach((n, i) => { if (!pos[n.id]) pos[n.id] = { x: Math.cos(i) * 140, y: Math.sin(i) * 140, side: "right" }; });
  return pos;
}

// -- focus: hovered or selected node and its neighbours, or a whole theme -------------------------------------------
function activeSet(): Set<string> | null {
  const focus = hovered || selected;
  const shown = (n: string) => !renderer.getNodeState(n).isHidden;
  if (focus) {
    const s = new Set([focus]);
    graph.forEachNeighbor(focus, (nb) => { if (shown(nb)) s.add(nb); });
    return s;
  }
  if (focusTheme) {
    const s = new Set([focusTheme]);
    graph.forEachNode((n) => { if (themeOf[n] === focusTheme && shown(n)) s.add(n); });
    return s;
  }
  return null;
}

let lastHasActive = false;
function applyFocus() {
  const active = activeSet();
  const focus = hovered || selected;
  graph.forEachNode((n) => renderer.setNodeState(n, { isActive: !!active?.has(n), isHighlighted: n === selected }));
  graph.forEachEdge((e, _a, s, t) => renderer.setEdgeState(e, {
    isActive: !!active && (focus ? s === focus || t === focus : active.has(s) && active.has(t)),
  }));
  const has = !!active;
  if (has) {
    renderer.setGraphState({ hasActive: true });
    if (!lastHasActive) tween("fade", renderer.getGraphState().fade || 0, 1, T(180), (v) => renderer.setGraphState({ fade: v }));
  } else if (lastHasActive) {
    tween("fade", renderer.getGraphState().fade ?? 1, 0, T(220), (v) => renderer.setGraphState({ fade: v }), easeOut,
      () => { if (!activeSet()) renderer.setGraphState({ hasActive: false }); });
  }
  lastHasActive = has;
  legend.querySelectorAll<HTMLButtonElement>("[data-theme]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.theme === focusTheme)));
  renderer.refresh({ skipIndexation: true });
  kick();
}

// -- filters ---------------------------------------------------------------------------------------------------------
function applyFilters() {
  graph.forEachNode((n, a: any) => renderer.setNodeState(n, { isHidden: offTypes.has(a.kind) }));
  graph.forEachEdge((e, a: any, s, t) => {
    const hidden = offOrigins.has(a.origin) || offTypes.has(graph.getNodeAttribute(s, "kind")) || offTypes.has(graph.getNodeAttribute(t, "kind"));
    renderer.setEdgeState(e, { isHidden: hidden });
  });
  renderer.refresh({ skipIndexation: true });
  document.querySelectorAll<HTMLInputElement>("#f-types input").forEach((i) => (i.checked = !offTypes.has(i.value)));
  document.querySelectorAll<HTMLInputElement>("#f-origins input").forEach((i) => (i.checked = !offOrigins.has(i.value)));
  updateStatus();
  renderList();
}

function visibleNodes() { return graph.filterNodes((n) => !renderer.getNodeState(n).isHidden); }
function visibleEdges() { return graph.filterEdges((e) => !renderer.getEdgeState(e).isHidden); }

function updateStatus(message?: string) {
  if (!renderer) { statusEl.textContent = message ?? ""; return; }
  const n = visibleNodes().length;
  statusEl.textContent = message ?? `${n} nodes · ${visibleEdges().length} connections shown`;
  emptyEl.hidden = n > 0 || !listEl.hidden;
}
const announce = (text: string) => { announcer.textContent = text; };
// Colours set through the CSSOM rather than style="" attributes, so /graph/'s CSP needs no 'unsafe-inline'.
function applyColours(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("[data-bg]").forEach((el) => (el.style.background = el.dataset.bg!));
  root.querySelectorAll<HTMLElement>("[data-c]").forEach((el) => el.style.setProperty("--c", el.dataset.c!));
}

function buildFilters(nodes: GNode[], edges: GEdge[]) {
  const types: Record<string, number> = {}, origins: Record<string, number> = {};
  nodes.forEach((n) => (types[n.type] = (types[n.type] || 0) + 1));
  edges.forEach((e) => (origins[e.origin] = (origins[e.origin] || 0) + 1));
  $("f-types").insertAdjacentHTML("beforeend", Object.keys(types).sort().map((t) =>
    `<label><input type="checkbox" value="${esc(t)}"> <span class="shape shape-${esc(SHAPE[t] || "circle")}" aria-hidden="true"></span>${esc(t)} <span class="muted">${types[t]}</span></label>`).join(""));
  $("f-origins").insertAdjacentHTML("beforeend", Object.keys(ORIGIN_LABEL).filter((o) => origins[o]).map((o) =>
    `<label><input type="checkbox" value="${esc(o)}"> ${esc(ORIGIN_LABEL[o])} <span class="muted">${origins[o]}</span></label>`).join(""));
  document.querySelectorAll<HTMLInputElement>("#f-types input").forEach((i) => i.addEventListener("change", () => {
    i.checked ? offTypes.delete(i.value) : offTypes.add(i.value);
    // Sources and entities only connect through their own edges: show and hide them together.
    const o = TYPE_ORIGIN[i.value];
    if (o) { i.checked ? offOrigins.delete(o) : offOrigins.add(o); syncFilterBoxes(); }
    applyFilters();
    applyFocus();
  }));
  document.querySelectorAll<HTMLInputElement>("#f-origins input").forEach((i) => i.addEventListener("change", () => {
    i.checked ? offOrigins.delete(i.value) : offOrigins.add(i.value);
    const t = Object.keys(TYPE_ORIGIN).find((k) => TYPE_ORIGIN[k] === i.value);
    if (t) { i.checked ? offTypes.delete(t) : offTypes.add(t); syncFilterBoxes(); }
    applyFilters();
    applyFocus();
  }));
}
function syncFilterBoxes() {
  document.querySelectorAll<HTMLInputElement>("#f-types input").forEach((i) => (i.checked = !offTypes.has(i.value)));
  document.querySelectorAll<HTMLInputElement>("#f-origins input").forEach((i) => (i.checked = !offOrigins.has(i.value)));
}

// -- legend: themes (click to focus a cluster) and shapes ------------------------------------------------------------
function buildLegend() {
  const count = (t: string) => Object.keys(themeOf).filter((n) => themeOf[n] === t && byId[n].type !== "Source").length;
  legend.innerHTML =
    `<p class="legend-title">Themes</p><ul>` +
    themes.map((t) => `<li><button type="button" data-theme="${esc(t)}" aria-pressed="false"><span class="dot" data-theme-dot="${esc(t)}"></span>${esc(byId[t].label)}<span class="muted">${count(t)}</span></button></li>`).join("") +
    `</ul><p class="legend-shapes" aria-label="Shapes"><span><span class="shape shape-circle"></span>Essay</span><span><span class="shape shape-diamond"></span>Initiative</span><span><span class="shape shape-square"></span>Playbook</span></p>`;
  legend.hidden = false;
  legend.querySelectorAll<HTMLButtonElement>("[data-theme]").forEach((b) => b.addEventListener("click", () => {
    const t = b.dataset.theme!;
    if (focusTheme === t) { clearThemeFocus(); return; }
    focusTheme = t;
    if (selected) closePanel(false);
    applyFocus();
    fitNodes([...(activeSet() || [])]);
    announce(`Showing the ${byId[t].label} theme. Escape to leave.`);
    updateStatus(`${byId[t].label} · ${(activeSet()?.size ?? 1) - 1} notes · Esc to leave`);
  }));
}
function clearThemeFocus() {
  if (!focusTheme) return;
  focusTheme = null;
  applyFocus();
  updateStatus();
  fitAll();
}

// -- camera ----------------------------------------------------------------------------------------------------------
function fitAll() { renderer.getCamera().animate({ x: 0.5, y: 0.5, ratio: 1, angle: 0 }, { duration: T(650), easing: "cubicInOut" }); }
// The phone layout (panel as a bottom sheet) is a page-width decision: in the hero the frame is narrow on purpose.
const NARROW = () => window.innerWidth <= 760;
/**
 * Frame some nodes, leaving room for the chrome: on wide screens the legend (left) and the panel (right) take space,
 * so the camera shifts to centre the nodes between them; on narrow screens the panel is a bottom sheet, so the nodes
 * go in the upper part. With `centre`, that node is kept at the centre and the zoom still fits the others.
 */
// Width in screen pixels that a node's label (with its pill and the gap from the node) takes on each side of the node.
const labelCtx = document.createElement("canvas").getContext("2d");
function labelReach(id: string): { left: number; right: number } {
  const a = graph.getNodeAttributes(id);
  const text = String(a.label ?? "");
  if (!labelCtx || !text) return { left: 0, right: 0 };
  const theme = a.kind === "Theme";
  labelCtx.font = theme ? `${Math.round(15 * Math.max(0.8, SIZE_SCALE))}px Newsreader, Georgia, serif` : "12.5px Instrument Sans, system-ui, sans-serif";
  const w = labelCtx.measureText(text).width + 12 + (Number(a.size) || 6);
  return a.labelSide === "left" ? { left: w, right: 0 } : a.labelSide === "right" ? { left: 0, right: w } : { left: w / 2, right: w / 2 };
}
/**
 * Frame some nodes, leaving room for the chrome: on wide screens the legend (left) and the panel (right) take space,
 * so the camera shifts to centre the nodes between them; on narrow screens the panel is a bottom sheet, so the nodes
 * go in the upper part. With `centre`, the zoom fits that node's neighbourhood around it. Names count, not just dots:
 * the frame widens until every node in `named` (default: all of them) fits on screen with its label.
 */
function fitNodes(ids: string[], opts: { maxRatio?: number; besidePanel?: boolean; centre?: string; named?: string[] } = {}) {
  const pts = ids.map((id) => renderer.getNodeDisplayData(id)).filter(Boolean);
  if (!pts.length) return;
  const xs = pts.map((p: any) => p.x), ys = pts.map((p: any) => p.y);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const c = opts.centre ? renderer.getNodeDisplayData(opts.centre) : null;
  const cy = c ? c.y : (y0 + y1) / 2;
  const span = c ? 2 * Math.max(c.x - x0, x1 - c.x, cy - y0, y1 - cy) : Math.max(x1 - x0, y1 - y0);
  const w = container.clientWidth || 1, h = container.clientHeight || 1;
  // Screen pixels to camera units: sigma fits the graph to the smaller side minus the stage padding (measured: on a
  // 412 x 774 phone, 0.1 camera units move a node 31.6 px at ratio 1). k = camera units per pixel at a ratio.
  const D = Math.max(1, Math.min(w, h) - 2 * 48);
  const wide = !NARROW();
  const panelPx = wide && opts.besidePanel && !panel.hidden ? panel.offsetWidth + 28 : 0;
  const legendPx = 0; // the theme chips are a strip along the top (roomY below), not a column
  const room = Math.max(120, w - panelPx - legendPx - 32);
  // Names stick out past their dots. Every named node (the ones whose labels show in this view) must fit with its name
  // in the width left between the chrome: zoom out step by step until they do, then centre that box.
  const named = (opts.named ?? ids).map((id) => ({ d: renderer.getNodeDisplayData(id), r: labelReach(id) })).filter((n) => n.d);
  const box = (k: number) => [Math.min(x0, ...named.map((n) => n.d!.x - n.r.left * k)), Math.max(x1, ...named.map((n) => n.d!.x + n.r.right * k))];
  // A selected note always zooms in (maxRatio); a theme may zoom out to 1.2 so its outer names fit.
  const limit = opts.maxRatio ?? 1.2;
  let ratio = Math.min(limit, Math.max(0.25, span * 1.25));
  // Vertically, the legend chips take the top of the frame; the rest must hold the selection's neighbourhood.
  const roomY = Math.max(120, h - (legend.hidden || !legend.offsetParent ? 0 : legend.offsetHeight + 28) - 56);
  for (let i = 0; i < 24 && ratio < limit; i++) {
    const [l, r] = box(ratio / D);
    if (r - l <= (room * ratio) / D && 2 * Math.max(cy - y0, y1 - cy) <= (roomY * ratio) / D) break;
    ratio = Math.min(limit, ratio * 1.12);
  }
  const k = ratio / D, toCam = (px: number) => px * k;
  const [bl, br] = box(k);
  let cx = (bl + br) / 2;
  // When not everything fits, the selected note's own name still must: slide the frame until it is on screen.
  if (c) {
    const own = labelReach(opts.centre!), half = (room * k) / 2;
    const lower = c.x + own.right * k - half + toCam(8), upper = c.x - own.left * k + half - toCam(8);
    // A name longer than the room beside the panel: keep the side the name is on fully in view (the dot may then sit
    // at the room's edge); a name centred under its dot can only be centred.
    cx = lower <= upper ? Math.min(Math.max(cx, lower), upper) : own.left > own.right ? upper : own.right > own.left ? lower : c.x;
  }
  let dx = 0, dy = 0;
  if (wide) { dx += toCam(panelPx / 2) - toCam(legendPx / 2); dy += toCam((h - roomY) / 2 - 28); } // a higher camera sits the nodes below the chips
  else if (opts.besidePanel && !panel.hidden) dy -= toCam(panel.offsetHeight / 2); // a lower camera lifts the nodes above the bottom sheet
  renderer.getCamera().animate({ x: cx + dx, y: cy + dy, ratio }, { duration: T(700), easing: "cubicInOut" });
}

// -- side panel ------------------------------------------------------------------------------------------------------
const REL_LABEL: Record<string, string> = {
  links_to: "", builds_on: "builds on", refines: "refines", applies: "applies", contradicts: "contradicts", cites: "cites",
  part_of: "part of", supersedes: "supersedes", answers: "answers", about: "about", authored_by: "authored by", mentions: "mentions",
};
function relLabel(r: string) { return REL_LABEL[r] ?? String(r).replace(/_/g, " "); }
// Connections a reader would count: links in the text and declared relations, not theme membership or sources.
function mentionCount(id: string) {
  let n = 0;
  graph.forEachEdge(id, (_e, a: any) => { if (a.origin === "extracted") n++; });
  return n;
}
function linkCount(id: string) {
  let n = 0;
  graph.forEachEdge(id, (_e, a: any) => { if (a.origin === "link" || a.origin === "frontmatter") n++; });
  return n;
}
function openPanel(id: string) {
  selected = id;
  focusTheme = null;
  const n = byId[id];
  const colour = graph.getNodeAttribute(id, "color");
  // One list per kind of connection; a note linked both ways appears once with ⇄. Theme membership is in the kicker.
  const GROUP: Record<string, string> = { link: "Linked notes", frontmatter: "Linked notes", source: n.type === "Source" ? "Notes drawn from it" : "Sources", folder: n.type === "Theme" ? "Notes in this theme" : "", extracted: n.type === "Entity" ? "Mentioned in" : "Mentions (machine-extracted)" };
  const SUGGESTED = "Suggested relations (machine, not reviewed)";
  const rows: Record<string, Map<string, { out: boolean; inn: boolean; rel: Set<string> }>> = {};
  const add = (a: any, other: string, out: boolean, e: string) => {
    const g = a.origin === "extracted" && a.rel !== "mentions" ? SUGGESTED : GROUP[a.origin] ?? "Other connections";
    if (!g || renderer.getEdgeState(e).isHidden) return;
    const m = (rows[g] ||= new Map());
    const r = m.get(other) || { out: false, inn: false, rel: new Set<string>() };
    out ? (r.out = true) : (r.inn = true);
    if (relLabel(a.rel)) r.rel.add(g === SUGGESTED ? (out ? relLabel(a.rel) : `${relLabel(a.rel)} (from it)`) : relLabel(a.rel));
    if (a.evidence && g === SUGGESTED) (r as any).ev = a.evidence;
    m.set(other, r);
  };
  graph.forEachOutEdge(id, (e, a: any, _s, t) => add(a, t, true, e));
  graph.forEachInEdge(id, (e, a: any, s) => add(a, s, false, e));
  const ORDER = ["Notes in this theme", "Linked notes", SUGGESTED, "Sources", "Notes drawn from it", "Mentioned in", "Mentions (machine-extracted)", "Other connections"];
  const glyph = (r: { out: boolean; inn: boolean }) => (r.out && r.inn ? "⇄" : r.out ? "→" : "←");
  const glyphTitle = (r: { out: boolean; inn: boolean }) => (r.out && r.inn ? "Linked both ways" : r.out ? "This note links to it" : "It links to this note");
  const lists = ORDER.filter((g) => rows[g]?.size).map((g) => {
    const items = [...rows[g]].sort((a, b) => byId[a[0]].label.localeCompare(byId[b[0]].label)).map(([other, r]) =>
      `<li><a href="#" data-id="${esc(other)}"${(r as any).ev ? ` title="${esc(`“${(r as any).ev}”`)}"` : ""}><span class="dot" data-bg="${esc(graph.getNodeAttribute(other, "color"))}"></span><span class="t">${esc(byId[other].label)}</span>${r.rel.size ? `<span class="rel muted">${esc([...r.rel].join(", "))}</span>` : ""}` +
      (g === "Linked notes" ? `<span class="dir" title="${glyphTitle(r)}" aria-label="${glyphTitle(r)}">${glyph(r)}</span>` : "") + `</a></li>`);
    return `<h3>${esc(g)} <span class="muted">${items.length}</span></h3><ul>${items.join("")}</ul>`;
  });
  const meta = isNote(n)
    ? `<dl class="prov">` +
      `<div><dt>Review</dt><dd class="${n.trust === "human-reviewed" ? "ok" : ""}">${esc(n.verified ? `Reviewed ${humanDay(n.verified)}` : trustLabel(n.trust))}</dd></div>` +
      `<div><dt>Connections</dt><dd>${linkCount(id)}</dd></div>` +
      (n.source_date ? `<div><dt>Source</dt><dd>${esc(n.canonical ? "muthub.org · " : "")}${esc(humanDay(n.source_date))}</dd></div>` : "") +
      (n.stale_after ? `<div><dt>Re-check by</dt><dd>${esc(humanDay(n.stale_after))}</dd></div>` : "") +
      `</dl>`
    : "";
  panel.innerHTML =
    `<div class="accent" data-bg="${esc(colour)}"></div>` +
    `<button class="close" type="button" aria-label="Close">×</button>` +
    // The panel clips and this inner body scrolls: a scrolling element laid over the WebGL canvas kept the canvas from
    // repainting in Chromium (seen on the phone bottom sheet), an inner scroller does not.
    `<div class="g-panel-body">` +
    `<p class="kind"><span class="shape shape-${esc(SHAPE[n.type] || "circle")}" data-c="${esc(colour)}"></span>${esc(n.type)}${themeOf[id] ? ` · ${esc(byId[themeOf[id]].label)}` : ""}</p>` +
    `<h2 tabindex="-1">${esc(n.label)}</h2>` + (n.summary ? `<p class="summary">${esc(n.summary)}</p>` : "") + meta +
    (n.type === "Entity" ? "" : n.canonical
      ? `<p class="actions"><a class="open" href="${esc(n.url)}">Open the note</a><a class="wiki" href="${esc(n.canonical)}">Read the essay</a></p>`
      : `<p class="actions"><a class="open" href="${esc(n.url)}">${isExternal(n.url) ? "Open source" : n.type === "Theme" ? "Open theme" : "Open the note"}</a></p>`) +
    lists.join("") + `</div>`;
  applyColours(panel);
  panel.hidden = false;
  panel.classList.remove("in"); void panel.offsetWidth; panel.classList.add("in");
  announce(`Selected ${n.type}: ${n.label}`);
  const url = new URL(location.href);
  url.searchParams.set("node", id);
  history.replaceState(null, "", url);
  applyFocus();
}

function closePanel(refocus = true) {
  selected = null;
  panel.hidden = true;
  const url = new URL(location.href);
  url.searchParams.delete("node");
  history.replaceState(null, "", url);
  if (refocus) applyFocus();
}

function focusNode(id: string, opts: { moveFocus?: boolean } = {}) {
  const kind = graph.getNodeAttribute(id, "kind");
  if (offTypes.has(kind)) { offTypes.delete(kind); if (TYPE_ORIGIN[kind]) offOrigins.delete(TYPE_ORIGIN[kind]); syncFilterBoxes(); applyFilters(); }
  openPanel(id);
  // Centre the note and zoom to show its neighbourhood (never wider than 85% of the map, so it always zooms in). A
  // note with few neighbours also shows its theme, so the reader keeps context.
  const near = [...(activeSet() || [id])];
  const t = themeOf[id];
  const frame = near.length < 4 && t ? [...near, t, ...graph.filterNodes((n) => themeOf[n] === t && !renderer.getNodeState(n).isHidden)] : near;
  fitNodes(frame, { maxRatio: near.length < 4 ? 0.6 : 0.85, besidePanel: true, centre: id, named: near });
  if (opts.moveFocus) panel.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
}

panel.addEventListener("click", (ev) => {
  const a = (ev.target as HTMLElement).closest("[data-id]");
  if (a) { ev.preventDefault(); focusNode(a.getAttribute("data-id")!); }
  else if ((ev.target as HTMLElement).closest(".close")) closePanel();
});

// -- search with suggestions -----------------------------------------------------------------------------------------
function matches(q: string): GNode[] {
  q = q.trim().toLowerCase();
  if (!q) return [];
  const all = Object.values(byId);
  const exact = (n: GNode) => n.label.toLowerCase() === q || (n.aliases || []).some((a) => a.toLowerCase() === q);
  const rank = (n: GNode) => (exact(n) ? 0 : n.label.toLowerCase().startsWith(q) ? 1 : 2) + (n.type === "Source" ? 3 : 0);
  const hit = (n: GNode) => n.label.toLowerCase().includes(q) || (n.aliases || []).some((a) => a.toLowerCase().includes(q));
  return all.filter(hit).sort((a, b) => rank(a) - rank(b) || a.label.localeCompare(b.label));
}
function findByLabel(q: string): string | null { return matches(q)[0]?.id ?? null; }
let pick = -1;
function renderSuggest() {
  const hits = matches(search.value).slice(0, 7);
  pick = -1;
  search.removeAttribute("aria-activedescendant");
  if (!hits.length || document.activeElement !== search) { suggest.hidden = true; search.setAttribute("aria-expanded", "false"); return; }
  suggest.innerHTML = hits.map((n, i) => `<li role="option" id="g-opt-${i}" data-id="${esc(n.id)}"><span class="dot" data-bg="${esc(graph.getNodeAttribute(n.id, "color"))}"></span>${esc(n.label)}<span class="muted">${esc(n.type)}</span></li>`).join("");
  applyColours(suggest);
  suggest.hidden = false;
  search.setAttribute("aria-expanded", "true");
}
function hideSuggest() {
  suggest.hidden = true;
  search.setAttribute("aria-expanded", "false");
  search.removeAttribute("aria-activedescendant");
}
function movePick(d: number) {
  const items = [...suggest.querySelectorAll("li")];
  if (!items.length) return;
  pick = (pick + d + items.length) % items.length;
  items.forEach((li, i) => { li.classList.toggle("on", i === pick); li.setAttribute("aria-selected", String(i === pick)); });
  search.setAttribute("aria-activedescendant", items[pick].id);
}
function runSearch() {
  const chosen = pick >= 0 ? suggest.querySelectorAll("li")[pick]?.getAttribute("data-id") : findByLabel(search.value);
  hideSuggest();
  if (chosen) { updateStatus(); focusNode(chosen, { moveFocus: true }); } else updateStatus(`No note matches “${search.value}”.`);
}
search.addEventListener("input", renderSuggest);
search.addEventListener("focus", renderSuggest);
search.addEventListener("blur", () => setTimeout(hideSuggest, 120));
search.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") { ev.preventDefault(); runSearch(); }
  else if (ev.key === "ArrowDown") { ev.preventDefault(); movePick(1); }
  else if (ev.key === "ArrowUp") { ev.preventDefault(); movePick(-1); }
  else if (ev.key === "Escape" && !suggest.hidden) { hideSuggest(); ev.stopPropagation(); }
});
suggest.addEventListener("mousedown", (ev) => {
  const li = (ev.target as HTMLElement).closest("li");
  if (li) { ev.preventDefault(); hideSuggest(); search.value = byId[li.dataset.id!].label; focusNode(li.dataset.id!); }
});

// -- list view -------------------------------------------------------------------------------------------------------
function renderList() {
  if (listEl.hidden) return;
  const shown = new Set(visibleNodes());
  const review = (n: GNode) => (n.verified ? humanDay(n.verified) : n.trust === "human-reviewed" ? "Reviewed" : "Not yet");
  const row = (n: GNode) =>
    `<tr><td><a href="${esc(n.url)}">${esc(n.label)}</a></td><td class="muted">${esc(n.type)}</td><td class="muted">${esc(humanDay(n.source_date) || "")}</td>` +
    `<td class="muted">${esc(review(n))}</td><td class="muted">${esc(humanDay(n.stale_after) || "")}</td><td class="n">${linkCount(n.id)}</td></tr>`;
  const groups = themes.filter((t) => shown.has(t) || Object.keys(themeOf).some((n) => themeOf[n] === t && shown.has(n))).map((t) => {
    const members = Object.keys(themeOf).filter((n) => themeOf[n] === t && shown.has(n) && isNote(byId[n]))
      .sort((a, b) => linkCount(b) - linkCount(a) || byId[a].label.localeCompare(byId[b].label));
    return `<tr><th scope="rowgroup" colspan="6"><span class="dot" data-bg="${esc(graph.getNodeAttribute(t, "color"))}" data-theme-dot="${esc(t)}"></span>${esc(byId[t].label)} <span class="muted">· ${members.length} note${members.length === 1 ? "" : "s"}</span></th></tr>` +
      members.map((id) => row(byId[id])).join("");
  });
  const entities = [...shown].filter((id) => byId[id].type === "Entity").sort((a, b) => linkCount(b) - linkCount(a) || byId[a].label.localeCompare(byId[b].label));
  const loose = [...shown].filter((id) => !themeOf[id] && isNote(byId[id])).sort((a, b) => byId[a].label.localeCompare(byId[b].label));
  const sources = [...shown].filter((id) => byId[id].type === "Source").sort((a, b) => byId[a].label.localeCompare(byId[b].label));
  listEl.innerHTML =
    `<table><caption class="sr">Notes in the graph, with their provenance</caption><thead><tr><th>Note</th><th>Kind</th><th>Source dated</th><th>Review</th><th>Re-check by</th><th class="n">Links</th></tr></thead><tbody>` +
    groups.join("") +
    (loose.length ? `<tr><th scope="rowgroup" colspan="6">Other</th></tr>` + loose.map((id) => row(byId[id])).join("") : "") +
    (sources.length ? `<tr><th scope="rowgroup" colspan="6">Sources <span class="muted">· ${sources.length}</span></th></tr>` +
      sources.map((id) => `<tr><td><a href="${esc(byId[id].url)}">${esc(byId[id].label)}</a></td><td class="muted">Source</td><td class="muted">${esc(humanDay(byId[id].updated))}</td><td></td><td></td><td class="n">${byId[id].degree || 0}</td></tr>`).join("") : "") +
    (entities.length ? `<tr><th scope="rowgroup" colspan="6">Extracted entities <span class="muted">· ${entities.length} · found by Semantica, not reviewed</span></th></tr>` +
      entities.map((id) => `<tr><td>${esc(byId[id].label)}</td><td class="muted">${esc(byId[id].entityKind || "Entity")}</td><td></td><td class="muted">Machine</td><td></td><td class="n">${mentionCount(id)}</td></tr>`).join("") : "") +
    `</tbody></table><p class="foot muted">Every column comes from the note's own frontmatter: Open Knowledge Format, nothing hand-typed.</p>`;
  applyColours(listEl);
}
function placeList() { const tools = toolbar.querySelector<HTMLElement>(".tools") ?? toolbar; listEl.style.top = `${toolbar.offsetTop + tools.offsetHeight + 10}px`; }
addEventListener("resize", () => { if (!listEl.hidden) placeList(); });
viewBtn.addEventListener("click", () => {
  const on = listEl.hidden;
  if (on && selected) closePanel(false);
  listEl.hidden = !on;
  if (on) placeList();
  $("explorer").classList.toggle("listing", on);
  container.style.visibility = on ? "hidden" : "visible";
  legend.style.visibility = on ? "hidden" : "visible";
  updateStatus();
  viewBtn.setAttribute("aria-pressed", String(on));
  viewBtn.textContent = on ? "Graph" : "List";
  renderList();
});

$("g-reset").addEventListener("click", () => {
  offTypes = new Set(DEFAULT_OFF_TYPES);
  offOrigins = new Set(DEFAULT_OFF_ORIGINS);
  search.value = "";
  focusTheme = null;
  closePanel();
  applyFilters();
  fitAll();
});
$("g-zoom-in").addEventListener("click", () => renderer.getCamera().zoomIn({ duration: T(220) }));
$("g-zoom-out").addEventListener("click", () => renderer.getCamera().zoomOut({ duration: T(220) }));
$("g-fit").addEventListener("click", fitAll);
$("g-full")?.addEventListener("click", () => {
  const frame = $("explorer");
  if (document.fullscreenElement) document.exitFullscreen?.();
  else frame.requestFullscreen?.().catch(() => frame.scrollIntoView({ behavior: "smooth", block: "start" }));
});
document.addEventListener("fullscreenchange", () => setTimeout(() => { renderer?.resize(); fitAll(); }, 60));

// -- the page around the explorer: counts, theme cards, the most connected notes, the reading paths ------------------
function fillPage(g: { nodes: GNode[]; edges: GEdge[] }) {
  const notes = g.nodes.filter(isNote);
  const sources = g.nodes.filter((n) => n.type === "Source").length;
  const connections = g.edges.filter((e) => !DEFAULT_OFF_ORIGINS.has(e.origin)).length; // what the map shows by default
  const put = (k: string, v: string) => document.querySelectorAll<HTMLElement>(`[data-stat="${k}"]`).forEach((el) => (el.textContent = v));
  put("notes", String(notes.length)); put("sources", String(sources)); put("connections", String(connections)); put("themes", String(themes.length));
  const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const words = (n: number) => (n < 20 ? WORDS[n] : n < 100 ? TENS[Math.floor(n / 10)] + (n % 10 ? "-" + WORDS[n % 10].toLowerCase() : "") : String(n));
  put("notes-words", words(notes.length));

  // The semantic layer, counted apart from the curated graph above it, with a way in (it is hidden by default).
  const ents = g.nodes.filter((n) => n.type === "Entity").length;
  const mentions = g.edges.filter((e) => e.origin === "extracted" && e.type === "mentions").length;
  const suggested = g.edges.filter((e) => e.origin === "extracted" && e.type !== "mentions").length;
  const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`;
  const parts = [plural(ents, "entity").replace(/entitys$/, "entities"), plural(mentions, "mention")].concat(suggested ? [plural(suggested, "suggested relation")] : []);
  const and = (xs: string[]) => (xs.length > 1 ? `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}` : xs[0]);
  const line = document.querySelector<HTMLElement>("[data-semantic]");
  if (line && ents) {
    line.querySelector<HTMLElement>(".what")!.textContent = `+ ${and(parts)} found by Semantica`;
    line.hidden = false;
    line.querySelector("button")?.addEventListener("click", () => {
      Object.keys(TYPE_ORIGIN).filter((t) => t === "Entity").forEach((t) => { offTypes.delete(t); offOrigins.delete(TYPE_ORIGIN[t]); });
      syncFilterBoxes(); applyFilters(); applyFocus();
      $("explorer").scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "center" });
      announce(`Showing ${and(parts)} found by Semantica`);
    });
  }
  const step = document.querySelector<HTMLElement>('[data-stat="semantic-step"]');
  if (step && ents) step.textContent = ` In this release: ${and(parts)}.`;

  const cards = $("theme-cards");
  if (cards) {
    cards.innerHTML = themes.map((t) => {
      const members = notes.filter((n) => themeOf[n.id] === t).sort((a, b) => linkCount(b.id) - linkCount(a.id));
      const tops = members.slice(0, 3).map((n) => esc(n.label.split(":")[0])).join(" · ");
      return `<a class="theme-card" href="${esc(byId[t].url)}"><span class="name"><span class="dot" data-bg="${esc(graph.getNodeAttribute(t, "color"))}" data-theme-dot="${esc(t)}"></span>${esc(byId[t].label)}</span>` +
        `<span class="count">${members.length} note${members.length === 1 ? "" : "s"}</span><span class="tops">${tops}</span></a>`;
    }).join("");
    applyColours(cards);
  }
  const hubs = $("hubs");
  if (hubs) {
    const top = notes.slice().sort((a, b) => linkCount(b.id) - linkCount(a.id) || a.label.localeCompare(b.label)).slice(0, 5);
    hubs.innerHTML = top.map((n, i) => `<li><span class="rank">${i + 1}</span><a href="#explorer" data-id="${esc(n.id)}">${esc(n.label)}</a><span class="n">${linkCount(n.id)} links</span></li>`).join("");
    hubs.addEventListener("click", (ev) => {
      const a = (ev.target as HTMLElement).closest<HTMLElement>("[data-id]");
      if (!a) return;
      ev.preventDefault();
      $("explorer").scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "center" });
      focusNode(a.dataset.id!);
    });
  }
  // Reading paths: each essay links to its note page; "Follow this path" opens its first note in the explorer.
  document.querySelectorAll<HTMLAnchorElement>("[data-note]").forEach((a) => {
    const n = byId[a.dataset.note!];
    if (n) a.href = n.url; else a.closest("li")?.remove();
  });
  document.querySelectorAll<HTMLAnchorElement>("[data-path-start]").forEach((a) => a.addEventListener("click", (ev) => {
    const id = a.dataset.pathStart!;
    if (!byId[id]) return;
    ev.preventDefault();
    $("explorer").scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "center" });
    focusNode(id);
  }));
}
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && selected) closePanel();
  else if (ev.key === "Escape" && focusTheme) clearThemeFocus();
  else if (ev.key === "/" && document.activeElement !== search && !(ev.target as HTMLElement).closest("input,textarea")) { ev.preventDefault(); search.focus(); }
});
document.addEventListener("themechange", paint);
document.addEventListener("visibilitychange", kick);

// -- entrance: the graph assembles from its themes -------------------------------------------------------------------
function entrance(done: () => void) {
  const final: Record<string, { x: number; y: number; size: number }> = {};
  graph.forEachNode((n, a: any) => { final[n] = { x: a.x, y: a.y, size: a.size }; });
  if (REDUCE) { renderer.setGraphState({ reveal: 1 }); done(); return; }
  const order = themes.slice();
  graph.forEachNode((n) => {
    const hub = byId[n].type === "Theme" ? n : themeOf[n];
    const h = hub ? final[hub] : { x: 0, y: 0 };
    graph.mergeNodeAttributes(n, { x: h.x, y: h.y, size: 0 });
  });
  renderer.setGraphState({ reveal: 0 });
  const start = performance.now();
  let rank = 0;
  const delay: Record<string, number> = {};
  graph.forEachNode((n) => {
    const t = byId[n].type === "Theme" ? n : themeOf[n];
    delay[n] = byId[n].type === "Theme" ? order.indexOf(n) * 90 : 260 + Math.max(0, order.indexOf(t)) * 110 + (rank++ % 12) * 18;
  });
  const DUR = 900, HUB = 620;
  const step = (now: number) => {
    let busy = false;
    graph.forEachNode((n) => {
      const f = final[n], el = now - start - delay[n];
      if (el < 0) { busy = true; return; }
      const isHub = byId[n].type === "Theme";
      const p = Math.min(1, el / (isHub ? HUB : DUR));
      if (p < 1) busy = true;
      const hub = isHub ? n : themeOf[n];
      const h = hub ? final[hub] : f;
      const e = easeOut(p);
      graph.mergeNodeAttributes(n, isHub
        ? { size: f.size * easeOutBack(p) }
        : { x: h.x + (f.x - h.x) * e, y: h.y + (f.y - h.y) * e, size: f.size * Math.min(1, easeOutBack(p)) });
    });
    const r = Math.min(1, Math.max(0, (now - start - 700) / 700));
    renderer.setGraphState({ reveal: easeInOut(r) });
    if (busy || r < 1) requestAnimationFrame(step); else { graph.forEachNode((n) => graph.mergeNodeAttributes(n, final[n])); done(); }
  };
  requestAnimationFrame(step);
}

// -- start -----------------------------------------------------------------------------------------------------------
updateStatus("Loading the map…");
$("g-empty-reset").addEventListener("click", () => $("g-reset").click());
fetch("/graph.json")
  .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
  .then((g: { nodes: GNode[]; edges: GEdge[] }) => {
    // Links come from graph.json: only same-site paths and https URLs become hrefs (no javascript: or data: links).
    const safeUrl = (u?: string) => (u && /^(https:\/\/|\/(?!\/))/.test(u) ? u : undefined);
    g.nodes.forEach((n) => {
      // Semantica's entities arrive typed by what they are (Concept, Tool, Organization), which would mix them with
      // notes of the same kind: the explorer treats them as one kind, Entity, and keeps what they are as entityKind.
      if (n.id.startsWith("ext:")) { n.entityKind = n.type; n.type = "Entity"; n.summary = `${n.entityKind}${n.aliases?.length ? `, also called ${n.aliases.slice(0, 4).join(", ")}` : ""}. Found by Semantica in ${n.degree || 0} note${n.degree === 1 ? "" : "s"}; machine-extracted, not reviewed.`; }
      n.url = safeUrl(n.url) ?? "#"; n.canonical = safeUrl(n.canonical); byId[n.id] = n;
    });
    const edges = g.edges.filter((e) => e.source !== e.target && byId[e.source] && byId[e.target]);
    // A note's theme is the theme its folder edge points at (either direction, to be safe).
    edges.filter((e) => e.origin === "folder").forEach((e) => {
      const [a, b] = byId[e.target].type === "Theme" ? [e.source, e.target] : [e.target, e.source];
      if (byId[b].type === "Theme") themeOf[a] = b;
    });
    themes = g.nodes.filter((n) => n.type === "Theme").sort((a, b) => (b.degree || 0) - (a.degree || 0)).map((n) => n.id);
    // Sources inherit the theme of the first note that draws on them, so they sit in the right colour family.
    edges.filter((e) => e.origin === "source").forEach((e) => {
      const [note, src] = byId[e.target].type === "Source" ? [e.source, e.target] : [e.target, e.source];
      if (!themeOf[src] && themeOf[note]) themeOf[src] = themeOf[note];
    });
    const pos = layout(g.nodes, edges);
    g.nodes.forEach((n) => {
      // Stored as "kind" (and an edge's relation as "rel") so no attribute name collides with a sigma style input.
      const p = pos[n.id];
      graph.addNode(n.id, {
        x: p.x, y: -p.y, size: nodeSize(n), label: n.label, kind: n.type, community: n.community, shape: SHAPE[n.type] || "circle",
        labelSide: n.type === "Theme" ? "below" : p.side,
      });
    });
    edges.forEach((e) => graph.addEdge(e.source, e.target, { rel: e.type, origin: e.origin, evidence: e.origin === "extracted" && e.type !== "mentions" ? e.evidence : undefined, size: e.origin === "folder" ? 0.7 : e.origin === "frontmatter" ? 1.6 : 1.1 }));
    buildLegend();
    paint();

    const dimmed = (s: any, gs: any) => gs.hasActive && !s.isActive && !s.isHovered;
    renderer = new Sigma(graph as any, container, {
      settings: {
        itemSizesReference: "screen", labelFont: "Instrument Sans, system-ui, sans-serif", labelDensity: 0.4,
        labelRenderedSizeThreshold: 11, stagePadding: 48, zIndex: true, hideEdgesOnMove: false, minCameraRatio: 0.12, maxCameraRatio: 1.4,
      } as any,
      primitives: {
        nodes: { shapes: [sdfCircle(), sdfDiamond({ cornerRadius: 0.12 }), sdfSquare({ cornerRadius: 0.28 }), sdfTriangle({ cornerRadius: 0.15 })], layers: [layerFill()] },
        edges: { paths: [pathLine(), pathCurved({ curvature: 0.22 })], extremities: [extremityArrow({ lengthRatio: 4.5, widthRatio: 3.2 })], layers: [layerPlain()] },
      } as any,
      customNodeState: { isActive: false },
      customEdgeState: { isActive: false },
      customGraphState: { hasActive: false, fade: 0, reveal: 0, pulse: 0 },
      styles: {
        nodes: [
          DEFAULT_STYLES.nodes,
          {
            shape: { attribute: "shape" }, labelColor: { attribute: "labelColor" }, cursor: "pointer", labelSize: 12.5,
            backdropColor: { attribute: "page" }, backdropPadding: 5, backdropCornerRadius: 8, backdropShadowColor: "rgba(0,0,0,0.18)", backdropShadowBlur: 10,
            opacity: (_a: any, s: any, gs: any) => (dimmed(s, gs) ? 1 - 0.86 * (gs.fade ?? 0) : 1),
          },
          { labelPosition: { attribute: "labelSide" } },
          {
            when: (a: any) => a.kind === "Theme",
            then: {
              // Shown once the hub has popped in (during the entrance its size starts at 0).
              labelVisibility: (a: any) => ((a.size || 0) > 8 * SIZE_SCALE ? "visible" : "hidden"),
              backdropVisibility: (a: any) => ((a.size || 0) > 8 * SIZE_SCALE ? "visible" : "hidden"),
              labelSize: Math.round(15 * Math.max(0.8, SIZE_SCALE)), labelFont: "Newsreader, Georgia, serif",
              backdropArea: "label", backdropLabelPadding: 5, backdropShadowBlur: 6, backdropCornerRadius: 8,
              backdropColor: { attribute: "pill" }, backdropBorderColor: { attribute: "pillLine" }, backdropBorderWidth: 1,
            },
          },
          { when: (_a: any, s: any, gs: any) => dimmed(s, gs) && (gs.fade ?? 0) > 0.5, then: { labelVisibility: "hidden", backdropVisibility: "hidden" } },
          // In focus, every neighbour is named, on a soft pill so overlapping names stay legible (Kumu/Obsidian focus).
          {
            whenState: "isActive",
            then: {
              labelVisibility: "visible", depth: "topNodes", backdropVisibility: "visible", backdropArea: "label", backdropLabelPadding: 3,
              backdropColor: { attribute: "pill" }, backdropShadowBlur: 0,
            },
          },
          { whenState: "isHovered", then: { backdropVisibility: "visible", backdropArea: "both", labelVisibility: "visible", backdropShadowBlur: 10, size: (a: any) => (a.size || 6) * 1.18 } },
          {
            whenState: "isHighlighted",
            then: {
              backdropVisibility: "visible", backdropArea: "node", backdropPadding: 3, labelVisibility: "visible", depth: "topNodes",
              backdropColor: { attribute: "ring" }, backdropShadowColor: { attribute: "halo" },
              backdropShadowBlur: (_a: any, _s: any, gs: any) => 14 + 16 * (gs.pulse ?? 0.5),
            },
          },
        ],
        edges: [
          DEFAULT_STYLES.edges,
          { path: { when: (a: any) => a.origin === "folder", then: "line", else: "curved" } },
          { opacity: (_a: any, s: any, gs: any) => (gs.reveal ?? 1) * (gs.hasActive && !s.isActive ? 1 - 0.9 * (gs.fade ?? 0) : 1) },
          { whenState: "isActive", then: { color: { attribute: "activeColor" }, size: 2.4, depth: "topEdges" } },
          { when: (a: any, s: any) => s.isActive && a.origin !== "folder", then: { head: "arrow" } },
          { when: (a: any, s: any) => s.isActive && a.origin === "folder", then: { size: 1, opacity: 0.55 } },
          { when: (a: any) => a.origin === "frontmatter", then: { head: "arrow" } },
        ],
      } as any,
    } as any);

    renderer.on("enterNode", ({ node }: { node: string }) => { hovered = node; applyFocus(); });
    renderer.on("leaveNode", () => { hovered = null; applyFocus(); });
    renderer.on("clickNode", ({ node }: { node: string }) => {
      if (byId[node].type === "Theme" && !selected) { legend.querySelector<HTMLButtonElement>(`[data-theme="${CSS.escape(node)}"]`)?.click(); return; }
      focusNode(node);
    });
    renderer.on("doubleClickNode", (e: any) => { e.preventSigmaDefault?.(); if (byId[e.node].type !== "Entity") location.href = primaryUrl(byId[e.node]); });
    renderer.on("clickStage", () => { if (selected) closePanel(); else clearThemeFocus(); });

    buildFilters(g.nodes, edges);
    applyFilters();
    fillPage(g);
    // Fix the camera's frame to the shown nodes' final extent, so the entrance (and toggling sources) never rescales it.
    const shownPos = g.nodes.filter((n) => !DEFAULT_OFF_TYPES.has(n.type)).map((n) => pos[n.id]);
    renderer.setCustomBBox({
      x: [Math.min(...shownPos.map((p) => p.x)), Math.max(...shownPos.map((p) => p.x))],
      y: [Math.min(...shownPos.map((p) => -p.y)), Math.max(...shownPos.map((p) => -p.y))],
    });
    const want = new URL(location.href).searchParams.get("node");
    const deepLink = !!(want && byId[want]);
    if (want && !deepLink) {
      const url = new URL(location.href);
      url.searchParams.delete("node");
      history.replaceState(null, "", url);
    }
    // A deep link (from a note's "Show in graph") skips the entrance: the reader came for that note, now.
    // Sigma measures the stage on its first frame: the fit waits for it, or display positions are not there yet.
    (deepLink ? (cb: () => void) => { renderer.setGraphState({ reveal: 1 }); renderer.refresh(); requestAnimationFrame(() => requestAnimationFrame(cb)); } : entrance)(() => {
      if (deepLink) focusNode(want!);
      else if (want) updateStatus("That note is not in the graph. Showing the whole map.");
      // A small read-only handle for the end-to-end tests (and anyone curious in the console).
      (window as any).kfExplorer = {
        screenPos: (id: string) => {
          const d = renderer.getNodeDisplayData(id);
          if (!d) return null;
          const p = renderer.framedGraphToViewport({ x: d.x, y: d.y });
          return [p.x, p.y];
        },
        // Horizontal extent on screen of a node with its name: [left, right] in pixels.
        labelBox: (id: string) => {
          const d = renderer.getNodeDisplayData(id);
          if (!d) return null;
          const p = renderer.framedGraphToViewport({ x: d.x, y: d.y });
          const r = labelReach(id);
          return [p.x - Math.max(r.left, 6), p.x + Math.max(r.right, 6)];
        },
        selected: () => selected,
        cameraRatio: () => renderer.getCamera().ratio,
        renderer,
      };
      $("explorer").dataset.ready = "true";
    });
  })
  .catch((err) => { console.error(err); updateStatus("The graph could not be loaded."); });
