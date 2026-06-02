import Reveal from "@/components/Reveal";

type Props = {
  title: string;
  subtitle: string;
};

export default function CaseStudyHero({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Warm golden glow rising from the bottom-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-40 h-[460px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(201,169,97,0.22) 0%, rgba(201,169,97,0.08) 35%, rgba(15,15,15,0) 70%)",
        }}
      />

      {/* Cool diagonal wash from the top-left to add depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(45,74,54,0.18) 0%, rgba(15,15,15,0) 45%)",
        }}
      />

      {/* Subtle vignette at the corners so the glow reads as a single source */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 30%, rgba(15,15,15,0) 0%, rgba(15,15,15,0.55) 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1080px] flex-col items-center px-16 pb-32 pt-40 text-center md:pb-44 md:pt-44">
        <Reveal>
          <h1 className="font-serif text-[42px] font-normal leading-[1.08] tracking-[-1px] text-ivory md:text-[56px] md:leading-[1.05] md:tracking-[-1.2px]">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[26px] text-ivory/65 md:text-[16px]">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
