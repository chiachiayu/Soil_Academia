// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
  // Store posts under:
  //   src/content/blog/zh/**/*.md
  //   src/content/blog/en/**/*.md
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/Blog",
  }),

  schema: z.object({
    // Required
    title: z.string(),
    publishedAt: z.coerce.date(),
    lang: z.enum(["zh", "en"]).default("zh"),

    // Category (non-symmetric by design: Chinese + English buckets)
    category: z.enum([
      // 中文
      "田野",
      "思考",
      "方法",
      "記錄",
      "札記",
      "讀書心得",
      // English
      "Research Notes",
      "Methods & Models",
      "Field Observations",
      "Data & Figures",
      "Perspectives",
      "Book remarks"
    ]),

    // Optional
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),

    // Series support (for long-form sequences)
    series: z
      .object({
        name: z.string(),
        order: z.number().int().positive(),
      })
      .optional(),

    // Maintenance
    updatedAt: z.coerce.date().optional(),

    // Private-ish note field (you can choose not to render it)
    notes: z.string().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
