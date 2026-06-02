import Reveal from "@/components/Reveal";
import type { Guide } from "@/lib/guides";

type Props = {
  guide: Guide;
  delay?: number;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function GuideCard({ guide, delay = 0 }: Props) {
  return (
    <Reveal delay={delay}>
      <a
        href={`/guides/${guide.slug}`}
        className="group flex h-full flex-col gap-5"
      >
        <div className="aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-cream">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-[700ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03]"
            style={{ backgroundImage: `url('${guide.coverImage}')` }}
          />
        </div>

        <div className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
          <span>{guide.category}</span>
          <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-stone/40" />
          <span className="text-stone">{guide.readTimeMin} min read</span>
        </div>

        <h3 className="font-serif text-[24px] font-normal leading-[1.2] tracking-[-0.24px] text-ink transition-opacity group-hover:opacity-75">
          {guide.title}
        </h3>

        <p className="text-[15px] leading-[24px] text-stone">{guide.excerpt}</p>

        <p className="mt-auto text-[12px] tracking-[0.4px] text-stone">
          {dateFormatter.format(new Date(guide.publishedAt))}
        </p>
      </a>
    </Reveal>
  );
}
