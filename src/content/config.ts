import { defineCollection, z } from "astro:content";

export const collections = {
  post: defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        image: image(),
      }),
  }),
};
