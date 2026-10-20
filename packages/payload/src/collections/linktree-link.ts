import { CollectionConfig } from "payload"

export const LinktreeLink: CollectionConfig = {
  slug: "linktree-link",
  admin: {
    group: "Linktree",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "The title of the link.",
      },
    },
    {
      name: "url",
      type: "text",
      required: true,
      admin: {
        description: "The URL that the link will point to.",
      },
    },
    {
      name: "thumbnail",
      type: "text",
      required: false,
      admin: {
        description: "Optional thumbnail image URL for the link.",
      },
    },
  ],
}
