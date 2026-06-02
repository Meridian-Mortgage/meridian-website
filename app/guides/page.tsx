import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import FeaturedGuide from "@/components/FeaturedGuide";
import GuideCard from "@/components/GuideCard";
import { getAllGuides } from "@/lib/guides";

export const metadata = {
  title: "Guides · Meridian.",
  description:
    "Practical playbooks on mortgage marketing, SEO, brand, and conversion. Written for working brokers.",
};

export default function GuidesIndexPage() {
  const guides = getAllGuides();
  const [lead, ...rest] = guides;

  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="light">
        <CaseStudyHeader
          eyebrow="GUIDES"
          title="Playbooks for working brokers."
          intro="Practical writing on the work of becoming the obvious choice in your market: SEO, brand, conversion, and the systems that compound past clients into more closings."
        />

        {lead && (
          <section className="mx-auto max-w-[1440px] px-16 pb-20">
            <FeaturedGuide guide={lead} />
          </section>
        )}

        {rest.length > 0 && (
          <section className="mx-auto max-w-[1440px] border-t border-ink/8 px-16 pb-32 pt-20">
            <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((g, i) => (
                <GuideCard key={g.slug} guide={g} delay={80 + i * 80} />
              ))}
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
