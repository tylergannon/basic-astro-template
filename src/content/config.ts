import { defineCollection, z } from 'astro:content';

const app = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      defaultTitle: z.string(),
      description: z.string(),
      favicon: image(),
      openGraph: z.object({
        image: image(),
        imageAlt: z.string(),
        twitter: z.object({
          card: z.enum(['summary', 'summary_large_image', 'app', 'player']),
          site: z.string(),
          creator: z.string(),
          title: z.string().default(''),
          description: z.string().default(''),
        }),
      }),
    }),
});

const blog = defineCollection({
  schema: () =>
    z.object({
      draft: z.boolean().optional().default(false),
      title: z.string(),
      snippet: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      author: z.string(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
    }),
});

const post = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

export const collections = {
  app,
  blog,
  post,
};
