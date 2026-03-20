import type { MetadataRoute } from "next"
import { getSiteUrl } from "../lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()
  const now = new Date()

  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/services`, lastModified: now },
    { url: `${baseUrl}/quote`, lastModified: now },
  ]
}
