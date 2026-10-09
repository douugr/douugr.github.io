import type { Lang } from '../i18n/ui';

export const person = {
  name: 'Douglas Neto',
  fullName: 'Douglas Rodrigues Pinto Neto',
  kana: 'ダグラス・ネト',
  email: 'douugr@gmail.com',
  resumeUrl: '', // TODO: colocar o PDF em public/ e usar '/curriculo.pdf'
  social: {
    github: 'https://github.com/douugr',
    linkedin: 'https://www.linkedin.com/in/douglasrodriguespintoneto',
  },
};

type Job = { company: string; role: string; period: string; current?: boolean; description: string; stack: string[] };
type SkillGroup = { group: string; items: string[] };
type Education = { school: string; course: string; period: string };

type Content = {
  role: string;
  headline: string;
  bio: string;
  location: string;
  experience: Job[];
  skills: SkillGroup[];
  education: Education[];
  certifications: string[];
};

const certifications = ['Scrum Foundation Professional Certificate'];

// TODO: confirmar/ajustar a stack — só Swift, SwiftUI, UIKit, CI/CD e Spec-Driven Development vieram do LinkedIn.
const stackItems = {
  ui: ['Swift', 'SwiftUI', 'UIKit', 'Objective-C'],
  arch: ['MVVM', 'VIP / Clean Swift', 'Modularização', 'Swift Package Manager'],
  quality: ['XCTest', 'CI/CD', 'Fastlane', 'Spec-Driven Development'],
};

