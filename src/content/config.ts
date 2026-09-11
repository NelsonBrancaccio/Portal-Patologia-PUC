import { defineCollection, z } from 'astro:content';

// Ordem alfabética — usada no menu lateral e em qualquer listagem de áreas.
export const AREAS = [
  'Citopatologia',
  'Endócrina',
  'Ginecológica',
  'Hematológica e Linfonodal',
  'Hepatobiliar e Pâncreas',
  'Mama',
  'Óssea e Partes Moles',
  'Patologia Geral',
  'Pele',
  'Pulmonar',
  'Renal e Trato Urinário',
  'Sistema Nervoso',
  'Trato Gastrointestinal'
] as const;

const topicos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    area: z.enum(AREAS),
    atualizado: z.date(),
    // Parágrafo opcional no topo da página — some sem deixar buraco se vazio.
    intro: z.string().optional(),
    // Imagem pequena no topo do tópico (ilustrativa, não a lâmina real).
    imagem_principal: z.string().optional(),
    // Uso interno: ajuda a busca no cabeçalho a encontrar o tópico por palavra-chave.
    // Não é exibido na página publicada.
    tags: z.array(z.string()).optional(),
    // Imagens reais de caso (lâminas), inseridas pelo patologista, com legenda.
    imagens_reais: z.array(z.object({
      arquivo: z.string(),
      titulo: z.string(),
      observacao: z.string().optional()
    })).optional()
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
    contato_telefone: z.string().optional(),
    galeria: z.array(z.object({
      arquivo: z.string(),
      titulo: z.string(),
      descricao: z.string().optional()
    })).optional()
  })
});

const institucional = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    galeria: z.array(z.object({
      arquivo: z.string(),
      titulo: z.string(),
      descricao: z.string().optional()
    })).optional()
  })
});

const divulgacao = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    galeria: z.array(z.object({
      arquivo: z.string(),
      titulo: z.string(),
      descricao: z.string().optional()
    })).optional()
  })
});

const liga_membros = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    foto: z.string().optional(),
    cargo: z.string(),
    turma: z.string(),
    gestao: z.string(),
    // Define a ordem de exibição (hierarquia) — menor número aparece primeiro.
    ordem: z.number().default(999)
  })
});

const eventos = defineCollection({
  type: 'content',
  schema: z.object({
    tema: z.string(),
    data: z.date(),
    horario: z.string().optional(),
    local: z.string().optional(),
    resumo: z.string().optional(),
    professor: z.string().optional(),
    pdf: z.string().optional(),
    galeria: z.array(z.object({
      arquivo: z.string(),
      titulo: z.string(),
      descricao: z.string().optional()
    })).optional()
  })
});

const configuracoes = defineCollection({
  type: 'data',
  schema: z.object({
    home_titulo: z.string().optional(),
    home_texto: z.string().optional(),
    home_imagem: z.string().optional(),
    home_imagem_legenda: z.string().optional(),
    topicos_texto: z.string().optional(),
    topicos_imagem: z.string().optional(),
    topicos_imagem_legenda: z.string().optional(),
    patologia_imagem: z.string().optional(),
    patologia_imagem_legenda: z.string().optional(),
    liga_texto: z.string().optional()
  })
});

export const collections = { topicos, professores, institucional, divulgacao, liga_membros, eventos, configuracoes };
