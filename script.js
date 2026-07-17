// Central data source — cards below are generated from this array.
const projects = [
  {
    title: "MENTESA · MINDCARE",
    description:
      "SaaS que conecta psicólogos e psiquiatras a pacientes (publicado como MindCare), cobrindo o fluxo clínico e de negócio de ponta a ponta: diretório de profissionais verificados, agendamento com Google Agenda, telehealth por vídeo (LiveKit), prontuário eletrônico em formato SOAP com assinatura digital, resumo de sessão com IA (Google Gemini), pagamentos reais (Mercado Pago, Pix) e lembretes por WhatsApp.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind"],
    demoUrl: "https://mente-sa-woad.vercel.app",
    repoUrl: "https://github.com/kiograco/MenteSa",
    preview: "assets/previews/mentesa.jpg",
  },
  {
    title: "NCPROGRAMMERS CRM",
    description:
      "CRM de atendimento multicanal (WhatsApp, Telegram, Instagram e Messenger) com gestão de contatos, filas e etiquetas, chatbot visual, ordens de serviço com agenda e PDF, controle de estoque com baixa automática, painel de superadmin multi-empresa e assinaturas pagas via Asaas (Pix e cartão).",
    tech: ["Node.js", "Vue", "PostgreSQL", "Docker"],
    demoUrl: "https://gestao-de-clientes-khaki.vercel.app",
    repoUrl: "https://github.com/kiograco/GestaoDeClientes",
    preview: "assets/previews/gestaodeclientes-arch.jpg",
  },
  {
    title: "ORDERHUB",
    description:
      "Plataforma SaaS multi-loja de gestão de pedidos em PHP 8.3, construída para demonstrar arquitetura hexagonal, Event Sourcing, CQRS, processamento assíncrono via filas (Redis), API REST versionada com OpenAPI, interface web SSR (Twig + HTMX), CLI administrativo, testes automatizados e CI/CD.",
    tech: ["PHP", "PostgreSQL", "Redis", "Docker"],
    demoUrl: null,
    repoUrl: "https://github.com/kiograco/Multi-Loja-SaaS",
    preview: "assets/previews/orderhub.jpg",
  },
  {
    title: "SAAS CONTROLE FINANCEIRO",
    description:
      "Sistema SaaS multiempresa de gestão financeira e controle de ponto: contas a pagar/receber, centros de custo, dashboard e relatórios, cadastro de funcionários e jornadas, espelho de ponto e importação de CSV com preview e auditoria. Perfis de acesso por empresa com JWT.",
    tech: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
    demoUrl: null,
    repoUrl: "https://github.com/kiograco/SaaS-Controle_Financeiro",
    preview: "assets/previews/controlefinanceiro.jpg",
  },
  {
    title: "SITE.PSI",
    description:
      "Landing page profissional para clínica de psicologia, com seções de serviços, integração direta com WhatsApp e link para avaliações do Google. Deploy na Vercel.",
    tech: ["React", "Vite"],
    demoUrl: "https://site-psi-tau.vercel.app",
    repoUrl: "https://github.com/kiograco/site.psi",
    preview: "assets/previews/sitepsi.jpg",
  },
  {
    title: "PORTFÓLIO",
    description:
      "Este próprio site. Single page desenvolvida para expor meus projetos, consumindo um array central com as informações de cada um e gerando os cards dinamicamente — o design do site é, em si, uma amostra do meu trabalho front-end.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://portifolio-kiograco.vercel.app",
    repoUrl: "https://github.com/kiograco/Portifolio",
    preview: "assets/og/og-image.jpg",
  },
];

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECH_ICON_SLUGS = {
  React: "react/react-original",
  TypeScript: "typescript/typescript-original",
  JavaScript: "javascript/javascript-original",
  "Node.js": "nodejs/nodejs-original",
  PHP: "php/php-original",
  Python: "python/python-original",
  Java: "java/java-original",
  "Spring Boot": "spring/spring-original",
  Angular: "angular/angular-original",
  PostgreSQL: "postgresql/postgresql-original",
  MySQL: "mysql/mysql-original",
  Docker: "docker/docker-original",
  Supabase: "supabase/supabase-original",
  Tailwind: "tailwindcss/tailwindcss-original",
  Vue: "vuejs/vuejs-original",
  Redis: "redis/redis-original",
  Vite: "vitejs/vitejs-original",
  HTML5: "html5/html5-original",
  CSS3: "css3/css3-original",
  Laravel: "laravel/laravel-original",
  Selenium: "selenium/selenium-original",
  Playwright: "playwright/playwright-original",
  Cypress: "cypressio/cypressio-original",
};

