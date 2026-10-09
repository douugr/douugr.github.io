// TODO: substituir pelos dados reais (LinkedIn / currículo).
export const profile = {
  name: 'Douglas Neto',
  fullName: 'Douglas Rodrigues Pinto Neto',
  role: 'Desenvolvedor Mobile',
  headline: 'Construo apps iOS e Android que as pessoas gostam de usar.',
  bio: 'Texto provisório: resumo de 2–3 frases sobre quem você é, há quanto tempo trabalha com mobile, em que tipo de produto atua e o que te diferencia.',
  location: 'Brasil',
  available: true,
  email: 'contato@douugr.dev.br', // TODO: confirmar e-mail público
  resumeUrl: '/curriculo.pdf', // TODO: adicionar o PDF em public/
  social: {
    github: 'https://github.com/douugr',
    linkedin: 'https://www.linkedin.com/in/douglasrodriguespintoneto',
  },
};

export const experience = [
  // TODO: preencher com as experiências reais, da mais recente para a mais antiga.
  {
    company: 'Empresa atual',
    role: 'Desenvolvedor Mobile Sênior',
    period: '2023 — atual',
    description: 'Descrição curta do impacto: o que construiu, para quantos usuários, que problemas resolveu.',
    stack: ['Kotlin', 'Swift'],
  },
  {
    company: 'Empresa anterior',
    role: 'Desenvolvedor Mobile',
    period: '2020 — 2023',
    description: 'Descrição curta do impacto.',
    stack: ['Flutter'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  // TODO: ajustar para a sua stack real.
  { group: 'Linguagens', items: ['Kotlin', 'Swift', 'Dart', 'TypeScript'] },
  { group: 'UI', items: ['Jetpack Compose', 'SwiftUI', 'Flutter', 'React Native'] },
  { group: 'Arquitetura', items: ['MVVM', 'Clean Architecture', 'Modularização'] },
  { group: 'Qualidade & CI/CD', items: ['Testes unitários/UI', 'Fastlane', 'GitHub Actions'] },
  { group: 'Serviços', items: ['Firebase', 'REST / GraphQL', 'Analytics', 'Push'] },
];
