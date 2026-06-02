import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About · Meridian.",
  description:
    "Meridian is a brand and web design team built for working mortgage brokers. One industry, very high standards.",
};

const principles = [
  {
    n: "01",
    title: "Positioning before polish.",
    body: "We figure out what a broker stands for in their market before we open Figma.",
  },
  {
    n: "02",
    title: "Custom, never templated.",
    body: "Every site is built for one broker. No themes, no page builders, no reused layouts.",
  },
  {
    n: "03",
    title: "Small on purpose.",
    body: "Six great projects a year beats thirty average ones. The team stays small so the bar stays high.",
  },
];

const values = [
  {
    title: "Specific over generic.",
    body: "Every page, every line of copy starts from one broker's actual market.",
  },
  {
    title: "Substance over polish.",
    body: "A brand has to mean something before it looks like something.",
  },
  {
    title: "Plain language.",
    body: "We don't speak agency. We talk like the brokers we serve.",
  },
  {
    title: "Long relationships.",
    body: "Most of our clients are still our clients three years on.",
  },
];

const explore = [
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Three brokers, the work we shipped, and the numbers that followed.",
  },
  {
    label: "Guides",
    href: "/guides",
    description: "Practical writing on SEO, brand, and conversion for mortgage pros.",
  },
  {
    label: "Careers",
    href: "/careers",
    description: "We hire rarely. Send a spontaneous application anytime.",
  },
  {
    label: "Broker Playbook",
    href: "/broker-playbook",
    description: "The long-form guide to becoming the first name in your market. Coming soon.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="light">
        <CaseStudyHeader
          eyebrow="ABOUT"
          title="Built for mortgage brokers."
          intro="We design the brands and websites that turn working brokers into the first name in their market. One industry, on purpose."
        />

        {/* Editorial image */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-16">
            <Reveal>
              <div className="aspect-[16/8] w-full overflow-hidden rounded-[8px] bg-cream">
                <div
                  className="reveal-image-zoom h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/heroimg.jpg')" }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why one industry */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1080px] px-16 py-24">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <Reveal>
                  <h2 className="font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.32px] text-ink md:text-[40px]">
                    Why one industry.
                  </h2>
                </Reveal>
              </div>

              <div className="flex flex-col gap-6 md:col-span-8">
                <Reveal delay={80}>
                  <p className="text-[18px] leading-[30px] text-ink/80">
                    Most agencies work across every industry and end up shallow in all of them. We picked mortgage brokers and stayed. After a few years of nothing else, we know how a borrower decides, what kills a refinance call, and which referral partners move a market. That depth is the work.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-[#F2F1F0]">
          <div className="mx-auto max-w-[1080px] px-16 py-24">
            <Reveal>
              <h2 className="font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.32px] text-ink md:text-[40px]">
                How we work.
              </h2>
            </Reveal>

            <div className="mt-14 flex flex-col">
              {principles.map((p, i) => (
                <Reveal key={p.n} delay={120 + i * 80}>
                  <div className="grid grid-cols-1 items-baseline gap-4 border-t border-ink/10 py-8 md:grid-cols-12 md:gap-12">
                    <div className="md:col-span-2">
                      <p className="font-serif text-[40px] font-normal leading-[1] text-pine">
                        {p.n}
                      </p>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.2px] text-ink md:text-[26px]">
                        {p.title}
                      </h3>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-[16px] leading-[26px] text-ink/80">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1080px] px-16 py-24">
            <Reveal>
              <h2 className="font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.32px] text-ink md:text-[40px]">
                What we believe.
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={140 + i * 80}>
                  <div className="border-t-2 border-pine pt-6">
                    <h3 className="font-serif text-[24px] font-normal leading-[1.2] tracking-[-0.22px] text-ink md:text-[28px]">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[24px] text-ink/75">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Testimonial — dark moment in the middle of the page */}
      <div data-nav-mode="dark">
        <section className="relative overflow-hidden bg-ink">
          {/* Warm pine wash from the top-left, gold glow from the bottom-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(45,74,54,0.22) 0%, rgba(15,15,15,0) 50%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 right-[-10%] h-[420px] w-[60%]"
            style={{
              background:
                "radial-gradient(60% 100% at 70% 100%, rgba(201,169,97,0.18) 0%, rgba(15,15,15,0) 70%)",
            }}
          />

          <div className="relative mx-auto max-w-[920px] px-16 py-32 text-center">
            <Reveal>
              <p aria-hidden className="mx-auto mb-6 font-serif text-[60px] leading-[1] text-gold/80">
                &ldquo;
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className="font-serif text-[30px] font-normal leading-[1.25] tracking-[-0.2px] text-ivory md:text-[40px] md:leading-[1.2]">
                The brand finally looks like the business I always thought I was running.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 flex flex-col items-center gap-1 text-[14px]">
                <p className="font-semibold text-ivory">Gilian</p>
                <p className="text-ivory/55">Senior Loan Advisor, Coastal Mortgage Group</p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <a
                href="/case-studies"
                className="group mt-10 inline-flex items-center gap-1.5 text-[13px] font-medium text-gold"
              >
                <span className="bg-[length:0%_1px] bg-[linear-gradient(currentColor,currentColor)] bg-[position:0_100%] bg-no-repeat pb-px transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                  Read her case study
                </span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </section>
      </div>

      <div data-nav-mode="light">

        {/* Explore the rest */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-16 py-24">
            <Reveal>
              <h2 className="font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.32px] text-ink md:text-[40px]">
                Look around.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {explore.map((link, i) => (
                <Reveal key={link.label} delay={120 + i * 70}>
                  <a
                    href={link.href}
                    className="group flex h-full flex-col justify-between gap-8 rounded-[8px] border border-ink/8 bg-[#FAFAF8] p-7 shadow-[0_1px_2px_rgba(15,15,15,0.02)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-[0_18px_40px_-22px_rgba(15,15,15,0.18)]"
                  >
                    <span
                      aria-hidden
                      className="h-2 w-2 rounded-full bg-pine"
                    />

                    <div className="flex flex-col gap-3">
                      <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.2px] text-ink">
                        {link.label}
                      </h3>
                      <p className="text-[14px] leading-[22px] text-ink/75">
                        {link.description}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-stone transition-colors group-hover:text-ink">
                      Visit
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </a>
                </Reveal>
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
