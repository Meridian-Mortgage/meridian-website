import { ReactNode } from "react";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import Reveal from "@/components/Reveal";

const avatars = [
  "/testimonials/aaronimg.jpeg",
  "/testimonials/gilianimg.jpg",
  "/testimonials/poimg.png",
];

export type PackageCard = {
  n: string;
  label: string;
  title: string;
  body: string;
};

export type ShowcaseItem = {
  heading: string;
  body: string;
  visual: ReactNode;
};

export type WhoWeServeContent = {
  hero: {
    headline: string;
    subline: string;
    trustLabel: string;
    /** "center" (default) or "left" asymmetric. */
    layout?: "center" | "left";
  };
  pkg: {
    eyebrow: string;
    heading: string;
    /** "bento" (default), "rows" editorial list, "grid" banner + 2x2, or "split" tall feature + cards. */
    layout?: "bento" | "rows" | "grid" | "split";
    feature: { label: string; title: string; body: string };
    /** First card renders as the side card (02); the rest fill the row of three. */
    cards: PackageCard[];
  };
  showcase: ShowcaseItem[];
  /** Which side the first showcase visual sits on. Defaults to "left". */
  showcaseStart?: "left" | "right";
  testimonial: {
    quote: string;
    name: string;
    company: string;
    image: string;
    linkText: string;
    href: string;
    /** "side" (default) avatar-left, or "center" stacked. */
    layout?: "side" | "center";
  };
  faqHeading: string;
  faq: { q: string; a: string }[];
};

/* ---------- Showcase visual mockups ---------- */

export function WebsiteMock({
  domain,
  headline,
  tagline,
}: {
  domain: string;
  headline: string;
  tagline: string;
}) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-ink/10 bg-white shadow-[0_30px_80px_-45px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-ink/5 px-4 py-3">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <div className="ml-3 flex h-6 max-w-[220px] flex-1 items-center rounded-full bg-cream px-3 text-[10px] tracking-[0.04em] text-ink/45">
          {domain}
        </div>
      </div>
      <div className="p-7">
        <p className="font-serif text-[24px] leading-[1.1] tracking-[-0.4px] text-ink">
          {headline}
        </p>
        <p className="mt-2 max-w-[260px] text-[12px] leading-[18px] text-ink/55">
          {tagline}
        </p>
        <div className="mt-5 flex items-center gap-2">
          <span className="rounded-[4px] bg-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink">
            Get pre-approved
          </span>
          <span className="rounded-[4px] border border-ink/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/60">
            Calculator
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div
            className="aspect-[4/3] rounded-[6px] bg-cover bg-center"
            style={{ backgroundImage: "url('/heroimg.jpg')" }}
          />
          <div
            className="aspect-[4/3] rounded-[6px] bg-cover bg-center"
            style={{ backgroundImage: "url('/testimonials/gilianimg.jpg')" }}
          />
          <div
            className="aspect-[4/3] rounded-[6px] bg-cover bg-center"
            style={{ backgroundImage: "url('/testimonials/poimg.png')" }}
          />
        </div>
      </div>
    </div>
  );
}

const defaultPipelineRows = [
  { name: "Priya Shah", stage: "Pre-approval", color: "bg-moss", touch: "2h ago" },
  { name: "Marcus Lee", stage: "Refinance", color: "bg-gold", touch: "5h ago" },
  { name: "Dana Ortiz", stage: "Document review", color: "bg-pine", touch: "Yesterday" },
  { name: "Sam Whitfield", stage: "New lead", color: "bg-ink/30", touch: "Yesterday" },
  { name: "Lena Park", stage: "Pre-approval", color: "bg-moss", touch: "2d ago" },
];

