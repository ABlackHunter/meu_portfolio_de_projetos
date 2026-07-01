/* =============================================================================
   content.js  —  TODO O TEXTO DO SITE EM UM SÓ LUGAR
   -----------------------------------------------------------------------------
   Para editar qualquer frase, basta alterar o texto abaixo.
   - CONTENT.pt  -> versão em Português
   - CONTENT.es  -> versão em Espanhol
   A troca de idioma (toggle PT/ES) re-renderiza a página com estes dados.
   ============================================================================= */

const CONTACT = {
  location: "São Paulo, SP — Brasil",
  phone: "+55 (11) 9.4038-7970",
  phoneHref: "https://wa.me/5511940387970", // Link direto para o WhatsApp
  email: "anderson.s.sousa34@gmail.com",
  linkedin: "linkedin.com/in/andersonsantosdesousa",
  linkedinUrl: "https://www.linkedin.com/in/andersonsantosdesousa",
};

const ROLES = [
  "Enterprise Program Director",
  "PMO Executive",
  "Digital Transformation",
  "Technology Strategy",
  "M&A / Carve-out",
  "Business process management",
   
];

const HERO_CHIPS = ["PMO", "Cloud", "Compliance", "Networks", "Architecture", "Development"];

const CONTENT = {
  /* ======================== PORTUGUÊS ======================== */
  pt: {
    htmlLang: "pt-BR",
    langLabel: "PT",
    altLangLabel: "ES",
    ui: {
      savePdf: "Salvar PDF",
      emailBtn: "Enviar e-mail",
      linkedinBtn: "LinkedIn",
      backToTop: "Voltar ao topo",
      menuOpen: "Abrir menu",
    },
    nav: [
      { id: "profile", label: "Perfil" },
      { id: "signals", label: "Sinais" },
      { id: "timeline", label: "Trajetória" },
      { id: "programs", label: "Programas" },
      { id: "skills", label: "Competências" },
      { id: "education", label: "Formação" },
      { id: "contact", label: "Contato" },
    ],
    hero: {
      eyebrow: "Executive Portfolio",
      name: "Anderson Santos de Sousa",
      roles: ROLES,
      tagline:
        "Transformo estratégia em resultados por meio de liderança, governança, tecnologia e execução disciplinada.",
      ctaPrimary: "Falar comigo",
      ctaSecondary: "Ver trajetória",
      chips: HERO_CHIPS,
      contact: CONTACT,
    },
    sections: {
      profile: { kicker: "Executive Profile", title: "Perfil Executivo" },
      signals: { kicker: "Executive Signals", title: "Sinais Executivos" },
      timeline: { kicker: "Professional Timeline", title: "Trajetória Profissional - Últimos 7 anos" },
      programs: {
        kicker: "Selected Programs & Business Impact",
        title: "Programas Selecionados & Impacto",
      },
      skills: { kicker: "Core Competencies", title: "Competências" },
      education: {
        kicker: "Education & Credentials",
        title: "Formação, Certificações & Idiomas",
      },
      contact: { kicker: "Let's connect", title: "Vamos conversar" },
    },
    profile:
      "Program Manager & Consultor Estratégico com quase 20 anos de trajetória em Tecnologia da Informação, especializado na orquestração de iniciativas complexas e transformação digital de larga escala. Sólida experiência na liderança de programas e portfólios multissetoriais (Saúde, Seguros, Indústria e Educação), com forte atuação em implantação de sistemas complexos, desenvolvimento de software, projetos de arquitetura e segurança, e processos de fusão e segregação de empresas (M&A). Reconhecido pela condução de treinamentos e capacitação corporativa para assegurar a adoção tecnológica. Especialista em conectar camadas executivas (C-Level) à execução técnica, governando times globais e mitigando riscos em cenários de alta complexidade.",
    signals: [
      { icon: "clock", title: "Quase 20 anos em Tecnologia, Processos, Projetos, Programas e Transformação Digital" },
      { icon: "globe", title: "Atuação em projetos no Brasil, Chile e EUA" },
      { icon: "merge", title: "M&A / Carve-out / TSA / Business Continuity" },
      { icon: "layers", title: "Estruturação de PMO zero" },
      { icon: "cloud", title: "Cloud Migration & Digital Modernization" },
      { icon: "shield", title: "Compliance SOX / LGPD / SUSEP / CMN" },
      { icon: "handshake", title: "Sourcing, RFP, BID e Vendor Governance" },
      { icon: "users", title: "C-Level Stakeholder Management" },
    ],
    timeline: [
      {
        company: "Compass Holding",
        via: "via Noorden",
        role: "Consultor de Projetos / Programas",
        period: "10/2025 — Atual",
        current: true,
        desc: "Liderança do programa de segregação corporativa (Carve-out) da holding para a criação de nova unidade de negócio em ambiente tecnológico independente, assegurando conformidade jurídica e continuidade operacional (Business Continuity).",
      },
      {
        company: "Rede Santa Catarina",
        via: "via Pulsati",
        role: "Gerente de Programas / Projetos",
        period: "03/2025 — 10/2025",
        desc: "Orquestração de portfólio multidisciplinar em saúde e educação, atuando como facilitador estratégico em governança de sourcing, RFPs, BID, cronogramas, escalonamento, fornecedores, dependências, SLAs e remoção de impedimentos críticos.",
      },
      {
        company: "ITFOURBS",
        role: "Diretor de Projetos / Sócio-Fundador",
        period: "01/2023 — 02/2025",
        desc: "Estruturação estratégica e operacional da área de projetos e governança, incluindo concepção de PMO do zero, frameworks ágeis e híbridos, padrões de qualidade, KPIs, LGPD, cloud computing e desenvolvimento de software customizado.",
      },
      {
        company: "UX Hunters Brasil",
        role: "Consultor Estratégico de Programas e Soluções Digitais / Sócio-Diretor",
        period: "01/2023 — 02/2025",
        desc: "Liderança de consultoria focada em viabilizar transformação digital e excelência operacional, atuando como parceiro tecnológico de grandes organizações.",
      },
      {
        company: "G&B Soluções em Autopeças",
        role: "Consultor Estratégico de Projetos e Tecnologia",
        period: "03/2024 — 12/2024",
        desc: "Desenho e estruturação da área de Tecnologia e Projetos, conectando TI ao crescimento, criando fluxos iniciais de governança e metodologias para maior previsibilidade de entregas com foco no ROI e Payback para o negócio.",
      },
      {
        company: "Super Troco",
        role: "Consultor Sênior de Projetos | PMO",
        period: "04/2023 — 01/2024",
        desc: "Concepção e implantação estratégica do modelo operacional de PMO, com matrizes de responsabilidade e alinhamento entre áreas técnicas, operacionais e executivas vomo foco no retorno e ganho financeiro para o negócio. Cases: Pague Menos, Extra Farma e Crefaz.",
      },
      {
        company: "Seguros Sura",
        via: "via K2 Partnering",
        role: "Gerente de Programas e Projetos Sênior",
        period: "08/2021 — 03/2023",
        desc: "Governança de programas estratégicos com foco em produtos digitais com objetivo de melhorar a inteligência de motores de decisão e precificação além de modernizar tecnologias legadas aumentando o indice de sucesso nas transações com foco em aumentar o retorno financeiro a curto, médio e longo prazo. Cases incluem Auto Único e Bici Sura como produtos de sucesso do cliente. Atuando também na conformidade contínua com auditorias nacionais e internacionais, SOX, LGPD, SUSEP.",
      },
      {
        company: "Agence Consultoria",
        role: "Gerente de Projetos Sênior — Programas e Contas Internacionais",
        period: "09/2019 — 08/2021",
        desc: "Governança de projetos de desenvolvimento de software nacionais e globais, com equipes multidisciplinares distribuídas. Destaques: Whirlpool — Academia do Varejo; AMBEV — Legal Connections.",
      },
      {
        company: "Grupo Ultra",
        role: "Consultor de Projetos",
        period: "04/2019 — 09/2019",
        desc: "Projetos integrados ao macroprograma de transformação digital e omnichannel, com liderança no roadmap de melhorias Salesforce e implementação do Chatbot Ultragaz para eficiência operacional nos canais de atendimento.",
      },
      {
        company: "DDS",
        role: "Analista de Projetos e Processos Sênior",
        period: "09/2018 — 03/2019",
        desc: "Gestão do ciclo de vida de projetos de tecnologia, engenharia de requisitos, mapeamento As-Is/To-Be, implementação e homologação dos projetos. Destaque: Claro, Vivo, Sky, Agibank",
      },
    ],
    programLabels: { challenge: "Desafio", action: "Ação", value: "Valor" },
    programs: [
      {
        n: "01",
        title: "Corporate Carve-out",
        org: "Compass / Noorden",
        challenge: "Segregação de 4 empresas do grupo sem comprometer a operação de cada uma.",
        action: "Roadmap de infraestrutura, Segurança, sistemas legados, cloud, Arquitetura, TSA e fornecedores.",
        value: "Continuidade, governança jurídica e transição tecnológica controlada, espaço para expansão individualizada, aumento do ROI e redução do Payback.",
      },
      {
        n: "02",
        title: "Digital Insurance Products",
        org: "Seguros Sura",
        challenge: "Evoluir produtos legados e canais digitais com rigor regulatório.",
        action: "Liderança end-to-end, VMO, ROI, SOX e LGPD.",
        value: "Produtos Auto Único e Bici Sura fortalecidos como canais estratégicos, aumento da quantidade e transações e fechamentos aumentando o faturamento.",
      },
      {
        n: "03",
        title: "PMO from Zero",
        org: "ITFOURBS / Super Troco",
        challenge: "Criar cadência de entrega e papéis claros.",
        action: "Frameworks ágil/híbrido, KPIs, matrizes de responsabilidade.",
        value: "Governança, previsibilidade e alinhamento entre times e executivos, comunicação fortalecida e controle de riscos.",
      },
      {
        n: "04",
        title: "Digital Transformation",
        org: "Grupo Ultra / AMBEV / Whirlpool",
        challenge: "Modernizar canais, processos e plataformas digitais.",
        action: "Roadmaps, governança global, equipes distribuídas e integração com o negócio.",
        value: "Eficiência operacional, melhor experiência e execução de programas digitais.",
      },
    ],
    skills: [
      {
        group: "Leadership & Governance",
        items: [
          "Program Management", "Corporate Governance", "CAPEX & OPEX Management",
           "Value Management Office (VMO)", "PMO Setup", "Stakeholder Management", 
           "C-Level Advisory", "Vendor Management", "Risk & Compliance", 
           "Regulatory Audits (SOX/LGPD)", "Carve-out & Transition Governance", 
           "Business Continuity", "Strategic Sourcing (RFP/BID)", "Executive Reporting", 
           "Agile & Hybrid Frameworks",
        ],
      },
      {
        group: "Business & Transformation",
        items: [
          "Digital Transformation", "Corporate Carve-out", "M&A Integration",
           "Legacy Modernization", "Change Management", "Process Optimization (BPM)",
           "Product Lifecycle Management (PLM)", "Value Stream Mapping", "SaaS Migration", 
           "Cloud Strategy", "Innovation Roadmap", "Organizational Agility", "Operational Efficiency", 
           "Capability Building",
        ],
      },
      {
        group: "Technology & Delivery",
        items: [
          "Software Development Life Cycle (SDLC)", "Multi-Cloud Strategy", 
           "Cloud Computing (AWS)", "Infrastructure Migration", "Data Governance", 
           "Business Intelligence (Power BI/Qlik)", "CRM Implementation (Salesforce)", 
           "ERP/HCM Systems (SAP/TOTVS)", "API & Architecture Modernization", "SaaS Delivery", 
           "Application Lifecycle Management (ALM)", "DevSecOps", "SLA & KPI Tracking", 
           "Cross-Functional Delivery", "Global Team Orchestration"
        ],
      },
      {
        group: "Methodologies",
        items: [
          "Agile Methodologies", "Hybrid Frameworks", "Scrum", "Kanban", 
           "SAFe (Scaled Agile Framework)", "PMBOK / PMP", 
           "MoP (Management of Portfolios)", "Flight Levels", "Lean Thinking", 
           "Business Process Management (BPM)", "Design Thinking", 
           "Value Management Office (VMO)", "ITIL", "COBIT", "OKRs (Objectives and Key Results)",
        ],
      },
    ],
    education: {
      degreesTitle: "Formação Acadêmica",
      degrees: [
        { title: "MBA — Business Process Management & Digitalization", school: "FIAP" },
        { title: "Graduação — Gestão da Tecnologia da Informação", school: "FMU" },
      ],
      certsTitle: "Certificações",
      certs: ["ITIL V3", "COBIT 4.1", "Scrum", "AWS"],
      highlight: "PMP / PMI em andamento — prova agendada para agosto de 2026",
      langsTitle: "Idiomas",
      langs: [
        { name: "Português", level: "Nativo" },
        { name: "Espanhol", level: "Avançado" },
        { name: "Inglês", level: "Técnico" },
        { name: "Japonês", level: "Básico" },
      ],
    },
    contact: {
      lead: "Vamos conversar sobre o próximo programa estratégico, transformação digital ou operação de M&A.",
    },
    footer: "Executive Portfolio",
  },

  /* ======================== ESPAÑOL ======================== */
  es: {
    htmlLang: "es",
    langLabel: "ES",
    altLangLabel: "PT",
    ui: {
      savePdf: "Guardar PDF",
      emailBtn: "Enviar correo",
      linkedinBtn: "LinkedIn",
      backToTop: "Volver arriba",
      menuOpen: "Abrir menú",
    },
    nav: [
      { id: "profile", label: "Perfil" },
      { id: "signals", label: "Señales" },
      { id: "timeline", label: "Trayectoria" },
      { id: "programs", label: "Programas" },
      { id: "skills", label: "Competencias" },
      { id: "education", label: "Formación" },
      { id: "contact", label: "Contacto" },
    ],
    hero: {
      eyebrow: "Executive Portfolio",
      name: "Anderson Santos de Sousa",
      roles: ROLES,
      tagline:
        "Transformo la estrategia en resultados mediante liderazgo, gobernanza, tecnología y ejecución disciplinada.",
      ctaPrimary: "Hablemos",
      ctaSecondary: "Ver trayectoria",
      chips: HERO_CHIPS,
      contact: CONTACT,
    },
    sections: {
      profile: { kicker: "Executive Profile", title: "Perfil Ejecutivo" },
      signals: { kicker: "Executive Signals", title: "Señales Ejecutivas" },
      timeline: { kicker: "Professional Timeline", title: "Trayectoria Profesional" },
      programs: {
        kicker: "Selected Programs & Business Impact",
        title: "Programas Seleccionados e Impacto",
      },
      skills: { kicker: "Core Competencies", title: "Competencias" },
      education: {
        kicker: "Education & Credentials",
        title: "Formación, Certificaciones e Idiomas",
      },
      contact: { kicker: "Let's connect", title: "Conversemos" },
    },
    profile:
      "Ejecutivo de Tecnología con casi 20 años liderando programas estratégicos y transformaciones de negocio en Salud, Seguros, Retail, Industria y Educación. Especialista en conectar la estrategia C-Level con la ejecución técnica, impulsando PMO, programas digitales, cloud, compliance, sourcing, productos y transiciones corporativas en entornos complejos y regulados.",
    signals: [
      { icon: "clock", title: "Casi 20 años en Tecnología, Proyectos, Programas y Transformación Digital" },
      { icon: "globe", title: "Actuación en Brasil, Chile y EE. UU." },
      { icon: "merge", title: "M&A / Carve-out / TSA / Continuidad del Negocio" },
      { icon: "layers", title: "PMO estructurada desde cero" },
      { icon: "cloud", title: "Cloud Migration & Digital Modernization" },
      { icon: "shield", title: "Compliance SOX / LGPD" },
      { icon: "handshake", title: "Sourcing, RFP, BID y Gobernanza de Proveedores" },
      { icon: "users", title: "C-Level Stakeholder Management" },
    ],
    timeline: [
      {
        company: "Compass",
        via: "via Noorden",
        role: "Consultor de Proyectos / Programas",
        period: "10/2025 — Actual",
        current: true,
        desc: "Liderazgo de un programa de segregación corporativa para la creación de una unidad de negocio independiente, abarcando infraestructura crítica, bases de datos, sistemas legados, entornos multi-cloud, TSA, proveedores, activos de tecnología y continuidad operacional.",
      },
      {
        company: "Rede Santa Catarina",
        via: "via Pulsati",
        role: "Gerente de Programas / Proyectos",
        period: "03/2025 — 10/2025",
        desc: "Orquestación de un portafolio multidisciplinario en salud y educación, actuando en gobernanza de sourcing, RFPs, BID, cronogramas, escalamiento, proveedores, dependencias, SLAs y remoción de impedimentos críticos.",
      },
      {
        company: "ITFOURBS",
        role: "Director de Proyectos / Socio-Fundador",
        period: "01/2023 — 02/2025",
        desc: "Estructuración estratégica y operativa del área de proyectos y gobernanza, incluyendo la concepción de una PMO desde cero, frameworks ágiles e híbridos, estándares de calidad, KPIs, LGPD, cloud computing y desarrollo de software a medida.",
      },
      {
        company: "UX Hunters Brasil",
        role: "Consultor Estratégico de Programas y Soluciones Digitales / Socio-Director",
        period: "01/2023 — 02/2025",
        desc: "Liderazgo de programas digitales Web/Mobile y roadmaps de modernización tecnológica para organizaciones como AMBEV, Seguros Sura y Grupo Sol Panamby, con foco en transformación digital y excelencia operacional.",
      },
      {
        company: "G&B Soluciones en Autopartes",
        role: "Consultor Estratégico de Proyectos y Tecnología",
        period: "03/2024 — 12/2024",
        desc: "Diseño y estructuración del área de Tecnología y Proyectos, conectando TI con el crecimiento, creando flujos iniciales de gobernanza y metodologías para mayor previsibilidad de entregas.",
      },
      {
        company: "Super Troco",
        role: "Consultor Sénior de Proyectos | PMO",
        period: "04/2023 — 01/2024",
        desc: "Concepción e implementación del modelo operativo de PMO, con matrices de responsabilidad y alineación entre áreas técnicas, operativas y ejecutivas. Casos: Pague Menos, Extra Farma y Crefaz.",
      },
      {
        company: "Seguros Sura",
        via: "via K2 Partnering",
        role: "Gerente de Programas y Proyectos Sénior",
        period: "08/2021 — 03/2023",
        desc: "Gobernanza de programas estratégicos con foco en productos digitales, incluyendo Auto Único y Bici Sura, VMO, ROI y cumplimiento continuo con auditorías internacionales, SOX y LGPD.",
      },
      {
        company: "Agence Consultoria",
        role: "Gerente de Proyectos Sénior — Programas y Cuentas Internacionales",
        period: "09/2019 — 08/2021",
        desc: "Gobernanza de proyectos de desarrollo de software nacionales y globales, con equipos multidisciplinarios distribuidos. Destacados: Whirlpool — Academia do Varejo; AMBEV — Legal Connections.",
      },
      {
        company: "Grupo Ultra",
        role: "Consultor de Proyectos",
        period: "04/2019 — 09/2019",
        desc: "Proyectos integrados al macroprograma de transformación digital del holding, con liderazgo en el roadmap de mejoras Salesforce e implementación del Chatbot Ultragaz para eficiencia operativa en los canales de atención.",
      },
      {
        company: "DDS",
        role: "Analista de Proyectos y Procesos Sénior",
        period: "09/2018 — 03/2019",
        desc: "Gestión del ciclo de vida de proyectos de tecnología, ingeniería de requisitos, mapeo As-Is/To-Be y homologación.",
      },
    ],
    programLabels: { challenge: "Desafío", action: "Acción", value: "Valor" },
    programs: [
      {
        n: "01",
        title: "Corporate Carve-out",
        org: "Compass / Noorden",
        challenge: "Separar un entorno crítico sin comprometer la operación.",
        action: "Roadmap de infraestructura, sistemas legados, cloud, TSA y proveedores.",
        value: "Continuidad, gobernanza jurídica y transición tecnológica controlada.",
      },
      {
        n: "02",
        title: "Digital Insurance Products",
        org: "Seguros Sura",
        challenge: "Evolucionar productos y canales digitales con rigor regulatorio.",
        action: "Liderazgo end-to-end, VMO, ROI, SOX y LGPD.",
        value: "Productos Auto Único y Bici Sura fortalecidos como canales estratégicos.",
      },
      {
        n: "03",
        title: "PMO from Zero",
        org: "ITFOURBS / Super Troco",
        challenge: "Crear cadencia de entrega y roles claros.",
        action: "Frameworks ágil/híbrido, KPIs, matrices de responsabilidad.",
        value: "Gobernanza, previsibilidad y alineación entre equipos y ejecutivos.",
      },
      {
        n: "04",
        title: "Digital Transformation",
        org: "Grupo Ultra / AMBEV / Whirlpool",
        challenge: "Modernizar canales, procesos y plataformas digitales.",
        action: "Roadmaps, gobernanza global, equipos distribuidos e integración con el negocio.",
        value: "Eficiencia operativa, mejor experiencia y ejecución de programas digitales.",
      },
    ],
    skills: [
      {
        group: "Liderazgo y Gobernanza",
        items: [
          "Program Management", "Portfolio Governance", "PMO", "Stakeholder Management",
          "Vendor Management", "Risk Management", "Compliance", "Executive Reporting",
        ],
      },
      {
        group: "Negocio y Transformación",
        items: [
          "Digital Transformation", "M&A / Carve-out", "Business Continuity", "Cloud Migration",
          "Business Process Management", "VMO / ROI", "Sourcing / RFP / BID",
        ],
      },
      {
        group: "Tecnología y Entrega",
        items: [
          "Jira", "Azure DevOps", "MS Project", "MS Visio", "ClickUp", "Bitrix24", "Trello",
          "Salesforce", "Power BI", "Qlik Sense", "SQL Server", "MySQL", "Oracle", "DB2",
          "Python / Pandas", "SAP", "Protheus", "SuccessFactors", "AWS",
        ],
      },
      {
        group: "Metodologías",
        items: [
          "SAFe", "MoP", "PMBOK", "Kanban", "Lean", "Flight Levels", "Scrum", "VMO",
          "Agile / Hybrid Delivery",
        ],
      },
    ],
    education: {
      degreesTitle: "Formación Académica",
      degrees: [
        { title: "MBA — Business Process Management & Digitalization", school: "FIAP" },
        { title: "Grado — Gestión de la Tecnología de la Información", school: "FMU" },
      ],
      certsTitle: "Certificaciones",
      certs: ["ITIL V3", "COBIT 4.1", "Scrum", "AWS"],
      highlight: "PMP / PMI en curso — examen agendado para agosto de 2026",
      langsTitle: "Idiomas",
      langs: [
        { name: "Portugués", level: "Nativo" },
        { name: "Español", level: "Avanzado" },
        { name: "Inglés", level: "Profesional" },
        { name: "Japonés", level: "Básico" },
      ],
    },
    contact: {
      lead: "Conversemos sobre el próximo programa estratégico, transformación digital u operación de M&A.",
    },
    footer: "Executive Portfolio",
  },
};

// Exposto globalmente (sem build step / sem módulos para funcionar via file://).
window.CONTENT = CONTENT;
