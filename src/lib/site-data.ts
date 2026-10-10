/**
 * Sam Bau — central site content data (German, single source of truth).
 */

export const COMPANY = {
  name: "Sam Bau",
  tagline: "Ihr Haus – Unsere Sorge",
  serviceLine: "Sanierung | Renovierung",
  street: "Schillerstraße 17",
  zipCity: "63796 Kahl am Main",
  city: "Kahl am Main",
  region: "Kahl am Main · Rhein-Main",
  phone: "01590 6510642",
  phoneHref: "tel:+4915906510642",
  email: "SamBau.Work@outlook.de",
  emailHref: "mailto:SamBau.Work@outlook.de",
  hours: "Mo–Fr: 07:30–18:00 Uhr · Sa: nach Vereinbarung",
  owner: "Sam Bau",
} as const;

export const NAV_LINKS = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export type Service = {
  id: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  longDescription: string;
  bullets: string[];
  icon: string; // lucide icon name
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "sanierung-renovierung",
    slug: "sanierung-renovierung",
    title: "Sanierung & Renovierung",
    short: "Vom Altbestand zum modernen Wohnraum.",
    description:
      "Wir bringen Ihre Immobilie auf Vordermann – von der kompletten Altbausanierung über Modernisierung bis zum Innenausbau. Sauber geplant, zuverlässig ausgeführt.",
    longDescription:
      "Ob komplette Altbausanierung, Modernisierung einzelner Räume oder Innenausbau vom Trockenbau bis zu den Malerarbeiten – wir koordinieren alle beteiligten Gewerke und sorgen für einen sauberen, termingerechten Ablauf. Sie haben nur einen Ansprechpartner und ein festes Preisangebot, bevor der erste Hammer geschwungen wird.",
    bullets: [
      "Altbausanierung & Modernisierung",
      "Innenausbau & Trockenbau",
      "Maler- und Putzarbeiten",
      "Bodenverlegung & Fußbodenheizung",
      "Badezimmer- und Küchensanierung",
    ],
    icon: "Hammer",
    image: "/images/srv-sanierung.png",
  },
  {
    id: "abbrucharbeiten",
    slug: "abbrucharbeiten",
    title: "Abbrucharbeiten",
    short: "Kontrollierter Rückbau, sauber & sicher.",
    description:
      "Sauberer, kontrollierter Abbruch und Rückbau – ob einzelnes Gewerk oder komplette Entkernung. Wir trennen Materialien fachgerecht und entsorgungsgerecht.",
    longDescription:
      "Vom selektiven Rückbau einzelner Wände bis zur kompletten Entkernung einer Wohnung oder eines Gebäudes – wir arbeiten kontrolliert, staubarm und sicher. Materialien werden bereits auf der Baustelle getrennt und entsorgungsgerecht gelagert. So bleiben Nachbarn, Termine und Ihr Budget geschont.",
    bullets: [
      "Kontrollierter Rückbau & Entkernung",
      "Innen- und Außenabbruch",
      "Trennung nach Materialgruppen",
      "Sicherheits- und Staubkonzept",
      "Schadstofferkennung & Übergabe",
    ],
    icon: "Pickaxe",
    image: "/images/srv-abbruch.png",
  },
  {
    id: "entruempelung-entsorgung",
    slug: "entruempelung-entsorgung",
    title: "Entrümpelung & Entsorgung",
    short: "Wohnung, Keller, Hof – wir schaffen Platz.",
    description:
      "Wir räumen Wohnungen, Keller, Garagen und Höfe vollständig und entsorgen alle Materialien fachgerecht. Sie übergeben den Schlüssel – wir übernehmen den Rest.",
    longDescription:
      "Wohnungs-, Keller- oder Hausauflösungen, Leerstandsentrümpelung oder die Entsorgung von Bau- und Sperrmüll – wir übernehmen die komplette Räumung inkl. Sortierung, Transport und fachgerechter Entsorgung mit Nachweis. Sie übergeben den Schlüssel und bekommen einen sauberen, besenreinen Raum zurück.",
    bullets: [
      "Wohnungs- & Kellerentrümpelung",
      "Haushaltsauflösungen",
      "Baustellenreinigung",
      "Fachgerechte Entsorgung & Nachweis",
      "Leerstandsreinigung",
    ],
    icon: "Trash2",
    image: "/images/srv-entruempelung.png",
  },
  {
    id: "bautrocknung-wasserschaden",
    slug: "bautrocknung-wasserschaden",
    title: "Bautrocknung & Wasserschadensanierung",
    short: "Schnelle Hilfe nach Wasser- & Feuchteschäden.",
    description:
      "Nach einem Wasserschaden zählt jede Stunde. Wir trocknen Bauwerke professionell, sanieren die betroffenen Bereiche und bringen alles wieder in einen trockenen, sicheren Zustand.",
    longDescription:
      "Nach einem Rohrbruch, Hochwasser oder Feuerlöscheinsatz zählt jede Stunde. Wir bringen professionelle Trocknungstechnik auf die Baustelle, messen die Feuchtigkeit dokumentiert und sanieren die betroffenen Bereiche fachgerecht – inkl. der Unterlagen, die Ihre Versicherung benötigt.",
    bullets: [
      "Professionelle Bautrocknung",
      "Feuchtigkeits- & Schimmelsanierung",
      "Wiederherstellung nach Schaden",
      "Dokumentation für die Versicherung",
      "Notfalleinsatz rund um die Uhr",
    ],
    icon: "Droplets",
    image: "/images/srv-bautrocknung.png",
  },
  {
    id: "beratung-besichtigung",
    slug: "beratung-besichtigung",
    title: "Beratung & Besichtigung",
    short: "Klarheit vom ersten Termin an.",
    description:
      "Ehrliche Beratung statt Verkaufsgespräch. Wir besichtigen Ihr Objekt, hören zu und geben Ihnen eine klare, verständliche Einschätzung – inklusive realistischem Kostenrahmen.",
    longDescription:
      "Ehrliche Beratung statt Verkaufsgespräch. Wir besichtigen Ihr Objekt, hören zu und geben Ihnen eine klare, verständliche Einschätzung – inkl. realistischem Kostenrahmen und einer Empfehlung, welche Gewerke wirklich nötig sind und welche Sie sich sparen können. Die Erstbesichtigung ist für Sie kostenlos und unverbindlich.",
    bullets: [
      "Kostenlose Vor-Ort-Besichtigung",
      "Ehrliche Schadensanalyse",
      "Klarer Kosten- & Ablaufplan",
      "Empfehlung der richtigen Gewerke",
      "Unverbindliche Erstberatung",
    ],
    icon: "ClipboardCheck",
    image: "/images/srv-beratung.png",
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

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Ist die Erstbesichtigung wirklich kostenlos?",
    a: "Ja. Die erste Vor-Ort-Besichtigung inkl. Beratung ist für Sie vollkommen kostenlos und unverbindlich. Erst wenn Sie uns beauftragen, entstehen Kosten – und diese stehen vorab im Festpreis-Angebot.",
  },
  {
    q: "Bekomme ich ein Festpreis-Angebot?",
    a: "In den allermeisten Fällen ja. Wir erstellen Ihnen nach der Besichtigung ein transparentes Festpreis-Angebot mit klarem Ablaufplan. So wissen Sie vor dem ersten Schlag, wo Sie dran sind.",
  },
  {
    q: "Wie schnell könnt ihr bei einem Wasserschaden reagieren?",
    a: "Bei Wasserschäden reagieren wir in der Regel innerhalb von 24 Stunden – oft schneller. Rufen Sie uns direkt an, wir bringen Trocknung & Sanierung schnell auf den Weg.",
  },
  {
    q: "Übernehmt ihr auch Aufträge für Unternehmen und Hausverwaltungen?",
    a: "Ja. Generalunternehmer, Hausverwaltungen und B2B-Kunden können uns projektbezogen als flexiblen Ausführungspartner einsetzen – vom Abbruch über die Schadstoffsanierung bis zur Leerstandsrenovierung.",
  },
  {
    q: "Arbeitet ihr in Kahl und im gesamten Rhein-Main-Gebiet?",
    a: "Unser Standort ist Kahl am Main. Wir arbeiten im gesamten Rhein-Main-Gebiet – kurze Wege, schnelle Reaktion, regionale Verwurzelung.",
  },
  {
    q: "Was passiert mit dem Abbruchmaterial und dem Entrümpelungsmüll?",
    a: "Wir trennen Materialien bereits auf der Baustelle nach Materialgruppen und entsorgen sie fachgerecht mit Nachweis. So bleibt alles sauber und nachvollziehbar.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Familie Becker",
    role: "Wohnungssanierung · Kahl",
    initials: "FB",
    text: "Vom ersten Termin bis zur Abnahme alles sauber geplant. Festpreis gestimmt, Wohnung pünktlich fertig. So stellen wir uns einen Handwerker vor.",
  },
  {
    name: "M. Hoffmann",
    role: "Hausverwaltung · Hanau",
    initials: "MH",
    text: "Bei Leerstandsrenovierungen und Wasserschäden reliably schnell vor Ort. Dokumentation für die Versicherung top. Klare Empfehlung.",
  },
  {
    name: "T. Aydin",
    role: "Abbruch & Entkernung · Aschaffenburg",
    initials: "TA",
    text: "Kontrollierter Rückbau ohne Chaos in den Nachbarwohnungen. Material sauber getrennt und entsorgt. Würden wieder beauftragen.",
  },
];

export const VALUES = [
  {
    icon: "ShieldCheck",
    title: "Verlässlichkeit",
    text: "Was wir zusagen, halten wir. Termine, Festpreis und Qualität – ohne Ausreden.",
  },
  {
    icon: "HeartHandshake",
    title: "Vertrauen",
    text: "Wir behandeln Ihr Zuhause so, als wäre es unser eigenes. Mit Respekt und Sorgfalt.",
  },
  {
    icon: "Sparkles",
    title: "Sauberkeit",
    text: "Sauberer Ablauf, saubere Baustelle, saubere Übergabe. Bei uns kein Baustellen-Chaos.",
  },
  {
    icon: "Lightbulb",
    title: "Ehrliche Beratung",
    text: "Wir sagen Ihnen, was sinnvoll ist – nicht, was am meisten bringt. Manchmal auch: was Sie sich sparen können.",
  },
];
