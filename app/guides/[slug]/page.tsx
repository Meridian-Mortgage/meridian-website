import { notFound } from "next/navigation";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import GuideArticle from "@/components/GuideArticle";
import GuideCard from "@/components/GuideCard";
import Reveal from "@/components/Reveal";
import {
  getAllGuides,
  getAllGuideSlugs,
  getGuideBySlug,
} from "@/lib/guides";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: `${guide.title} · Meridian Guides`,
    description: guide.excerpt,
  };
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function GuidePage({ params }: { params: Params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const more = getAllGuides()
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 2);

  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="light">
        {/* Title block */}
        <section className="bg-white">
          <div className="mx-auto max-w-[820px] px-8 pb-12 pt-40 md:pt-44">
            <Reveal>
              <a
                href="/guides"
                className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.96px] text-stone transition-opacity hover:opacity-75"
              >
                <span aria-hidden>←</span> All Guides
              </a>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-10 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-pine" />
                {guide.category}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mt-6 font-serif text-[44px] font-normal leading-[1.08] tracking-[-1px] text-ink md:text-[56px] md:leading-[1.05]">
                {guide.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex items-center gap-4 text-[13px] text-stone">
                <span>{guide.author.name}</span>
                <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-stone/40" />
                <span>{dateFormatter.format(new Date(guide.publishedAt))}</span>
                <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-stone/40" />
                <span>{guide.readTimeMin} min read</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Cover image */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1180px] px-8">
            <Reveal delay={120}>
              <div
                className="aspect-[16/8] w-full overflow-hidden rounded-[6px] bg-cream bg-cover bg-center"
                style={{ backgroundImage: `url('${guide.coverImage}')` }}
              />
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white">
          <div className="mx-auto max-w-[720px] px-8 pb-24 pt-16">
            <Reveal>
              <GuideArticle blocks={guide.body} />
            </Reveal>
          </div>
        </section>

        {/* More guides */}
        {more.length > 0 && (
          <section className="bg-[#F2F1F0]">
            <div className="mx-auto max-w-[1180px] px-8 pb-24 pt-20">
              <Reveal>
                <h2 className="font-serif text-[32px] font-normal leading-[1.15] tracking-[-0.32px] text-ink">
                  Next up.
                </h2>
              </Reveal>

              <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
                {more.map((g, i) => (
                  <GuideCard key={g.slug} guide={g} delay={80 + i * 80} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <div data-nav-mode="dark">
        <SiteCTA />
        <Footer />
      </div>
    </main>
  );
}
