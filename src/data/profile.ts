export const profile = {
  name: 'Douglas Neto',
  fullName: 'Douglas Rodrigues Pinto Neto',
  role: 'Engenheiro de Software iOS',
  headline: 'Construo apps de pagamento para iOS usados por milhões de brasileiros.',
  bio: 'Desenvolvo para iOS desde 2017, com Swift, SwiftUI e UIKit, e passei por alguns dos maiores apps financeiros do país: Itaú, PagBank e, hoje, Mercado Pago no Mercado Livre. Também sou instrutor de Swift no iOS Lab, formando novos desenvolvedores Apple.',
  location: 'São Paulo, SP',
  available: true,
  email: 'douugr@gmail.com',
  resumeUrl: '', // TODO: colocar o PDF em public/ e usar '/curriculo.pdf'
  social: {
    github: 'https://github.com/douugr',
    linkedin: 'https://www.linkedin.com/in/douglasrodriguespintoneto',
  },
};

export const experience = [
  {
    company: 'Mercado Livre',
    role: 'Software Engineer',
    period: 'mai 2025 — atual',
    description:
      'Ecossistema de pagamentos do Mercado Pago: apps e bibliotecas mobile do produto InStore, com pagamento por QR (geração e leitura), checkout no ponto de venda, integração com maquininhas e processamento de transações em loja física.',
    stack: ['Swift', 'iOS', 'Pagamentos'],
  },
  {
    company: 'iOS Lab',
    role: 'Instrutor de Swift',
    period: 'jan 2026 — atual',
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
    description: 'Desenvolvimento iOS no app Banco PagBank, contribuindo para soluções de pagamento.',
    stack: ['Swift', 'iOS'],
  },
  {
    company: 'BRQ Digital Solutions',
    role: 'Desenvolvedor iOS · Estagiário → Júnior → Pleno',
    period: 'set 2017 — jun 2021',
    description: 'Quase quatro anos de desenvolvimento nativo para iOS com Swift, do estágio até desenvolvedor pleno.',
    stack: ['Swift', 'UIKit'],
  },
];

// TODO: confirmar/ajustar — só Swift, SwiftUI, UIKit, CI/CD e Spec-Driven Development vieram do LinkedIn.
export const skills: { group: string; items: string[] }[] = [
  { group: 'Linguagens & UI', items: ['Swift', 'SwiftUI', 'UIKit', 'Objective-C'] },
  { group: 'Arquitetura', items: ['MVVM', 'VIP / Clean Swift', 'Modularização', 'Swift Package Manager'] },
  { group: 'Qualidade & entrega', items: ['XCTest', 'CI/CD', 'Fastlane', 'Spec-Driven Development'] },
  { group: 'Domínio', items: ['Pagamentos', 'Pix / QR Code', 'Apps bancários', 'Ponto de venda'] },
  { group: 'Idiomas', items: ['Português (nativo)', 'Inglês (profissional pleno)', 'Espanhol (profissional)'] },
];

export const education = [
  { school: 'UNINTER', course: 'Análise e Desenvolvimento de Sistemas', period: '2025 — 2027' },
  { school: 'Fatec Carapicuíba', course: 'Desenvolvimento de Jogos Digitais', period: '2015 — 2018' },
  { school: 'Fatec Ourinhos', course: 'Análise de Sistemas e Tecnologia da Informação', period: '2010 — 2014' },
];

export const certifications = ['Scrum Foundation Professional Certificate'];