// Central data source — experience list below is generated from this array.
const experience = [
  {
    role: "Founder & Lead Software Engineer",
    company: "NCProgrammers",
    period: "ago 2021 – presente",
    description:
      "Desenvolvimento de aplicações web e plataformas SaaS para clientes nacionais e internacionais, participando de todo o ciclo de vida do software — do planejamento e arquitetura ao deploy, manutenção e evolução contínua. Criação de CRMs corporativos com ordens de serviço, agendamento, financeiro, automações e integrações com terceiros, e de uma plataforma para psicólogos e psiquiatras com busca por geolocalização, agendamento online e integração com WhatsApp. APIs REST com autenticação JWT, processamento de pagamentos e bancos PostgreSQL/MySQL com foco em performance e escalabilidade.",
    tech: ["React", "TypeScript", "Node.js", "PHP", "Python", "PostgreSQL", "Docker"],
  },
  {
    role: "Full Stack Support Engineer",
    company: "Proesc (SaaS educacional)",
    period: "out 2025 – mai 2026",
    description:
      "Sustentação e evolução contínua de uma plataforma SaaS educacional usada por diversas instituições de ensino: resolução de incidentes críticos em produção, investigação e diagnóstico de causa raiz de falhas, e melhoria da confiabilidade, disponibilidade e estabilidade do sistema em colaboração com times multidisciplinares.",
    tech: ["PHP", "Laravel"],
  },
  {
    role: "Desenvolvedor de Software",
    company: "Geosapiens",
    period: "abr 2021 – abr 2023",
    description:
      "Desenvolvimento e manutenção de testes automatizados end-to-end com Cypress e CodeceptJS, garantindo qualidade e confiabilidade das aplicações. Construção de interfaces web em React (JavaScript e TypeScript), manutenção de aplicações Angular e testes unitários com Jest, em times ágeis com Scrum e entrega contínua.",
    tech: ["React", "TypeScript", "Angular", "Cypress", "Jest"],
  },
];

function techIcon(tech) {
  const slug = TECH_ICON_SLUGS[tech];
  if (!slug) {
    const badge = document.createElement("span");
    badge.className = "tech-badge";
    badge.textContent = tech;
    return badge;
  }
  const img = document.createElement("img");
  img.src = `${DEVICON_BASE}/${slug}.svg`;
  img.alt = tech;
  img.title = tech;
  img.loading = "lazy";
  img.decoding = "async";
  img.onerror = () => {
    const badge = document.createElement("span");
    badge.className = "tech-badge";
    badge.textContent = tech;
    img.replaceWith(badge);
  };
  return img;
}

function escapeXml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c]));
}