export const content: Record<Lang, Content> = {
  pt: {
    role: 'Engenheiro de Software iOS',
    headline: 'Construo apps de pagamento para iOS usados por milhões de brasileiros.',
    bio: 'Desenvolvo para iOS desde 2017, com Swift, SwiftUI e UIKit, e passei por alguns dos maiores apps financeiros do país: Itaú, PagBank e, hoje, Mercado Pago no Mercado Livre. Também sou instrutor de Swift no iOS Lab, formando novos desenvolvedores Apple.',
    location: 'São Paulo, SP',
    experience: [
      {
        company: 'Mercado Livre',
        role: 'Software Engineer',
        period: 'mai 2025 — atual',
        current: true,
        description:
          'Ecossistema de pagamentos do Mercado Pago: apps e bibliotecas mobile do produto InStore, com pagamento por QR (geração e leitura), checkout no ponto de venda, integração com maquininhas e processamento de transações em loja física.',
        stack: ['Swift', 'iOS', 'Pagamentos'],
      },
      {
        company: 'iOS Lab',
        role: 'Instrutor de Swift',
        period: 'jan 2026 — atual',
        current: true,
        description:
          'Formação de novos desenvolvedores no ecossistema Apple, da lógica de programação à publicação de apps completos, com trilhas que preparam para os desafios do mercado e para as certificações de Desenvolvedor Apple.',
        stack: ['Swift', 'SwiftUI', 'Ensino'],
      },
      {
        company: 'Itaú Unibanco',
        role: 'Analista de Engenharia Pleno',
        period: 'dez 2021 — mai 2025',
        description: 'Desenvolvimento iOS no app Banco Itaú, liderando projetos de desenvolvimento em um dos maiores bancos da América Latina.',
        stack: ['Swift', 'UIKit', 'CI/CD'],
      },
      {
        company: 'PagSeguro PagBank',
        role: 'Engenheiro de Software Júnior',
        period: 'jun 2021 — dez 2021',
        description: 'Desenvolvimento iOS do PlugPag, SDK que integra as maquininhas do PagSeguro à automação comercial.',
        stack: ['Swift', 'iOS'],
      },
      {
        company: 'BRQ Digital Solutions',
        role: 'Desenvolvedor iOS · Estagiário → Júnior → Pleno',
        period: 'set 2017 — jun 2021',
        description: 'Quase quatro anos de desenvolvimento nativo para iOS com Swift, do estágio até desenvolvedor pleno, incluindo o app iti do Itaú.',
        stack: ['Swift', 'UIKit'],
      },
    ],
    skills: [
      { group: 'Linguagens & UI', items: stackItems.ui },
      { group: 'Arquitetura', items: stackItems.arch },
      { group: 'Qualidade & entrega', items: stackItems.quality },
      { group: 'Domínio', items: ['Pagamentos', 'Pix / QR Code', 'Apps bancários', 'Ponto de venda'] },
      { group: 'Idiomas', items: ['Português (nativo)', 'Inglês (profissional pleno)', 'Espanhol (profissional)'] },
    ],
    education: [
      { school: 'UNINTER', course: 'Análise e Desenvolvimento de Sistemas', period: '2025 — 2027' },
      { school: 'Fatec Carapicuíba', course: 'Desenvolvimento de Jogos Digitais', period: '2015 — 2018' },
      { school: 'Fatec Ourinhos', course: 'Análise de Sistemas e Tecnologia da Informação', period: '2010 — 2014' },
    ],
    certifications,
  },

  en: {
    role: 'iOS Software Engineer',
    headline: 'I build iOS payment apps used by millions of Brazilians.',
    bio: "I've been building for iOS since 2017 with Swift, SwiftUI and UIKit, working on some of Brazil's largest financial apps: Itaú, PagBank and, today, Mercado Pago at Mercado Libre. I'm also a Swift instructor at iOS Lab, training the next generation of Apple developers.",
    location: 'São Paulo, Brazil',
    experience: [
      {
        company: 'Mercado Libre',
        role: 'Software Engineer',
        period: 'May 2025 — present',
        current: true,
        description:
          "Mercado Pago's payments ecosystem: mobile apps and libraries for the InStore product, including QR payments (generation and scanning), point-of-sale checkout, card terminal integration and in-store transaction processing.",
        stack: ['Swift', 'iOS', 'Payments'],
      },
      {
        company: 'iOS Lab',
        role: 'Swift Instructor',
        period: 'Jan 2026 — present',
        current: true,
        description:
          'Training new developers in the Apple ecosystem, from programming fundamentals to shipping complete apps, with learning paths that prepare students for real-world challenges and Apple Developer certifications.',
        stack: ['Swift', 'SwiftUI', 'Teaching'],
      },
      {
        company: 'Itaú Unibanco',
        role: 'Software Engineering Analyst',
        period: 'Dec 2021 — May 2025',
        description: "iOS development for the Banco Itaú app, leading development projects at one of Latin America's largest banks.",
        stack: ['Swift', 'UIKit', 'CI/CD'],
      },
      {
        company: 'PagSeguro PagBank',
        role: 'Junior Software Engineer',
        period: 'Jun 2021 — Dec 2021',
        description: "iOS development for PlugPag, an SDK that connects PagSeguro's card terminals to retail management systems.",
        stack: ['Swift', 'iOS'],
      },
      {
        company: 'BRQ Digital Solutions',
        role: 'iOS Developer · Intern → Junior → Mid-level',
        period: 'Sep 2017 — Jun 2021',
        description: "Nearly four years of native iOS development with Swift, from intern to mid-level developer, including Itaú's iti app.",
        stack: ['Swift', 'UIKit'],
      },
    ],
    skills: [
      { group: 'Languages & UI', items: stackItems.ui },
      { group: 'Architecture', items: stackItems.arch.map((i) => (i === 'Modularização' ? 'Modularization' : i)) },
      { group: 'Quality & delivery', items: stackItems.quality },
      { group: 'Domain', items: ['Payments', 'Pix / QR Code', 'Banking apps', 'Point of sale'] },
      { group: 'Languages', items: ['Portuguese (native)', 'English (full professional)', 'Spanish (professional working)'] },
    ],
    education: [
      { school: 'UNINTER', course: 'Systems Analysis and Development', period: '2025 — 2027' },
      { school: 'Fatec Carapicuíba', course: 'Digital Game Development', period: '2015 — 2018' },
      { school: 'Fatec Ourinhos', course: 'Systems Analysis and Information Technology', period: '2010 — 2014' },
    ],
    certifications,
  },

  es: {
    role: 'Ingeniero de Software iOS',
    headline: 'Desarrollo apps de pagos para iOS que usan millones de brasileños.',
    bio: 'Desarrollo para iOS desde 2017 con Swift, SwiftUI y UIKit, y trabajé en algunas de las mayores apps financieras de Brasil: Itaú, PagBank y, hoy, Mercado Pago en Mercado Libre. También soy instructor de Swift en iOS Lab, formando a nuevos desarrolladores Apple.',
    location: 'São Paulo, Brasil',
    experience: [
      {
        company: 'Mercado Libre',
        role: 'Software Engineer',
        period: 'may 2025 — actualidad',
        current: true,
        description:
          'Ecosistema de pagos de Mercado Pago: apps y bibliotecas mobile del producto InStore, con pagos por QR (generación y lectura), checkout en el punto de venta, integración con terminales de cobro y procesamiento de transacciones en tiendas físicas.',
        stack: ['Swift', 'iOS', 'Pagos'],
      },
      {
        company: 'iOS Lab',
        role: 'Instructor de Swift',
        period: 'ene 2026 — actualidad',
        current: true,
        description:
          'Formación de nuevos desarrolladores en el ecosistema Apple, desde la lógica de programación hasta la publicación de apps completas, con rutas que preparan para los desafíos del mercado y las certificaciones de Apple Developer.',
        stack: ['Swift', 'SwiftUI', 'Docencia'],
      },
      {
        company: 'Itaú Unibanco',
        role: 'Analista de Ingeniería Semi Senior',
        period: 'dic 2021 — may 2025',
        description: 'Desarrollo iOS en la app Banco Itaú, liderando proyectos de desarrollo en uno de los mayores bancos de América Latina.',
        stack: ['Swift', 'UIKit', 'CI/CD'],
      },
      {
        company: 'PagSeguro PagBank',
        role: 'Ingeniero de Software Junior',
        period: 'jun 2021 — dic 2021',
        description: 'Desarrollo iOS de PlugPag, un SDK que integra las terminales de cobro de PagSeguro con los sistemas de gestión comercial.',
        stack: ['Swift', 'iOS'],
      },
      {
        company: 'BRQ Digital Solutions',
        role: 'Desarrollador iOS · Pasante → Junior → Semi Senior',
        period: 'sep 2017 — jun 2021',
        description: 'Casi cuatro años de desarrollo nativo para iOS con Swift, de pasante a desarrollador semi senior, incluyendo la app iti de Itaú.',
        stack: ['Swift', 'UIKit'],
      },
    ],
    skills: [
      { group: 'Lenguajes y UI', items: stackItems.ui },
      { group: 'Arquitectura', items: stackItems.arch.map((i) => (i === 'Modularização' ? 'Modularización' : i)) },
      { group: 'Calidad y entrega', items: stackItems.quality },
      { group: 'Dominio', items: ['Pagos', 'Pix / QR Code', 'Apps bancarias', 'Punto de venta'] },
      { group: 'Idiomas', items: ['Portugués (nativo)', 'Inglés (profesional completo)', 'Español (profesional)'] },
    ],
    education: [
      { school: 'UNINTER', course: 'Análisis y Desarrollo de Sistemas', period: '2025 — 2027' },
      { school: 'Fatec Carapicuíba', course: 'Desarrollo de Videojuegos', period: '2015 — 2018' },
      { school: 'Fatec Ourinhos', course: 'Análisis de Sistemas y Tecnologías de la Información', period: '2010 — 2014' },
    ],
    certifications,
  },
};
