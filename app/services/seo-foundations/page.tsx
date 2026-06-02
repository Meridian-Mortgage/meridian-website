import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "SEO Foundations · Meridian.",
  description:
    "Local SEO for mortgage brokers. Structured to rank for the searches your future clients run before they pick a broker.",
};

const stats = [
  { figure: "53%", label: "of borrowers research online before contacting a broker" },
  { figure: "3", label: "results take the bulk of the clicks on a local search" },
  { figure: "8 wk", label: "typical window to start ranking for local terms" },
];

const checklist = [
  {
    label: "Local pages",
    body: "A page for each city and loan type you serve, written for the way people actually search.",
  },
  {
    label: "Technical base",
    body: "Clean structure, fast load, and the markup search engines read to understand your site.",
  },
  {
    label: "Google Business",
    body: "Your profile set up and tuned so you show in the map pack for nearby searches.",
  },
  {
    label: "Content plan",
    body: "A short list of the guides and answers worth writing, ranked by what wins deals.",
  },
  {
    label: "Reviews engine",
    body: "A simple way to keep new reviews coming, since they move both ranking and trust.",
  },
  {
    label: "Tracking",
    body: "Rankings, traffic, and calls in one view, so you can see the work turn into pipeline.",
  },
];

const ranks = [
  { term: "mortgage broker denver", before: "Not ranking", after: "#2", up: true },
  { term: "first time buyer loans denver", before: "Page 4", after: "#1", up: true },
  { term: "refinance rates denver", before: "Page 3", after: "#3", up: true },
  { term: "fha loan colorado", before: "Page 5", after: "#4", up: true },
];

const faq = [
  {
    q: "How long until I rank?",
    a: "Local terms usually start moving inside two to three months. Competitive city terms take longer and keep climbing with content.",
  },
  {
    q: "Is this separate from the website?",
    a: "The foundations come built into every site we make. This is for brokers who want it pushed further or added to a site they already have.",
  },
  {
    q: "Do you guarantee a number one spot?",
    a: "No one honest can. We build the things that earn ranking and report on real movement, not promises.",
  },
  {
    q: "What do I have to do?",
    a: "Approve a short content plan and keep reviews flowing. We handle the rest.",
  },
];

