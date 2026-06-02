// Typed shape for a single guide. Designed to match what a Netlify CMS
// collection will deliver via markdown frontmatter + body, so swapping the
// in-file array below for a CMS-backed loader only touches this module.

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string; // ISO date
  readTimeMin: number;
  author: { name: string; role: string };
  body: GuideBlock[];
};

const guides: Guide[] = [
  {
    slug: "rank-for-the-mortgage-searches-that-matter",
    title: "Rank for the mortgage searches that actually convert.",
    excerpt:
      "A practical SEO playbook for brokers: the seven page types that compound, the queries worth chasing, and how to wire it all into your CRM.",
    category: "SEO",
    coverImage: "/heroimg.jpg",
    publishedAt: "2026-04-22",
    readTimeMin: 9,
    author: { name: "Meridian", role: "Editorial Team" },
    body: [
      {
        type: "p",
        text: "Most broker websites compete for the wrong queries. They chase volume, like ‘mortgage rates today,’ when their pipeline actually needs intent: the searches a borrower runs the week before they apply. The good news is the queries you want are narrower, less competitive, and almost always tied to a specific zip code and a specific loan type.",
      },
      { type: "h2", text: "Start with the seven page types that compound." },
      {
        type: "p",
        text: "Every site we build for a working mortgage broker ships with the same seven categories of pages. Each one targets a distinct intent and feeds the others through internal links, schema, and a single follow-up offer.",
      },
      {
        type: "list",
        items: [
          "Loan-product pages (one per program you actually fund).",
          "City and neighborhood pages tied to purchase intent.",
          "Refinance and renewal-trigger pages timed to rate moves.",
          "First-time-buyer education hubs that earn backlinks naturally.",
          "Referral-partner pages aimed at agents and CPAs.",
          "Calculators and tools that capture email in exchange for context.",
          "About and proof pages that close the loop after a borrower has dug in.",
        ],
      },
      { type: "h2", text: "Pick queries with proven intent, not volume." },
      {
        type: "p",
        text: "A query like ‘down payment assistance Austin TX’ will out-convert ‘best mortgage rates’ by a factor of ten, even though the latter has fifty times the search volume. The borrower searching for assistance is in the middle of a decision. The borrower searching for ‘best rates’ is window shopping.",
      },
      {
        type: "quote",
        text: "The point of broker SEO isn’t to be the biggest result on the page. It’s to be the obvious result when a real borrower is one decision away from applying.",
      },
      { type: "h2", text: "Wire the CRM at launch, not after." },
      {
        type: "p",
        text: "An SEO win is wasted if a lead lands in your inbox without a tag, a source, or a routing rule. Map each landing page to a CRM pipeline before you publish. That way every organic click compounds into a tracked, scored, follow-uppable lead from day one.",
      },
    ],
  },
  {
    slug: "the-broker-brand-system",
    title: "The broker brand system: what to nail before you spend a dollar.",
    excerpt:
      "Before you commission a logo, lock the positioning, the audience, and the three borrower stories your brand has to deliver in three seconds.",
    category: "Brand",
    coverImage: "/testimonials/aaronimg.jpeg",
    publishedAt: "2026-03-18",
    readTimeMin: 7,
    author: { name: "Meridian", role: "Editorial Team" },
    body: [
      {
        type: "p",
        text: "A logo is a downstream artifact. The work that decides whether a broker’s brand earns trust happens months before a designer opens Figma. It lives in positioning, audience, and the three things every visitor must understand in the first three seconds.",
      },
      { type: "h2", text: "Positioning beats polish." },
      {
        type: "p",
        text: "Most broker brands look fine and say nothing. They use stock imagery, generic taglines, and a logo borrowed from a hundred adjacent industries. Polish without positioning is invisible. It slides past the reader because there is nothing to anchor it to.",
      },
      { type: "h3", text: "The three lines a borrower needs to read." },
      {
        type: "list",
        items: [
          "Who you serve, in plain language (‘first-time buyers in Austin’).",
          "What you do that they can’t get elsewhere (‘FHA approval in 14 days’).",
          "Why they should believe you (a number, a name, or a credential).",
        ],
      },
      { type: "h2", text: "Lock the audience before the aesthetic." },
      {
        type: "p",
        text: "A solo broker serving first-time buyers needs a different brand than a team chasing high-net-worth refinances. The audience dictates the visual register: typeface, color, warmth or restraint. All of that has to lock in long before any designer picks a palette.",
      },
      {
        type: "quote",
        text: "If a brand can’t survive being described in a sentence, no logo will save it.",
      },
    ],
  },
  {
    slug: "intake-forms-that-close",
    title: "Intake forms that close: anatomy of a conversion-first page.",
    excerpt:
      "A field-by-field breakdown of the broker intake form we use across our highest-converting client sites, and what to cut.",
    category: "Conversion",
    coverImage: "/testimonials/gilianimg.jpg",
    publishedAt: "2026-02-04",
    readTimeMin: 6,
    author: { name: "Meridian", role: "Editorial Team" },
    body: [
      {
        type: "p",
        text: "The intake form is the most expensive piece of UI on a broker website. Every extra field costs you applications. Every missing field costs you a productive first call. Most brokers err in both directions on the same form.",
      },
      { type: "h2", text: "What to keep." },
      {
        type: "list",
        items: [
          "Loan purpose (purchase, refinance, renewal). One radio, no typing.",
          "Estimated price or balance, as a range. Borrowers don’t know the exact number.",
          "Timeline (this month, this quarter, exploring). Routes urgency before the call.",
          "Name, phone, and email. Phone first, because that’s how you’ll reach them.",
          "How they found you. A single dropdown that powers your attribution forever.",
        ],
      },
      { type: "h2", text: "What to cut." },
      {
        type: "p",
        text: "Credit score, employment details, current rate, downpayment percentage. Anything that asks the borrower to do math before they trust you. Those fields belong in the discovery call, not in the qualifying form.",
      },
      {
        type: "quote",
        text: "An intake form is a promise: ‘give me ninety seconds and I’ll give you a real answer.’ Five fields keep that promise. Twelve fields break it.",
      },
    ],
  },
];

export function getAllGuides(): Guide[] {
  return [...guides].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
