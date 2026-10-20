import { NextResponse } from "next/server"
import { payload } from "@/adapter/payload"

export const GET = async () => {
  const links = await payload.find({
    collection: "linktree-link",
    pagination: false,
  })

  return NextResponse.json({ data: links.docs })
}
