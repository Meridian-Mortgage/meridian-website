import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import Reveal from "@/components/Reveal";

export type LegalSection = { heading: string; body: string[] };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="dark">
        <section className="bg-ink">
          <div className="mx-auto max-w-[860px] px-16 pb-16 pt-44 md:pt-52">
            <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
              Legal
            </p>
            <h1 className="mt-5 font-serif text-[44px] font-normal leading-[1.05] tracking-[-1.2px] text-ivory md:text-[64px]">
              {title}
            </h1>
            <p className="mt-5 text-[13px] text-ivory/50">
              Last updated {updated}
            </p>
          </div>
        </section>
      </div>

      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[760px] px-16 py-20 md:py-24">
            <p className="text-[17px] leading-[29px] text-ink/75">{intro}</p>

            <div className="mt-14 flex flex-col gap-12">
              {sections.map((s) => (
                <Reveal key={s.heading}>
                  <h2 className="font-serif text-[24px] font-normal leading-[1.2] tracking-[-0.22px] text-ink md:text-[28px]">
                    {s.heading}
                  </h2>
                  {s.body.map((p, i) => (
                    <p
                      key={i}
                      className="mt-3 text-[15px] leading-[25px] text-ink/75"
                    >
                      {p}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-nav-mode="dark">
        <SiteCTA />
        <Footer />
      </div>
    </main>
  );
}
