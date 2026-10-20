import type { GlobalConfig } from "payload"

export const LinkTree: GlobalConfig = {
  slug: "linktree",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "instagram",
      type: "text",
    },
    {
      name: "linkedin",
      type: "text",
    },
    {
      name: "youtube",
      type: "text",
    },
    {
      name: "discord",
      type: "text",
    },
    {
      name: "website",
      type: "text",
    },
  ],
}
