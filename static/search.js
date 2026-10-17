(function () {
  var input = document.getElementById("q"), out = document.getElementById("results"), status = document.getElementById("search-status");
  var index = null;
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function score(doc, terms) {
    var s = 0, t = doc.title.toLowerCase(), sm = doc.summary.toLowerCase(), x = doc.text.toLowerCase();
    for (var i = 0; i < terms.length; i++) {
      var w = terms[i], hit = 0;
      if (t.indexOf(w) >= 0) hit += 10;
      if (sm.indexOf(w) >= 0) hit += 4;
      if (x.indexOf(w) >= 0) hit += 1;
      if (!hit) return 0;
      s += hit;
    }
    return s;
  }
  function run() {
    var q = input.value.trim();
    var url = new URL(location.href);
    if (q) url.searchParams.set("q", q); else url.searchParams.delete("q");
    history.replaceState(null, "", url);
    if (!q) { out.innerHTML = ""; status.textContent = ""; return; }
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    var hits = index.map(function (d) { return [score(d, terms), d]; }).filter(function (h) { return h[0] > 0; }).sort(function (a, b) { return b[0] - a[0]; }).slice(0, 30);
    status.textContent = hits.length ? hits.length + (hits.length === 1 ? " result" : " results") : "No notes match “" + q + "”.";
    out.innerHTML = hits.map(function (h) {
      var d = h[1];
      return '<li><a href="' + esc(d.url) + '">' + esc(d.title) + '</a> <span class="kind">' + esc(d.kind) + '</span><p class="muted">' + esc(d.summary) + "</p></li>";
    }).join("");
  }
  fetch("/search-index.json").then(function (r) { return r.json(); }).then(function (data) {
    index = data;
    var q = new URL(location.href).searchParams.get("q");
    if (q) input.value = q;
    input.addEventListener("input", run);
    run();
  }).catch(function () { status.textContent = "Search is unavailable right now."; });
})();
