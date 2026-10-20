import type { GlobalConfig } from "payload"

export const LinkTree: GlobalConfig = {
  slug: "linktree",
  admin: {
    group: "Linktree",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "GDGC UoA",
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
      defaultValue: "Google Developer Groups on Campus @ University of Auckland",
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
