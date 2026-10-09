import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    title: z.string(),
    shortName: z.string(),
    company: z.string(),
    summary: z.string(),
    period: z.string(),
    role: z.string(),
    platforms: z.array(z.enum(['iOS', 'Android', 'Web'])),
    stack: z.array(z.string()),
    icon: z.string(),
    rating: z.number().optional(),
    ratingCount: z.string().optional(),
    appStore: z.url().optional(),
    playStore: z.url().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { apps };
