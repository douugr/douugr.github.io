// Gera as imagens de compartilhamento (Open Graph) em public/og/, uma por idioma.
// Uso: npm run og
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const W = 1200;
const H = 630;

const C = {
  paper: '#fbf6ea',
  ink: '#111111',
  blue: '#0b3fd6',
  blueDeep: '#072a91',
  red: '#e3202b',
  yellow: '#ffd200',
  pink: '#ff3d8b',
};

const roles = {
  pt: 'ENGENHEIRO DE SOFTWARE iOS',
  en: 'iOS SOFTWARE ENGINEER',
  es: 'INGENIERO DE SOFTWARE iOS',
};

const fonts = {
  'Dela Gothic One': 'Dela+Gothic+One',
  Anton: 'Anton',
  'Archivo Black': 'Archivo+Black',
  Silkscreen: 'Silkscreen',
};

/** Baixa as fontes em TTF do Google Fonts (com cache na pasta temporária). */
async function loadFonts() {
  const dir = join(tmpdir(), 'douugr-og-fonts');
  await mkdir(dir, { recursive: true });
  const files = [];
  for (const [name, family] of Object.entries(fonts)) {
    const file = join(dir, `${family}.ttf`);
    if (!existsSync(file)) {
      // Um user agent antigo faz o Google Fonts responder com TTF em vez de WOFF2.
      const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}`, { headers: { 'User-Agent': 'Mozilla/4.0' } })).text();
      const url = css.match(/url\((https:[^)]+\.ttf)\)/)?.[1];
      if (!url) throw new Error(`Fonte não encontrada: ${name}`);
      await writeFile(file, Buffer.from(await (await fetch(url)).arrayBuffer()));
    }
    files.push(file);
  }
  return files;
}

/** Forma com contorno preto e cópia colorida deslocada, como no site. */
const shape = (d, color, x, y, rotate = 0, scale = 1) => `
  <g transform="translate(${x} ${y}) rotate(${rotate}) scale(${scale})" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="${d}" stroke="${color}" transform="translate(5 5)" />
    <path d="${d}" stroke="${C.ink}" />
  </g>`;

const zigzag = (y, color) => {
  let d = `M0 ${y + 16}`;
  for (let x = 0; x <= W; x += 24) d += ` L${x + 12} ${y} L${x + 24} ${y + 16}`;
  return `<path d="${d} L${W} ${y + 16} Z" fill="${color}" />`;
};

function svg(lang) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${C.paper}" />

  <!-- blocos de cor -->
  <circle cx="990" cy="285" r="285" fill="${C.yellow}" stroke="${C.ink}" stroke-width="6" />
  <polygon points="${W},250 ${W},${H} 600,${H}" fill="${C.red}" />
  <polygon points="0,360 0,${H} 470,${H}" fill="${C.blue}" />

  <!-- rabiscos -->
  ${shape('M8 52 L32 8 L56 52 Z', C.blue, 1080, 50, 14)}
  ${shape('M4 20 Q 14 2 24 20 T 44 20 T 64 20 T 84 20', C.pink, 640, 110, -18, 1.2)}
  ${shape('M10 10 H50 V50 H10 Z', C.red, 520, 478, 18, 0.8)}
  ${shape('M6 24 A 22 22 0 0 0 50 24 Z', C.yellow, 372, 44, -30)}
  ${shape('M4 30 L16 8 L28 30 L40 8 L52 30 L64 8 L76 30', C.blue, 1050, 400, -8)}

  <!-- katakana -->
  <g transform="rotate(-3 60 60)">
    <rect x="66" y="56" width="262" height="58" fill="${C.blue}" />
    <rect x="60" y="50" width="262" height="58" fill="${C.ink}" />
    <text x="191" y="91" font-family="Dela Gothic One" font-size="28" fill="${C.paper}" text-anchor="middle">ダグラス・ネト</text>
  </g>

  <!-- nome com sombra dupla -->
  ${[
    [10, C.ink],
    [6, C.yellow],
    [0, C.ink],
  ]
    .map(
      ([o, fill]) => `
  <text font-family="Dela Gothic One" font-size="128" fill="${fill}">
    <tspan x="${56 + o}" y="${262 + o}">DOUGLAS</tspan>
    <tspan x="${56 + o}" y="${380 + o}">NETO</tspan>
  </text>`,
    )
    .join('')}

  <!-- cargo espaçado -->
  <text x="60" y="440" font-family="Archivo Black" font-size="24" letter-spacing="8" fill="${C.ink}">${roles[lang]}</text>


  <!-- faixa inferior -->
  ${zigzag(H - 66, C.blueDeep)}
  <rect y="${H - 50}" width="${W}" height="50" fill="${C.blueDeep}" />
  <text x="60" y="${H - 17}" font-family="Silkscreen" font-size="22" fill="${C.paper}">douugr<tspan fill="${C.yellow}">.dev.br</tspan></text>
  <text x="${W - 60}" y="${H - 17}" font-family="Silkscreen" font-size="18" fill="${C.paper}" text-anchor="end">press start</text>
</svg>`;
}

const fontFiles = await loadFonts();
await mkdir('public/og', { recursive: true });

for (const lang of Object.keys(roles)) {
  const png = new Resvg(svg(lang), {
    fitTo: { mode: 'width', value: W },
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'Archivo Black' },
  })
    .render()
    .asPng();
  const out = `public/og/og-${lang}.png`;
  await writeFile(out, png);
  console.log(`${out}  ${(png.length / 1024).toFixed(0)} KB`);
}

