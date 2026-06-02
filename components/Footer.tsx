import Reveal from "@/components/Reveal";

type FooterLink = { label: string; href: string; external?: boolean };

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Brand Identity", href: "/services/brand-identity" },
      { label: "SEO Foundations", href: "/services/seo-foundations" },
      { label: "CRM Integration", href: "/services/crm-integration" },
    ],
  },
  {
    heading: "Who We Serve",
    links: [
      { label: "Solo Brokers", href: "/who-we-serve/solo-brokers" },
      { label: "Mortgage Teams", href: "/who-we-serve/mortgage-teams" },
      { label: "Brokerages", href: "/who-we-serve/brokerages" },
      { label: "Loan Officers", href: "/who-we-serve/loan-officers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Guides", href: "/guides" },
      { label: "Broker Playbook", href: "/broker-playbook" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/legal" },
    ],
  },
  {
    heading: "Follow",
    links: [
      { label: "X", href: "https://x.com/meridian", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/meridian",
        external: true,
      },
      { label: "YouTube", href: "https://www.youtube.com/@meridian", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <Reveal className="mx-auto flex max-w-[1440px] gap-16 px-24 pb-16 pt-20">
        {/* Left: wordmark + copyright */}
        <div className="flex w-[280px] shrink-0 flex-col justify-between">
          <p className="font-serif text-[80px] font-medium leading-none tracking-[-2.4px] text-ivory">
            M<span className="text-gold">.</span>
          </p>
          <p className="text-[13px] leading-[20px] text-sand">
            Copyright © 2026 Meridian.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="flex-1" />

        {/* Right: 5 link columns */}
        <div className="flex items-start gap-14">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-5">
              <p className="whitespace-nowrap text-[14px] text-sand">
                {col.heading}
              </p>
              <div className="flex flex-col gap-[14px] text-[14px] text-ivory">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap hover:opacity-80"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </footer>
  );
}
