document.documentElement.classList.add("js");

function boot() {
  initTheme();
  I18N.init();
  initLoader();
  initNav();
  initReveal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
