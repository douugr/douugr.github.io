export const apps = {
  'mercado-pago': {
    name: 'Mercado Pago',
    title: 'Mercado Pago: banco digital',
    company: 'Mercado Livre',
    icon: '/apps/mercado-pago/icon.webp',
    rating: 4.9,
    ratingCount: '2,5 mi',
    appStore: 'https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649',
  },
  itau: {
    name: 'Itaú',
    title: 'Banco Itaú: Conta, Cartão e +',
    company: 'Itaú Unibanco',
    icon: '/apps/itau/icon.webp',
    rating: 4.7,
    ratingCount: '3,2 mi',
    appStore: 'https://apps.apple.com/br/app/banco-ita%C3%BA-conta-cart%C3%A3o-e/id474505665',
  },
  pagbank: {
    name: 'PagBank',
    title: 'Banco PagBank',
    company: 'PagSeguro PagBank',
    icon: '/apps/pagbank/icon.webp',
    rating: 4.9,
    ratingCount: '1,9 mi',
    appStore: 'https://apps.apple.com/br/app/banco-pagbank/id1186059012',
  },
} as const;

export type AppKey = keyof typeof apps;
export const appKeys = Object.keys(apps) as [AppKey, ...AppKey[]];
