import WhoWeServe, {
  WebsiteMock,
  PipelineMock,
  AutomationMock,
  type WhoWeServeContent,
} from "@/components/WhoWeServe";

export const metadata = {
  title: "Solo Brokers · Meridian.",
  description:
    "Meridian builds brands, websites, and lead systems for working solo mortgage brokers. One team, one industry.",
};

const content: WhoWeServeContent = {
  hero: {
    headline: "For solo brokers.",
    subline:
      "Grow your brand, your book, and your career. One team, built around the solo mortgage broker.",
    trustLabel: "Reviewed by working brokers",
  },
  pkg: {
    eyebrow: "The package",
    heading: "Everything a solo broker needs, in one place.",
    feature: {
      label: "Custom website",
      title: "A site built for one broker, not one industry.",
      body: "No templates, no page builders. Intake forms wired into your CRM at launch, copy that does the qualifying before the call.",
    },
    cards: [
      {
        n: "02",
        label: "Brand identity",
        title: "A personal brand you keep.",
        body: "Logo, type, color, and voice. If you change brokerages, the brand goes with you.",
      },
      {
        n: "03",
        label: "Local SEO",
        title: "Rank for the searches that fund deals.",
        body: "Structured to win mortgage queries in the cities you actually serve.",
      },
      {
        n: "04",
        label: "Lead automation",
        title: "A funnel that runs without you.",
        body: "GoHighLevel wired up. Email and SMS sequences that warm, qualify, and route.",
      },
      {
        n: "05",
        label: "Past-client engine",
        title: "Turn closings into more closings.",
        body: "Anniversary touches, review requests, and renewal reminders on autopilot.",
      },
    ],
  },
  showcase: [
    {
      heading: "A site that does the qualifying.",
      body: "Your own domain, your own brand, intake forms wired into your CRM the day it goes live. Borrowers arrive, read, and book without a single back and forth.",
      visual: (
        <WebsiteMock
          domain="reyeslending.com"
          headline="Mortgages, minus the maze."
          tagline="Austin's broker for first-time buyers and refinances."
        />
      ),
    },
    {
      heading: "Leads that route themselves.",
      body: "Every form and call lands in one pipeline, tagged and ready. Email and SMS follow up while you sleep, so the warm ones reach you first.",
      visual: <PipelineMock title="Pipeline" />,
    },
    {
      heading: "Stay in front of every closing.",
      body: "Renewal reminders and anniversary notes go out on their own schedule. The book you already have keeps sending you the next deal.",
      visual: <AutomationMock title="Past-client engine" />,
    },
  ],
  testimonial: {
    quote:
      "I run a different broker shop now. Better borrowers, fewer chase calls, and far more confidence on the first conversation.",
    name: "Aaron",
    company: "Reyes Lending Co.",
    image: "/testimonials/aaronimg.jpeg",
    linkText: "his case study",
    href: "/case-studies",
  },
  faqHeading: "Things solo brokers usually ask first.",
  faq: [
    {
      q: "Do I need an existing brand to start?",
      a: "No. About half of our solo broker work is built from scratch. The other half is rescuing a brand that never quite fit.",
    },
    {
      q: "What happens if I switch brokerages?",
      a: "Your brand and site belong to you. Domain, accounts, assets, the source files. If you change shops, nothing in the marketing has to change.",
    },
    {
      q: "How much of my time does this take?",
      a: "Around four to six hours per week during the build, mostly in week one and week eight. After launch, your time on it is the time you choose to spend.",
    },
    {
      q: "Is there ongoing work after launch?",
      a: "Optional. Some brokers keep us on for content, SEO, and quarterly site updates. Others take it from there. Either is fine.",
    },
  ],
};

export default function SoloBrokersPage() {
  return <WhoWeServe content={content} />;
}
