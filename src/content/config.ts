import { defineCollection, z } from 'astro:content';

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
  blog,
  post,
};