export function PipelineMock({
  title,
  rows = defaultPipelineRows,
}: {
  title: string;
  rows?: { name: string; stage: string; color: string; touch: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-ink/10 bg-white shadow-[0_30px_80px_-45px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
        <p className="text-[13px] font-medium text-ink">{title}</p>
        <span className="text-[11px] uppercase tracking-[0.12em] text-ink/40">
          This week
        </span>
      </div>
      <div className="grid grid-cols-12 gap-2 border-b border-ink/5 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-ink/40">
        <span className="col-span-5">Borrower</span>
        <span className="col-span-4">Stage</span>
        <span className="col-span-3 text-right">Last touch</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.name}
          className={`grid grid-cols-12 items-center gap-2 px-5 py-3 text-[12px] ${
            i % 2 === 1 ? "bg-cream/40" : ""
          }`}
        >
          <div className="col-span-5 flex items-center gap-2.5">
            <span
              aria-hidden
              className="h-6 w-6 shrink-0 rounded-full bg-cream text-center font-serif text-[11px] leading-[24px] text-ink/60"
            >
              {row.name.charAt(0)}
            </span>
            <span className="font-medium text-ink">{row.name}</span>
          </div>
          <div className="col-span-4 flex items-center gap-1.5 text-ink/70">
            <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${row.color}`} />
            {row.stage}
          </div>
          <span className="col-span-3 text-right text-ink/45">{row.touch}</span>
        </div>
      ))}
    </div>
  );
}

const defaultAutomationItems = [
  { title: "Anniversary note", when: "Sep 12" },
  { title: "Rate-drop alert", when: "When rates move" },
  { title: "Review request", when: "7 days post-close" },
  { title: "Renewal reminder", when: "90 days out" },
];

export function AutomationMock({
  title,
  statusLabel = "Running",
  items = defaultAutomationItems,
}: {
  title: string;
  statusLabel?: string;
  items?: { title: string; when: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-ink/10 bg-white shadow-[0_30px_80px_-45px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
        <p className="text-[13px] font-medium text-ink">{title}</p>
        <span className="text-[11px] uppercase tracking-[0.12em] text-moss">
          {statusLabel}
        </span>
      </div>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`flex items-center justify-between px-5 py-4 ${
              i !== 0 ? "border-t border-ink/5" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-cream font-serif text-[13px] text-ink/55"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col">
                <span className="text-[13px] font-medium text-ink">{item.title}</span>
                <span className="text-[11px] text-ink/45">{item.when}</span>
              </div>
            </div>
            <span
              aria-hidden
              className="flex h-5 w-9 items-center rounded-full bg-moss/90 px-0.5"
            >
              <span className="ml-auto h-4 w-4 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Shared hero bits ---------- */

function BookCall() {
  return (
    <a
      href="/contact"
      className="inline-flex items-center rounded-[4px] bg-gold px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-[#d4b56e]"
    >
      Book a call
    </a>
  );
}

function StarTrust({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} aria-hidden className="text-[13px]">
            ★
          </span>
        ))}
      </div>
      <p className="text-[12px] text-ivory/55">{label}</p>
      <div className="flex">
        {avatars.map((src, i) => (
          <span
            key={src}
            aria-hidden
            className="-ml-2 h-6 w-6 rounded-full border-2 border-ink bg-cover bg-center first:ml-0"
            style={{ backgroundImage: `url('${src}')`, zIndex: 3 - i }}
          />
        ))}
      </div>
    </div>
  );
}

