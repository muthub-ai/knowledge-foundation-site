/**
 * Knowledge graph explorer: Sigma.js 4 (WebGL) over graphology, reading /graph.json from the knowledge release.
 *
 * Positions come precomputed from the knowledge repository (a seeded layout), so the picture is stable between builds.
 * Drag to pan, wheel or pinch to zoom, hover to light up neighbours, click for the side panel, double-click to open a
 * note, search to jump to one, filters by node type and connection origin, a list view for keyboard and screen-reader
 * use, and /graph/?node=<id> to open on one note (every note page links here that way).
 */
import Graph from "graphology";
import Sigma, { DEFAULT_STYLES } from "sigma";

type GNode = {
  id: string; type: string; label: string; url: string; summary: string; trust: string; status: string;
  updated: string; tags: string[]; degree: number; community: number; x: number; y: number;
};
type GEdge = { source: string; target: string; type: string; origin: string; weight?: number };

const PALETTE_LIGHT = ["#0b5c6b", "#b5651d", "#6b4c9a", "#2e7d32", "#ad1457", "#455a64", "#8d6e00", "#00838f", "#5d4037", "#3949ab"];
const PALETTE_DARK = ["#6ec4d2", "#e0a060", "#b49ae0", "#7cc47f", "#f06292", "#a7b8c2", "#e0c050", "#4dd0e1", "#bcaaa4", "#9fa8da"];
const DEFAULT_OFF_TYPES = new Set(["Source"]);
const DEFAULT_OFF_ORIGINS = new Set(["source", "extracted"]);
const ORIGIN_LABEL: Record<string, string> = {
  frontmatter: "Declared relations", link: "Links in text", folder: "Theme membership", source: "Sources", extracted: "Extracted (machine)",
};

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const container = $("g-canvas"), panel = $("g-panel"), statusEl = $("g-status"), listEl = $("g-list");
const viewBtn = $<HTMLButtonElement>("g-view"), search = $<HTMLInputElement>("g-search"), names = $("g-names");

const esc = (s: unknown) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const isExternal = (url: string) => /^https?:\/\//.test(url);
const trustLabel = (t: string) => (t === "human-reviewed" ? "Reviewed by Muthu" : t === "machine-confirmed" ? "Machine-confirmed" : "Not yet reviewed");
const cssVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

let offTypes = new Set(DEFAULT_OFF_TYPES), offOrigins = new Set(DEFAULT_OFF_ORIGINS);
let selected: string | null = null, hovered: string | null = null;
const graph = new Graph({ multi: true, type: "directed", allowSelfLoops: false });
let renderer: any = null;
let byId: Record<string, GNode> = {};

function paint() {
  const dark = document.documentElement.getAttribute("saved-theme") === "dark";
  const pal = dark ? PALETTE_DARK : PALETTE_LIGHT;
  const ink = cssVar("--ink"), muted = cssVar("--muted"), page = cssVar("--page"), line = cssVar("--strong"), accent = cssVar("--accent");
  const dim = dark ? "#2a2d33" : "#e4e2dc";
  graph.updateEachNodeAttributes((_n, a: any) => ({
    ...a,
    color: a.kind === "Theme" ? ink : a.kind === "Source" ? muted : pal[(a.community || 0) % pal.length],
    dimColor: dim, labelColor: ink, backdrop: page,
  }));
  graph.updateEachEdgeAttributes((_e, a: any) => ({ ...a, color: line, dimColor: dark ? "#202328" : "#efeee9", activeColor: accent }));
  renderer?.refresh();
}

function nodeSize(n: GNode) {
  return (n.type === "Theme" ? 8 : n.type === "Source" ? 3 : 4.5) + Math.sqrt(n.degree || 0) * 1.6;
}

// -- focus: hovered or selected node and its neighbours ------------------------------------------------------------
function applyFocus() {
  const focus = hovered || selected;
  const active = new Set<string>();
  if (focus) {
    active.add(focus);
    graph.forEachNeighbor(focus, (nb) => { if (!renderer.getNodeState(nb).isHidden) active.add(nb); });
  }
  graph.forEachNode((n) => renderer.setNodeState(n, { isActive: active.has(n), isHighlighted: n === selected }));
  graph.forEachEdge((e, _a, s, t) => renderer.setEdgeState(e, { isActive: !!focus && (s === focus || t === focus) }));
  renderer.setGraphState({ hasActive: !!focus });
  renderer.refresh({ skipIndexation: true });
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
    `<label><input type="checkbox" value="${esc(t)}"> ${esc(t)} <span class="muted">${types[t]}</span></label>`).join(""));
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

