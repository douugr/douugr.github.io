export const languages = { pt: 'PT', en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'pt';

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
export const ogLocale: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
export const numberLocale: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };

const projectsSegment: Record<Lang, string> = { pt: 'projetos', en: 'projects', es: 'proyectos' };

/** Caminho da home em cada idioma. */
export const homePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);

/** Caminho da página de um projeto em cada idioma. */
export const projectPath = (lang: Lang, slug: string) =>
  `${lang === defaultLang ? '' : `/${lang}`}/${projectsSegment[lang]}/${slug}/`;

export const ui = {
  pt: {
    skip: 'Pular para o conteúdo',
    'nav.projects': 'Projetos',
    'nav.apps': 'Apps',
    'nav.career': 'Carreira',
    'nav.stack': 'Stack',
    'nav.volunteer': 'Voluntariado',
    'nav.contact': 'Contato',
    'lang.label': 'Idioma',
    'hero.ctaProjects': 'Ver projetos',
    'hero.ctaContact': 'Contato',
    'projects.title': 'Projetos',
    'projects.subtitle': 'Produtos de pagamento e banking em que atuei como desenvolvedor iOS, do mais recente ao mais antigo.',
    'projects.for': 'para',
    'apps.title': 'Apps',
    'apps.subtitle': 'Onde esses projetos chegam às mãos de milhões de pessoas.',
    'apps.ratings': 'avaliações',
    'apps.projects': 'Projetos',
    'apps.iconAlt': 'Ícone do app',
    'store.cta': 'Ver na App Store',
    'career.title': 'Carreira',
    'volunteer.title': 'Voluntariado',
    'volunteer.subtitle': 'Tecnologia a serviço de um projeto social.',
    'volunteer.visit': 'Visitar site',
    'stack.title': 'Stack & formação',
    'stack.education': 'Formação',
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Para trocar ideias sobre iOS, mentorias ou bons projetos de app.',
    'contact.resume': 'Currículo',
    'project.back': '← voltar',
    'project.company': 'empresa',
    'project.app': 'app',
    'footer.built': 'feito com Astro · GitHub Pages',
    'footer.note':
      'Marcas e ícones de apps pertencem às respectivas empresas. Este é um site pessoal, sem vínculo oficial com elas. Estética inspirada nas capas de videogame dos anos 90.',
  },
  en: {
    skip: 'Skip to content',
    'nav.projects': 'Projects',
    'nav.apps': 'Apps',
    'nav.career': 'Career',
    'nav.stack': 'Stack',
    'nav.volunteer': 'Volunteering',
    'nav.contact': 'Contact',
    'lang.label': 'Language',
    'hero.ctaProjects': 'See projects',
    'hero.ctaContact': 'Contact',
    'projects.title': 'Projects',
    'projects.subtitle': 'Payments and banking products I worked on as an iOS developer, from newest to oldest.',
    'projects.for': 'for',
    'apps.title': 'Apps',
    'apps.subtitle': 'Where these projects reach millions of people.',
    'apps.ratings': 'ratings',
    'apps.projects': 'Projects',
    'apps.iconAlt': 'App icon for',
    'store.cta': 'View on the App Store',
    'career.title': 'Career',
    'volunteer.title': 'Volunteering',
    'volunteer.subtitle': 'Technology in service of a social project.',
    'volunteer.visit': 'Visit website',
    'stack.title': 'Stack & education',
    'stack.education': 'Education',
    'contact.title': "Let's talk",
    'contact.subtitle': 'Happy to chat about iOS, mentoring or great app ideas.',
    'contact.resume': 'Résumé',
    'project.back': '← back',
    'project.company': 'company',
    'project.app': 'app',
    'footer.built': 'built with Astro · GitHub Pages',
    'footer.note':
      'App names and icons belong to their respective companies. This is a personal website with no official affiliation. Design inspired by 90s video game box art.',
  },
  es: {
    skip: 'Saltar al contenido',
    'nav.projects': 'Proyectos',
    'nav.apps': 'Apps',
    'nav.career': 'Trayectoria',
    'nav.stack': 'Stack',
    'nav.volunteer': 'Voluntariado',
    'nav.contact': 'Contacto',
    'lang.label': 'Idioma',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaContact': 'Contacto',
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Productos de pagos y banca en los que trabajé como desarrollador iOS, del más reciente al más antiguo.',
    'projects.for': 'para',
    'apps.title': 'Apps',
    'apps.subtitle': 'Donde estos proyectos llegan a millones de personas.',
    'apps.ratings': 'valoraciones',
    'apps.projects': 'Proyectos',
    'apps.iconAlt': 'Ícono de la app',
    'store.cta': 'Ver en App Store',
    'career.title': 'Trayectoria',
    'volunteer.title': 'Voluntariado',
    'volunteer.subtitle': 'Tecnología al servicio de un proyecto social.',
    'volunteer.visit': 'Visitar sitio',
    'stack.title': 'Stack y formación',
    'stack.education': 'Formación',
    'contact.title': '¿Hablamos?',
    'contact.subtitle': 'Para charlar sobre iOS, mentorías o buenas ideas de apps.',
    'contact.resume': 'Currículum',
    'project.back': '← volver',
    'project.company': 'empresa',
    'project.app': 'app',
    'footer.built': 'hecho con Astro · GitHub Pages',
    'footer.note':
      'Las marcas e íconos de las apps pertenecen a sus respectivas empresas. Este es un sitio personal, sin vínculo oficial con ellas. Estética inspirada en las portadas de videojuegos de los años 90.',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt'];
export const useTranslations = (lang: Lang) => (key: UIKey) => ui[lang][key];
