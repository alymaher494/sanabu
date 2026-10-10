/**
 * Sam Bau — central site content data (German, single source of truth).
 */

export const COMPANY = {
  name: "Sam Bau",
  tagline: "Ihr Haus – Unsere Sorge",
  serviceLine: "Sanierung | Renovierung",
  street: "Schillerstraße 17",
  zipCity: "63796 Kahl am Main",
  region: "Kahl am Main · Rhein-Main",
  phone: "01590 6510642",
  phoneHref: "tel:+4915906510642",
  email: "SamBau.Work@outlook.de",
  emailHref: "mailto:SamBau.Work@outlook.de",
  hours: "Mo–Fr: 07:30–18:00 Uhr · Sa: nach Vereinbarung",
} as const;

export const NAV_LINKS = [
  { label: "Start", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: string; // lucide icon name
};

export const SERVICES: Service[] = [
  {
    id: "sanierung-renovierung",
    title: "Sanierung & Renovierung",
    short: "Vom Altbestand zum modernen Wohnraum.",
    description:
      "Wir bringen Ihre Immobilie auf Vordermann – von der kompletten Altbausanierung über Modernisierung bis zum Innenausbau. Sauber geplant, zuverlässig ausgeführt.",
    bullets: [
      "Altbausanierung & Modernisierung",
      "Innenausbau & Trockenbau",
      "Maler- und Putzarbeiten",
      "Bodenverlegung & Fußbodenheizung",
    ],
    icon: "Hammer",
  },
  {
    id: "abbrucharbeiten",
    title: "Abbrucharbeiten",
    short: "Kontrollierter Rückbau, sauber & sicher.",
    description:
      "Sauberer, kontrollierter Abbruch und Rückbau – ob einzelnes Gewerk oder komplette Entkernung. Wir trennen Materialien fachgerecht und entsorgungsgerecht.",
    bullets: [
      "Kontrollierter Rückbau & Entkernung",
      "Innen- und Außenabbruch",
      "Trennung nach Materialgruppen",
      "Sicherheits- und Staubkonzept",
    ],
    icon: "Pickaxe",
  },
  {
    id: "entruempelung-entsorgung",
    title: "Entrümpelung & Entsorgung",
    short: "Wohnung, Keller, Hof – wir schaffen Platz.",
    description:
      "Wir räumen Wohnungen, Keller, Garagen und Höfe vollständig und entsorgen alle Materialien fachgerecht. Sie übergeben den Schlüssel – wir übernehmen den Rest.",
    bullets: [
      "Wohnungs- & Kellerentrümpelung",
      "Haushaltsauflösungen",
      "Baustellenreinigung",
      "Fachgerechte Entsorgung & Nachweis",
    ],
    icon: "Trash2",
  },
  {
    id: "bautrocknung-wasserschaden",
    title: "Bautrocknung & Wasserschadensanierung",
    short: "Schnelle Hilfe nach Wasser- & Feuchteschäden.",
    description:
      "Nach einem Wasserschaden zählt jede Stunde. Wir trocknen Bauwerke professionell, sanieren die betroffenen Bereiche und bringen alles wieder in einen trockenen, sicheren Zustand.",
    bullets: [
      "Professionelle Bautrocknung",
      "Feuchtigkeits- & Schimmelsanierung",
      "Wiederherstellung nach Schaden",
      "Dokumentation für die Versicherung",
    ],
    icon: "Droplets",
  },
  {
    id: "beratung-besichtigung",
    title: "Beratung & Besichtigung",
    short: "Klarheit vom ersten Termin an.",
    description:
      "Ehrliche Beratung statt Verkaufsgespräch. Wir besichtigen Ihr Objekt, hören zu und geben Ihnen eine klare, verständliche Einschätzung – inklusive realistischem Kostenrahmen.",
    bullets: [
      "Kostenlose Vor-Ort-Besichtigung",
      "Ehrliche Schadensanalyse",
      "Klarer Kosten- & Ablaufplan",
      "Empfehlung der richtigen Gewerke",
    ],
    icon: "ClipboardCheck",
  },
];

export const WHY_US = [
  {
    icon: "HandHeart",
    title: "Persönlich",
    text: "Ein fester Ansprechpartner von der Besichtigung bis zur Abnahme. Bei uns sprechen Sie mit dem, der auch verantwortlich ist.",
  },
  {
    icon: "Layers",
    title: "Alles aus einer Hand",
    text: "Vom Abbruch über die Trocknung bis zur fertigen Renovierung – Sie haben nur einen Vertrag und einen Verantwortlichen.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Flexibel",
    text: "Einzelgewerk oder komplettes Paket, nachts oder am Wochenende bei Notfällen – wir richten uns nach Ihrem Vorhaben.",
  },
  {
    icon: "MapPin",
    title: "Regional",
    text: "Verwurzelt in Kahl am Main und im gesamten Rhein-Main-Gebiet. Kurze Wege, schnelle Reaktion.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Besichtigung & Beratung",
    text: "Wir kommen vorbei, hören zu, prüfen die Gegebenheiten vor Ort und besprechen mit Ihnen, was möglich und sinnvoll ist.",
    icon: "ClipboardCheck",
  },
  {
    step: "02",
    title: "Angebot & Planung",
    text: "Sie erhalten ein transparentes, verständliches Festpreis-Angebot mit klarem Ablaufplan und Zeitrahmen.",
    icon: "FileText",
  },
  {
    step: "03",
    title: "Ausführung",
    text: "Unser Team führt die Arbeiten sauber, termingerecht und mit Rücksicht auf Ihren Alltag aus – mit nur einem Ansprechpartner.",
    icon: "Hammer",
  },
  {
    step: "04",
    title: "Abnahme & Übergabe",
    text: "Gemeinsame Abnahme, saubere Übergabe und Dokumentation. Erst wenn Sie zufrieden sind, ist das Projekt abgeschlossen.",
    icon: "CheckCircle2",
  },
];

export const STATS = [
  { value: "100%", label: "Feste Preisangebote" },
  { value: "1", label: "Ansprechpartner" },
  { value: "24h", label: "Notfallreaktion" },
  { value: "5+", label: "Gewerke aus einer Hand" },
];
