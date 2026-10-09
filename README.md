# douugr.dev.br

Site pessoal / portfólio — [douugr.dev.br](https://douugr.dev.br).

Feito com [Astro](https://astro.build) + Tailwind CSS, publicado no GitHub Pages via GitHub Actions.

## Rodando localmente

Requer Node 22+ (veja `.nvmrc`).

```bash
npm install
npm run dev
```

## Onde editar

O site está em português (`/`), inglês (`/en/`) e espanhol (`/es/`).

- `src/data/profile.ts`: bio, experiência, stack e formação nos 3 idiomas
- `src/content/projects/<pt|en|es>/*.md`: um arquivo por projeto em cada idioma (mesmo nome de arquivo nos 3)
- `src/data/apps.ts`: apps da App Store (ícone, nota, link)
- `src/i18n/ui.ts`: textos fixos da interface (menu, botões, títulos)
- `public/`: imagens e `curriculo.pdf`

Push na `main` publica automaticamente.
