# Prompt — Site portfólio single page (estilo comarialuiza.netlify.app)

Copie e cole o prompt abaixo em qualquer ferramenta de geração (Claude, v0, Lovable, Bolt etc.):

---

Crie um site portfólio single page, responsivo, em HTML/CSS/JS (ou React + Vite), com o seguinte design e conteúdo:

## Design (referência: portfólio dev com hero escuro + cards claros)

**Estrutura geral:**
- Página única com duas grandes áreas: um hero de fundo escuro (azul-marinho acinzentado, ex. `#2F3242`) e uma seção de projetos com cards brancos sobre o mesmo fundo escuro.
- Tipografia sans-serif limpa (ex. Roboto/Inter). Títulos de card em CAIXA ALTA, pequenos e em negrito. Texto justificado nas descrições.

**Hero (topo, 100vh ou próximo):**
- Duas colunas: à esquerda uma ilustração flat de um notebook e um smartphone exibindo telas de aplicação (estilo flat design, cor de destaque coral/vermelho suave `#F25C61`); à direita, centrado: nome em destaque, cargo em caixa alta menor, parágrafo curto de apresentação e dois botões lado a lado — "LinkedIn" (fundo coral) e "GitHub" (fundo coral), ambos com ícone.
- A cor de destaque (coral) é usada nos botões, na ilustração e em pequenos detalhes geométricos decorativos (quadradinhos e círculos espalhados).
- No meu caso, a ilustração pode ser substituída por um mockup/preview real dos meus projetos ou uma ilustração flat equivalente em tons de coral.

**Seção de projetos:**
- Grid de 2 colunas (1 coluna no mobile), com espaçamento generoso entre os cards.
- Cada card branco contém, nesta ordem:
  1. Imagem de preview do projeto no topo (screenshot da aplicação). Para gerar os previews, use screenshots reais das aplicações ou embeds tipo `https://image.thum.io/get/width/800/{URL}` para capturar automaticamente.
  2. Título do projeto em caixa alta, pequeno e em negrito.
  3. Parágrafo descritivo (texto justificado) explicando o que a aplicação faz e o que foi usado.
  4. Linha de ícones das tecnologias utilizadas (React, PHP, Java etc. — usar devicons).
  5. Dois botões: "ACESSAR" (coral, link do deploy quando houver) e "REPOSITÓRIO" (cinza-escuro, link do GitHub).
- Rodapé simples centralizado: "Made with ♡ by Caio".

## Dados pessoais (usar exatamente)

- **Nome:** Caio Graco G. Lima
- **Cargo:** Full Stack Engineer
- **Localização:** Natal-RN, Brasil
- **Apresentação (hero):** "Full Stack Engineer com experiência em aplicações SaaS, sustentação crítica e automação de qualidade. Desenvolvo, mantenho e evoluo sistemas web corporativos com React, TypeScript, PHP e ferramentas de QA automation — participando de todo o ciclo, da arquitetura ao deploy."
- **Stack para ícones/tags:** React, TypeScript, JavaScript, Node.js, PHP, Python, Java/Spring Boot, Angular, PostgreSQL, MySQL, Docker, Cypress, Jest, Supabase
- **LinkedIn:** https://www.linkedin.com/in/caio-graco-lima/
- **GitHub:** https://github.com/kiograco
- **Experiência (opcional, seção "Sobre" resumida):** Founder & Lead Software Engineer na NCProgrammers (2021–presente); Full Stack Support Engineer na Proesc (SaaS educacional); Desenvolvedor na Geosapiens (React, testes E2E com Cypress/CodeceptJS). Graduando em Engenharia de Software (Estácio).

## Projetos (6 cards, nesta ordem)

1. **MENTESA**
   - Descrição: SaaS que conecta psicólogos e psiquiatras a pacientes, cobrindo o fluxo clínico e de negócio de ponta a ponta: diretório de profissionais verificados, agendamento com Google Agenda, telehealth por vídeo (LiveKit), prontuário eletrônico em formato SOAP com assinatura digital, resumo de sessão com IA (Google Gemini), pagamentos reais (Mercado Pago, Pix) e lembretes por WhatsApp.
   - Tecnologias: React, TypeScript, Supabase, Tailwind
   - Acessar: https://mente-sa-woad.vercel.app
   - Repositório: https://github.com/kiograco/MenteSa
   - Preview: screenshot de https://mente-sa-woad.vercel.app

2. **NCPROGRAMMERS CRM (GestaoDeClientes)**
   - Descrição: CRM de atendimento multicanal (WhatsApp, Telegram, Instagram e Messenger) com gestão de contatos, filas e etiquetas, chatbot visual, ordens de serviço com agenda e PDF, controle de estoque com baixa automática, painel de superadmin multi-empresa e assinaturas pagas via Asaas (Pix e cartão).
   - Tecnologias: Node.js, Vue/Quasar, PostgreSQL, Docker
   - Acessar: https://gestao-de-clientes-khaki.vercel.app
   - Repositório: https://github.com/kiograco/GestaoDeClientes
   - Preview: screenshot de https://gestao-de-clientes-khaki.vercel.app

3. **ORDERHUB (Multi-Loja-SaaS)**
   - Descrição: Plataforma SaaS multi-loja de gestão de pedidos em PHP 8.3, construída para demonstrar arquitetura hexagonal, Event Sourcing, CQRS, processamento assíncrono via filas (Redis), API REST versionada com OpenAPI, interface web SSR (Twig + HTMX), CLI administrativo, testes automatizados e CI/CD.
   - Tecnologias: PHP 8.3, PostgreSQL, Redis, Docker
   - Repositório: https://github.com/kiograco/Multi-Loja-SaaS
   - Preview: screenshot da interface web local ou diagrama de arquitetura do README

4. **SAAS CONTROLE FINANCEIRO**
   - Descrição: Sistema SaaS multiempresa de gestão financeira e controle de ponto: contas a pagar/receber, centros de custo, dashboard e relatórios, cadastro de funcionários e jornadas, espelho de ponto e importação de CSV com preview e auditoria. Perfis de acesso por empresa com JWT.
   - Tecnologias: Java 21, Spring Boot 3, Angular 18, PostgreSQL, Docker
   - Repositório: https://github.com/kiograco/SaaS-Controle_Financeiro
   - Preview: screenshot do dashboard local

5. **SITE.PSI**
   - Descrição: Landing page profissional para clínica de psicologia, com seções de serviços, integração direta com WhatsApp e link para avaliações do Google. Deploy na Vercel.
   - Tecnologias: React, Vite
   - Acessar: https://site-psi-tau.vercel.app
   - Repositório: https://github.com/kiograco/site.psi
   - Preview: screenshot de https://site-psi-tau.vercel.app

6. **PORTFÓLIO**
   - Descrição: Este próprio site. Single page desenvolvida para expor meus projetos, consumindo um JSON com as informações de cada um e gerando os cards dinamicamente — o design do site é, em si, uma amostra do meu trabalho front-end.
   - Tecnologias: React (ou HTML/CSS/JS), Vite
   - Repositório: (link do repositório deste portfólio)
   - Preview: screenshot do próprio hero

## Requisitos técnicos

- Single page, sem rotas; rolagem suave.
- Responsivo (grid vira 1 coluna abaixo de 768px).
- Os projetos devem vir de um array/JSON central (título, descrição, imagem, stack, links) e os cards serem gerados a partir dele.
- SEO básico: title "Caio Graco | Full Stack Engineer", meta description e Open Graph.
- Acessibilidade: alt nas imagens, contraste adequado, foco visível.
- Performance: imagens de preview otimizadas (lazy loading).
