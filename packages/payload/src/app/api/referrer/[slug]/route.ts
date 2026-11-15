import { StatusCodes } from "http-status-codes"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"
import ReferrerDataService from "@/services/referrer-data-service"

/**
 * Redirects to the URL associated with the given referrer slug.
 *
 * @param _req The incoming request object.
 * @param params An object containing the route parameters, including the referrer slug.
 * @returns A redirect response to the associated URL or a 404 error if not found.
 */
export const GET = async (_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  const refererDataService = new ReferrerDataService()

  const mapping = await refererDataService.getReferrerMappingBySlug(slug)

  if (!mapping)
    return NextResponse.json(
      { error: "Referrer mapping not found" },
      { status: StatusCodes.NOT_FOUND },
    )

  return redirect(mapping.url)
}
