import Reveal from "@/components/Reveal";

type Result = { value: string; label: string };

type CaseStudy = {
  name: string;
  title: string;
  company: string;
  location: string;
  image: string;
  headline: string;
  quote: string;
  narrative: string;
  results: Result[];
};

export type CaseStudyTone = "light" | "dark";

type Props = {
  caseStudy: CaseStudy;
  reverse?: boolean;
  tone?: CaseStudyTone;
};

const PALETTES: Record<
  CaseStudyTone,
  {
    article: string;
    eyebrow: string;
    headline: string;
    narrative: string;
    quote: string;
    name: string;
    title: string;
    portraitBg: string;
    resultsBorder: string;
    resultsValue: string;
    resultsLabel: string;
  }
> = {
  light: {
    article:
      "border border-ink/10 bg-white shadow-[0_30px_80px_-50px_rgba(0,0,0,0.30)]",
    eyebrow: "text-pine",
    headline: "text-ink",
    narrative: "text-stone",
    quote: "border-pine text-ink/85",
    name: "text-ink",
    title: "text-stone",
    portraitBg: "bg-cream",
    resultsBorder: "divide-ink/10 border-ink/10",
    resultsValue: "text-ink",
    resultsLabel: "text-stone",
  },
  dark: {
    article: "bg-ink shadow-[0_40px_100px_-50px_rgba(0,0,0,0.6)]",
    eyebrow: "text-gold",
    headline: "text-ivory",
    narrative: "text-ivory/70",
    quote: "border-gold text-ivory/90",
    name: "text-ivory",
    title: "text-ivory/60",
    portraitBg: "bg-ink/40",
    resultsBorder: "divide-ivory/15 border-ivory/15",
    resultsValue: "text-ivory",
    resultsLabel: "text-ivory/60",
  },
};

export default function CaseStudyCard({ caseStudy, reverse, tone = "light" }: Props) {
  const cs = caseStudy;
  const p = PALETTES[tone];

  return (
    <article className={`rounded-[8px] p-12 ${p.article}`}>
      <div
        className={`flex items-center gap-16 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        {/* Portrait */}
        <Reveal className="shrink-0" delay={120}>
          <div
            className={`h-[480px] w-[480px] overflow-hidden rounded-[6px] bg-cover bg-center ${p.portraitBg}`}
            style={{ backgroundImage: `url('${cs.image}')` }}
          />
        </Reveal>

        {/* Content */}
        <Reveal className="flex flex-1 flex-col gap-7" as="div">
          <p className={`text-[12px] font-medium uppercase tracking-[0.96px] ${p.eyebrow}`}>
            {cs.company} &nbsp;·&nbsp; {cs.location}
          </p>

          <h2
            className={`font-serif text-[36px] font-normal leading-[1.15] tracking-[-0.36px] ${p.headline}`}
          >
            {cs.headline}
          </h2>

          <p className={`text-[16px] leading-[26px] ${p.narrative}`}>{cs.narrative}</p>

          <blockquote
            className={`border-l-2 pl-5 font-serif text-[20px] leading-[30px] ${p.quote}`}
          >
            &ldquo;{cs.quote}&rdquo;
          </blockquote>

          <div className="flex flex-col gap-0.5 text-[13px]">
            <p className={`font-semibold ${p.name}`}>{cs.name}</p>
            <p className={p.title}>
              {cs.title}, {cs.company}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Results strip */}
      <Reveal delay={220}>
        <div
          className={`mt-12 grid grid-cols-3 divide-x border-t pt-10 ${p.resultsBorder}`}
        >
          {cs.results.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2 px-6 text-center">
              <p
                className={`whitespace-nowrap font-serif text-[52px] font-medium leading-[1] tracking-[-0.02em] ${p.resultsValue}`}
              >
                {r.value}
              </p>
              <p className={`max-w-[200px] text-[13px] leading-[1.45] ${p.resultsLabel}`}>
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
