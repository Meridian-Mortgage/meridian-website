import Reveal from "@/components/Reveal";
import type { Guide } from "@/lib/guides";

type Props = { guide: Guide };

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function FeaturedGuide({ guide }: Props) {
  return (
    <Reveal>
      <a
        href={`/guides/${guide.slug}`}
        className="group grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-14"
      >
        <div className="md:col-span-7">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-cream">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-[700ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03]"
              style={{ backgroundImage: `url('${guide.coverImage}')` }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:col-span-5">
          <div className="flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
            <span>{guide.category}</span>
            <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-stone/40" />
            <span className="text-stone">{guide.readTimeMin} min read</span>
          </div>

          <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.4px] text-ink transition-opacity group-hover:opacity-80 md:text-[44px]">
            {guide.title}
          </h2>

          <p className="text-[17px] leading-[28px] text-stone">
            {guide.excerpt}
          </p>

          <div className="mt-2 flex items-center justify-between text-[13px] text-stone">
            <span>{dateFormatter.format(new Date(guide.publishedAt))}</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-ink transition-transform group-hover:translate-x-0.5">
              Read guide <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
