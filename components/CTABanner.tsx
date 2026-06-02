import Reveal from "@/components/Reveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Luxury interior photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroimg.jpg')" }}
      />

      {/* Even dark wash so the photo reads without overpowering the card */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.65) 100%)",
        }}
      />

      {/* Seamless fade into the footer at the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0) 0%, rgba(15,15,15,1) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-16 py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[10px] border border-white/[0.06] bg-[rgba(20,20,22,0.55)] px-12 py-12 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-[14px]">
            <div className="flex items-center justify-between gap-12">
              <h3 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-ivory">
                Grow your mortgage practice
                <br />
                with Meridian.
              </h3>

              <a
                href="/contact"
                className="inline-flex shrink-0 items-center rounded-[4px] bg-gold px-[22px] py-[14px] text-[12px] font-semibold tracking-[0.96px] text-ink transition-colors hover:bg-[#d4b56e]"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
