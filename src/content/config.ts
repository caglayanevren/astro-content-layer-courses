import { glob } from "astro/loaders";
import { defineCollection, reference } from "astro:content";
import { z } from "astro:schema";

const base = "./course";

export const collections = {
  chapters: defineCollection({
    loader: glob({ pattern: "*/about.yaml", base }),
    schema: z.object({
      title: z.string(),
      sortOrder: z.number(),
      description: z.string(),
    }),
  }),
  lessons: defineCollection({
    loader: glob({ pattern: "*/*.md", base }),
    schema: z.object({
      title: z.string(),
      sortOrder: z.number(),
      chapter: reference("chapters"),
    }),
  }),
};
