export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-ink">
      {/* Background photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroimg.jpg')" }}
      />

      {/* Dark gradient overlay, heavier on the left for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.88) 30%, rgba(10,10,10,0.55) 65%, rgba(10,10,10,0.2) 100%)",
        }}
      />
      {/* Top vignette so the transparent nav reads on bright sky areas */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0) 100%)",
        }}
      />

      {/* Subtle bottom fade so the section meets the white block below cleanly */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0) 0%, rgba(15,15,15,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-24 pb-[120px] pt-[200px]">
        <div className="flex max-w-[640px] flex-col gap-8">
          <p className="hero-rise hero-rise-1 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.96px] text-ivory/85">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-pine" />
            BUILT FOR LENDING
          </p>

          <h1 className="hero-rise hero-rise-2 font-serif text-[64px] font-normal leading-[1.05] tracking-[-2.52px] text-ivory md:text-[84px] md:leading-[88px]">
            Authority,
            <br />
            Made Visible.
          </h1>

          <p className="hero-rise hero-rise-3 max-w-[540px] text-[18px] leading-[30px] text-ivory">
            We design the brands and websites that turn working mortgage
            brokers into the first name borrowers and referral partners think
            of in their market.
          </p>

          <div className="hero-rise hero-rise-4 flex flex-wrap gap-3 pt-2">
            <a
              href="/contact"
              className="inline-flex items-center rounded-[4px] bg-gold px-[22px] py-[14px] text-[13px] font-medium tracking-[0.78px] text-ink transition-colors hover:bg-[#d4b56e]"
            >
              START YOUR PROJECT
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center rounded-[4px] border border-ivory px-[22px] py-[14px] text-[13px] font-medium tracking-[0.78px] text-ivory transition-colors hover:bg-ivory/10"
            >
              SEE OUR WORK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
