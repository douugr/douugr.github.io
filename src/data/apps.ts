import type { Lang } from '../i18n/ui';

export const apps = {
  'mercado-pago': {
    name: 'Mercado Pago',
    title: 'Mercado Pago: banco digital',
    company: { pt: 'Mercado Livre', en: 'Mercado Libre', es: 'Mercado Libre' },
    icon: '/apps/mercado-pago/icon.webp',
    rating: 4.9,
    ratingCount: { pt: '2,5 mi', en: '2.5M', es: '2,5 M' },
    appStore: 'https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649',
  },
  itau: {
    name: 'Itaú',
    title: 'Banco Itaú: Conta, Cartão e +',
    company: { pt: 'Itaú Unibanco', en: 'Itaú Unibanco', es: 'Itaú Unibanco' },
    icon: '/apps/itau/icon.webp',
    rating: 4.7,
    ratingCount: { pt: '3,2 mi', en: '3.2M', es: '3,2 M' },
    appStore: 'https://apps.apple.com/br/app/banco-ita%C3%BA-conta-cart%C3%A3o-e/id474505665',
  },
  pagbank: {
    name: 'PagBank',
    title: 'Banco PagBank',
    company: { pt: 'PagSeguro PagBank', en: 'PagSeguro PagBank', es: 'PagSeguro PagBank' },
    icon: '/apps/pagbank/icon.webp',
    rating: 4.9,
    ratingCount: { pt: '1,9 mi', en: '1.9M', es: '1,9 M' },
    appStore: 'https://apps.apple.com/br/app/banco-pagbank/id1186059012',
  },
} satisfies Record<string, {
  name: string;
  title: string;
  company: Record<Lang, string>;
  icon: string;
  rating: number;
  ratingCount: Record<Lang, string>;
  appStore: string;
}>;

export type AppKey = keyof typeof apps;
export const appKeys = Object.keys(apps) as [AppKey, ...AppKey[]];
