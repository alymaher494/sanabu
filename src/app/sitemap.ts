import type { MetadataRoute } from "next";
import { SITE_URL, SERVICES, NAV_LINKS } from "@/lib/site-data";

/**
 * Auto-generated sitemap.xml — all primary routes + a page per service.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Top-level pages from the navigation.
  const topRoutes = NAV_LINKS.map((l) => ({
    url: `${SITE_URL}${l.href === "/" ? "" : l.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: l.href === "/" ? 1 : 0.8,
  }));

  // Legal pages.
  const legalRoutes = [
    { url: `${SITE_URL}/impressum`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE_URL}/datenschutz`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // One page per service — these change when offers/details change.
  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE_URL}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...topRoutes, ...legalRoutes, ...serviceRoutes];
}
