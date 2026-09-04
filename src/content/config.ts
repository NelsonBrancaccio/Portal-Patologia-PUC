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

const professores = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    foto: z.string().optional(),
    ativo: z.boolean().default(false),
    periodo: z.string().optional(),
    contato_email: z.string().optional(),
    contato_telefone: z.string().optional()
  })
});

const institucional = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string()
  })
});

const configuracoes = defineCollection({
  type: 'data',
  schema: z.object({
    imagem_capa: z.string().optional()
  })
});

export const collections = { topicos, professores, institucional, configuracoes };
