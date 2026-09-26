function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  nodes.forEach((node) => node.classList.add("will-reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  nodes.forEach((node) => observer.observe(node));
}
