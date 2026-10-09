import type { Lang } from '../i18n/ui';

type Item = { title: string; description: string; stack: string[]; url?: string };

type Volunteer = {
  org: string;
  url: string;
  logo: string;
  location: string;
  period: string;
  role: string;
  mission: string;
  items: Item[];
};

const org = 'Instituto Pró-Ativo';
const url = 'https://institutoproativo.com.br';
const logo = '/volunteer/proativo.png';
const siteStack = ['HTML', 'CSS', 'Bootstrap 5.3', 'JavaScript', 'GitHub Actions', 'Spec Kit'];
const symposiumStack = ['Google Apps Script', 'JavaScript', 'Google Forms', 'Google Sheets', 'MailApp', 'QR Code', 'Node.js', 'ESLint', 'GitHub Actions', 'Spec Kit'];

export const volunteer: Record<Lang, Volunteer> = {
  pt: {
    org,
    url,
    logo,
    location: 'Ourinhos, SP',
    period: 'set 2026 — atual',
    role: 'Desenvolvedor voluntário · sites e sistemas',
    mission:
      'Organização da sociedade civil que usa o jiu-jitsu como ferramenta de inclusão social, apoio escolar e formação humana de crianças e adolescentes de 6 a 17 anos, principalmente estudantes de escolas públicas em situação de vulnerabilidade.',
    items: [
      {
        title: 'Site institucional',
        description:
          'Criação e manutenção do site do instituto e do projeto Jiu-Jitsu Para Todos: história, metodologia, atividades, impacto e formas de apoio. Especificado com Spec Kit, com validação automática de HTML e links no CI e publicação contínua no GitHub Pages.',
        stack: siteStack,
        url,
      },
      {
        title: 'Sistema do 1º Simpósio',
        description:
          'Sistema de inscrição e confirmação de presença do 1º Simpósio do instituto, dedicado ao cuidado de quem cuida de pessoas no espectro autista: 160 vagas, lista de espera, convocação por e-mail com prazo para confirmar, código de entrada único e check-in na recepção. Roda no Google Workspace, com testes automatizados e CI.',
        stack: symposiumStack,
      },
    ],
  },
  en: {
    org,
    url,
    logo,
    location: 'Ourinhos, Brazil',
    period: 'Sep 2026 — present',
    role: 'Volunteer developer · websites and systems',
    mission:
      'A nonprofit that uses jiu-jitsu as a tool for social inclusion, school support and personal development for children and teenagers aged 6 to 17, mainly public school students in vulnerable situations.',
    items: [
      {
        title: 'Institutional website',
        description:
          "Building and maintaining the website for the institute and its Jiu-Jitsu for Everyone project: history, methodology, activities, impact and ways to support. Specified with Spec Kit, with automated HTML and link checks in CI and continuous deployment to GitHub Pages.",
        stack: siteStack,
        url,
      },
      {
        title: '1st Symposium system',
        description:
          "Registration and attendance confirmation system for the institute's 1st Symposium, focused on caring for caregivers of autistic people: 160 seats, a waiting list, email invitations with a confirmation deadline, unique entry codes and check-in at the front desk. Runs on Google Workspace, with automated tests and CI.",
        stack: symposiumStack,
      },
    ],
  },
  es: {
    org,
    url,
    logo,
    location: 'Ourinhos, Brasil',
    period: 'sep 2026 — actualidad',
    role: 'Desarrollador voluntario · sitios y sistemas',
    mission:
      'Organización sin fines de lucro que usa el jiu-jitsu como herramienta de inclusión social, apoyo escolar y formación humana de niños y adolescentes de 6 a 17 años, principalmente estudiantes de escuelas públicas en situación de vulnerabilidad.',
    items: [
      {
        title: 'Sitio institucional',
        description:
          'Creación y mantenimiento del sitio del instituto y del proyecto Jiu-Jitsu Para Todos: historia, metodología, actividades, impacto y formas de apoyo. Especificado con Spec Kit, con validación automática de HTML y enlaces en el CI y publicación continua en GitHub Pages.',
        stack: siteStack,
        url,
      },
      {
        title: 'Sistema del 1.er Simposio',
        description:
          'Sistema de inscripción y confirmación de asistencia del 1.er Simposio del instituto, dedicado al cuidado de quienes cuidan a personas en el espectro autista: 160 cupos, lista de espera, convocatoria por correo con plazo para confirmar, código de entrada único y check-in en la recepción. Funciona sobre Google Workspace, con pruebas automatizadas y CI.',
        stack: symposiumStack,
      },
    ],
  },
};
