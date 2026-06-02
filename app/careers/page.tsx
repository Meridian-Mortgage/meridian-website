import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CaseStudyHero from "@/components/CaseStudyHero";
import CareersForm from "@/components/CareersForm";
import Departments from "@/components/Departments";

export const metadata = {
  title: "Careers · Meridian.",
  description:
    "Open roles at Meridian. The team is at capacity right now. Spontaneous applications welcome.",
};

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="hero">
        <CaseStudyHero
          title="Open roles."
          subtitle="We hire designers, engineers, and writers who do their best work for one industry. The team is at capacity right now, but we open new seats a few times a year."
        />
      </div>

      <div data-nav-mode="light">
        {/* Departments */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1080px] px-8 pb-12 pt-20">
            <Reveal>
              <Departments />
            </Reveal>
          </div>
        </section>

        {/* Spontaneous application */}
        <section className="bg-white">
          <div className="mx-auto max-w-[820px] px-8 pb-32 pt-16">
            <Reveal>
              <h2 className="font-serif text-[36px] font-normal leading-[1.1] tracking-[-0.4px] text-ink md:text-[44px]">
                Still want to apply?
              </h2>
              <p className="mt-5 max-w-[600px] text-[17px] leading-[28px] text-stone">
                Send a spontaneous application. We read everything that comes in, and we reach out the moment a role opens that fits your work.
              </p>
            </Reveal>

            <div className="mt-12">
              <Reveal>
                <CareersForm />
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <div data-nav-mode="dark">
        <Footer />
      </div>
    </main>
  );
}
