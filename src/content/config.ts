import { z, defineCollection, reference } from "astro:content";

const tags = defineCollection({
  type: "content",
  schema: z.object({
    isProject: z.boolean().default(false),
    title: z.string().optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(reference('tags').or(z.string())),
    featured: z.boolean(),
    lastUpdated: z.date(),
  }),
});

export const collections = { posts, tags };
