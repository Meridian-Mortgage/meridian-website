import WhoWeServe, {
  WebsiteMock,
  PipelineMock,
  AutomationMock,
  type WhoWeServeContent,
} from "@/components/WhoWeServe";

export const metadata = {
  title: "Brokerages · Meridian.",
  description:
    "Meridian builds the brand, the recruiting site, and the standards that make a brokerage lead its market. One team, one industry.",
};

const content: WhoWeServeContent = {
  hero: {
    headline: "For brokerages.",
    subline:
      "A brand that recruits, a site that scales, and standards every agent can run. Built so your brokerage leads the market it competes in.",
    trustLabel: "Reviewed by brokerages",
  },
  pkg: {
    eyebrow: "The package",
    heading: "Everything a brokerage needs, in one place.",
    layout: "grid",
    feature: {
      label: "Flagship website",
      title: "A site that recruits and converts.",
      body: "A flagship site for the brokerage, a directory of agents, and intake routed by branch. Built to win borrowers and the producers you want to hire.",
    },
    cards: [
      {
        n: "02",
        label: "Brand system",
        title: "A brand every agent can run.",
        body: "Logo, type, color, and a template kit so every agent looks on-brand without a designer.",
      },
      {
        n: "03",
        label: "Recruiting",
        title: "Make top producers come to you.",
        body: "A careers page and assets that sell the brokerage to the agents worth hiring.",
      },
      {
        n: "04",
        label: "Multi-location SEO",
        title: "Rank in every market you serve.",
        body: "Location pages and local SEO built to win mortgage searches across every branch.",
      },
      {
        n: "05",
        label: "Agent enablement",
        title: "Standards every agent keeps.",
        body: "Templates, sequences, and brand assets so every agent markets to the same standard.",
      },
    ],
  },
  showcase: [
    {
      heading: "A site that recruits and converts.",
      body: "A flagship for the brokerage, a directory of agents, and intake routed by branch. It sells to borrowers and to the producers you want to hire.",
      visual: (
        <WebsiteMock
          domain="crestacapital.com"
          headline="A brokerage that sets the standard."
          tagline="Denver's brokerage for purchases, refinances, and growth."
        />
      ),
    },
    {
      heading: "Leads routed by branch and agent.",
      body: "Every inquiry lands in one pipeline, tagged by market and assigned to the right agent. Leadership sees the whole board at once.",
      visual: <PipelineMock title="Brokerage pipeline" />,
    },
    {
      heading: "Standards that run on their own.",
      body: "Onboarding, follow-up, and review requests run the same for every agent. The brokerage stays consistent as it grows.",
      visual: (
        <AutomationMock
          title="Brokerage engine"
          items={[
            { title: "Agent onboarding", when: "Day one" },
            { title: "Brand asset drop", when: "Per campaign" },
            { title: "Review request", when: "7 days post-close" },
            { title: "Quarterly report", when: "Every 90 days" },
          ]}
        />
      ),
    },
  ],
  testimonial: {
    quote:
      "Recruiting got easier the day the new site went up. Producers see how we operate and they want in.",
    name: "Mara",
    company: "Cresta Capital",
    image: "/testimonials/poimg.png",
    linkText: "the brokerage case study",
    href: "/case-studies",
  },
  faqHeading: "Things brokerages usually ask first.",
  faq: [
    {
      q: "Can you brand every agent under one system?",
      a: "Yes. One brokerage brand, a template kit, and agent pages so everyone looks consistent without a designer.",
    },
    {
      q: "Do you build for multiple locations?",
      a: "Yes. Location pages and local SEO for every branch, each built to rank in its own market.",
    },
    {
      q: "Will this help us recruit?",
      a: "That's half the point. A careers page and recruiting assets that show producers how you operate and why to join.",
    },
    {
      q: "How do you handle compliance?",
      a: "We build to your disclosures and approval flow, and lock down what agents can and can't change.",
    },
  ],
};

export default function BrokeragesPage() {
  return <WhoWeServe content={content} />;
}
