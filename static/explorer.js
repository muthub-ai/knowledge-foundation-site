/* Knowledge graph explorer: a dependency-free canvas renderer over /graph.json.
   Positions come precomputed from the knowledge repository (seeded spring layout), so the view is stable between builds.
   Interactions: drag to pan, wheel or pinch to zoom, hover to light up neighbours, click for the side panel,
   search to jump to a note, filters by node type and edge origin, a list view for keyboard and screen-reader use,
   and ?node=<id> to open on one note. */
(function () {
  "use strict";
  var PALETTE = ["#0b5c6b", "#b5651d", "#6b4c9a", "#2e7d32", "#ad1457", "#455a64", "#8d6e00", "#00838f", "#5d4037", "#3949ab"];
  var DEFAULT_OFF_TYPES = { Source: true };
  var DEFAULT_OFF_ORIGINS = { source: true, extracted: true };
  var ORIGIN_LABEL = { frontmatter: "Declared relations", link: "Links in text", folder: "Theme membership", source: "Sources", extracted: "Extracted (machine)" };

  var canvas = document.getElementById("g-canvas"), ctx = canvas.getContext("2d");
  var panel = document.getElementById("g-panel"), statusEl = document.getElementById("g-status");
  var listEl = document.getElementById("g-list"), viewBtn = document.getElementById("g-view");
  var search = document.getElementById("g-search"), names = document.getElementById("g-names");
  var nodes = [], edges = [], byId = {}, adj = {}, offTypes = {}, offOrigins = {};
  var view = { x: 0, y: 0, k: 1 }, hover = null, selected = null, dpr = 1, W = 0, H = 0, colors = {};

  function css(name) { return "rgb(" + getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(/\s+/).join(",") + ")"; }
  function readColors() { colors = { ink: css("--ink"), muted: css("--muted"), line: css("--strong"), page: css("--page"), accent: css("--accent") }; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function href(n) { return /^https?:\/\//.test(n.url) ? n.url : n.url.replace(/\/?$/, "/"); }
  function radius(n) { return (n.type === "Theme" ? 7 : n.type === "Source" ? 3 : 4) + Math.sqrt(n.degree || 0) * 1.6; }
  function color(n) { return n.type === "Theme" ? colors.ink : n.type === "Source" ? colors.muted : PALETTE[(n.community || 0) % PALETTE.length]; }

  function visibleNode(n) { return !offTypes[n.type]; }
  function visibleEdge(e) { return !offOrigins[e.origin] && visibleNode(byId[e.source]) && visibleNode(byId[e.target]); }

  function resize() {
    dpr = window.devicePixelRatio || 1;
    var r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    draw();
  }
  function fit() {
    var vs = nodes.filter(visibleNode);
    if (!vs.length) return;
    var x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    vs.forEach(function (n) { x0 = Math.min(x0, n.x); x1 = Math.max(x1, n.x); y0 = Math.min(y0, n.y); y1 = Math.max(y1, n.y); });
    var pad = 60, k = Math.min((W - pad * 2) / Math.max(x1 - x0, 1), (H - pad * 2 - 50) / Math.max(y1 - y0, 1));
    view.k = Math.max(0.2, Math.min(k, 12));
    view.x = W / 2 - ((x0 + x1) / 2) * view.k;
    view.y = H / 2 + 25 - ((y0 + y1) / 2) * view.k;
  }
  function toScreen(n) { return [n.x * view.k + view.x, n.y * view.k + view.y]; }
  function nodeAt(px, py) {
    var best = null, bd = Infinity;
    nodes.forEach(function (n) {
      if (!visibleNode(n)) return;
      var p = toScreen(n), d = Math.hypot(p[0] - px, p[1] - py), r = radius(n) + 4;
      if (d < r && d < bd) { best = n; bd = d; }
    });
    return best;
  }

  function draw() {
    if (!W) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    var focus = hover || selected, near = focus ? adj[focus.id] : null;
    ctx.lineWidth = 1;
    edges.forEach(function (e) {
      if (!visibleEdge(e)) return;
      var a = toScreen(byId[e.source]), b = toScreen(byId[e.target]);
      var lit = focus && (e.source === focus.id || e.target === focus.id);
      ctx.strokeStyle = lit ? colors.accent : colors.line;
      ctx.globalAlpha = focus ? (lit ? 0.95 : 0.12) : e.origin === "folder" ? 0.35 : 0.6;
      ctx.lineWidth = lit ? 1.6 : 1;
      if (e.origin === "extracted") ctx.setLineDash([3, 3]); else ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
    });
    ctx.setLineDash([]);
    nodes.forEach(function (n) {
      if (!visibleNode(n)) return;
      var p = toScreen(n), dim = focus && n !== focus && !(near && near[n.id]);
      ctx.globalAlpha = dim ? 0.2 : 1;
      ctx.fillStyle = color(n);
      ctx.beginPath(); ctx.arc(p[0], p[1], radius(n), 0, Math.PI * 2); ctx.fill();
      if (n.trust === "human-reviewed" && n.type !== "Source") { ctx.strokeStyle = colors.page; ctx.lineWidth = 1.5; ctx.stroke(); }
      if (n === selected) { ctx.strokeStyle = colors.accent; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(p[0], p[1], radius(n) + 3, 0, Math.PI * 2); ctx.stroke(); }
    });
    ctx.font = "12px " + getComputedStyle(document.body).fontFamily;
    ctx.textBaseline = "middle";
    nodes.forEach(function (n) {
      if (!visibleNode(n)) return;
      var show = n === focus || (near && near[n.id]) || n.type === "Theme" || view.k * (1 + (n.degree || 0) / 4) > 9;
      if (!show || (focus && n !== focus && !(near && near[n.id]))) return;
      var p = toScreen(n), label = n.label.length > 42 ? n.label.slice(0, 40) + "…" : n.label;
      ctx.globalAlpha = 1;
      ctx.lineWidth = 3; ctx.strokeStyle = colors.page; ctx.strokeText(label, p[0] + radius(n) + 4, p[1]);
      ctx.fillStyle = n.type === "Theme" ? colors.ink : colors.ink; ctx.fillText(label, p[0] + radius(n) + 4, p[1]);
    });
    ctx.globalAlpha = 1;
  }

  function neighbours(n) {
    var out = { in: [], out: [] };
    edges.forEach(function (e) {
      if (offOrigins[e.origin]) return;
      if (e.source === n.id && visibleNode(byId[e.target])) out.out.push([e, byId[e.target]]);
      else if (e.target === n.id && visibleNode(byId[e.source])) out.in.push([e, byId[e.source]]);
    });
    return out;
  }
  function relLabel(t) { return t.replace(/_/g, " "); }
  function openPanel(n) {
    selected = n;
    var nb = neighbours(n);
    function items(list) {
      return list.map(function (p) { return '<li><a href="#" data-id="' + esc(p[1].id) + '">' + esc(p[1].label) + '</a> <span class="muted">' + esc(relLabel(p[0].type)) + "</span></li>"; }).join("");
    }
    var trust = n.trust === "human-reviewed" ? "Reviewed by Muthu" : n.trust === "machine-confirmed" ? "Machine-confirmed" : "Not yet reviewed";
    panel.innerHTML = '<button class="close" type="button" aria-label="Close">×</button>' +
      '<p class="kind">' + esc(n.type) + "</p><h2>" + esc(n.label) + "</h2>" +
      (n.summary ? "<p>" + esc(n.summary) + "</p>" : "") +
      (n.type !== "Source" && n.type !== "Theme" ? '<p class="muted">' + esc(trust) + (n.updated ? " · updated " + esc(n.updated) : "") + "</p>" : "") +
      '<p><a class="open" href="' + esc(href(n)) + '">' + (/^https?:/.test(n.url) ? "Open source" : "Open note") + " →</a></p>" +
      (nb.out.length ? "<h3>Points to</h3><ul>" + items(nb.out) + "</ul>" : "") +
      (nb.in.length ? "<h3>Pointed to by</h3><ul>" + items(nb.in) + "</ul>" : "");
    panel.hidden = false;
    var url = new URL(location.href); url.searchParams.set("node", n.id); history.replaceState(null, "", url);
    draw();
  }
  function closePanel() {
    selected = null; panel.hidden = true;
    var url = new URL(location.href); url.searchParams.delete("node"); history.replaceState(null, "", url);
    draw();
  }
  function focusNode(n) {
    if (offTypes[n.type]) { offTypes[n.type] = false; syncFilters(); }
    view.k = Math.max(view.k, 4);
    var p = [n.x * view.k, n.y * view.k];
    // Keep the note clear of the side panel on wide screens (the panel sits bottom-right, 360px wide).
    var cx = W > 760 ? (W - 380) / 2 : W / 2, cy = W > 760 ? H / 2 : H * 0.3;
    view.x = cx - p[0]; view.y = cy - p[1];
    openPanel(n);
  }

  panel.addEventListener("click", function (ev) {
    var a = ev.target.closest("[data-id]");
    if (a) { ev.preventDefault(); focusNode(byId[a.getAttribute("data-id")]); }
    else if (ev.target.closest(".close")) closePanel();
  });

  // Pointer: pan, click, pinch
  var pointers = {}, drag = null, moved = false, pinch = null;
  canvas.addEventListener("pointerdown", function (ev) {
    canvas.setPointerCapture(ev.pointerId);
    pointers[ev.pointerId] = [ev.offsetX, ev.offsetY];
    var ids = Object.keys(pointers);
    if (ids.length === 2) {
      var a = pointers[ids[0]], b = pointers[ids[1]];
      pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), k: view.k }; drag = null;
    } else { drag = { x: ev.offsetX, y: ev.offsetY, vx: view.x, vy: view.y }; moved = false; }
  });
  canvas.addEventListener("pointermove", function (ev) {
    if (pointers[ev.pointerId]) pointers[ev.pointerId] = [ev.offsetX, ev.offsetY];
    var ids = Object.keys(pointers);
    if (pinch && ids.length === 2) {
      var a = pointers[ids[0]], b = pointers[ids[1]];
      zoomAt((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (pinch.k * Math.hypot(a[0] - b[0], a[1] - b[1]) / pinch.d) / view.k);
      return;
    }
    if (drag) {
      var dx = ev.offsetX - drag.x, dy = ev.offsetY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) { moved = true; canvas.classList.add("dragging"); }
      view.x = drag.vx + dx; view.y = drag.vy + dy; draw();
      return;
    }
    var n = nodeAt(ev.offsetX, ev.offsetY);
    if (n !== hover) { hover = n; canvas.style.cursor = n ? "pointer" : ""; draw(); }
  });
  function endPointer(ev) {
    delete pointers[ev.pointerId];
    if (Object.keys(pointers).length < 2) pinch = null;
    if (drag && !moved && ev.type === "pointerup") {
      var n = nodeAt(ev.offsetX, ev.offsetY);
      if (n) openPanel(n); else if (selected) closePanel();
    }
    drag = null; canvas.classList.remove("dragging");
  }
  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);
  canvas.addEventListener("pointerleave", function () { if (hover) { hover = null; draw(); } });
  canvas.addEventListener("dblclick", function (ev) { var n = nodeAt(ev.offsetX, ev.offsetY); if (n) location.href = href(n); });
  function zoomAt(px, py, f) {
    var k = Math.max(0.2, Math.min(view.k * f, 40));
    f = k / view.k;
    view.x = px - (px - view.x) * f; view.y = py - (py - view.y) * f; view.k = k;
    draw();
  }
  canvas.addEventListener("wheel", function (ev) { ev.preventDefault(); zoomAt(ev.offsetX, ev.offsetY, Math.exp(-ev.deltaY * 0.0015)); }, { passive: false });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && selected) closePanel();
    if (ev.target === document.body && (ev.key === "+" || ev.key === "=")) zoomAt(W / 2, H / 2, 1.25);
    if (ev.target === document.body && ev.key === "-") zoomAt(W / 2, H / 2, 0.8);
  });

  // Search
  function findByLabel(q) {
    q = q.trim().toLowerCase();
    if (!q) return null;
    return nodes.filter(function (n) { return n.label.toLowerCase() === q; })[0] ||
      nodes.filter(function (n) { return n.type !== "Source" && n.label.toLowerCase().indexOf(q) >= 0; })[0] ||
      nodes.filter(function (n) { return n.label.toLowerCase().indexOf(q) >= 0; })[0] || null;
  }
  search.addEventListener("change", function () { var n = findByLabel(search.value); if (n) focusNode(n); });
  search.addEventListener("keydown", function (ev) {
    if (ev.key !== "Enter") return;
    ev.preventDefault();
    var n = findByLabel(search.value);
    statusEl.textContent = n ? "" : "No note matches “" + search.value + "”.";
    if (n) focusNode(n);
  });

  // Filters
  function syncFilters() {
    document.querySelectorAll("#f-types input").forEach(function (i) { i.checked = !offTypes[i.value]; });
    document.querySelectorAll("#f-origins input").forEach(function (i) { i.checked = !offOrigins[i.value]; });
    updateStatus(); renderList(); draw();
  }
  function buildFilters() {
    var types = {}, origins = {};
    nodes.forEach(function (n) { types[n.type] = (types[n.type] || 0) + 1; });
    edges.forEach(function (e) { origins[e.origin] = (origins[e.origin] || 0) + 1; });
    document.getElementById("f-types").insertAdjacentHTML("beforeend", Object.keys(types).sort().map(function (t) {
      return '<label><input type="checkbox" value="' + esc(t) + '"> ' + esc(t) + ' <span class="muted">' + types[t] + "</span></label>";
    }).join(""));
    document.getElementById("f-origins").insertAdjacentHTML("beforeend", Object.keys(ORIGIN_LABEL).filter(function (o) { return origins[o]; }).map(function (o) {
      return '<label><input type="checkbox" value="' + esc(o) + '"> ' + esc(ORIGIN_LABEL[o]) + ' <span class="muted">' + origins[o] + "</span></label>";
    }).join(""));
    document.querySelectorAll("#f-types input").forEach(function (i) { i.addEventListener("change", function () { offTypes[i.value] = !i.checked; syncFilters(); }); });
    document.querySelectorAll("#f-origins input").forEach(function (i) { i.addEventListener("change", function () { offOrigins[i.value] = !i.checked; syncFilters(); }); });
  }
  function updateStatus() {
    var vn = nodes.filter(visibleNode).length, ve = edges.filter(visibleEdge).length;
    statusEl.textContent = vn + " nodes · " + ve + " connections shown";
  }

  // List view
  function renderList() {
    if (listEl.hidden) return;
    var rows = nodes.filter(visibleNode).slice().sort(function (a, b) { return a.label.localeCompare(b.label); }).map(function (n) {
      return "<tr><td><a href=\"" + esc(href(n)) + "\">" + esc(n.label) + "</a></td><td>" + esc(n.type) + "</td><td>" + (n.degree || 0) + "</td><td>" + esc(n.summary) + "</td></tr>";
    });
    listEl.innerHTML = "<table><caption class=\"sr\">Nodes in the graph</caption><thead><tr><th>Name</th><th>Type</th><th>Connections</th><th>Summary</th></tr></thead><tbody>" + rows.join("") + "</tbody></table>";
  }
  viewBtn.addEventListener("click", function () {
    var on = listEl.hidden;
    listEl.hidden = !on; canvas.hidden = on;
    viewBtn.setAttribute("aria-pressed", String(on)); viewBtn.textContent = on ? "Graph view" : "List view";
    if (on) renderList(); else resize();
  });
  document.getElementById("g-reset").addEventListener("click", function () {
    offTypes = Object.assign({}, DEFAULT_OFF_TYPES); offOrigins = Object.assign({}, DEFAULT_OFF_ORIGINS);
    search.value = ""; closePanel(); syncFilters(); fit(); draw();
  });
  document.addEventListener("kf-theme", function () { readColors(); draw(); });
  if (window.matchMedia) matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () { readColors(); draw(); });
  window.addEventListener("resize", resize);

  fetch("/graph.json").then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (g) {
    nodes = g.nodes; edges = g.edges.filter(function (e) { return e.source !== e.target; });
    nodes.forEach(function (n) { byId[n.id] = n; adj[n.id] = {}; });
    edges = edges.filter(function (e) { return byId[e.source] && byId[e.target]; });
    edges.forEach(function (e) { adj[e.source][e.target] = true; adj[e.target][e.source] = true; });
    offTypes = Object.assign({}, DEFAULT_OFF_TYPES); offOrigins = Object.assign({}, DEFAULT_OFF_ORIGINS);
    names.innerHTML = nodes.filter(function (n) { return n.type !== "Source"; }).map(function (n) { return '<option value="' + esc(n.label) + '">'; }).join("");
    readColors(); buildFilters(); syncFilters(); resize(); fit();
    var want = new URL(location.href).searchParams.get("node");
    if (want && byId[want]) focusNode(byId[want]); else draw();
    // A small read-only handle for the end-to-end tests (and for anyone curious in the console).
    window.kfExplorer = { screenPos: function (id) { var n = byId[id]; return n ? toScreen(n) : null; }, selected: function () { return selected && selected.id; } };
    document.getElementById("explorer").dataset.ready = "true";
  }).catch(function () { statusEl.textContent = "The graph could not be loaded."; });
})();
