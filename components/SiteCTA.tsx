import Reveal from "@/components/Reveal";

export default function SiteCTA() {
  return (
    <section className="bg-ink">
      <div className="px-10 py-16">
        <Reveal>
          <div className="flex items-center justify-between gap-8">
            <h2 className="font-serif text-[28px] font-normal leading-[1.2] tracking-[-0.4px] text-ivory md:text-[34px]">
              Become the top broker in your market.
            </h2>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center rounded-[6px] border border-ivory/30 px-7 py-3.5 text-[14px] font-medium tracking-[0.2px] text-ivory transition-colors hover:border-ivory/60 hover:bg-ivory/5"
            >
              Book a call
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-ivory/10" />
    </section>
  );
}
