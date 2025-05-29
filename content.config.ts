import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.string()
          .describe('The date of the blog post, in YYYY-MM-DD format')
          .optional(),
        title: z.string()
          .describe('The title of the blog post')
          .optional(),
        description: z.string()
          .describe('A brief description of the blog post')
          .optional(),
        image_url: z.string()
          .describe('URL of the image associated with the blog post')
          .optional(),
        tags: z.array(z.string())
          .describe('Tags associated with the blog post')
          .optional(),
        slug: z.string()
          .describe('The slug for the blog post, used in the URL')
          .optional(),
      })
    })
  }
})
