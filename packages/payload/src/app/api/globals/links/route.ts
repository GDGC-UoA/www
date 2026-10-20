import { NextResponse } from "next/server"
import { payload } from "@/adapter/payload"

export const GET = async () => {
  const linktree = await payload.findGlobal({ slug: "linktree" })

  return NextResponse.json({ data: linktree })
}
