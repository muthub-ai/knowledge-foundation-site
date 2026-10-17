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
};
// Where a reader should land: the essay on muthub.org when the note summarises one, else the wiki page.
const primaryUrl = (n: GNode) => n.canonical || n.url;
type GEdge = { source: string; target: string; type: string; origin: string; weight?: number };

// Theme colours: one hue per theme, tuned for each background (light: deep and inky; dark: luminous).
const THEME_LIGHT = ["#0b6b7a", "#3d4fc4", "#b5650f", "#b2306b", "#2d7a4c", "#6a4c9c", "#7a6400"];
const THEME_DARK = ["#5fd3e0", "#93a2ff", "#f5b360", "#f584b8", "#74d6a0", "#c3a6f5", "#e6cf5c"];
const SHAPE: Record<string, string> = { Theme: "circle", Essay: "circle", Initiative: "diamond", Playbook: "square", Source: "triangle" };
const DEFAULT_OFF_TYPES = new Set(["Source"]);
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
  if (selected && !REDUCE) renderer?.setGraphState({ pulse: (Math.sin(now / 520) + 1) / 2 });
  renderer?.refresh({ skipIndexation: true });
  if (tweens.size || (selected && !REDUCE)) raf = requestAnimationFrame(tick);
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
    ...a, color: a.kind === "Source" ? muted : colourOf(n), labelColor: ink, page,
    halo: hexA(colourOf(n).startsWith("#") ? colourOf(n) : "#888888", isDark() ? 0.75 : 0.55),
  }));
  graph.updateEachEdgeAttributes((_e, a: any, s) => {
    const c = colourOf(s);
    return { ...a, color: c.startsWith("#") ? hexA(c, EDGE_ALPHA[a.origin] ?? 0.4) : c, activeColor: c };
  });
  document.querySelectorAll<HTMLElement>("[data-theme-dot]").forEach((el) => (el.style.background = colourOf(el.dataset.themeDot!)));
  renderer?.refresh();
}

// Node sizes are in screen pixels; small screens get smaller nodes so clusters stay readable.
const SIZE_SCALE = Math.min(1, Math.max(0.6, Math.min(innerWidth, innerHeight) / 850));
function nodeSize(n: GNode) {
  return SIZE_SCALE * (n.type === "Theme" ? 16 + Math.sqrt(n.degree || 0) * 2 : (n.type === "Source" ? 4 : 6) + Math.sqrt(n.degree || 0) * 2.1);
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
  nodes.forEach((n) => { if (n.type !== "Theme" && n.type !== "Source" && themeOf[n.id]) members[themeOf[n.id]].push(n.id); });
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
    const r1 = 19 + 1.15 * ids.length, cap = Math.max(6, Math.floor((TAU * r1) / 7.5));
    for (let ringNo = 0, start = 0; start < ids.length; ringNo++, start += cap) {
      const chunk = ids.slice(start, start + cap).map((id) => ({ id, p: pref(id) })).sort((a, b) => a.p - b.p);
      const r = r1 + ringNo * 9, step = TAU / chunk.length;
      // Rotate the evenly spaced slots so they line up, on average, with each note's preferred direction.
      let sx = 0, sy = 0;
      chunk.forEach((c, i) => { sx += Math.cos(c.p - i * step); sy += Math.sin(c.p - i * step); });
      const off = Math.atan2(sy, sx) + (ringNo % 2 ? step / 2 : 0);
      chunk.forEach((c, i) => {
        const a = off + i * step;
        pos[c.id] = { x: h.x + Math.cos(a) * r, y: h.y + Math.sin(a) * r, side: Math.cos(a) < 0 ? "left" : "right" };
      });
    }
  }
  // Notes without a theme: a small ring at the centre.
  const loose = nodes.filter((n) => n.type !== "Theme" && n.type !== "Source" && !pos[n.id]);
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
  statusEl.textContent = message ?? `${visibleNodes().length} nodes · ${visibleEdges().length} connections shown`;
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
    applyFilters();
    applyFocus();
  }));
  document.querySelectorAll<HTMLInputElement>("#f-origins input").forEach((i) => i.addEventListener("change", () => {
    i.checked ? offOrigins.delete(i.value) : offOrigins.add(i.value);
    applyFilters();
  }));
}

