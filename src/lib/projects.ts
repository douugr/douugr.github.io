import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'> & { slug: string };

/** Projetos de um idioma, do mais recente ao mais antigo. Os arquivos ficam em src/content/projects/<lang>/<slug>.md */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const entries = await getCollection('projects', ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft);
  return entries
    .map((entry) => ({ ...entry, slug: entry.id.slice(lang.length + 1) }))
    .sort((a, b) => b.data.start.valueOf() - a.data.start.valueOf());
}
