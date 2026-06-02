import WhoWeServe, {
  WebsiteMock,
  PipelineMock,
  AutomationMock,
  type WhoWeServeContent,
} from "@/components/WhoWeServe";

export const metadata = {
  title: "Mortgage Teams · Meridian.",
  description:
    "Meridian builds the brand, flagship site, and shared pipeline that make a mortgage team run like a market leader. One team, one industry.",
};

const content: WhoWeServeContent = {
  hero: {
    headline: "For mortgage teams.",
    subline:
      "One brand, one site, one pipeline for every producer on the team. Built so the whole team looks and runs like a market leader.",
    trustLabel: "Reviewed by mortgage teams",
    layout: "left",
  },
  pkg: {
    eyebrow: "The package",
    heading: "Everything a mortgage team needs, in one place.",
    layout: "split",
    feature: {
      label: "Flagship website",
      title: "A flagship site the whole team shares.",
      body: "One site, a profile for every producer, intake routed to the right name. Built so a borrower trusts the team before the first call.",
    },
    cards: [
      {
        n: "02",
        label: "Team brand",
        title: "A brand the whole team carries.",
        body: "Logo, type, color, and voice that stay consistent from the team lead to the newest producer.",
      },
      {
        n: "03",
        label: "Lead routing",
        title: "Leads to the right producer, fast.",
        body: "Round-robin, by market, or by product. Every inquiry is routed and tagged the moment it lands.",
      },
      {
        n: "04",
        label: "Shared automation",
        title: "Follow-up that runs for everyone.",
        body: "Email and SMS sequences that warm and qualify across the team, wired into your CRM.",
      },
      {
        n: "05",
        label: "Recruiting",
        title: "A team people want to join.",
        body: "A recruiting page and assets that make top producers want a seat at the table.",
      },
    ],
  },
  showcase: [
    {
      heading: "A site that carries the whole team.",
      body: "One domain, a profile for every producer, intake that routes to the right name. The team looks established the moment a borrower lands.",
      visual: (
        <WebsiteMock
          domain="hartmannlending.com"
          headline="A team that closes."
          tagline="Toronto's mortgage team for purchases, refinances, and renewals."
        />
      ),
    },
    {
      heading: "Leads routed to the right producer.",
      body: "Every form and call lands in one shared pipeline, tagged and assigned. No lead waits, and no producer steps on another's deal.",
      visual: <PipelineMock title="Team pipeline" />,
    },
    {
      heading: "Follow-up that runs for the whole team.",
      body: "Renewal reminders and anniversary notes go out for every producer on their own schedule. The team's book keeps sending the next deal.",
      visual: <AutomationMock title="Team engine" />,
    },
  ],
  showcaseStart: "right",
  testimonial: {
    quote:
      "We onboard a new producer in a week now, and they look like they've been here for years. The brand carries them.",
    name: "Gilian",
    company: "Hartmann & Co.",
    image: "/testimonials/gilianimg.jpg",
    linkText: "the team's case study",
    href: "/case-studies",
    layout: "center",
  },
  faqHeading: "Things mortgage teams usually ask first.",
  faq: [
    {
      q: "Can every producer have their own profile?",
      a: "Yes. One shared site, a page and intake for each producer, all under the team brand. Add or remove producers any time.",
    },
    {
      q: "How are leads split between producers?",
      a: "However you run it. Round-robin, by market, by product, or by who's up next. We wire the rules into your CRM.",
    },
    {
      q: "What happens if a producer leaves?",
      a: "Their page comes down, their leads stay with the team, and the brand keeps running. Nothing breaks.",
    },
    {
      q: "Do you train the team on the system?",
      a: "Yes. We hand over a runbook and walk every producer through intake, follow-up, and reporting before launch.",
    },
  ],
};

export default function MortgageTeamsPage() {
  return <WhoWeServe content={content} />;
}
