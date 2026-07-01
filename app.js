/* =============================================================================
   app.js — render + interações (sem build, sem framework)
   Lê window.CONTENT (content.js) e monta a página no idioma escolhido.
   ============================================================================= */
(function () {
  "use strict";

  /* ---------------- Ícones SVG (line) ---------------- */
  const ICONS = {
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/>',
    merge: '<path d="M7 3v6a6 6 0 0 0 6 6h4"/><path d="M17 3v18"/><path d="M14 12l3 3 3-3"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
    cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.5-1.5A4 4 0 0 0 6.5 19h11Z"/>',
    shield: '<path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/><path d="m9.5 12 2 2 3.5-3.5"/>',
    handshake: '<path d="m11 17 2 2 4-4"/><path d="M3 10l4-4 5 4 3-2 6 5-4 4-3-2-4 3-4-4 2-2"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 6a3 3 0 0 1 0 5.5M16.5 19a5.5 5.5 0 0 0-2-4.3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"/>',
    pin: '<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    award: '<circle cx="12" cy="9" r="5"/><path d="M8.5 13 7 21l5-3 5 3-1.5-8"/>',
  };
  const svg = (name, w = 18) =>
    `<svg viewBox="0 0 24 24" width="${w}" height="${w}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const savedLang = localStorage.getItem("ass-lang");
  let lang = savedLang || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "pt");
  if (!["pt", "es"].includes(lang)) lang = "pt";

  /* ---------------- Render principal ---------------- */
  function render() {
    const C = window.CONTENT[lang];
    document.documentElement.lang = C.htmlLang;

    // NAV
    const nav = $("#navLinks");
    nav.innerHTML = "";
    C.nav.forEach((n) => {
      const a = el("a", null, esc(n.label));
      a.href = "#" + n.id;
      nav.appendChild(a);
    });

    // Kickers + títulos das seções
    document.querySelectorAll("[data-kicker]").forEach((n) => (n.textContent = C.sections[n.dataset.kicker].kicker));
    document.querySelectorAll("[data-title]").forEach((n) => (n.textContent = C.sections[n.dataset.title].title));

    // HERO
    const h = C.hero;
    $("#heroEyebrow").textContent = h.eyebrow;
    const parts = h.name.split(" ");
    const last = parts.pop();
    $("#heroName").innerHTML = `${esc(parts.join(" "))} <span class="accent">${esc(last)}</span>`;
    $("#heroRoles").innerHTML = h.roles
      .map((r, i) => `<span class="${i === 0 ? "lead" : ""}">${esc(r)}</span>`)
      .join("");
    $("#heroTagline").textContent = h.tagline;

    $("#heroCta").innerHTML =
      `<a class="btn btn-gold" href="#contact">${esc(h.ctaPrimary)} ${svg("arrow", 16)}</a>` +
      `<a class="btn btn-ghost" href="#timeline">${esc(h.ctaSecondary)}</a>`;

    const ct = h.contact;
    $("#heroContact").innerHTML =
      `<span>${svg("pin", 15)}${esc(ct.location)}</span>` +
      `<a href="tel:${ct.phoneHref}">${svg("phone", 15)}${esc(ct.phone)}</a>` +
      `<a href="mailto:${ct.email}">${svg("mail", 15)}${esc(ct.email)}</a>` +
      `<a href="${ct.linkedinUrl}" target="_blank" rel="noopener">${svg("linkedin", 15)}LinkedIn</a>`;

    $("#floatChips").innerHTML = h.chips.map((c) => `<span class="float-chip"><i></i>${esc(c)}</span>`).join("");

    // PERFIL
    $("#profileText").textContent = C.profile;
    $("#yearsLbl").textContent = lang === "es" ? "Años de Liderazgo" : "Anos de Liderança";

    // SINAIS
    $("#signalsGrid").innerHTML = C.signals
      .map(
        (s) =>
          `<article class="signal-card reveal"><div class="signal-ico">${svg(s.icon, 22)}</div><p>${esc(s.title)}</p></article>`
      )
      .join("");

    // TRAJETÓRIA
    $("#timelineList").innerHTML = C.timeline
      .map(
        (t) => `
      <div class="tl-item reveal ${t.current ? "is-current" : ""}">
        <span class="tl-dot"></span>
        <div class="tl-card">
          <div class="tl-top">
            <span class="tl-company">${esc(t.company)}</span>
            ${t.via ? `<span class="tl-via">${esc(t.via)}</span>` : ""}
            <span class="tl-period">${esc(t.period)}</span>
          </div>
          <div class="tl-role">${esc(t.role)}</div>
          <p class="tl-desc">${esc(t.desc)}</p>
        </div>
      </div>`
      )
      .join("");

    // PROGRAMAS
    const pl = C.programLabels;
    $("#programsGrid").innerHTML = C.programs
      .map(
        (p) => `
      <article class="program-card reveal">
        <span class="program-num">${esc(p.n)}</span>
        <h3>${esc(p.title)}</h3>
        <div class="program-org">${esc(p.org)}</div>
        <div class="cav">
          <div class="cav-row"><span class="cav-tag">${esc(pl.challenge)}</span><p>${esc(p.challenge)}</p></div>
          <div class="cav-row"><span class="cav-tag">${esc(pl.action)}</span><p>${esc(p.action)}</p></div>
          <div class="cav-row"><span class="cav-tag">${esc(pl.value)}</span><p>${esc(p.value)}</p></div>
        </div>
      </article>`
      )
      .join("");

    // COMPETÊNCIAS
    $("#skillsGrid").innerHTML = C.skills
      .map(
        (g) => `
      <div class="skill-block reveal">
        <h3>${esc(g.group)}</h3>
        <div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
      </div>`
      )
      .join("");

    // FORMAÇÃO
    const e = C.education;
    $("#eduGrid").innerHTML = `
      <div class="edu-card reveal">
        <h3>${esc(e.degreesTitle)}</h3>
        ${e.degrees.map((d) => `<div class="edu-item"><div class="t">${esc(d.title)}</div><div class="s">${esc(d.school)}</div></div>`).join("")}
      </div>
      <div class="edu-card reveal d1">
        <h3>${esc(e.certsTitle)}</h3>
        <div class="cert-tags">${e.certs.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
        <div class="pmp-flag">${svg("award", 18)}<span>${esc(e.highlight)}</span></div>
      </div>
      <div class="edu-card reveal d2">
        <h3>${esc(e.langsTitle)}</h3>
        ${e.langs.map((l) => `<div class="lang-row"><span class="nm">${esc(l.name)}</span><span class="lv">${esc(l.level)}</span></div>`).join("")}
      </div>`;

    // CONTATO
    $("#contactLead").textContent = C.contact.lead;
    $("#contactActions").innerHTML =
      `<a class="btn btn-gold" href="mailto:${ct.email}">${svg("mail", 16)}${esc(C.ui.emailBtn)}</a>` +
      `<a class="btn btn-ghost" href="${ct.linkedinUrl}" target="_blank" rel="noopener">${svg("linkedin", 16)}${esc(C.ui.linkedinBtn)}</a>` +
      `<button class="btn btn-ghost" type="button" onclick="window.print()">${C.ui.savePdf}</button>`;
    $("#contactMeta").innerHTML =
      `<span>${svg("pin", 14)}${esc(ct.location)}</span>` +
      `<span>${svg("phone", 14)}${esc(ct.phone)}</span>` +
      `<span>${svg("mail", 14)}${esc(ct.email)}</span>`;

    // UI labels
    $("#pdfLabel").textContent = C.ui.savePdf;
    $("#pdfBtn").title = C.ui.savePdf;
    $("#toTopLabel").textContent = C.ui.backToTop;
    $("#footerTag").textContent = C.footer;

    // Lang toggle ativo
    document.querySelectorAll(".lang-toggle button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

    observeReveals();
    setupSignalGlow();
  }

  /* ---------------- Scroll reveal ---------------- */
  let io;
  function observeReveals() {
    if (io) io.disconnect();
    const items = document.querySelectorAll(".reveal:not(.in-view)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("in-view"));
      return;
    }
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in-view");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((i) => io.observe(i));
  }

  /* ---------------- Glow do mouse nos cards de sinais ---------------- */
  function setupSignalGlow() {
    document.querySelectorAll(".signal-card").forEach((card) => {
      card.addEventListener("pointermove", (ev) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        card.style.setProperty("--my", `${ev.clientY - r.top}px`);
      });
    });
  }

  /* ---------------- Interações globais ---------------- */
  function setupChrome() {
    const header = $("#siteHeader");
    const navLinks = $("#navLinks");
    const menuBtn = $("#menuBtn");

    // Header scrolled + scrollspy
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 24);
      let cur = "";
      document.querySelectorAll("main section[id]").forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) cur = sec.id;
      });
      navLinks.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Menu mobile
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Toggle de idioma
    document.querySelectorAll(".lang-toggle button").forEach((b) =>
      b.addEventListener("click", () => {
        if (b.dataset.lang === lang) return;
        lang = b.dataset.lang;
        localStorage.setItem("ass-lang", lang);
        render();
      })
    );

    // PDF
    $("#pdfBtn").addEventListener("click", () => window.print());
  }

  document.addEventListener("DOMContentLoaded", () => {
    render();
    setupChrome();
  });
})();
