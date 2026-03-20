import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site-url"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "North & Form | Handyman Services",
  description:
    "A premium handyman and property maintenance website template built for local lead generation, mobile quote requests, and clean service-page SEO structure.",
  openGraph: {
    title: "North & Form | Handyman Services",
    description:
      "A premium handyman and property maintenance website template built for local lead generation, mobile quote requests, and clean service-page SEO structure.",
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
