import { defineCollection, z } from 'astro:content';

export const AREAS = [
  'Patologia Geral',
  'Trato Gastrointestinal',
  'Hepatobiliar e Pâncreas',
  'Mama',
  'Ginecológica',
  'Pulmonar',
  'Renal e Trato Urinário',
  'Óssea e Partes Moles',
  'Sistema Nervoso',
  'Hematológica e Linfonodal',
  'Endócrina',
  'Pele',
  'Citopatologia'
] as const;

const topicos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    area: z.enum(AREAS),
    atualizado: z.date(),
    imagem_principal: z.string().optional()
  })
});

export const collections = { topicos };
