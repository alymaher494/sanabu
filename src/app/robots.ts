import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-data";

/**
 * robots.txt — allow all crawlers, point to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL.replace("https://", "").replace("http://", ""),
  };
}
