import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Brand Identity · Meridian.",
  description:
    "Logo, type, color, and voice for mortgage brokers. A full visual system you own and carry with you.",
};

const palette = [
  { name: "Ink", hex: "#0f0f0f", text: "text-ivory" },
  { name: "Gold", hex: "#c9a961", text: "text-ink" },
  { name: "Cream", hex: "#f5f0e6", text: "text-ink" },
  { name: "Pine", hex: "#2d4a36", text: "text-ivory" },
];

const rows = [
  {
    n: "01",
    label: "Logo and lockups",
    title: "A mark that works at every size.",
    body: "A primary wordmark, a compact monogram, and the lockups for a sign, a business card, and a favicon. One system, drawn for where it actually appears.",
  },
  {
    n: "02",
    label: "Type and color",
    title: "A palette you can hold to for years.",
    body: "A typographic scale and a color system with the rules for using them. The look stays consistent whoever touches it next.",
  },
  {
    n: "03",
    label: "Voice",
    title: "The way you sound on the page.",
    body: "How you greet a borrower, name your offers, and sign off. Written down so every email and post reads like the same person.",
  },
  {
    n: "04",
    label: "Guidelines",
    title: "A brand book you keep.",
    body: "A short, usable guide with the files, the rules, and the do-nots. Hand it to a printer or a hire and the brand holds.",
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We learn your market, your borrowers, and the brokers you are measured against.",
  },
  {
    n: "02",
    title: "Direction",
    body: "Two or three distinct directions, each a full look rather than a logo on a page.",
  },
  {
    n: "03",
    title: "Refine",
    body: "We take the chosen direction and build it out across every place it has to live.",
  },
  {
    n: "04",
    title: "Handover",
    body: "Every file, every format, and the guide that keeps it consistent. All yours.",
  },
];

const faq = [
  {
    q: "Do you do brand without a website?",
    a: "Yes. Plenty of brokers start with the brand and bring the site later, or take the brand to their own developer.",
  },
  {
    q: "What if I switch brokerages?",
    a: "The brand is yours. Files, fonts, and rights move with you, so nothing has to change when you do.",
  },
  {
    q: "How many logo directions do I see?",
    a: "Two or three, each a complete look. We refine one rather than spreading thin across a dozen drafts.",
  },
  {
    q: "Can you match an existing brand?",
    a: "If parts of it work, we keep them and build around them. If it holds you back, we say so.",
  },
];

