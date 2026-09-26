const STORAGE_KEY = "julia-theme";

function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");

  const button = document.getElementById("theme-toggle");
  if (!button) return;

  button.setAttribute("aria-pressed", String(dark));
  const label = typeof I18N !== "undefined"
    ? I18N.t(dark ? "nav.temaClaro" : "nav.temaEscuro")
    : (dark ? "Alternar para tema claro" : "Alternar para tema escuro");
  button.setAttribute("aria-label", label);
}

function initTheme() {
  let saved = "light";

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") saved = stored;
  } catch (error) {
    saved = "light";
  }

  applyTheme(saved);

  const button = document.getElementById("theme-toggle");
  if (!button) return;

  button.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      /* A preferência vale só nesta visita se o armazenamento estiver bloqueado. */
    }

    applyTheme(next);
  });

  document.addEventListener("langchange", () => {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  });
}
