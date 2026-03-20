import type { Metadata } from "next"
import HandymanSite from "../../components/handyman-site"

export const metadata: Metadata = {
  title: "Services | North & Form Handyman",
  description:
    "Service-page template for handyman and property maintenance businesses with strong local SEO structure and clear quote pathways.",
}

export default function ServicesPage() {
  return <HandymanSite currentPage="services" />
}
