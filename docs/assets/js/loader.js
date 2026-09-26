function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    loader.remove();
    return;
  }

  let done = false;

  const hide = () => {
    if (done) return;
    done = true;
    loader.classList.add("is-done");
    window.setTimeout(() => loader.remove(), 200);
  };

  const timer = window.setTimeout(hide, 1200);

  if (document.readyState === "complete") {
    window.clearTimeout(timer);
    hide();
    return;
  }

  window.addEventListener(
    "load",
    () => {
      window.clearTimeout(timer);
      hide();
    },
    { once: true }
  );
}