// -- side panel ------------------------------------------------------------------------------------------------------
function openPanel(id: string) {
  selected = id;
  const n = byId[id];
  const out: string[] = [], inn: string[] = [];
  graph.forEachOutEdge(id, (e, a: any, _s, t) => {
    if (!renderer.getEdgeState(e).isHidden) out.push(`<li><a href="#" data-id="${esc(t)}">${esc(byId[t].label)}</a> <span class="muted">${esc(String(a.rel).replace(/_/g, " "))}</span></li>`);
  });
  graph.forEachInEdge(id, (e, a: any, s) => {
    if (!renderer.getEdgeState(e).isHidden) inn.push(`<li><a href="#" data-id="${esc(s)}">${esc(byId[s].label)}</a> <span class="muted">${esc(String(a.rel).replace(/_/g, " "))}</span></li>`);
  });
  panel.innerHTML =
    `<button class="close" type="button" aria-label="Close">×</button><p class="kind">${esc(n.type)}</p><h2>${esc(n.label)}</h2>` +
    (n.summary ? `<p>${esc(n.summary)}</p>` : "") +
    (n.type !== "Source" && n.type !== "Theme" ? `<p class="muted">${esc(trustLabel(n.trust))}${n.updated ? ` · updated ${esc(n.updated)}` : ""}</p>` : "") +
    `<p><a class="open" href="${esc(n.url)}">${isExternal(n.url) ? "Open source" : "Open note"} →</a></p>` +
    (out.length ? `<h3>Points to</h3><ul>${out.join("")}</ul>` : "") +
    (inn.length ? `<h3>Pointed to by</h3><ul>${inn.join("")}</ul>` : "");
  panel.hidden = false;
  const url = new URL(location.href);
  url.searchParams.set("node", id);
  history.replaceState(null, "", url);
  applyFocus();
}

function closePanel() {
  selected = null;
  panel.hidden = true;
  const url = new URL(location.href);
  url.searchParams.delete("node");
  history.replaceState(null, "", url);
  applyFocus();
}

function focusNode(id: string) {
  const kind = graph.getNodeAttribute(id, "kind");
  if (offTypes.has(kind)) { offTypes.delete(kind); applyFilters(); }
  openPanel(id);
  const d = renderer.getNodeDisplayData(id);
  if (d) renderer.getCamera().animate({ x: d.x, y: d.y, ratio: Math.min(renderer.getCamera().ratio, 0.45) }, { duration: 400 });
}

panel.addEventListener("click", (ev) => {
  const a = (ev.target as HTMLElement).closest("[data-id]");
  if (a) { ev.preventDefault(); focusNode(a.getAttribute("data-id")!); }
  else if ((ev.target as HTMLElement).closest(".close")) closePanel();
});

// -- search ----------------------------------------------------------------------------------------------------------
function findByLabel(q: string): string | null {
  q = q.trim().toLowerCase();
  if (!q) return null;
  const all = Object.values(byId);
  const hit = all.find((n) => n.label.toLowerCase() === q) || all.find((n) => n.type !== "Source" && n.label.toLowerCase().includes(q)) ||
    all.find((n) => n.label.toLowerCase().includes(q));
  return hit ? hit.id : null;
}
function runSearch() {
  const id = findByLabel(search.value);
  if (id) { updateStatus(); focusNode(id); } else updateStatus(`No note matches “${search.value}”.`);
}
search.addEventListener("change", () => { if (findByLabel(search.value)) runSearch(); });
search.addEventListener("keydown", (ev) => { if (ev.key === "Enter") { ev.preventDefault(); runSearch(); } });

