import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import Reveal from "@/components/Reveal";
import { WebsiteMock, PipelineMock } from "@/components/WhoWeServe";

export const metadata = {
  title: "Web Design · Meridian.",
  description:
    "Custom websites for mortgage brokers. Conversion copy, CRM integration, and SEO foundations built in, on a site you own.",
};

const deliverables = [
  {
    n: "01",
    label: "Custom design",
    body: "Drawn for your market, never pulled from a template. Every section earns its place on the page.",
  },
  {
    n: "02",
    label: "Conversion copy",
    body: "Written to answer the borrower's real question and move the right ones toward a booking.",
  },
  {
    n: "03",
    label: "CRM integration",
    body: "Wired into GoHighLevel at launch, with intake routing into your pipeline from day one.",
  },
  {
    n: "04",
    label: "SEO foundations",
    body: "Structured for the mortgage searches your future clients run before they pick a broker.",
  },
  {
    n: "05",
    label: "Speed and mobile",
    body: "Under two seconds to load, and clean on the small screen most borrowers arrive on.",
  },
  {
    n: "06",
    label: "Full ownership",
    body: "The domain and every account stay in your name, source files included.",
  },
];

const steps = [
  {
    n: "01",
    title: "Map",
    body: "We learn your market, your borrowers, and the deals you want more of.",
  },
  {
    n: "02",
    title: "Design",
    body: "You see full page designs before a line of code, and we refine until it reads like you.",
  },
  {
    n: "03",
    title: "Build",
    body: "We build it clean, wire the forms into your CRM, and test on real devices.",
  },
  {
    n: "04",
    title: "Launch",
    body: "We ship, hand over every account, and stay on call through the first weeks.",
  },
];

const faq = [
  {
    q: "How long does a site take?",
    a: "Most broker sites go from kickoff to launch in six to eight weeks, set by how fast we get content and feedback.",
  },
  {
    q: "Do I need to write the copy?",
    a: "No. We write it and you review it. Conversion copy is part of the build, not an add-on.",
  },
  {
    q: "What if I already have a brand?",
    a: "We design to it. If the brand needs work first, we handle that before the site.",
  },
  {
    q: "Who owns the site after launch?",
    a: "You do. The domain, the accounts, and the source files all sit in your name.",
  },
];

export default function WebDesignPage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* Hero — centered statement, no visual yet */}
      <div data-nav-mode="hero">
        <section className="relative overflow-hidden bg-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[820px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(201,169,97,0.14) 0%, rgba(15,15,15,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[940px] px-16 pb-48 pt-48 text-center md:pb-56 md:pt-56">
            <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
              Web design
            </p>
            <h1 className="mt-5 font-serif text-[52px] font-normal leading-[1] tracking-[-1.6px] text-ivory md:text-[80px]">
              A website that earns trust before the call.
            </h1>
            <p className="mx-auto mt-7 max-w-[560px] text-[17px] leading-[28px] text-ivory/70">
              We design and build a custom site for one mortgage broker. Your
              brand, your domain, and intake wired into your CRM the day it goes
              live.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center rounded-[4px] bg-gold px-[22px] py-[14px] text-[13px] font-medium uppercase tracking-[0.78px] text-ink transition-colors hover:bg-[#d4b56e]"
              >
                Start your project
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center rounded-[4px] border border-ivory px-[22px] py-[14px] text-[13px] font-medium uppercase tracking-[0.78px] text-ivory transition-colors hover:bg-ivory/10"
              >
                See the work
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Overlapping browser mock straddling the hero seam */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[960px] px-16">
            <div className="relative z-10 -mt-32 md:-mt-40">
              <WebsiteMock
                domain="harrington-lending.com"
                headline="Mortgages, made plain."
                tagline="Denver's broker for first-time buyers and refinances."
              />
            </div>
          </div>

          {/* Editorial intro — large statement, asymmetric */}
          <div className="mx-auto max-w-[1280px] px-16 py-24 md:py-32">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
              <Reveal className="md:col-span-7">
                <h2 className="font-serif text-[30px] font-normal leading-[1.25] tracking-[-0.4px] text-ink md:text-[40px]">
                  Most broker sites look like everyone else and ask the borrower
                  to do the work. Yours will read like you, and do the work
                  itself.
                </h2>
              </Reveal>
              <Reveal delay={120} className="md:col-span-5 md:pt-2">
                <p className="text-[16px] leading-[27px] text-ink/70">
                  A site is the first thing a borrower meets and the last thing
                  most brokers invest in. We treat it as the front of your
                  business: built once, built right, and built to send the next
                  conversation in already warm.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      {/* What's built in — sticky title, spec-sheet rows */}
      <div data-nav-mode="light">
        <section className="border-t border-ink/10 bg-white">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-16 py-24 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-[130px]">
                <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
                  What is built in
                </p>
                <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[42px]">
                  Six things, in one build.
                </h2>
                <a
                  href="/contact"
                  className="group mt-8 inline-flex w-fit items-center gap-2 rounded-[4px] border border-ink/20 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  Start your project
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="border-b border-ink/10">
                {deliverables.map((d) => (
                  <Reveal
                    key={d.n}
                    className="group grid grid-cols-1 gap-2 border-t border-ink/10 py-8 transition-colors duration-300 hover:border-gold md:grid-cols-12 md:items-baseline md:gap-8"
                  >
                    <span className="font-serif text-[28px] leading-none text-ink/20 transition-colors duration-300 group-hover:text-gold md:col-span-2">
                      {d.n}
                    </span>
                    <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.22px] text-ink md:col-span-4">
                      {d.label}
                    </h3>
                    <p className="text-[15px] leading-[24px] text-ink/70 md:col-span-6">
                      {d.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Process — dark horizontal band with a timeline rule */}
      <div data-nav-mode="dark">
        <section className="bg-ink">
          <div className="mx-auto max-w-[1280px] px-16 py-28">
            <div className="max-w-[560px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
                How it goes
              </p>
              <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ivory md:text-[42px]">
                Four steps from kickoff to launch.
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <Reveal key={step.n} className="relative border-t border-ivory/20 pt-7">
                  <span
                    aria-hidden
                    className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-gold"
                  />
                  <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-gold">
                    Step {step.n}
                  </span>
                  <h3 className="mt-4 font-serif text-[24px] font-normal leading-[1.2] tracking-[-0.22px] text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[22px] text-ivory/65">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Proof — single centered feature */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[860px] px-16 py-24 text-center md:py-32">
            <Reveal>
              <h2 className="font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.4px] text-ink md:text-[44px]">
                Every enquiry lands where it belongs.
              </h2>
              <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[26px] text-ink/70">
                Forms route straight into your pipeline, tagged and sorted, with
                the follow-up running on its own. The warm borrowers reach you
                first.
              </p>
            </Reveal>
            <Reveal delay={140} className="mt-12">
              <PipelineMock title="Pipeline" />
            </Reveal>
          </div>
        </section>
      </div>

      {/* FAQ — centered single column */}
      <div data-nav-mode="light">
        <section className="border-t border-ink/10 bg-white">
          <div className="mx-auto max-w-[760px] px-16 py-24">
            <h2 className="text-center font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[40px]">
              Before you start.
            </h2>
            <div className="mt-12 border-b border-ink/10">
              {faq.map((item) => (
                <div key={item.q} className="border-t border-ink/10 py-8">
                  <h3 className="font-serif text-[21px] font-normal leading-[1.3] tracking-[-0.16px] text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[25px] text-ink/70">
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
