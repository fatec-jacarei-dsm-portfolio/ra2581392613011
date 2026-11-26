function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)) return;

  // Seções longas ficam visíveis; a entrada é animada em cada janela.
  const nodes = document.querySelectorAll(".window");
  if (!nodes.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0, rootMargin: "0px 0px 48px 0px" }
  );

  nodes.forEach((node) => {
    node.classList.add("reveal", "will-reveal");
    observer.observe(node);
  });
}
