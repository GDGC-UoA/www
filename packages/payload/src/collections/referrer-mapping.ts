import type { CollectionConfig } from "payload"

export const ReferrerMapping: CollectionConfig = {
  slug: "referrer-mapping",
  admin: {
    useAsTitle: "referrerSlug",
    group: "Referrer",
  },
  fields: [
    {
      name: "referrerSlug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      maxLength: 200,
      admin: {
        description: "The name used in /api/referrer/:referrerSlug, e.g. devfest.",
      },
    },
    {
      name: "url",
      type: "text",
      required: true,
      admin: {
        description: "The destination URL for this referral link. E.g. https://google.com",
      },
    },
  ],
}
