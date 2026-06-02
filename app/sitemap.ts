import type { MetadataRoute } from "next";
import { getAllGuideSlugs } from "@/lib/guides";

const BASE = "https://meridianmtg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/case-studies",
    "/careers",
    "/contact",
    "/guides",
    "/broker-playbook",
    "/privacy",
    "/legal",
    "/services/web-design",
    "/services/brand-identity",
    "/services/seo-foundations",
    "/services/crm-integration",
    "/who-we-serve/solo-brokers",
    "/who-we-serve/mortgage-teams",
    "/who-we-serve/brokerages",
    "/who-we-serve/loan-officers",
  ];

  const staticPages = routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const guidePages = getAllGuideSlugs().map((slug) => ({
    url: `${BASE}/guides/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...guidePages];
}
