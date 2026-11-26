function setActive(id) {
  document.querySelectorAll(".navbar__link").forEach((link) => {
    const active = link.hash === `#${id}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function isMobileNav() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function sectionY(el) {
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  return el.getBoundingClientRect().top + window.scrollY - margin;
}

let scrollToken = 0;

function cancelAnimatedScroll() {
  scrollToken += 1;
}

function animateScrollTo(y) {
  const startY = window.scrollY;
  const dist = y - startY;
  if (prefersReducedMotion() || Math.abs(dist) < 2) {
    window.scrollTo(0, y);
    return;
  }

  const duration = Math.min(180, 80 + Math.abs(dist) * 0.05);
  const token = ++scrollToken;
  const start = performance.now();

  function frame(now) {
    if (token !== scrollToken) return;
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - (1 - t) * (1 - t);
    window.scrollTo(0, startY + dist * eased);
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function initScrollSpy() {
  const sections = [...document.querySelectorAll("main > section[id]")];
  if (!sections.length) return;

  let ticking = false;
  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.22;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) current = section.id;
    }
    setActive(current);
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  window.addEventListener("wheel", cancelAnimatedScroll, { passive: true });
  window.addEventListener("touchmove", cancelAnimatedScroll, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (event.key === "PageDown" || event.key === "PageUp" || event.key === "Home" || event.key === "End" || event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === " ") {
      cancelAnimatedScroll();
    }
  });

  update();
}

function initInPageLinks() {
  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    if (!link) return;

    const id = decodeURIComponent(link.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    if (document.querySelector(`.navbar__link[href="#${CSS.escape(id)}"]`)) setActive(id);
    history.pushState(null, "", `#${id}`);
    animateScrollTo(sectionY(target));
  });
}

function initNav() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  initScrollSpy();
  initInPageLinks();

  if (!burger || !menu) return;

  const focusable = () => [...menu.querySelectorAll("a[href], button:not([disabled])")];

  const close = (returnFocus) => {
    menu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", I18N.t("nav.abrirMenu"));
    document.body.classList.remove("nav-open");
    if (returnFocus) burger.focus();
  };

  const open = () => {
    menu.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", I18N.t("nav.fecharMenu"));
    document.body.classList.add("nav-open");
    const [first] = focusable();
    if (first) first.focus();
  };

  burger.addEventListener("click", () => {
    if (menu.classList.contains("is-open")) close(false);
    else open();
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (isMobileNav()) close(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("is-open")) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (menu.contains(target) || burger.contains(target)) return;
    close(false);
  });

  document.addEventListener("keydown", (event) => {
    if (!menu.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      close(true);
      return;
    }

    if (event.key !== "Tab") return;

    const items = focusable();
    if (!items.length) return;

    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
    if (event.matches) close(false);
  });

  document.addEventListener("langchange", () => {
    const openMenu = menu.classList.contains("is-open");
    burger.setAttribute("aria-label", I18N.t(openMenu ? "nav.fecharMenu" : "nav.abrirMenu"));
  });
}
