/**
 * Sam Bau — central site content data (German, single source of truth).
 * Includes per-service SEO metadata, detailed content blocks and FAQs
 * for the dedicated service detail pages.
 */

/** Production site URL — used for canonical / OpenGraph / sitemap.
 *  Update this once the real domain is live. */
export const SITE_URL = "https://www.sam-bau-kahl.de";

export const COMPANY = {
  name: "Sam Bau",
  legalName: "Sam Bau",
  tagline: "Ihr Haus – Unsere Sorge",
  serviceLine: "Sanierung | Renovierung",
  street: "Schillerstraße 17",
  zipCity: "63796 Kahl am Main",
  city: "Kahl am Main",
  zip: "63796",
  region: "Kahl am Main · Rhein-Main",
  phone: "01590 6510642",
  phoneHref: "tel:+4915906510642",
  email: "SamBau.Work@outlook.de",
  emailHref: "mailto:SamBau.Work@outlook.de",
  hours: "Mo–Fr: 07:30–18:00 Uhr · Sa: nach Vereinbarung",
  owner: "Sam Bau",
  geo: { lat: 50.076, lng: 9.058 }, // Kahl am Main approx
  serviceArea: ["Kahl am Main", "Hanau", "Aschaffenburg", "Offenbach", "Frankfurt am Main", "Rhein-Main-Gebiet"],
} as const;

