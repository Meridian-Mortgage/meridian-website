export type MenuItem = {
  title: string;
  description: string;
  href?: string;
  arrow?: boolean;
};

export type FeaturedPanel = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type ContactColumn = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export type Menu = {
  items: MenuItem[];
  featured?: FeaturedPanel;
  contact?: ContactColumn;
};

export const menus: Record<string, Menu> = {
  platform: {
    items: [
      {
        title: "Web Design",
        description:
          "Custom websites built for one mortgage broker. Designed to make borrowers trust you before the first call.",
        href: "/services/web-design",
        arrow: true,
      },
      {
        title: "Brand Identity",
        description:
          "Logo, type, color, and voice. The full visual system that makes you the obvious choice in your market.",
        href: "/services/brand-identity",
        arrow: true,
      },
      {
        title: "SEO Foundations",
        description:
          "Built to rank for the mortgage searches your future clients run in your city.",
        href: "/services/seo-foundations",
        arrow: true,
      },
      {
        title: "CRM Integration",
        description:
          "GoHighLevel wired up at launch with tags, pipelines, and automations ready to go.",
        href: "/services/crm-integration",
        arrow: true,
      },
    ],
    featured: {
      eyebrow: "Featured",
      title: "Custom Broker Websites",
      description:
        "Purpose built sites that make borrowers trust you before the first conversation.",
      href: "/services/web-design",
    },
  },
  solutions: {
    items: [
      {
        title: "Solo Brokers",
        description:
          "For the working broker building a personal brand in a crowded market.",
        href: "/who-we-serve/solo-brokers",
        arrow: true,
      },
      {
        title: "Mortgage Teams",
        description:
          "For teams of producers who want a shared visual identity and a flagship site.",
        href: "/who-we-serve/mortgage-teams",
        arrow: true,
      },
      {
        title: "Brokerages",
        description:
          "For brokerages that want a recruiting magnet and standards for every agent.",
        href: "/who-we-serve/brokerages",
        arrow: true,
      },
      {
        title: "Loan Officers",
        description:
          "For bank and lender loan officers building a personal pipeline outside the brand.",
        href: "/who-we-serve/loan-officers",
        arrow: true,
      },
    ],
  },
  insights: {
    items: [
      {
        title: "Guides",
        description:
          "Practical playbooks on mortgage marketing, SEO, and brand building.",
        href: "/guides",
        arrow: true,
      },
      {
        title: "About Us",
        description:
          "The team, the founder, and why Meridian works only with mortgage professionals.",
        href: "/about",
        arrow: true,
      },
      {
        title: "Broker Playbook",
        description:
          "The long form guide to becoming the first name in your market.",
        href: "/broker-playbook",
        arrow: true,
      },
      {
        title: "Careers",
        description:
          "We hire rarely and well. If you make great work for a living, write to us.",
        href: "/careers",
        arrow: true,
      },
    ],
    contact: {
      eyebrow: "Get in touch",
      title: "Contact",
      description:
        "Questions, ideas, or a new project. We reply within one business day.",
      href: "/contact",
    },
  },
};
