import Image from "next/image"
import Link from "next/link"

type HandymanPage = "home" | "services" | "quote"

const services = [
  {
    title: "Repairs & Odd Jobs",
    copy: "Quick domestic fixes, fittings, minor repairs, and the jobs that keep getting postponed.",
  },
  {
    title: "Decorating & Finishing",
    copy: "Touch-ups, patching, trim work, wall repairs, and finishing details that tidy a room properly.",
  },
  {
    title: "Installations",
    copy: "Shelving, blinds, rails, furniture assembly, TV mounting, and practical in-home installations.",
  },
  {
    title: "Landlord Maintenance",
    copy: "Reliable support for turnover jobs, snagging, tenancy fixes, and general property upkeep.",
  },
]

const areas = ["Leith", "Stockbridge", "Morningside", "Portobello", "Newington", "Musselburgh"]

const reviews = [
  {
    name: "Sarah M.",
    quote: "Fast reply, clear pricing, and the work was handled in one visit. It felt professional from the first call.",
  },
  {
    name: "James T.",
    quote: "The site makes the service feel premium without overcomplicating anything. Exactly the right balance for local customers.",
  },
]

function SiteHeader({ currentPage }: { currentPage: HandymanPage }) {
  const items = [
    { label: "Home", href: "/", page: "home" as const },
    { label: "Services", href: "/services", page: "services" as const },
    { label: "Quote", href: "/quote", page: "quote" as const },
  ]

  return (
    <header className="border-b border-black/10 bg-[#f8f4ed]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a5a39]">North & Form</div>
          <div className="mt-1 text-sm font-sans text-[#6a6158]">Edinburgh handyman & property maintenance</div>
        </div>

        <nav className="hidden items-center gap-8 font-sans text-sm text-[#6a6158] md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-[#1f1b17] ${currentPage === item.page ? "text-[#1f1b17]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+441313330101"
          className="inline-flex items-center rounded-full bg-[#1f1b17] px-4 py-2 font-sans text-sm font-semibold text-white transition hover:bg-[#342d28]"
        >
          0131 333 0101
        </a>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:py-16 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#d8c7b9] bg-white/70 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#9a5a39]">
              Premium local service template
            </div>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-6xl">
              Calm, credible design for handyman businesses that want better leads.
            </h1>
            <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-[#5e554d]">
              A premium local-service layout with cleaner hierarchy, more trust, and a stronger path from first visit to quote request.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center rounded-full bg-[#a45735] px-5 py-3 font-sans text-sm font-semibold text-white transition hover:bg-[#8e4727]"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-5 py-3 font-sans text-sm font-semibold text-[#1f1b17] transition hover:border-black/25"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid gap-3 font-sans sm:grid-cols-3">
              {[
                "Clear quote-first conversion flow",
                "Structured for local SEO pages",
                "Built for mobile calls and enquiries",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-black/10 bg-white/75 px-4 py-4 text-sm text-[#5e554d]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[540px] overflow-hidden rounded-[2.25rem] bg-[#1f1b17] shadow-[0_28px_70px_rgba(31,27,23,0.18)]">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
              alt="Tradesperson working on a home repair"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b17]/92 via-[#1f1b17]/26 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
              <div className="max-w-lg">
                <div className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#f0cdb8]">Premium local-service direction</div>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                  Built to feel premium without becoming overdesigned.
                </h2>
                <p className="mt-4 font-sans text-sm leading-relaxed text-white/82">
                  One strong message, one clear image, and a calmer hierarchy make the website feel more trustworthy for local visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">Service Structure</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                Built to scale into service pages, not just one homepage.
              </h2>
            </div>
            <p className="max-w-xl font-sans text-sm leading-relaxed text-[#5e554d]">
              The layout is shaped for local SEO expansion, clearer service positioning, and better conversion flow across calls, forms, and area-specific pages.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.slice(0, 2).map((service, index) => (
              <div key={service.title} className="rounded-[2rem] border border-black/10 bg-[#fbf8f4] p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">0{index + 1}</div>
                <h3 className="mt-3 text-2xl font-semibold text-[#1f1b17]">{service.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#5e554d]">{service.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">Services Page</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-[#1f1b17]">
            Practical handyman services, presented with proper structure and local clarity.
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-[#5e554d]">
            This page is built to support service-specific SEO, cleaner internal linking, and a clearer path from search intent to quote request.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-[2rem] border border-black/10 bg-white p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">Service 0{index + 1}</div>
              <h2 className="mt-3 text-2xl font-semibold text-[#1f1b17]">{service.title}</h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-[#5e554d]">{service.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-[#1f1b17] p-8 text-white">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#f0cdb8]">Coverage</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Built to support area pages and local search expansion.
            </h2>
            <div className="mt-6 grid gap-3 font-sans sm:grid-cols-3">
              {areas.map((area) => (
                <div key={area} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/82">
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[#f8f4ed] p-8">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">Trust Signal</p>
            <div className="mt-4 space-y-3 font-sans text-sm text-[#5e554d]">
              <div>Fully insured team messaging</div>
              <div>Review schema placement ready</div>
              <div>Emergency call CTA support</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function QuotePage() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">Quote Page</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-[#1f1b17]">
            Request a callback without forcing visitors through a heavy booking flow.
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-[#5e554d]">
            This is the dedicated lead-capture page for users who already know what they need and just want a clear next step.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#1f1b17] p-8 text-white">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#f0cdb8]">Why this page works</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Direct, calm, and built around local intent.
            </h2>
            <div className="mt-6 space-y-4 font-sans text-sm text-white/82">
              <div>Short form for high-intent traffic</div>
              <div>Phone-first fallback for urgent jobs</div>
              <div>Ready for ad landing pages and local service campaigns</div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#f8f4ed] p-6 text-[#1f1b17] shadow-[0_20px_50px_rgba(31,27,23,0.18)]">
            <div className="grid gap-4 font-sans sm:grid-cols-2">
              <div className="rounded-xl border border-black/10 px-4 py-3 text-sm text-[#6a6158]">Full name</div>
              <div className="rounded-xl border border-black/10 px-4 py-3 text-sm text-[#6a6158]">Phone number</div>
              <div className="rounded-xl border border-black/10 px-4 py-3 text-sm text-[#6a6158] sm:col-span-2">Email address</div>
              <div className="rounded-xl border border-black/10 px-4 py-3 text-sm text-[#6a6158]">Postcode</div>
              <div className="rounded-xl border border-black/10 px-4 py-3 text-sm text-[#6a6158]">Preferred time</div>
              <div className="rounded-xl border border-black/10 px-4 py-3 text-sm text-[#6a6158] sm:col-span-2">Tell us about the job</div>
            </div>
            <div className="mt-5 inline-flex rounded-full bg-[#1f1b17] px-5 py-3 font-sans text-sm font-semibold text-white">
              Request Callback
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[2rem] border border-black/10 bg-white p-6">
              <div className="font-sans text-sm text-[#9a5a39]">★★★★★</div>
              <p className="mt-4 font-sans text-sm leading-relaxed text-[#5e554d]">{review.quote}</p>
              <p className="mt-4 font-sans font-semibold text-[#1f1b17]">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f8f4ed]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a5a39]">North & Form</div>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-[#1f1b17]">
              A complete local-service footer, not an afterthought.
            </h2>
            <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-[#5e554d]">
              Built with repeat navigation, local contact details, and a final enquiry push so the template feels like a real small-business website.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">Pages</div>
              <div className="mt-4 space-y-3 font-sans text-sm text-[#5e554d]">
                <Link href="/" className="block transition hover:text-[#1f1b17]">
                  Home
                </Link>
                <Link href="/services" className="block transition hover:text-[#1f1b17]">
                  Services
                </Link>
                <Link href="/quote" className="block transition hover:text-[#1f1b17]">
                  Quote
                </Link>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">Coverage</div>
              <div className="mt-4 space-y-3 font-sans text-sm text-[#5e554d]">
                {areas.slice(0, 3).map((area) => (
                  <div key={area}>{area}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a5a39]">Contact</div>
              <div className="mt-4 space-y-3 font-sans text-sm text-[#5e554d]">
                <a href="tel:+441313330101" className="block transition hover:text-[#1f1b17]">
                  0131 333 0101
                </a>
                <a href="mailto:hello@northandform.co" className="block transition hover:text-[#1f1b17]">
                  hello@northandform.co
                </a>
                <Link href="/quote" className="block font-medium text-[#1f1b17]">
                  Request a quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6 font-sans text-sm text-[#6a6158]">
          <a
            href="https://twosquares.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#1f1b17]"
          >
            Website Developed by TwoSquares
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function HandymanSite({ currentPage }: { currentPage: HandymanPage }) {
  return (
    <div className="min-h-screen bg-[#f3eee6] text-[#1f1b17]">
      <SiteHeader currentPage={currentPage} />
      {currentPage === "home" ? <HomePage /> : null}
      {currentPage === "services" ? <ServicesPage /> : null}
      {currentPage === "quote" ? <QuotePage /> : null}
      <SiteFooter />
    </div>
  )
}
