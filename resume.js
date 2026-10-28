(() => {
 const cfg=window.PORTFOLIO_CONFIG||{};
 const name=cfg.name||"DevOps Engineer";
 document.querySelectorAll("[data-name]").forEach(el=>el.textContent=name);
 document.title=`Résumé | ${name}`;
 const li=document.querySelector("[data-resume-linkedin]");
 if(cfg.linkedin&&/^https:\/\//i.test(cfg.linkedin)){li.href=cfg.linkedin;li.classList.remove("resume-link-hidden");}else li.classList.add("resume-link-hidden");
 const gh=document.querySelector("[data-resume-github]");
 if(cfg.github){gh.href=cfg.github;}else gh.classList.add("resume-link-hidden");
 const email=document.querySelector("[data-resume-email]");
 if(cfg.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.email)){const a=document.createElement("a");a.href=`mailto:${cfg.email}`;a.textContent=cfg.email;email.replaceWith(a);}else email.classList.add("resume-link-hidden");
})();