export default function BrandIdentityPage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* Hero — left text, brand specimen card on the right */}
      <div data-nav-mode="hero">
        <section className="relative overflow-hidden bg-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-6%] top-[-12%] h-[620px] w-[820px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(201,169,97,0.14) 0%, rgba(15,15,15,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[1280px] px-16 pb-28 pt-44 md:pb-36 md:pt-52">
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-20">
              <div className="md:col-span-6">
                <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
                  Brand identity
                </p>
                <h1 className="mt-5 font-serif text-[52px] font-normal leading-[1] tracking-[-1.6px] text-ivory md:text-[72px]">
                  The look that makes you the obvious choice.
                </h1>
                <p className="mt-7 max-w-[480px] text-[17px] leading-[28px] text-ivory/70">
                  Logo, type, color, and voice. One visual system that holds up
                  on a sign, a screen, and a business card, and that you keep
                  wherever you go.
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

              {/* Specimen card */}
              <div className="md:col-span-6">
                <div className="rounded-[14px] border border-ivory/12 bg-[#161616] p-8 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.8)]">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/40">
                    Wordmark
                  </p>
                  <p className="mt-3 font-serif text-[44px] leading-none text-ivory">
                    Harrington<span className="text-gold">.</span>
                  </p>
                  <p className="mt-2 text-[12px] tracking-[0.3em] text-ivory/45">
                    LENDING CO.
                  </p>

                  <div className="my-7 h-px w-full bg-ivory/10" />

                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/40">
                    Type
                  </p>
                  <p className="mt-3 font-serif text-[26px] leading-tight text-ivory">
                    Aa Bb Cc
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-ivory/55">
                    The quick brown fox jumps over the lazy dog.
                  </p>

                  <div className="my-7 h-px w-full bg-ivory/10" />

                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/40">
                    Color
                  </p>
                  <div className="mt-3 flex gap-2">
                    {palette.map((c) => (
                      <span
                        key={c.name}
                        className="h-12 flex-1 rounded-[6px] ring-1 ring-inset ring-white/10"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Specimen gallery — the system, laid out as tiles */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-16 py-24 md:py-28">
            <Reveal>
              <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
                The system
              </p>
              <h2 className="mt-4 max-w-[640px] font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[44px]">
                Not a logo. A whole way of showing up.
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
              {/* Color palette tile */}
              <Reveal className="md:col-span-7">
                <div className="flex h-full flex-col justify-between rounded-[12px] border border-ink/10 p-8">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-pine">
                    Palette
                  </p>
                  <div className="mt-8 grid grid-cols-4 gap-3">
                    {palette.map((c) => (
                      <div key={c.name}>
                        <div
                          className="flex h-24 items-end rounded-[8px] p-3 ring-1 ring-inset ring-black/5"
                          style={{ backgroundColor: c.hex }}
                        >
                          <span className={`text-[11px] font-medium ${c.text}`}>
                            {c.name}
                          </span>
                        </div>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-stone">
                          {c.hex}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Type scale tile */}
              <Reveal delay={100} className="md:col-span-5">
                <div className="flex h-full flex-col justify-between rounded-[12px] bg-ink p-8 text-ivory">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-gold">
                    Typography
                  </p>
                  <div className="mt-6">
                    <p className="font-serif text-[40px] leading-none">Display</p>
                    <p className="mt-3 font-serif text-[22px] leading-tight text-ivory/80">
                      Subhead in the serif
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-ivory/60">
                      Body text set in the sans, sized for long reading on a
                      phone or a desktop.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Logo lockups tile — full width */}
              <Reveal className="md:col-span-12">
                <div className="grid grid-cols-2 gap-4 rounded-[12px] border border-ink/10 p-8 md:grid-cols-4">
                  {["Harrington.", "H.", "Harrington Lending", "HL"].map(
                    (mark, i) => (
                      <div
                        key={i}
                        className="flex h-28 items-center justify-center rounded-[8px] bg-cream"
                      >
                        <span className="font-serif text-[24px] text-ink">
                          {mark}
                          {i === 0 && <span className="text-gold">.</span>}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      {/* Deliverables — large alternating editorial rows */}
      <div data-nav-mode="light">
        <section className="border-t border-ink/10 bg-white">
          <div className="mx-auto max-w-[1080px] px-16 py-24">
            <div className="flex flex-col">
              {rows.map((row, i) => (
                <Reveal
                  key={row.n}
                  className={`grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-10 ${
                    i !== 0 ? "border-t border-ink/10" : ""
                  }`}
                >
                  <div className="md:col-span-4">
                    <span className="font-serif text-[56px] leading-none text-cream">
                      {row.n}
                    </span>
                    <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.16em] text-pine">
                      {row.label}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.28px] text-ink md:text-[32px]">
                      {row.title}
                    </h3>
                    <p className="mt-4 max-w-[520px] text-[16px] leading-[26px] text-ink/70">
                      {row.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Process — vertical numbered list on ink */}
      <div data-nav-mode="dark">
        <section className="bg-ink">
          <div className="mx-auto max-w-[1080px] px-16 py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
                  How it goes
                </p>
                <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ivory md:text-[40px]">
                  From blank page to a brand you own.
                </h2>
              </div>

              <div className="md:col-span-8">
                {steps.map((step, i) => (
                  <Reveal
                    key={step.n}
                    className={`flex gap-6 py-7 ${
                      i !== 0 ? "border-t border-ivory/12" : ""
                    }`}
                  >
                    <span className="font-serif text-[22px] leading-none text-gold">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-serif text-[20px] font-normal leading-[1.2] text-ivory">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[24px] text-ivory/65">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ — two-column grid */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[1080px] px-16 py-24">
            <h2 className="font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[40px]">
              Before you start.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-serif text-[20px] font-normal leading-[1.3] tracking-[-0.12px] text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[24px] text-ink/70">
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
