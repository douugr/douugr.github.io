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

- `src/data/profile.ts` — nome, bio, experiência, stack, links
- `src/content/apps/*.md` — um arquivo por app (vira a página `/apps/<arquivo>/`)
- `public/` — imagens, `curriculo.pdf`, screenshots dos apps

Push na `main` publica automaticamente.
