// Shares Quartz's dark-mode choice (localStorage "theme", <html saved-theme>), so the explorer matches the notes.
(function () {
  var t = null;
  try { t = localStorage.getItem("theme"); } catch (e) {}
  if (t !== "dark" && t !== "light") t = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("saved-theme", t);
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector(".theme-toggle");
    if (!b) return;
    b.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("saved-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }));
    });
  });
})();