function Hero({ hero }: { hero: WhoWeServeContent["hero"] }) {
  const left = hero.layout === "left";
  return (
    <div data-nav-mode="hero">
      <section className="relative overflow-hidden bg-ink">
        <div
          aria-hidden
          className={`pointer-events-none absolute h-[620px] w-[820px] ${
            left ? "right-[-6%] top-[-12%]" : "left-1/2 top-0 -translate-x-1/2"
          }`}
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(201,169,97,0.14) 0%, rgba(15,15,15,0) 70%)",
          }}
        />

        {left ? (
          <div className="relative mx-auto max-w-[1280px] px-16 pb-32 pt-44 md:pb-40 md:pt-52">
            <div className="max-w-[760px]">
              <h1 className="font-serif text-[52px] font-normal leading-[1] tracking-[-1.6px] text-ivory md:text-[80px]">
                {hero.headline}
              </h1>
              <p className="mt-7 max-w-[520px] text-[17px] leading-[28px] text-ivory/70">
                {hero.subline}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
                <BookCall />
                <StarTrust label={hero.trustLabel} />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mx-auto flex max-w-[820px] flex-col items-center px-16 pb-36 pt-48 text-center md:pb-44 md:pt-56">
            <h1 className="font-serif text-[52px] font-normal leading-[1] tracking-[-1.6px] text-ivory md:text-[84px]">
              {hero.headline}
            </h1>
            <p className="mt-7 max-w-[520px] text-[17px] leading-[28px] text-ivory/70">
              {hero.subline}
            </p>
            <div className="mt-10 flex flex-col items-center gap-6">
              <BookCall />
              <StarTrust label={hero.trustLabel} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

/* ---------- Package layouts ---------- */

const CARD =
  "flex h-full flex-col justify-between gap-10 rounded-[10px] border border-ink/10 bg-white p-8 transition-colors duration-300 hover:border-gold";
const CARD_EYEBROW =
  "text-[12px] font-medium uppercase tracking-[0.12em] text-pine";

function PackageBento({ pkg }: { pkg: WhoWeServeContent["pkg"] }) {
  return (
    <div className="mt-14 grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">
        <div className="flex h-full flex-col justify-between gap-10 rounded-[10px] border border-transparent bg-ink p-10 text-ivory transition-colors duration-300 hover:border-gold">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-gold">
            01. {pkg.feature.label}
          </p>
          <div>
            <h3 className="font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.28px] md:text-[34px]">
              {pkg.feature.title}
            </h3>
            <p className="mt-4 max-w-[460px] text-[15px] leading-[24px] text-ivory/70">
              {pkg.feature.body}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4">
        <div className={CARD}>
          <p className={CARD_EYEBROW}>
            {pkg.cards[0].n}. {pkg.cards[0].label}
          </p>
          <div>
            <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.22px] text-ink md:text-[26px]">
              {pkg.cards[0].title}
            </h3>
            <p className="mt-3 text-[14px] leading-[22px] text-ink/75">
              {pkg.cards[0].body}
            </p>
          </div>
        </div>
      </div>

      {pkg.cards.slice(1).map((card) => (
        <div key={card.n} className="col-span-12 md:col-span-4">
          <div className={CARD}>
            <p className={CARD_EYEBROW}>
              {card.n}. {card.label}
            </p>
            <div>
              <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.22px] text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[22px] text-ink/75">
                {card.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PackageRows({ pkg }: { pkg: WhoWeServeContent["pkg"] }) {
  const items = [
    {
      n: "01",
      label: pkg.feature.label,
      title: pkg.feature.title,
      body: pkg.feature.body,
    },
    ...pkg.cards,
  ];
  return (
    <div className="mt-14 border-b border-ink/10">
      {items.map((c) => (
        <div
          key={c.n}
          className="group grid grid-cols-1 gap-3 border-t border-ink/10 py-8 transition-colors duration-300 hover:border-gold md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
        >
          <div className="flex items-baseline gap-4 md:col-span-4">
            <span className="font-serif text-[36px] leading-none text-ink/20 transition-colors duration-300 group-hover:text-gold md:text-[44px]">
              {c.n}
            </span>
            <span className={CARD_EYEBROW}>{c.label}</span>
          </div>
          <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.22px] text-ink md:col-span-4 md:text-[24px]">
            {c.title}
          </h3>
          <p className="text-[14px] leading-[22px] text-ink/75 md:col-span-4">
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
}

function PackageGrid({ pkg }: { pkg: WhoWeServeContent["pkg"] }) {
  return (
    <div className="mt-14 grid grid-cols-12 gap-4">
      {/* Feature banner — full width, horizontal */}
      <div className="col-span-12">
        <div className="grid grid-cols-1 gap-6 rounded-[10px] border border-transparent bg-ink p-10 text-ivory transition-colors duration-300 hover:border-gold md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-gold">
              01. {pkg.feature.label}
            </p>
            <h3 className="mt-3 font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.28px] md:text-[34px]">
              {pkg.feature.title}
            </h3>
          </div>
          <p className="text-[15px] leading-[24px] text-ivory/70 md:col-span-5">
            {pkg.feature.body}
          </p>
        </div>
      </div>

      {/* Four cards — 2x2 */}
      {pkg.cards.map((card) => (
        <div key={card.n} className="col-span-12 md:col-span-6">
          <div className={CARD}>
            <p className={CARD_EYEBROW}>
              {card.n}. {card.label}
            </p>
            <div>
              <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.22px] text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[22px] text-ink/75">
                {card.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PackageSplit({ pkg }: { pkg: WhoWeServeContent["pkg"] }) {
  return (
    <div className="mt-14 grid grid-cols-12 gap-4 md:auto-rows-fr">
      {/* Feature — tall, left column */}
      <div className="col-span-12 md:col-span-7 md:row-span-2">
        <div className="flex h-full flex-col justify-between gap-10 rounded-[10px] border border-transparent bg-ink p-10 text-ivory transition-colors duration-300 hover:border-gold">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-gold">
            01. {pkg.feature.label}
          </p>
          <div>
            <h3 className="font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.28px] md:text-[34px]">
              {pkg.feature.title}
            </h3>
            <p className="mt-4 max-w-[460px] text-[15px] leading-[24px] text-ivory/70">
              {pkg.feature.body}
            </p>
          </div>
        </div>
      </div>

      {/* 02 & 03 stack to the right; 04 & 05 run wide underneath */}
      {pkg.cards.map((card, i) => (
        <div
          key={card.n}
          className={
            i < 2
              ? "col-span-12 md:col-span-5"
              : "col-span-12 md:col-span-6"
          }
        >
          <div className={CARD}>
            <p className={CARD_EYEBROW}>
              {card.n}. {card.label}
            </p>
            <div>
              <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.22px] text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[22px] text-ink/75">
                {card.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Package({ pkg }: { pkg: WhoWeServeContent["pkg"] }) {
  const layout = pkg.layout ?? "bento";
  return (
    <div data-nav-mode="light">
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-16 py-24">
          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
              {pkg.eyebrow}
            </p>
            <h2 className="font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[44px]">
              {pkg.heading}
            </h2>
          </div>

          {layout === "rows" ? (
            <PackageRows pkg={pkg} />
          ) : layout === "grid" ? (
            <PackageGrid pkg={pkg} />
          ) : layout === "split" ? (
            <PackageSplit pkg={pkg} />
          ) : (
            <PackageBento pkg={pkg} />
          )}
        </div>
      </section>
    </div>
  );
}

/* ---------- Testimonial ---------- */

function Testimonial({ t }: { t: WhoWeServeContent["testimonial"] }) {
  const attribution = (
    <>
      {t.name}, {t.company} <span className="text-ivory/30">·</span> Read{" "}
      <a
        href={t.href}
        className="font-medium text-gold underline decoration-gold/50 decoration-2 underline-offset-4 hover:decoration-gold"
      >
        {t.linkText}
      </a>
      .
    </>
  );

  if (t.layout === "center") {
    return (
      <div data-nav-mode="dark">
        <section className="bg-ink">
          <div className="mx-auto max-w-[860px] px-16 py-28 text-center">
            <div
              className="mx-auto h-[72px] w-[72px] overflow-hidden rounded-full bg-ink/40 bg-cover bg-center ring-1 ring-ivory/15"
              style={{ backgroundImage: `url('${t.image}')` }}
            />
            <Reveal className="mt-8">
              <p className="font-serif text-[24px] font-normal leading-[1.35] tracking-[-0.18px] text-ivory md:text-[30px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-[13px] text-ivory/60">{attribution}</p>
            </Reveal>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div data-nav-mode="dark">
      <section className="bg-ink">
        <div className="mx-auto max-w-[1080px] px-16 py-24">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-2">
              <div
                className="h-[88px] w-[88px] overflow-hidden rounded-full bg-ink/40 bg-cover bg-center ring-1 ring-ivory/15"
                style={{ backgroundImage: `url('${t.image}')` }}
              />
            </div>
            <Reveal className="md:col-span-10">
              <p className="font-serif text-[22px] font-normal leading-[1.35] tracking-[-0.16px] text-ivory md:text-[26px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-[13px] text-ivory/60">{attribution}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Page shell ---------- */

export default function WhoWeServe({ content }: { content: WhoWeServeContent }) {
  const { hero, pkg, showcase, testimonial, faq } = content;
  const startLeft = (content.showcaseStart ?? "left") === "left";

  return (
    <main className="bg-white">
      <Nav />

      <Hero hero={hero} />

      <Package pkg={pkg} />

      {/* Showcase — alternating sections on white, breathable */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-32 px-16 py-24 md:gap-48 md:py-32">
            {showcase.map((item, i) => {
              const visualLeft = startLeft ? i % 2 === 0 : i % 2 === 1;
              return (
                <div
                  key={item.heading}
                  className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-24"
                >
                  <div className={visualLeft ? "md:order-1" : "md:order-2"}>
                    {item.visual}
                  </div>

                  <Reveal
                    className={`flex flex-col gap-5 ${
                      visualLeft ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <h2 className="font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.4px] text-ink md:text-[40px]">
                      {item.heading}
                    </h2>
                    <p className="max-w-[420px] text-[16px] leading-[26px] text-ink/70">
                      {item.body}
                    </p>
                    <a
                      href="/contact"
                      className="group inline-flex w-fit items-center gap-2 rounded-[4px] border border-ink/20 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-pine hover:text-pine"
                    >
                      Learn more
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <Testimonial t={testimonial} />

      {/* FAQ — on black */}
      <div data-nav-mode="dark">
        <section className="bg-ink">
          <div className="mx-auto max-w-[1080px] px-16 py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <Reveal className="md:col-span-4">
                <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
                  Common questions
                </p>
                <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ivory md:text-[40px]">
                  {content.faqHeading}
                </h2>
              </Reveal>

              <div className="flex flex-col md:col-span-8">
                {faq.map((item) => (
                  <div
                    key={item.q}
                    className="grid grid-cols-1 gap-3 border-t border-ivory/12 py-7 md:grid-cols-12 md:gap-8"
                  >
                    <p className="font-serif text-[18px] leading-[1.3] tracking-[-0.12px] text-ivory md:col-span-5 md:text-[20px]">
                      {item.q}
                    </p>
                    <p className="text-[15px] leading-[24px] text-ivory/70 md:col-span-7">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
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
