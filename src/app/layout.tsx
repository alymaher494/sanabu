import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Sam Bau – Sanierung & Renovierung | Ihr Haus – Unsere Sorge",
  description:
    "Sam Bau ist Ihr kompetenter Partner für Sanierung & Renovierung, Abbrucharbeiten, Entrümpelung & Entsorgung, Bautrocknung & Wasserschadensanierung sowie Beratung & Besichtigung in Kahl am Main und dem Rhein-Main-Gebiet.",
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
  ],
  authors: [{ name: "Sam Bau" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sam Bau – Sanierung & Renovierung",
    description: "Ihr Haus – Unsere Sorge. Kompetente Bau- und Sanierungsdienstleistungen in Kahl am Main.",
    siteName: "Sam Bau",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Bau – Sanierung & Renovierung",
    description: "Ihr Haus – Unsere Sorge.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
