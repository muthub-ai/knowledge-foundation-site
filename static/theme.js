(function () {
  var KEY = "kf-theme";
  try { var t = localStorage.getItem(KEY); if (t === "dark" || t === "light") document.documentElement.dataset.theme = t; } catch (e) {}
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector(".theme-toggle");
    if (!b) return;
    b.addEventListener("click", function () {
      var root = document.documentElement;
      var dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem(KEY, root.dataset.theme); } catch (e) {}
      document.dispatchEvent(new CustomEvent("kf-theme"));
    });
  });
})();