// -- legend: themes (click to focus a cluster) and shapes ------------------------------------------------------------
function buildLegend() {
  const count = (t: string) => Object.keys(themeOf).filter((n) => themeOf[n] === t && byId[n].type !== "Source").length;
  legend.innerHTML =
    `<p class="legend-title">Themes</p><ul>` +
    themes.map((t) => `<li><button type="button" data-theme="${esc(t)}" aria-pressed="false"><span class="dot" data-theme-dot="${esc(t)}"></span>${esc(byId[t].label)}<span class="muted">${count(t)}</span></button></li>`).join("") +
    `</ul><p class="legend-shapes" aria-label="Shapes"><span><span class="shape shape-circle"></span>Essay</span><span><span class="shape shape-diamond"></span>Initiative</span><span><span class="shape shape-square"></span>Playbook</span></p>`;
  legend.querySelectorAll<HTMLButtonElement>("[data-theme]").forEach((b) => b.addEventListener("click", () => {
    const t = b.dataset.theme!;
    if (focusTheme === t) { focusTheme = null; applyFocus(); fitAll(); return; }
    focusTheme = t;
    if (selected) closePanel(false);
    applyFocus();
    fitNodes([...(activeSet() || [])]);
  }));
}

// -- camera ----------------------------------------------------------------------------------------------------------
function fitAll() { renderer.getCamera().animate({ x: 0.5, y: 0.5, ratio: 1, angle: 0 }, { duration: T(650), easing: "cubicInOut" }); }
function fitNodes(ids: string[]) {
  const pts = ids.map((id) => renderer.getNodeDisplayData(id)).filter(Boolean);
  if (!pts.length) return;
  const xs = pts.map((p: any) => p.x), ys = pts.map((p: any) => p.y);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const ratio = Math.min(1, Math.max(0.25, Math.max(x1 - x0, y1 - y0) * 1.35));
  renderer.getCamera().animate({ x: (x0 + x1) / 2, y: (y0 + y1) / 2, ratio }, { duration: T(700), easing: "cubicInOut" });
}

// -- side panel ------------------------------------------------------------------------------------------------------
function relLabel(r: string) { return String(r).replace(/_/g, " "); }
function openPanel(id: string) {
  selected = id;
  focusTheme = null;
  const n = byId[id];
  const colour = graph.getNodeAttribute(id, "color");
  const groups: Record<string, string[]> = {};
  const add = (key: string, other: string) => {
    (groups[key] ||= []).push(`<li><a href="#" data-id="${esc(other)}"><span class="dot" style="background:${esc(graph.getNodeAttribute(other, "color"))}"></span>${esc(byId[other].label)}</a></li>`);
  };
  graph.forEachOutEdge(id, (e, a: any, _s, t) => { if (!renderer.getEdgeState(e).isHidden) add(`Points to · ${relLabel(a.rel)}`, t); });
  graph.forEachInEdge(id, (e, a: any, s) => { if (!renderer.getEdgeState(e).isHidden) add(`Pointed to by · ${relLabel(a.rel)}`, s); });
  const meta = n.type !== "Source" && n.type !== "Theme"
    ? `<p class="meta"><span class="badge ${n.trust === "human-reviewed" ? "ok" : ""}">${esc(trustLabel(n.trust))}</span>${n.updated ? `<span class="muted">Updated ${esc(n.updated)}</span>` : ""}</p>` : "";
  panel.innerHTML =
    `<div class="accent" style="background:${esc(colour)}"></div>` +
    `<button class="close" type="button" aria-label="Close">×</button>` +
    `<p class="kind"><span class="shape shape-${esc(SHAPE[n.type] || "circle")}" style="--c:${esc(colour)}"></span>${esc(n.type)}${themeOf[id] ? ` · ${esc(byId[themeOf[id]].label)}` : ""}</p>` +
    `<h2>${esc(n.label)}</h2>` + (n.summary ? `<p class="summary">${esc(n.summary)}</p>` : "") + meta +
    (n.canonical
      ? `<p class="actions"><a class="open" href="${esc(n.canonical)}">Read on muthub.org <span aria-hidden="true">→</span></a><a class="wiki" href="${esc(n.url)}">Wiki summary</a></p>`
      : `<p class="actions"><a class="open" href="${esc(n.url)}">${isExternal(n.url) ? "Open source" : n.type === "Theme" ? "Open theme" : "Open note"} <span aria-hidden="true">→</span></a></p>`) +
    Object.keys(groups).sort().map((g) => `<h3>${esc(g)} <span class="muted">${groups[g].length}</span></h3><ul>${groups[g].join("")}</ul>`).join("");
  panel.hidden = false;
  panel.classList.remove("in"); void panel.offsetWidth; panel.classList.add("in");
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

function focusNode(id: string) {
  const kind = graph.getNodeAttribute(id, "kind");
  if (offTypes.has(kind)) { offTypes.delete(kind); applyFilters(); }
  openPanel(id);
  const d = renderer.getNodeDisplayData(id);
  if (d) renderer.getCamera().animate({ x: d.x, y: d.y, ratio: Math.min(renderer.getCamera().ratio, 0.45) }, { duration: T(650), easing: "cubicInOut" });
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
  const rank = (n: GNode) => (n.label.toLowerCase() === q ? 0 : n.label.toLowerCase().startsWith(q) ? 1 : 2) + (n.type === "Source" ? 3 : 0);
  return all.filter((n) => n.label.toLowerCase().includes(q)).sort((a, b) => rank(a) - rank(b) || a.label.localeCompare(b.label));
}
function findByLabel(q: string): string | null { return matches(q)[0]?.id ?? null; }
let pick = -1;
function renderSuggest() {
  const hits = matches(search.value).slice(0, 7);
  pick = -1;
  if (!hits.length || document.activeElement !== search) { suggest.hidden = true; search.setAttribute("aria-expanded", "false"); return; }
  suggest.innerHTML = hits.map((n, i) => `<li role="option" id="g-opt-${i}" data-id="${esc(n.id)}"><span class="dot" style="background:${esc(graph.getNodeAttribute(n.id, "color"))}"></span>${esc(n.label)}<span class="muted">${esc(n.type)}</span></li>`).join("");
  suggest.hidden = false;
  search.setAttribute("aria-expanded", "true");
}
function movePick(d: number) {
  const items = [...suggest.querySelectorAll("li")];
  if (!items.length) return;
  pick = (pick + d + items.length) % items.length;
  items.forEach((li, i) => li.classList.toggle("on", i === pick));
  search.setAttribute("aria-activedescendant", items[pick].id);
}
function runSearch() {
  const chosen = pick >= 0 ? suggest.querySelectorAll("li")[pick]?.getAttribute("data-id") : findByLabel(search.value);
  suggest.hidden = true;
  if (chosen) { updateStatus(); focusNode(chosen); } else updateStatus(`No note matches “${search.value}”.`);
}
search.addEventListener("input", renderSuggest);
search.addEventListener("focus", renderSuggest);
search.addEventListener("blur", () => setTimeout(() => (suggest.hidden = true), 120));
search.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") { ev.preventDefault(); runSearch(); }
  else if (ev.key === "ArrowDown") { ev.preventDefault(); movePick(1); }
  else if (ev.key === "ArrowUp") { ev.preventDefault(); movePick(-1); }
  else if (ev.key === "Escape") { suggest.hidden = true; }
});
suggest.addEventListener("mousedown", (ev) => {
  const li = (ev.target as HTMLElement).closest("li");
  if (li) { ev.preventDefault(); suggest.hidden = true; search.value = byId[li.dataset.id!].label; focusNode(li.dataset.id!); }
});

