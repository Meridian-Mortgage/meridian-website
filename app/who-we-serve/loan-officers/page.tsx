import WhoWeServe, {
  WebsiteMock,
  PipelineMock,
  AutomationMock,
  type WhoWeServeContent,
} from "@/components/WhoWeServe";

export const metadata = {
  title: "Loan Officers · Meridian.",
  description:
    "Meridian builds a personal brand and pipeline that's yours, built to run alongside the lender you produce for. One team, one industry.",
};

const content: WhoWeServeContent = {
  hero: {
    headline: "For loan officers.",
    subline:
      "A personal brand and pipeline that's yours, built to run alongside the lender you produce for. Your name, your borrowers, your book.",
    trustLabel: "Reviewed by loan officers",
    layout: "left",
  },
  pkg: {
    eyebrow: "The package",
    heading: "Everything a loan officer needs, in one place.",
    feature: {
      label: "Personal website",
      title: "A personal site, not a corporate page.",
      body: "Your own site and brand that clear your lender's compliance, with intake that feeds your pipeline. Borrowers find you, not a branch.",
    },
    cards: [
      {
        n: "02",
        label: "Personal brand",
        title: "A brand that's yours to keep.",
        body: "Logo, type, color, and voice. If you move lenders, your brand and audience move with you.",
      },
      {
        n: "03",
        label: "Referral engine",
        title: "Stay top of mind with agents.",
        body: "Co-branded pages and assets that make realtors want to send you every buyer.",
      },
      {
        n: "04",
        label: "Lead automation",
        title: "A pipeline that follows up itself.",
        body: "Email and SMS sequences that warm and qualify, wired into your CRM.",
      },
      {
        n: "05",
        label: "Compliance",
        title: "Marketing your lender signs off on.",
        body: "Built to your disclosures and approval flow so nothing stalls in review.",
      },
    ],
  },
  showcase: [
    {
      heading: "A site that's yours, not the branch's.",
      body: "Your own domain and brand, built to clear your lender's compliance, with intake that feeds your pipeline. Borrowers find you by name.",
      visual: (
        <WebsiteMock
          domain="coastallending.com"
          headline="Your loan officer for life."
          tagline="San Diego purchases, refinances, and first-time buyers."
        />
      ),
    },
    {
      heading: "A pipeline that follows up itself.",
      body: "Every form and call lands in your pipeline, tagged and ready. Sequences warm and qualify so your time goes to the borrowers who are ready.",
      visual: <PipelineMock title="Pipeline" />,
    },
    {
      heading: "Stay top of mind with your agents.",
      body: "Co-branded touches and check-ins go out on their own schedule, so the realtors who send you deals never forget your name.",
      visual: (
        <AutomationMock
          title="Referral engine"
          items={[
            { title: "New listing alert", when: "Weekly to agents" },
            { title: "Co-branded flyer", when: "Per new listing" },
            { title: "Closing thank-you", when: "Day of close" },
            { title: "Quarterly check-in", when: "Every 90 days" },
          ]}
        />
      ),
    },
  ],
  showcaseStart: "right",
  testimonial: {
    quote:
      "My borrowers find me by name now, not the branch. When I switched lenders, nothing about my marketing changed.",
    name: "Devin",
    company: "Coastal Mortgage",
    image: "/testimonials/aaronimg.jpeg",
    linkText: "the case study",
    href: "/case-studies",
    layout: "center",
  },
  faqHeading: "Things loan officers usually ask first.",
  faq: [
    {
      q: "Is the brand mine if I change lenders?",
      a: "Yes. Domain, accounts, assets, and source files are yours. If you move lenders, your brand and audience move with you.",
    },
    {
      q: "Will this pass my lender's compliance?",
      a: "We build to your disclosures and approval flow, and keep the templates locked so what you publish stays approved.",
    },
    {
      q: "Can it help with referral partners?",
      a: "Yes. Co-branded pages and assets for your realtors, plus check-ins that keep you top of mind.",
    },
    {
      q: "How much of my time does this take?",
      a: "A few hours a week during the build, mostly up front. After launch, the follow-up runs on its own.",
    },
  ],
};

export default function LoanOfficersPage() {
  return <WhoWeServe content={content} />;
}
