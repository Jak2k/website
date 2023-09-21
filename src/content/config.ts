import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    lastUpdated: z.date(),
  }),
});

export const collections = { posts };
