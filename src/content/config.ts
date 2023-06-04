import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    // tags is an array of strings or references to tags
    tags: z.array(z.string().or(reference("tags"))).optional(),
  }),
});

const tags = defineCollection({
  schema: z.object({
    url: z.string().optional(),
    type: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    github: z.string(),
    sourceAvailable: z.boolean(),
    tags: z.array(z.string().or(reference("tags"))).optional(),
  }),
});

export const collections = { blog, tags, projects };