// -- list view -------------------------------------------------------------------------------------------------------
function renderList() {
  if (listEl.hidden) return;
  const rows = visibleNodes().map((id) => byId[id]).sort((a, b) => a.label.localeCompare(b.label)).map((n) =>
    `<tr><td><a href="${esc(n.url)}">${esc(n.label)}</a></td><td>${esc(n.type)}</td><td>${n.degree || 0}</td><td>${esc(n.summary)}</td></tr>`);
  listEl.innerHTML = `<table><caption class="sr">Nodes in the graph</caption><thead><tr><th>Name</th><th>Type</th><th>Connections</th><th>Summary</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
}
viewBtn.addEventListener("click", () => {
  const on = listEl.hidden;
  listEl.hidden = !on;
  container.style.visibility = on ? "hidden" : "visible";
  viewBtn.setAttribute("aria-pressed", String(on));
  viewBtn.textContent = on ? "Graph view" : "List view";
  renderList();
});

$("g-reset").addEventListener("click", () => {
  offTypes = new Set(DEFAULT_OFF_TYPES);
  offOrigins = new Set(DEFAULT_OFF_ORIGINS);
  search.value = "";
  closePanel();
  applyFilters();
  renderer.getCamera().animate({ x: 0.5, y: 0.5, ratio: 1, angle: 0 }, { duration: 300 });
});
$("g-zoom-in").addEventListener("click", () => renderer.getCamera().zoomIn({ duration: 200 }));
$("g-zoom-out").addEventListener("click", () => renderer.getCamera().zoomOut({ duration: 200 }));
$("g-fit").addEventListener("click", () => renderer.getCamera().animate({ x: 0.5, y: 0.5, ratio: 1, angle: 0 }, { duration: 300 }));
document.addEventListener("keydown", (ev) => { if (ev.key === "Escape" && selected) closePanel(); });
document.addEventListener("themechange", paint);

// -- start -----------------------------------------------------------------------------------------------------------
fetch("/graph.json")
  .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
  .then((g: { nodes: GNode[]; edges: GEdge[] }) => {
    g.nodes.forEach((n) => {
      byId[n.id] = n;
      // Stored as "kind" (and an edge's relation as "rel") so no attribute name collides with a sigma style input.
      graph.addNode(n.id, { x: n.x, y: -n.y, size: nodeSize(n), label: n.label, kind: n.type, community: n.community });
    });
    const edges = g.edges.filter((e) => e.source !== e.target && byId[e.source] && byId[e.target]);
    edges.forEach((e) => graph.addEdge(e.source, e.target, { rel: e.type, origin: e.origin, size: e.origin === "folder" ? 0.6 : 1 }));
    paint();

    renderer = new Sigma(graph as any, container, {
      settings: { itemSizesReference: "screen", labelFont: "Instrument Sans, system-ui, sans-serif", labelDensity: 0.35, labelRenderedSizeThreshold: 9, stagePadding: 40, zIndex: true } as any,
      customNodeState: { isActive: false },
      customEdgeState: { isActive: false },
      customGraphState: { hasActive: false },
      styles: {
        nodes: [
          DEFAULT_STYLES.nodes,
          { labelColor: { attribute: "labelColor" }, backdropColor: { attribute: "backdrop" }, cursor: "pointer", labelSize: 12 },
          { when: (a: any) => a.kind === "Theme", then: { labelVisibility: "visible", labelSize: 13 } },
          { when: (_a: any, s: any, gs: any) => gs.hasActive && !s.isActive && !s.isHovered, then: { color: { attribute: "dimColor" }, labelVisibility: "hidden" } },
          { whenState: "isActive", then: { labelVisibility: "visible", depth: "topNodes" } },
          { whenState: "isHighlighted", then: { backdropVisibility: "visible" } },
        ],
        edges: [
          DEFAULT_STYLES.edges,
          { when: (_a: any, s: any, gs: any) => gs.hasActive && !s.isActive, then: { color: { attribute: "dimColor" } } },
          { whenState: "isActive", then: { color: { attribute: "activeColor" }, size: 1.6, depth: "topEdges" } },
        ],
      } as any,
    } as any);

    renderer.on("enterNode", ({ node }: { node: string }) => { hovered = node; applyFocus(); });
    renderer.on("leaveNode", () => { hovered = null; applyFocus(); });
    renderer.on("clickNode", ({ node }: { node: string }) => openPanel(node));
    renderer.on("doubleClickNode", (e: any) => { e.preventSigmaDefault?.(); location.href = byId[e.node].url; });
    renderer.on("clickStage", () => { if (selected) closePanel(); });

    names.innerHTML = g.nodes.filter((n) => n.type !== "Source").map((n) => `<option value="${esc(n.label)}">`).join("");
    buildFilters(g.nodes, edges);
    applyFilters();
    const want = new URL(location.href).searchParams.get("node");
    if (want && byId[want]) focusNode(want);
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
  })
  .catch((err) => { console.error(err); updateStatus("The graph could not be loaded."); });
