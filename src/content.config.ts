import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    role: z.string(),
    platforms: z.array(z.enum(['iOS', 'Android', 'Web'])),
    stack: z.array(z.string()),
    highlight: z.string().optional(),
    appStore: z.url().optional(),
    playStore: z.url().optional(),
    screenshot: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { apps };
