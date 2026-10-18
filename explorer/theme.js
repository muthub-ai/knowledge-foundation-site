// The wiki is dark by default. The choice is shared with the Quartz note pages (localStorage "theme", <html saved-theme>)
// and remembered once the reader toggles it.
(function () {
  var t = null;
  try { t = localStorage.getItem("theme"); } catch (e) {}
  if (t !== "dark" && t !== "light") t = "dark";
  document.documentElement.setAttribute("saved-theme", t);
  function label(b) {
    var dark = document.documentElement.getAttribute("saved-theme") === "dark";
    b.textContent = dark ? "☼ Light" : "☾ Dark";
    b.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector(".theme-toggle");
    if (!b) return;
    label(b);
    b.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("saved-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label(b);
      document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }));
    });
  });
})();
