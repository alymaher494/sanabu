import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { LocalBusinessJsonLd } from "@/components/site/json-ld";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { SITE_URL } from "@/lib/site-data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sam Bau – Sanierung & Renovierung | Ihr Haus – Unsere Sorge",
    template: "%s | Sam Bau",
  },
  description:
    "Sam Bau in Kahl am Main – Ihr kompetenter Partner für Sanierung & Renovierung, Abbrucharbeiten, Entrümpelung & Entsorgung, Bautrocknung & Wasserschadensanierung sowie Beratung & Besichtigung im Rhein-Main-Gebiet.",
  applicationName: "Sam Bau",
  keywords: [
    "Sam Bau",
    "Sanierung",
    "Renovierung",
    "Abbrucharbeiten",
    "Entrümpelung",
    "Entsorgung",
    "Bautrocknung",
    "Wasserschadensanierung",
    "Kahl am Main",
    "Rhein-Main",
    "Bauunternehmen",
    "Festpreis-Angebot",
  ],
  authors: [{ name: "Sam Bau", url: SITE_URL }],
  creator: "Sam Bau",
  publisher: "Sam Bau",
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Sam Bau",
    title: "Sam Bau – Sanierung & Renovierung | Ihr Haus – Unsere Sorge",
    description:
      "Ihr Haus – Unsere Sorge. Kompetente Bau- und Sanierungsdienstleistungen in Kahl am Main und dem Rhein-Main-Gebiet – alles aus einer Hand.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1344,
        height: 768,
        alt: "Sam Bau – Sanierung & Renovierung in Kahl am Main",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Bau – Sanierung & Renovierung",
    description: "Ihr Haus – Unsere Sorge. Bau- und Sanierungsdienstleistungen in Kahl am Main.",
    images: ["/images/hero-bg.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.webmanifest",
  category: "construction",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfbf7" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-gold focus:text-charcoal focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:uppercase focus:text-xs focus:tracking-wider"
        >
          Zum Inhalt springen
        </a>
        <div className="flex min-h-screen flex-col bg-cream">
          <SiteHeader />
          <main id="main-content" className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
