(() => {
  const cfg = window.PORTFOLIO_CONFIG || {};
  const name = (cfg.name || "DevOps Engineer").trim();
  document.querySelectorAll("[data-name]").forEach(el => el.textContent = name);
  document.title = `${name} | DevOps Engineer`;
  const gh = document.querySelector("[data-github-link]");
  if (gh) {
    if (cfg.github) { gh.href = cfg.github; gh.classList.remove("contact-hidden"); }
    else gh.classList.add("contact-hidden");
  }
  const li = document.querySelector("[data-linkedin-link]");
  const note = document.querySelector("[data-contact-note]");
  const contactLinksMissing = [];
  if (li) {
    if (cfg.linkedin && /^https:\/\//i.test(cfg.linkedin)) { li.href = cfg.linkedin; li.classList.remove("contact-hidden"); }
    else { li.href = "#contact"; li.classList.add("contact-hidden"); contactLinksMissing.push("LinkedIn URL"); }
  }
  if (cfg.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.email)) {
    const emailLink = document.createElement("a");
    emailLink.className = "text-link"; emailLink.href = `mailto:${cfg.email}`; emailLink.textContent = `Email ${cfg.email} ↗`;
    document.querySelector(".contact-actions")?.append(emailLink);
  } else contactLinksMissing.push("email");
  if (note) {
    if (contactLinksMissing.length) note.textContent = `Before publishing, add your ${contactLinksMissing.join(" and ")} in site-config.js.`;
    else note.textContent = "Thanks for stopping by — looking forward to connecting.";
  }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation");
    }));
  }
})();
