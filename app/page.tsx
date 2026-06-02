import Nav from "@/components/nav/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Feature from "@/components/Feature";
import Phrases from "@/components/Phrases";
import Testimonial from "@/components/Testimonial";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import AcquireVisual from "@/components/visuals/AcquireVisual";
import ConvertVisual from "@/components/visuals/ConvertVisual";
import RetainVisual from "@/components/visuals/RetainVisual";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="hero">
        <Hero />
      </div>

      <div data-nav-mode="light">
        <Stats />

        <Feature
          eyebrow="ATTRACT"
          title="Attract better borrowers."
          intro="We build the website, the brand, and the channels that put your name in front of the borrowers and referral partners you actually want."
          items={[
            {
              title: "Custom Broker Websites",
              body: "Designed for one broker. Built so a borrower trusts you within three seconds.",
            },
            {
              title: "Local SEO",
              body: "Built to rank for the mortgage searches your future clients run in your city.",
            },
            {
              title: "Paid Acquisition",
              body: "Lead funnels for purchase, refinance, and renewal, wired into your CRM from day one.",
            },
            {
              title: "Brand and Social",
              body: "A consistent visual identity across LinkedIn, Instagram, and email so every touchpoint compounds.",
            },
          ]}
          visual={<AcquireVisual />}
        />
      </div>

      <div data-nav-mode="light">
        <Feature
          eyebrow="CONVERT"
          title="Turn visitors into applications."
          reverse
          intro="Every page is engineered to move a borrower from curious to a signed intake form. Fast load times, frictionless contact, copy that closes."
          items={[
            {
              title: "Conversion-First Design",
              body: "Clear calls to action, fast load times, and intake forms placed where borrowers are already deciding.",
            },
            {
              title: "GoHighLevel Integration",
              body: "Leads land in your pipeline tagged and ready, with the automations already wired up.",
            },
            {
              title: "Trust on Every Page",
              body: "Testimonials, results, and credentials woven into the layout, not buried on a sub page.",
            },
          ]}
          visual={<ConvertVisual />}
        />
      </div>

      <div data-nav-mode="light">
        <Feature
          eyebrow="RETAIN"
          title="Relationships that compound."
          intro="Most of your pipeline lives in the past clients and referral partners you already have. We build the systems that keep your name in front of them without you lifting a finger."
          items={[
            {
              title: "Client Portals",
              body: "Branded spaces for active clients to track documents, milestones, and status updates in one place.",
            },
            {
              title: "Referral and Review Systems",
              body: "Automated check ins, anniversary touches, and review requests that turn closings into more closings.",
            },
            {
              title: "Email Nurture and Renewals",
              body: "Quarterly market notes and renewal reminders in your voice, written for borrowers.",
            },
          ]}
          visual={<RetainVisual />}
        />

        <Phrases />
      </div>

      <div data-nav-mode="beige">
        <Testimonial />
      </div>

      <div data-nav-mode="dark">
        <CTABanner />
        <Footer />
      </div>
    </main>
  );
}
