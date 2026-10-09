import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { appKeys } from './data/apps';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    client: z.string().optional(),
    period: z.string(),
    start: z.coerce.date(),
    role: z.string(),
    kind: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    app: z.enum(appKeys).optional(),
    /** Aparece no card do app, mas sem dizer que o projeto faz parte dele (ex.: um SDK da mesma empresa). */
    relatedApp: z.enum(appKeys).optional(),
    icon: z.string().optional(),
    note: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
