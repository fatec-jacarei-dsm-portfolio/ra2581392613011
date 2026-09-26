const I18N = (() => {
  const STORAGE_KEY = "julia-lang";
  const dict = {
    pt: {
      "meta.title": "Júlia Silvério — Portfólio | DSM Fatec Jacareí",
      "meta.description": "Portfólio de Júlia Silvério, estudante de Desenvolvimento de Software Multiplataforma na Fatec Jacareí.",
      "nav.pular": "Pular para o conteúdo",
      "nav.inicio": "INÍCIO",
      "nav.sobre": "SOBRE",
      "nav.projetos": "PROJETOS",
      "nav.extras": "EXTRAS",
      "nav.contato": "CONTATO",
      "nav.principal": "Navegação principal",
      "nav.rodape": "Navegação do rodapé",
      "nav.abrirMenu": "Abrir menu de navegação",
      "nav.fecharMenu": "Fechar menu de navegação",
      "nav.temaEscuro": "Alternar para tema escuro",
      "nav.temaClaro": "Alternar para tema claro",
      "nav.trocarIdioma": "Switch to English",
      "loader.texto": "CARREGANDO...",
      "hero.titulo": 'Olá, eu sou a <span class="hero__name">Júlia</span>!',
      "hero.subtitulo": "Estudante de Desenvolvimento de Software Multiplataforma na Fatec",
      "hero.terminal": "> escrevendo código, aprendendo coisas novas e acumulando abas abertas no navegador",
      "hero.verProjetos": "VER PROJETOS",
      "hero.sobreMim": "SOBRE MIM",
      "hero.local": "São José dos Campos — SP",
      "hero.rolar": "▼ ROLE PARA CONTINUAR",
      "sobre.titulo": "Sobre",
      "sobre.fotoAlt": "Foto de Júlia Silvério",
      "sobre.apresentacao": "Movida pela curiosidade, vejo cada projeto como uma oportunidade de aprendizado. Tenho grande interesse por tecnologia e pelo processo de transformar problemas em soluções através do código. Entre estudos, projetos e novas descobertas, sigo construindo minha trajetória na área de desenvolvimento de software, sempre buscando evoluir minhas habilidades e acompanhar as constantes mudanças do mundo da tecnologia.",
      "sobre.objetivosTitulo": "Objetivos",
      "sobre.objetivos": "Busco minha primeira oportunidade na área de desenvolvimento, com interesse em desenvolvimento web full stack e em aprofundar backend com Node.js e bancos de dados relacionais. Quero participar de projetos onde eu possa aprender com pessoas mais experientes e contribuir de verdade com código.",
      "sobre.autonomia": "Uso com autonomia",
      "sobre.autonomiaAria": "Uso com autonomia: nível 5 de 5",
      "sobre.pratica": "Em prática",
      "sobre.praticaAria": "Em prática: nível 3 de 5",
      "sobre.estudando": "Estudando agora",
      "sobre.estudandoAria": "Estudando agora: nível 2 de 5",
      "sobre.proximoNivel": "Próximo nível em carregamento...",
      "proj.titulo": "Projetos",
      "proj.academicos": "Acadêmicos",
      "proj.pessoais": "Pessoais",
      "proj.catAcademico": "ACADÊMICO",
      "proj.catPessoal": "PESSOAL",
      "proj.nivel1dsm": "LEVEL 01 · 1DSM – 1º Sem. 2026",
      "proj.nivel2dsm": "LEVEL 02 · 2DSM – 2º Sem. 2026",
      "proj.nivelPessoal": "LEVEL 01 · 1º Sem. 2026",
      "proj.contribuicao": "Minha contribuição",
      "proj.status": "EM ANDAMENTO",
      "proj.verRepo": "VER REPOSITÓRIO",
      "proj.novaAba": "(abre em nova aba)",
      "proj.verTodos": "VER TODOS OS REPOSITÓRIOS",
      "proj.profissionaisTitulo": "Profissionais",
      "proj.profissionais": "Em busca da primeira oportunidade — este espaço fica reservado para ela.",
      "proj.abp1.nome": "Sprint Master",
      "proj.abp1.desc": "Plataforma web desenvolvida pela equipe TechFellas na Fatec Jacareí, com a missão de facilitar o aprendizado de metodologias ágeis. O portal oferece atividades interativas para testar e validar o conhecimento em Scrum, emitindo certificado ao final dos módulos.",
      "proj.abp1.contrib1": "Atuação como desenvolvedora full stack, do design das telas à regra de negócio.",
      "proj.abp1.contrib2": "Design e desenvolvimento responsivo das interfaces e do dashboard do usuário.",
      "proj.abp1.contrib3": "Autenticação com senha e tokens, integrada ao banco de dados PostgreSQL.",
      "proj.abp1.contrib4": "Progressão de módulos e implementação das regras de negócio dos quizzes.",
      "proj.abp1.contrib5": "Refatoração da arquitetura backend com separação de responsabilidades, API RESTful e documentação do projeto.",
      "proj.abp2.nome": "Projeto Integrador 2DSM",
      "proj.abp2.desc": "O Projeto Integrador do 2º semestre está sendo realizado agora, ao longo do 2º semestre de 2026. Nome, descrição, tecnologias e repositório serão publicados aqui assim que o projeto for concluído.",
      "proj.abp2.contrib": "Em atualização — minha contribuição individual será descrita ao término das sprints.",
      "proj.abp2.progressoAria": "Andamento do projeto: nível 1 de 5",
      "proj.abp2.tag": "Em definição",
      "proj.abp2.repo": "Repositório em breve...",
      "proj.at1.desc": "Projeto web de autenticação utilizando Node.js, da disciplina de Desenvolvimento Web, com o objetivo de aprender a utilizar a biblioteca Express para criação de servidores e definição de rotas.",
      "proj.at1.contrib1": "Projeto individual: implementei todo o código.",
      "proj.at1.contrib2": "Servidor Express com variáveis de ambiente via dotenv e pasta de arquivos estáticos.",
      "proj.at1.contrib3": "Rotas para as páginas inicial, de login e de cadastro.",
      "proj.at1.contrib4": "Tratamento de rotas inválidas com página 404 personalizada.",
      "proj.at2.desc": "Atividade prática de desenvolvimento web com o objetivo de construir uma página com HTML dinâmico e requisições HTTP para consulta de CEPs.",
      "proj.at2.contrib1": "Projeto individual: implementei todo o código.",
      "proj.at2.contrib2": "Consumo da API ViaCEP com fetch e async/await.",
      "proj.at2.contrib3": "Validação do CEP digitado e estados de carregamento, erro e sucesso na tela.",
      "proj.at2.contrib4": "Geração dinâmica do HTML com os dados do endereço e busca pela tecla Enter.",
      "proj.hello.desc": "Repositório criado para praticar o fluxo de trabalho do GitHub.",
      "proj.hello.contrib": "Criei o repositório e exercitei o ciclo completo de branch, commit, pull request e merge, incluindo a revisão de contribuições de colega, consolidando o fluxo de versionamento que passei a usar nos projetos seguintes.",
      "extras.titulo": "Extras",
      "extras.formacao": "Formação",
      "extras.curso": '<strong>Tecnólogo em Desenvolvimento de Software Multiplataforma</strong> — Fatec Jacareí "Professor Francisco de Moura", 2026 – 2028, cursando.',
      "extras.anterior": "Registros anteriores: Ensino Médio Integral (completo) — Escola Nelson do Nascimento Monteiro, 2023 – 2025.",
      "extras.idiomas": "Idiomas",
      "extras.portugues": "Português (nativo)",
      "extras.ingles": "Inglês (básico)",
      "extras.hobbies": "Hobbies",
      "extras.leitura": "Leitura",
      "extras.pesquisa": "Pesquisa",
      "extras.artes": "Artes",
      "contato.titulo": "Contato",
      "contato.chamada": "Vamos conversar?",
      "contato.texto": "Estou aberta a oportunidades, projetos e networking.",
      "footer.fim": "FIM DE JOGO — OBRIGADA POR JOGAR :)",
      "footer.copy": "© 2026 Júlia Silvério · Fatec Jacareí — DSM",
      "erro.title": "404 — Arquivo não encontrado | Júlia Silvério",
      "erro.titulo": "404 — ARQUIVO NÃO ENCONTRADO",
      "erro.texto": "Essa página saiu para caçar cactos e não voltou.",
      "erro.dica": "Confira o endereço ou volte para o início.",
      "erro.voltar": "VOLTAR AO INÍCIO",
      "erro.dinoAlt": "Dinossauro pixelado, como o do jogo offline do navegador"
    },
    en: {
      "meta.title": "Júlia Silvério — Portfolio | DSM Fatec Jacareí",
      "meta.description": "Portfolio of Júlia Silvério, Multiplatform Software Development student at Fatec Jacareí.",
      "nav.pular": "Skip to content",
      "nav.inicio": "HOME",
      "nav.sobre": "ABOUT",
      "nav.projetos": "PROJECTS",
      "nav.extras": "EXTRAS",
      "nav.contato": "CONTACT",
      "nav.principal": "Main navigation",
      "nav.rodape": "Footer navigation",
      "nav.abrirMenu": "Open navigation menu",
      "nav.fecharMenu": "Close navigation menu",
      "nav.temaEscuro": "Switch to dark theme",
      "nav.temaClaro": "Switch to light theme",
      "nav.trocarIdioma": "Mudar para português",
      "loader.texto": "LOADING...",
      "hero.titulo": 'Hi, I\'m <span class="hero__name">Júlia</span>!',
      "hero.subtitulo": "Multiplatform Software Development student at Fatec",
      "hero.terminal": "> writing code, learning new things and piling up open browser tabs",
      "hero.verProjetos": "VIEW PROJECTS",
      "hero.sobreMim": "ABOUT ME",
      "hero.local": "São José dos Campos — SP, Brazil",
      "hero.rolar": "▼ SCROLL TO CONTINUE",
      "sobre.titulo": "About",
      "sobre.fotoAlt": "Photo of Júlia Silvério",
      "sobre.apresentacao": "Driven by curiosity, I see every project as a chance to learn. I have a strong interest in technology and in the process of turning problems into solutions through code. Between studies, projects and new discoveries, I keep building my path in software development, always looking to grow my skills and keep up with the constant changes in the tech world.",
      "sobre.objetivosTitulo": "Goals",
      "sobre.objetivos": "I'm looking for my first opportunity in software development, with an interest in full stack web development and in going deeper into backend with Node.js and relational databases. I want to join projects where I can learn from more experienced people and truly contribute with code.",
      "sobre.autonomia": "Use independently",
      "sobre.autonomiaAria": "Use independently: level 5 of 5",
      "sobre.pratica": "Practicing",
      "sobre.praticaAria": "Practicing: level 3 of 5",
      "sobre.estudando": "Studying now",
      "sobre.estudandoAria": "Studying now: level 2 of 5",
      "sobre.proximoNivel": "Next level loading...",
      "proj.titulo": "Projects",
      "proj.academicos": "Academic",
      "proj.pessoais": "Personal",
      "proj.catAcademico": "ACADEMIC",
      "proj.catPessoal": "PERSONAL",
      "proj.nivel1dsm": "LEVEL 01 · 1DSM – 1st Sem. 2026",
      "proj.nivel2dsm": "LEVEL 02 · 2DSM – 2nd Sem. 2026",
      "proj.nivelPessoal": "LEVEL 01 · 1st Sem. 2026",
      "proj.contribuicao": "My contribution",
      "proj.status": "IN PROGRESS",
      "proj.verRepo": "VIEW REPOSITORY",
      "proj.novaAba": "(opens in a new tab)",
      "proj.verTodos": "VIEW ALL REPOSITORIES",
      "proj.profissionaisTitulo": "Professional",
      "proj.profissionais": "Looking for my first opportunity — this space is reserved for it.",
      "proj.abp1.nome": "Sprint Master",
      "proj.abp1.desc": "Web platform built by the TechFellas team at Fatec Jacareí to make learning agile methodologies easier. The portal offers interactive activities to test and validate Scrum knowledge, issuing a certificate at the end of the modules.",
      "proj.abp1.contrib1": "Full stack developer, from screen design to business rules.",
      "proj.abp1.contrib2": "Design and responsive development of the interfaces and the user dashboard.",
      "proj.abp1.contrib3": "Password and token-based authentication, integrated with the PostgreSQL database.",
      "proj.abp1.contrib4": "Module progression and implementation of the quiz business rules.",
      "proj.abp1.contrib5": "Backend architecture refactoring with separation of concerns, RESTful API and project documentation.",
      "proj.abp2.nome": "Integrative Project 2DSM",
      "proj.abp2.desc": "The 2nd semester Integrative Project is being carried out right now, throughout the 2nd semester of 2026. Name, description, technologies and repository will be published here as soon as the project is finished.",
      "proj.abp2.contrib": "Being updated — my individual contribution will be described once the sprints are over.",
      "proj.abp2.progressoAria": "Project progress: level 1 of 5",
      "proj.abp2.tag": "To be defined",
      "proj.abp2.repo": "Repository coming soon...",
      "proj.at1.desc": "Web authentication project using Node.js, from the Web Development course, aimed at learning how to use the Express library to create servers and define routes.",
      "proj.at1.contrib1": "Solo project: I implemented all the code.",
      "proj.at1.contrib2": "Express server with environment variables via dotenv and a static files folder.",
      "proj.at1.contrib3": "Routes for the home, login and sign-up pages.",
      "proj.at1.contrib4": "Handling of invalid routes with a custom 404 page.",
      "proj.at2.desc": "Hands-on web development activity aimed at building a page with dynamic HTML and HTTP requests to look up Brazilian postal codes (CEP).",
      "proj.at2.contrib1": "Solo project: I implemented all the code.",
      "proj.at2.contrib2": "Consumption of the ViaCEP API with fetch and async/await.",
      "proj.at2.contrib3": "Validation of the typed CEP and loading, error and success states on screen.",
      "proj.at2.contrib4": "Dynamic HTML generation with the address data and search on the Enter key.",
      "proj.hello.desc": "Repository created to practice the GitHub workflow.",
      "proj.hello.contrib": "I created the repository and practiced the full cycle of branch, commit, pull request and merge, including reviewing a classmate's contributions, consolidating the versioning workflow I went on to use in later projects.",
      "extras.titulo": "Extras",
      "extras.formacao": "Education",
      "extras.curso": '<strong>Associate Degree in Multiplatform Software Development</strong> — Fatec Jacareí "Professor Francisco de Moura", 2026 – 2028, in progress.',
      "extras.anterior": "Previous education: Full-time High School (completed) — Nelson do Nascimento Monteiro School, 2023 – 2025.",
      "extras.idiomas": "Languages",
      "extras.portugues": "Portuguese (native)",
      "extras.ingles": "English (basic)",
      "extras.hobbies": "Hobbies",
      "extras.leitura": "Reading",
      "extras.pesquisa": "Research",
      "extras.artes": "Arts",
      "contato.titulo": "Contact",
      "contato.chamada": "Let's talk?",
      "contato.texto": "I'm open to opportunities, projects and networking.",
      "footer.fim": "GAME OVER — THANKS FOR PLAYING :)",
      "footer.copy": "© 2026 Júlia Silvério · Fatec Jacareí — DSM",
      "erro.title": "404 — File not found | Júlia Silvério",
      "erro.titulo": "404 — FILE NOT FOUND",
      "erro.texto": "This page went out hunting cacti and never came back.",
      "erro.dica": "Check the address or head back home.",
      "erro.voltar": "BACK TO HOME",
      "erro.dinoAlt": "Pixel dinosaur, like the one in the browser's offline game"
    }
  };
  let current = "pt";

  function t(key) {
    return (dict[current] && dict[current][key]) ?? dict.pt[key] ?? key;
  }

  function apply(lang) {
    current = dict[lang] ? lang : "pt";
    document.documentElement.lang = current === "pt" ? "pt-BR" : "en";
    const titleKey = document.body.classList.contains("notfound") ? "erro.title" : "meta.title";
    document.title = t(titleKey);
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(current === "en"));
      toggle.setAttribute("aria-label", t("nav.trocarIdioma"));
      toggle.dataset.lang = current;
    }
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
  }

  function init() {
    let saved = "pt";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "pt" || stored === "en") saved = stored;
    } catch (e) { /* armazenamento bloqueado: fica em PT nesta visita */ }
    apply(saved);

    document.getElementById("lang-toggle")?.addEventListener("click", () => {
      const next = current === "pt" ? "en" : "pt";
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      apply(next);
    });
  }

  return { init, t, get lang() { return current; } };
})();
