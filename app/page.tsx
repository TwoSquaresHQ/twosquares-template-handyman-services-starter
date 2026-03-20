import type { Metadata } from "next"
import HandymanSite from "../components/handyman-site"

export const metadata: Metadata = {
  title: "North & Form | Handyman Services Edinburgh",
  description:
    "Local handyman and property maintenance website template homepage built for trust, quote requests, and local SEO expansion.",
}

export default function HomePage() {
  return <HandymanSite currentPage="home" />
}
