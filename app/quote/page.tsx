import type { Metadata } from "next"
import HandymanSite from "../../components/handyman-site"

export const metadata: Metadata = {
  title: "Request a Quote | North & Form Handyman",
  description:
    "Quote-request page template for handyman businesses, designed for high-intent local visitors and straightforward lead capture.",
}

export default function QuotePage() {
  return <HandymanSite currentPage="quote" />
}
