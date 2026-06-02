import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact · Meridian.",
  description:
    "Get in touch with Meridian. Send us a note and we'll reply within one business day.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="light">
        <CaseStudyHeader
          eyebrow="CONTACT"
          title="Get in touch."
          intro="Questions, ideas, or just hello. Send us a note and we'll reply within one business day."
        />

        <section className="bg-white">
          <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-16 px-16 pb-28 md:grid-cols-12 md:gap-20">
            {/* Form — elevated so it's the clear focal point */}
            <div className="md:col-span-9">
              <div className="rounded-[12px] border border-ink/10 bg-white p-8 shadow-[0_28px_70px_-40px_rgba(0,0,0,0.35)] md:px-12 md:py-10">
                <ContactForm />
              </div>
            </div>

            {/* Aside */}
            <aside className="flex flex-col gap-4 md:col-span-3 md:pt-2">
              <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
                Prefer email
              </p>
              <a
                href="mailto:ehoward@meridianmtg.com"
                className="font-serif text-[20px] tracking-[-0.2px] text-ink underline decoration-ink/20 decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                ehoward@meridianmtg.com
              </a>
              <p className="max-w-[340px] text-[14px] leading-[22px] text-stone">
                We&rsquo;re a small team, so your note goes straight to the
                founder. Write anytime and you&rsquo;ll hear back directly.
              </p>
            </aside>
          </div>
        </section>
      </div>

      <div data-nav-mode="dark">
        <Footer />
      </div>
    </main>
  );
}
