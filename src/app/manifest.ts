import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/site-data";

/**
 * PWA web manifest — improves installability & appearance in search.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY.name} – ${COMPANY.serviceLine}`,
    short_name: COMPANY.name,
    description: `${COMPANY.tagline}. ${COMPANY.name} – ${COMPANY.serviceLine} in ${COMPANY.city}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#fdfbf7",
    theme_color: "#d4a017",
    lang: "de",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