// -- list view -------------------------------------------------------------------------------------------------------
function renderList() {
  if (listEl.hidden) return;
  const rows = visibleNodes().map((id) => byId[id]).sort((a, b) => a.label.localeCompare(b.label)).map((n) =>
    `<tr><td><a href="${esc(primaryUrl(n))}">${esc(n.label)}</a></td><td>${esc(n.type)}</td><td>${themeOf[n.id] ? esc(byId[themeOf[n.id]].label) : ""}</td><td>${n.degree || 0}</td><td>${esc(n.summary)}</td></tr>`);
  listEl.innerHTML = `<table><caption class="sr">Nodes in the graph</caption><thead><tr><th>Name</th><th>Type</th><th>Theme</th><th>Connections</th><th>Summary</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
}
viewBtn.addEventListener("click", () => {
  const on = listEl.hidden;
  listEl.hidden = !on;
  container.style.visibility = on ? "hidden" : "visible";
  legend.style.visibility = on ? "hidden" : "visible";
  viewBtn.setAttribute("aria-pressed", String(on));
  viewBtn.textContent = on ? "Graph view" : "List view";
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
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && selected) closePanel();
  else if (ev.key === "Escape" && focusTheme) { focusTheme = null; applyFocus(); }
  else if (ev.key === "/" && document.activeElement !== search && !(ev.target as HTMLElement).closest("input,textarea")) { ev.preventDefault(); search.focus(); }
});
document.addEventListener("themechange", paint);

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
fetch("/graph.json")
  .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
  .then((g: { nodes: GNode[]; edges: GEdge[] }) => {
    g.nodes.forEach((n) => (byId[n.id] = n));
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
    edges.forEach((e) => graph.addEdge(e.source, e.target, { rel: e.type, origin: e.origin, size: e.origin === "folder" ? 0.7 : e.origin === "frontmatter" ? 1.6 : 1.1 }));
    buildLegend();
    paint();

    const dimmed = (s: any, gs: any) => gs.hasActive && !s.isActive && !s.isHovered;
    renderer = new Sigma(graph as any, container, {
      settings: {
        itemSizesReference: "screen", labelFont: "Instrument Sans, system-ui, sans-serif", labelDensity: 0.4,
        labelRenderedSizeThreshold: 11, stagePadding: 48, zIndex: true, hideEdgesOnMove: false,
      } as any,
      primitives: {
        nodes: { shapes: [sdfCircle(), sdfDiamond({ cornerRadius: 0.12 }), sdfSquare({ cornerRadius: 0.28 }), sdfTriangle({ cornerRadius: 0.15 })], layers: [layerFill()] },
        edges: { paths: [pathLine(), pathCurved({ curvature: 0.22 })], extremities: [extremityArrow({ lengthRatio: 3.2, widthRatio: 2.6 })], layers: [layerPlain()] },
      } as any,
      customNodeState: { isActive: false },
      customEdgeState: { isActive: false },
      customGraphState: { hasActive: false, fade: 0, reveal: 0, pulse: 0 },
      styles: {
        nodes: [
          DEFAULT_STYLES.nodes,
          {
            shape: { attribute: "shape" }, labelColor: { attribute: "labelColor" }, cursor: "pointer", labelSize: 12.5,
            backdropColor: { attribute: "page" }, backdropPadding: 5, backdropShadowColor: "rgba(0,0,0,0.18)", backdropShadowBlur: 10,
            opacity: (_a: any, s: any, gs: any) => (dimmed(s, gs) ? 1 - 0.86 * (gs.fade ?? 0) : 1),
          },
          { labelPosition: { attribute: "labelSide" } },
          {
            when: (a: any) => a.kind === "Theme",
            then: {
              labelVisibility: "visible", labelSize: 15, labelFont: "Newsreader, Georgia, serif",
              backdropVisibility: "visible", backdropArea: "label", backdropLabelPadding: 4, backdropShadowBlur: 6,
            },
          },
          { when: (_a: any, s: any, gs: any) => dimmed(s, gs) && (gs.fade ?? 0) > 0.5, then: { labelVisibility: "hidden", backdropVisibility: "hidden" } },
          // Neighbours' labels go through sigma's collision check ("auto"); the hovered and selected ones always show.
          { whenState: "isActive", then: { labelVisibility: "auto", depth: "topNodes" } },
          { when: (a: any, s: any) => s.isActive && a.kind === "Theme", then: { labelVisibility: "visible" } },
          { whenState: "isHovered", then: { backdropVisibility: "visible", labelVisibility: "visible" } },
          {
            whenState: "isHighlighted",
            then: {
              backdropVisibility: "visible", backdropArea: "node", backdropPadding: 3, labelVisibility: "visible", depth: "topNodes",
              backdropShadowColor: { attribute: "halo" },
              backdropShadowBlur: (_a: any, _s: any, gs: any) => 14 + 16 * (gs.pulse ?? 0.5),
            },
          },
        ],
        edges: [
          DEFAULT_STYLES.edges,
          { path: { when: (a: any) => a.origin === "folder", then: "line", else: "curved" } },
          { opacity: (_a: any, s: any, gs: any) => (gs.reveal ?? 1) * (gs.hasActive && !s.isActive ? 1 - 0.9 * (gs.fade ?? 0) : 1) },
          { whenState: "isActive", then: { color: { attribute: "activeColor" }, size: 2, depth: "topEdges" } },
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
      openPanel(node);
    });
    renderer.on("doubleClickNode", (e: any) => { e.preventSigmaDefault?.(); location.href = primaryUrl(byId[e.node]); });
    renderer.on("clickStage", () => { if (selected) closePanel(); else if (focusTheme) { focusTheme = null; applyFocus(); } });

    buildFilters(g.nodes, edges);
    applyFilters();
    // Fix the camera's frame to the shown nodes' final extent, so the entrance (and toggling sources) never rescales it.
    const shownPos = g.nodes.filter((n) => !DEFAULT_OFF_TYPES.has(n.type)).map((n) => pos[n.id]);
    renderer.setCustomBBox({
      x: [Math.min(...shownPos.map((p) => p.x)), Math.max(...shownPos.map((p) => p.x))],
      y: [Math.min(...shownPos.map((p) => -p.y)), Math.max(...shownPos.map((p) => -p.y))],
    });
    const want = new URL(location.href).searchParams.get("node");
    const deepLink = !!(want && byId[want]);
    // A deep link (from a note's "Show in graph") skips the entrance: the reader came for that note, now.
    (deepLink ? (cb: () => void) => { renderer.setGraphState({ reveal: 1 }); cb(); } : entrance)(() => {
      if (deepLink) focusNode(want!);
      // A small read-only handle for the end-to-end tests (and anyone curious in the console).
      (window as any).kfExplorer = {
        screenPos: (id: string) => {
          const d = renderer.getNodeDisplayData(id);
          if (!d) return null;
          const p = renderer.framedGraphToViewport({ x: d.x, y: d.y });
          return [p.x, p.y];
        },
        selected: () => selected,
        cameraRatio: () => renderer.getCamera().ratio,
        renderer,
      };
      $("explorer").dataset.ready = "true";
    });
  })
  .catch((err) => { console.error(err); updateStatus("The graph could not be loaded."); });
