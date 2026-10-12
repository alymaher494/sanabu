import { COMPANY, SITE_URL } from "@/lib/site-data";

/**
 * Renders JSON-LD structured data for a LocalBusiness / HomeAndConstructionBusiness.
 * Injected in the root layout for sitewide SEO (rich results, knowledge panel).
 */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description:
      "Sam Bau ist Ihr kompetenter Partner für Sanierung & Renovierung, Abbrucharbeiten, Entrümpelung & Entsorgung, Bautrocknung & Wasserschadensanierung sowie Beratung & Besichtigung in Kahl am Main und dem Rhein-Main-Gebiet.",
    url: SITE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: `${SITE_URL}/images/hero-bg.jpg`,
    logo: `${SITE_URL}/favicon.svg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      postalCode: COMPANY.zip,
      addressLocality: COMPANY.city,
      addressRegion: "Bayern",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.lat,
      longitude: COMPANY.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
    ],
    areaServed: COMPANY.serviceArea.map((c) => ({
      "@type": "City",
      name: c,
    })),
    slogan: COMPANY.tagline,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * BreadcrumbList structured data. Pass an array of {name, url} segments.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Service structured data for a dedicated service detail page.
 */
export function ServiceJsonLd({
  serviceName,
  serviceDescription,
  slug,
}: {
  serviceName: string;
  serviceDescription: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/leistungen/${slug}#service`,
    name: serviceName,
    description: serviceDescription,
    url: `${SITE_URL}/leistungen/${slug}`,
    provider: {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: COMPANY.name,
      telephone: COMPANY.phone,
    },
    areaServed: COMPANY.serviceArea.map((c) => ({
      "@type": "City",
      name: c,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * FAQPage structured data for a list of Q&A pairs.
 */
export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