export default function SeoFoundationsPage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* Hero — split, search-result mock on the right */}
      <div data-nav-mode="hero">
        <section className="relative overflow-hidden bg-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[-8%] top-[-12%] h-[620px] w-[820px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(201,169,97,0.14) 0%, rgba(15,15,15,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[1280px] px-16 pb-28 pt-44 md:pb-36 md:pt-52">
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-20">
              <div className="md:col-span-6">
                <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
                  SEO foundations
                </p>
                <h1 className="mt-5 font-serif text-[52px] font-normal leading-[1] tracking-[-1.6px] text-ivory md:text-[72px]">
                  Be the first name they find.
                </h1>
                <p className="mt-7 max-w-[480px] text-[17px] leading-[28px] text-ivory/70">
                  Borrowers search before they call. We structure your site to
                  rank for the mortgage queries people run in your city, so the
                  next lead arrives already looking for you.
                </p>
                <div className="mt-10">
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-[4px] bg-gold px-[22px] py-[14px] text-[13px] font-medium uppercase tracking-[0.78px] text-ink transition-colors hover:bg-[#d4b56e]"
                  >
                    Start your project
                  </a>
                </div>
              </div>

              {/* SERP mock */}
              <div className="md:col-span-6">
                <div className="overflow-hidden rounded-[12px] border border-ink/10 bg-white shadow-[0_30px_80px_-45px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center gap-2 border-b border-ink/5 px-4 py-3">
                    <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                    <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                    <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                    <div className="ml-3 flex h-6 max-w-[260px] flex-1 items-center rounded-full bg-cream px-3 text-[10px] tracking-[0.04em] text-ink/45">
                      mortgage broker denver
                    </div>
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="rounded-[8px] bg-cream/60 p-4 ring-1 ring-gold/40">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-pine">
                        Top result
                      </p>
                      <p className="mt-1.5 text-[15px] font-medium text-ink">
                        Harrington Lending Co. · Denver Mortgage Broker
                      </p>
                      <p className="mt-1 text-[12px] leading-[18px] text-ink/55">
                        Local broker for first-time buyers and refinances. Get
                        pre-approved in minutes.
                      </p>
                    </div>
                    {[
                      "rocketmortgage.com",
                      "bankrate.com",
                      "zillow.com/lenders",
                    ].map((d) => (
                      <div key={d} className="opacity-50">
                        <p className="text-[11px] text-ink/45">{d}</p>
                        <div className="mt-1.5 h-2 w-3/4 rounded bg-ink/15" />
                        <div className="mt-1.5 h-2 w-1/2 rounded bg-ink/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Stats band — big numbers */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-16 py-20">
            <div className="grid grid-cols-1 gap-10 border-y border-ink/10 py-14 md:grid-cols-3 md:gap-16">
              {stats.map((s) => (
                <Reveal key={s.figure}>
                  <p className="font-serif text-[64px] leading-none tracking-[-1px] text-ink md:text-[76px]">
                    {s.figure}
                  </p>
                  <p className="mt-4 max-w-[260px] text-[15px] leading-[23px] text-stone">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* What we build — two-column checklist */}
      <div data-nav-mode="light">
        <section className="bg-cream">
          <div className="mx-auto max-w-[1280px] px-16 py-24">
            <div className="max-w-[560px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
                What we build
              </p>
              <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[44px]">
                The work that actually moves ranking.
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              {checklist.map((item) => (
                <Reveal
                  key={item.label}
                  className="flex gap-4 border-t border-ink/15 pt-5"
                >
                  <span aria-hidden className="mt-1 text-gold">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-serif text-[20px] font-normal leading-[1.2] tracking-[-0.16px] text-ink">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[24px] text-ink/70">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Rankings table — proof of movement */}
      <div data-nav-mode="dark">
        <section className="bg-ink">
          <div className="mx-auto max-w-[960px] px-16 py-28">
            <div className="max-w-[520px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
                What moves
              </p>
              <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ivory md:text-[42px]">
                From nowhere to the first page.
              </h2>
            </div>

            <Reveal className="mt-12 overflow-hidden rounded-[12px] border border-ivory/12">
              <div className="grid grid-cols-12 gap-2 border-b border-ivory/12 bg-[#161616] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-ivory/45">
                <span className="col-span-6">Search term</span>
                <span className="col-span-3">Before</span>
                <span className="col-span-3 text-right">Now</span>
              </div>
              {ranks.map((r, i) => (
                <div
                  key={r.term}
                  className={`grid grid-cols-12 items-center gap-2 px-6 py-4 text-[14px] ${
                    i % 2 === 1 ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <span className="col-span-6 text-ivory">{r.term}</span>
                  <span className="col-span-3 text-ivory/45">{r.before}</span>
                  <span className="col-span-3 text-right font-medium text-moss">
                    {r.after}
                  </span>
                </div>
              ))}
            </Reveal>
            <p className="mt-4 text-[12px] text-ivory/40">
              Representative results for a single-market broker. Yours will vary
              with your city and competition.
            </p>
          </div>
        </section>
      </div>

      {/* FAQ — stacked rows with left index */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[960px] px-16 py-24">
            <h2 className="font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[40px]">
              Before you start.
            </h2>
            <div className="mt-12 border-b border-ink/10">
              {faq.map((item, i) => (
                <div
                  key={item.q}
                  className="grid grid-cols-1 gap-2 border-t border-ink/10 py-8 md:grid-cols-12 md:gap-8"
                >
                  <span className="font-serif text-[15px] text-stone md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-[21px] font-normal leading-[1.3] tracking-[-0.12px] text-ink md:col-span-5">
                    {item.q}
                  </h3>
                  <p className="text-[15px] leading-[24px] text-ink/70 md:col-span-6">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-nav-mode="dark">
        <SiteCTA />
        <Footer />
      </div>
    </main>
  );
}
