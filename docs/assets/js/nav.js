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

function initNav() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));

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
