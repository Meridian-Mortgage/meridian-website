import Reveal from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
};

export default function CaseStudyHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-16 pb-20 pt-40">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-pine" />
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-[900px] font-serif text-[64px] font-normal leading-[1.05] tracking-[-1.4px] text-ink md:text-[80px] md:leading-[1.02]">
            {title}
          </h1>
          <p className="mt-8 max-w-[640px] text-[18px] leading-[30px] text-stone">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