// Flat browser-mockup placeholder, on-brand with the hero illustration.
// Used whenever a project has no live deploy, or as a fallback if a
// local screenshot is missing.
function placeholderPreview(title) {
  // Base is deliberately lighter than the page's --bg-dark (#2F3242) so the
  // card doesn't visually merge into the surrounding page background.
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="#363a56"/>
    <rect width="800" height="46" fill="#282b40"/>
    <circle cx="28" cy="23" r="7" fill="#F25C61"/>
    <circle cx="52" cy="23" r="7" fill="#5b5e73"/>
    <circle cx="76" cy="23" r="7" fill="#5b5e73"/>
    <rect x="110" y="14" width="560" height="18" rx="9" fill="#454869"/>
    <rect x="80" y="120" width="300" height="100" rx="8" fill="#F25C61" opacity="0.85"/>
    <rect x="400" y="120" width="320" height="100" rx="8" fill="#ffffff" opacity="0.12"/>
    <rect x="80" y="240" width="640" height="14" rx="4" fill="#454869"/>
    <rect x="80" y="266" width="480" height="14" rx="4" fill="#454869"/>
    <text x="400" y="360" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#F7898D" text-anchor="middle" letter-spacing="1">${escapeXml(title)}</text>
    <text x="400" y="392" font-family="Arial, sans-serif" font-size="15" fill="#b4b6cc" text-anchor="middle">preview em breve</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function previewImage(project) {
  return project.preview || null;
}

function buildCard(project) {
  const card = document.createElement("article");
  card.className = "card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "card-image-wrap";
  const img = document.createElement("img");
  img.src = previewImage(project) || placeholderPreview(project.title);
  img.alt = `Preview do projeto ${project.title}`;
  img.loading = "lazy";
  img.decoding = "async";
  img.onerror = () => {
    img.onerror = null;
    img.src = placeholderPreview(project.title);
  };
  imageWrap.appendChild(img);

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = project.description;

  const techRow = document.createElement("div");
  techRow.className = "card-tech";
  project.tech.forEach((tech) => techRow.appendChild(techIcon(tech)));

  const actions = document.createElement("div");
  actions.className = "card-actions";

  if (project.demoUrl) {
    const demoBtn = document.createElement("a");
    demoBtn.className = "btn btn-coral";
    demoBtn.href = project.demoUrl;
    demoBtn.target = "_blank";
    demoBtn.rel = "noopener noreferrer";
    demoBtn.textContent = "ACESSAR";
    demoBtn.setAttribute("aria-label", `Acessar o deploy do projeto ${project.title}`);
    actions.appendChild(demoBtn);
  }

  const repoBtn = document.createElement("a");
  repoBtn.className = "btn btn-gray";
  repoBtn.href = project.repoUrl;
  repoBtn.target = "_blank";
  repoBtn.rel = "noopener noreferrer";
  repoBtn.textContent = "REPOSITÓRIO";
  repoBtn.setAttribute("aria-label", `Ver o repositório do projeto ${project.title}`);
  actions.appendChild(repoBtn);

  body.append(title, desc, techRow, actions);
  card.append(imageWrap, body);
  return card;
}

function buildExperienceItem(job) {
  const li = document.createElement("li");

  const header = document.createElement("div");
  header.className = "about-header";

  const roleLine = document.createElement("span");
  const role = document.createElement("span");
  role.className = "about-role";
  role.textContent = job.role;
  roleLine.appendChild(role);
  roleLine.append(" · ");

  const companySpan = document.createElement("span");
  companySpan.className = "about-company";
  if (job.logo) {
    const logo = document.createElement("img");
    logo.className = "about-logo";
    logo.src = job.logo;
    logo.alt = "";
    logo.width = 22;
    logo.height = 22;
    logo.loading = "lazy";
    logo.decoding = "async";
    companySpan.appendChild(logo);
  }
  companySpan.append(job.company);
  roleLine.appendChild(companySpan);
  header.appendChild(roleLine);

  if (job.period) {
    const period = document.createElement("span");
    period.className = "about-period";
    period.textContent = job.period;
    header.appendChild(period);
  }

  const desc = document.createElement("p");
  desc.className = "about-desc";
  desc.textContent = job.description;

  const techRow = document.createElement("div");
  techRow.className = "about-tech";
  job.tech.forEach((tech) => techRow.appendChild(techIcon(tech)));

  li.append(header, desc, techRow);
  return li;
}

function renderExperience() {
  const list = document.getElementById("aboutList");
  const fragment = document.createDocumentFragment();
  experience.forEach((job) => fragment.appendChild(buildExperienceItem(job)));
  list.appendChild(fragment);
}

function renderProjects() {
  const grid = document.getElementById("cardsGrid");
  const fragment = document.createDocumentFragment();
  projects.forEach((project) => fragment.appendChild(buildCard(project)));
  grid.appendChild(fragment);
}

renderExperience();
renderProjects();
