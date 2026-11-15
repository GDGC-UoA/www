import { payload } from "@/adapter/payload"
import { ReferrerMapping } from "@/payload-types"

export default class ReferrerDataService {
  /**
   * Retrieves the {@link ReferrerMapping} for a slug URL segment.
   *
   * @param slug The referrer name to look up.
   * @returns The matching {@link ReferrerMapping}, or `null` when no mapping exists.
   */
  public async getReferrerMappingBySlug(slug: string): Promise<ReferrerMapping | null> {
    const { docs } = await payload.find({
      collection: "referrer-mapping",
      where: {
        referrerSlug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    return docs[0] || null
  }
}
