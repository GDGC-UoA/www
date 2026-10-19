import path from "path"
import { fileURLToPath } from "url"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import sharp from "sharp"
import { Media } from "./collections/Media"
import { Users } from "./collections/Users"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  routes: {
    admin: "/",
    api: "/payload/api",
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: `${path.resolve(dirname)}/app/importMap.js`,
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  graphQL: {
    disable: true,
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [],
})