export const NAV_LINKS = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export type ServicePoint = { title: string; description: string };

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
  /** Per-service SEO */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Rich content for the dedicated detail page */
  detailedPoints: ServicePoint[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
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
    image: "/images/srv-sanierung.jpg",
    metaTitle: "Sanierung & Renovierung in Kahl am Main",
    metaDescription:
      "Sanierung & Renovierung in Kahl am Main: Altbausanierung, Modernisierung, Innenausbau, Trockenbau, Maler- und Bodenarbeiten. Festpreis-Angebot, ein Ansprechpartner. Jetzt anfragen!",
    keywords: [
      "Sanierung Kahl am Main",
      "Renovierung Rhein-Main",
      "Altbausanierung",
      "Modernisierung",
      "Innenausbau",
      "Trockenbau",
      "Badezimmersanierung",
      "Sam Bau",
    ],
    detailedPoints: [
      {
        title: "Altbausanierung & Modernisierung",
        description:
          "Wir holen das Beste aus Ihrem Bestand heraus – vom Putz bis zur Elektroplanung, von der Heizung bis zur Fensterabdichtung. Sauber dokumentiert und nach Absprache.",
      },
      {
        title: "Innenausbau & Trockenbau",
        description:
          "Wände, Decken, Trockenbau-Systeme und Raumteiler – wir setzen Ihren Grundriss präzise um und achten auf saubere Anschlüsse.",
      },
      {
        title: "Maler- & Putzarbeiten",
        description:
          "Glattwand, Tapezieren, Lasur, Fassadenanstrich – alles aus einer Hand, mit Materialien, die lange halten.",
      },
      {
        title: "Bodenverlegung & Fußbodenheizung",
        description:
          "Laminat, Parkett, Fliesen, Vinyl – inkl. Unterboden, Trittschalldämmung und Fußbodenheizung richtig verlegt.",
      },
      {
        title: "Bad- & Küchensanierung",
        description:
          "Komplettsanierung inkl. Wasser-, Abfluss- und Elektroarbeiten, koordiniert mit Sanitär-Fachpartnern.",
      },
    ],
    idealFor: [
      "Eigentümer, die ihren Altbau modernisieren möchten",
      "Hausverwaltungen bei Leerstandsrenovierung",
      "Käufer, die eine Bestandsimmobilie sanieren lassen",
      "Mieterwechsel & Wohnungsübergaben",
    ],
    faqs: [
      {
        q: "Wie lange dauert eine Wohnungsrenovierung?",
        a: "Eine komplette Wohnungsrenovierung dauert je nach Umfang 2–6 Wochen. Teilsanierungen (z. B. Bad oder Boden) sind oft in 1–2 Wochen fertig. Nach der Besichtigung erhalten Sie einen verbindlichen Zeitplan.",
      },
      {
        q: "Bekomme ich ein Festpreis-Angebot?",
        a: "Ja. Nach der kostenlosen Besichtigung erstellen wir ein transparentes Festpreis-Angebot mit klarem Ablaufplan. So wissen Sie vor dem ersten Schlag, wo Sie dran sind.",
      },
      {
        q: "Kümmert ihr euch um alle Gewerke oder muss ich noch jemanden hinzubuchen?",
        a: "In der Regel übernehmen wir alle Gewerke aus einer Hand oder koordinieren die wenigen externen Partner (z. B. Sanitär, Elektro) für Sie. Sie haben nur einen Ansprechpartner.",
      },
    ],
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
    image: "/images/srv-abbruch.jpg",
    metaTitle: "Abbrucharbeiten & Entkernung in Kahl am Main",
    metaDescription:
      "Kontrollierter Abbruch, Rückbau und Entkernung in Kahl am Main: staubarm, sicher, Materialtrennung & fachgerechte Entsorgung. Auch für Hausverwaltungen & GU. Festpreis!",
    keywords: [
      "Abbrucharbeiten Kahl",
      "Entkernung Rhein-Main",
      "Rückbau",
      "Innenabbruch",
      "Abbruchunternehmen",
      "Sam Bau",
    ],
    detailedPoints: [
      {
        title: "Kontrollierter Rückbau & Entkernung",
        description:
          "Selektiver Abbruch mit Erhalt wiederverwendbarer Substanz – ideal vor einer Sanierung oder beim Umbau.",
      },
      {
        title: "Innen- & Außenabbruch",
        description:
          "Vom Abbruch einzelner Trennwände bis zum kompletten Rückbau von Wohnung, Büro oder Halle – inkl. Außenabbruch.",
      },
      {
        title: "Trennung nach Materialgruppen",
        description:
          "Mineralisch, Holz, Metall, Kunststoff, Schadstoffverdächtiges – wir trennen bereits auf der Baustelle und senken so Entsorgungskosten.",
      },
      {
        title: "Sicherheits- & Staubkonzept",
        description:
          "Abschottung der Nachbarn, staubarme Arbeitsweise, Schutzzonen und Absaugung – damit niemand gestört wird.",
      },
      {
        title: "Schadstofferkennung & Übergabe",
        description:
          "Wir erkennen asbest- oder KMF-belastete Bauteile, melden sie und übergeben an zertifizierte Fachbetriebe – dokumentiert.",
      },
    ],
    idealFor: [
      "Sanierungsvorbereitung & Komplettauflösungen",
      "B2B & Generalunternehmer als Nachunternehmer",
      "Hausverwaltungen bei Leerstandsrückbau",
      "Umbau-Projekte mit Bestandssubstanz",
    ],
    faqs: [
      {
        q: "Muss ich die Nachbarn über den Abbruch informieren?",
        a: "Wir übernehmen die Absprache mit Nachbarn und Hausverwaltung gemeinsam mit Ihnen und sichern die Baustelle staub- und lärmarm ab. Lärmschutzzeiten werden eingehalten.",
      },
      {
        q: "Was passiert mit dem Abbruchmaterial?",
        a: "Wir trennen Materialien bereits auf der Baustelle nach Materialgruppen und entsorgen sie fachgerecht mit Entsorgungsnachweis. Wertstoffe gehen ins Recycling.",
      },
      {
        q: "Erkennt ihr Schadstoffe wie Asbest?",
        a: "Ja, wir erkennen asbest- und KCF-belastete Bauteile und übergeben diese an zertifizierte Fachbetriebe. So bleibt alles legal und sicher.",
      },
    ],
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
    image: "/images/srv-entruempelung.jpg",
    metaTitle: "Entrümpelung & Entsorgung in Kahl am Main",
    metaDescription:
      "Entrümpelung, Haushaltsauflösung & Entsorgung in Kahl am Main: Wohnung, Keller, Garage, Hof. Inkl. fachgerechter Entsorgung mit Nachweis. Schlüssel übergeben – wir übernehmen den Rest.",
    keywords: [
      "Entrümpelung Kahl am Main",
      "Haushaltsauflösung Rhein-Main",
      "Wohnungsauflösung",
      "Kellerentrümpelung",
      "Sperrmüll Entsorgung",
      "Sam Bau",
    ],
    detailedPoints: [
      {
        title: "Wohnungs- & Kellerentrümpelung",
        description:
          "Vollständige Räumung von Wohnung, Keller, Dachboden oder Garage – inkl. Sortierung in Wertstoffe, Sperrmüll und Schadstoffe.",
      },
      {
        title: "Haushaltsauflösungen",
        description:
          "Sensible, diskrete und saubere Auflösung nach Todesfall, Auszug oder Leerstand – mit Respekt vor der Situation.",
      },
      {
        title: "Baustellen- & Leerstandsreinigung",
        description:
          "Besenreine Übergabe nach Räumung oder Sanierung – inkl. Fenster, Böden und Entsorgung von Baurest.",
      },
      {
        title: "Fachgerechte Entsorgung mit Nachweis",
        description:
          "Transport zu Wertstoffhöfen und entsorgungspflichtigen Anlagen, mit Nachweis für Sperrmüll und Schadstoffe.",
      },
      {
        title: "Schlüssel- & Terminorganisation",
        description:
          "Sie übergeben den Schlüssel, wir koordinieren Räumung, Reinigung und Übergabe – inkl. Foto-Doku.",
      },
    ],
    idealFor: [
      "Eigentümer bei Auszug, Todesfall oder Verwertung",
      "Hausverwaltungen bei Leerstandsentrümpelung",
      "Vermieter zwischen Mietverhältnissen",
      "B2B: Büro- und Lagerräumung",
    ],
    faqs: [
      {
        q: "Was kostet eine Entrümpelung?",
        a: "Die Kosten hängen von Menge, Etage, Zugang (Aufzug?) und Entsorgungsmengen ab. Nach einer kurzen Vor-Ort-Besichtigung erhalten Sie ein transparentes Festpreis-Angebot – keine bösen Überraschungen.",
      },
      {
        q: "Übernehmt ihr auch die Reinigung danach?",
        a: "Ja. Wir übergeben besenrein, inkl. Böden, Fenster und Schwellen. Optional können wir auch von Grund auf reinigen.",
      },
      {
        q: "Bekomme ich einen Entsorgungsnachweis?",
        a: "Ja. Sperrmüll und schadstoffhaltige Materialien werden mit Entsorgungsnachweis dokumentiert. So haben Sie alles schwarz auf weiß – wichtig für Hausverwaltungen und Versicherungen.",
      },
    ],
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
      "Notfelleinsatz rund um die Uhr",
    ],
    icon: "Droplets",
    image: "/images/srv-bautrocknung.jpg",
    metaTitle: "Bautrocknung & Wasserschadensanierung Kahl am Main",
    metaDescription:
      "Bautrocknung, Wasserschadensanierung & Schimmelsanierung in Kahl am Main: schnelle Reaktion nach Rohrbruch, Hochwasser oder Löschwasser. Inkl. Versicherungsdoku & 24h-Notfall.",
    keywords: [
      "Bautrocknung Kahl am Main",
      "Wasserschadensanierung Rhein-Main",
      "Schimmelsanierung",
      "Feuchtigkeitssanierung",
      "Notfall Trocknung",
      "Sam Bau",
    ],
    detailedPoints: [
      {
        title: "Professionelle Bautrocknung",
        description:
          "Einsatz von Kondensations- und Adsorptionstrocknern, Leitern und Ventilatoren – berechnet nach Raumvolumen und Bauteilfeuchte.",
      },
      {
        title: "Feuchtigkeits- & Schimmelsanierung",
        description:
          "Messung der Bauteilfeuchte, fachgerechte Abtragung befallener Schichten, Desinfektion und Wiederaufbau – dauerhaft trocken.",
      },
      {
        title: "Wiederherstellung nach Schaden",
        description:
          "Putz, Trockenbau, Boden, Anstrich – wir stellen den Ursprungszustand fachgerecht wieder her, ohne dass Sie mehrere Gewerke koordinieren müssen.",
      },
      {
        title: "Versicherungsdokumentation",
        description:
          "Foto- und Messprotokolle, Schadensaufnahme und Abrechnung – alles aufbereitet für eine saubere Schadensmeldung an Ihre Versicherung.",
      },
      {
        title: "24h-Notfelleinsatz",
        description:
          "Bei akutem Wasserschaden reagieren wir rund um die Uhr. Rufen Sie direkt an – jede Stunde zählt, um Folgeschäden zu vermeiden.",
      },
    ],
    idealFor: [
      "Privatkunden nach Rohrbruch oder Löschwasser",
      "Hausverwaltungen & Versicherungen",
      "B2B: Lager- und Büro-Feuchteschäden",
      "Notfälle rund um die Uhr",
    ],
    faqs: [
      {
        q: "Wie schnell seid ihr nach einem Wasserschaden vor Ort?",
        a: "Bei Notfällen reagieren wir in der Regel innerhalb von 24 Stunden – oft schneller. Rufen Sie uns direkt an, wir bringen Trocknungstechnik auf den Weg.",
      },
      {
        q: "Muss ich die Versicherung informieren?",
        a: "Ja, melden Sie den Schaden zeitnah Ihrer Versicherung. Wir dokumentieren sämtliche Maßnahmen foto- und messprotokollbasiert, damit Ihre Schadensmeldung sauber ist.",
      },
      {
        q: "Wie lange dauert die Bautrocknung?",
        a: "Das hängt von Raum, Bauteil und Ausmaß ab – meist zwischen 3 und 14 Tagen. Wir messen die Bauteilfeuchte regelmäßig und beenden die Trocknung erst, wenn Normfeuchte erreicht ist.",
      },
    ],
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
    image: "/images/srv-beratung.jpg",
    metaTitle: "Beratung & Besichtigung in Kahl am Main – kostenlos",
    metaDescription:
      "Kostenlose & unverbindliche Bauberatung und Vor-Ort-Besichtigung in Kahl am Main. Ehrliche Schadensanalyse, klarer Kosten- & Ablaufplan. Jetzt Termin vereinbaren!",
    keywords: [
      "Bauberatung Kahl am Main",
      "Besichtigung Bauunternehmen",
      "kostenlose Besichtigung",
      "Schadensanalyse",
      "Kostenvoranschlag Rhein-Main",
      "Sam Bau",
    ],
    detailedPoints: [
      {
        title: "Kostenlose Vor-Ort-Besichtigung",
        description:
          "Wir kommen zu Ihnen, prüfen die Gegebenheiten vor Ort, messen und fotografieren – ohne Druck und ohne versteckte Kosten.",
      },
      {
        title: "Ehrliche Schadensanalyse",
        description:
          "Wir sagen Ihnen, was wirklich Sache ist – nicht, was uns am meisten bringt. Manchmal lautet die Empfehlung: gar nicht sanieren.",
      },
      {
        title: "Klarer Kosten- & Ablaufplan",
        description:
          "Sie erhalten ein verständliches Festpreis-Angebot mit klarem Zeitplan und Gewerkenliste – ready to decide.",
      },
      {
        title: "Empfehlung der richtigen Gewerke",
        description:
          "Wir empfehlen nur die Maßnahmen, die wirklich nötig sind – und sagen Ihnen, was Sie sich sparen können.",
      },
      {
        title: "Unverbindliche Erstberatung",
        description:
          "Keine Verpflichtung. Sie entscheiden in Ruhe, ob Sie uns beauftragen – ohne dass wir nachhaken.",
      },
    ],
    idealFor: [
      "Erstkontakt & Entscheidungsfindung",
      "Eigentümer mit unklarem Schadensbild",
      "Käufer von Bestandsimmobilien",
      "B2B-Vorab-Klärung & Projektplanung",
    ],
    faqs: [
      {
        q: "Ist die Besichtigung wirklich kostenlos?",
        a: "Ja. Die erste Vor-Ort-Besichtigung inkl. Beratung ist für Sie vollkommen kostenlos und unverbindlich. Erst wenn Sie uns beauftragen, entstehen Kosten.",
      },
      {
        q: "Wie lange dauert eine Besichtigung?",
        a: "Meist 30–60 Minuten, je nach Objekt und Umfang. Wir messen, fotografieren und besprechen alles in Ruhe mit Ihnen.",
      },
      {
        q: "Bekomme ich direkt ein Angebot?",
        a: "In den meisten Fällen erhalten Sie innerhalb von 2–3 Werktagen nach der Besichtigung ein transparentes Festpreis-Angebot mit klarem Ablaufplan.",
      },
    ],
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

/** Helper: find a service by slug (for the dynamic [slug] route). */
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
