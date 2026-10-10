import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Lightbulb,
  type LucideIcon,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { StatsStrip } from "@/components/site/stats-strip";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { COMPANY, VALUES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Über uns – Sam Bau aus Kahl am Main",
  description:
    "Sam Bau aus Kahl am Main – Ihr verlässlicher Partner für Sanierung, Abbruch und Wiederherstellung im Rhein-Main-Gebiet. Stark im Bestand, verlässlich in der Ausführung.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns – Sam Bau aus Kahl am Main",
    description: "Stark im Bestand. Verlässlich in der Ausführung.",
    url: "/ueber-uns",
    images: [{ url: "/images/workshop.png", width: 1344, height: 768, alt: "Sam Bau Werkstatt" }],
  },
};

const VALUE_ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Lightbulb,
};

export default function UeberUnsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Über uns", url: "/ueber-uns" },
        ]}
      />
      <PageHero
        eyebrow="Über Sam Bau"
        title={<>Stark im Bestand.<br />Verlässlich in der Ausführung.</>}
        subtitle="Sam Bau ist in Kahl am Main und im gesamten Rhein-Main-Gebiet für Sie da. Wir übernehmen anspruchsvolle Arbeiten rund um Abbruch, Sanierung, Trocknung und Wiederherstellung – mit nur einem Ansprechpartner und voller Verantwortung."
        crumbs={[{ label: "Über uns" }]}
        image="/images/workshop.png"
      />

      {/* Story section */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden clip-corner-tr border border-[#e7e2d6] shadow-[0_24px_48px_-24px_rgba(26,26,26,0.35)]">
                <img
                  src="/images/about.png"
                  alt="Sam Bau Handwerker bei der Arbeit"
                  className="w-full h-[380px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-4 border-t-4 border-gold" aria-hidden />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-4 border-b-4 border-gold" aria-hidden />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                  Unsere Geschichte
                </span>
              </div>
              <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
                Bauvorhaben <span className="text-gold">berechenbar</span> machen.
              </h2>
              <div className="mt-6 space-y-4 text-charcoal/75 leading-relaxed">
                <p>
                  Renovierung und Abbruch bedeuten für viele Eigentümer Stress
                  und Unsicherheit. Wir von Sam Bau reduzieren beides auf ein
                  klares Versprechen: ein Vertrag, ein Verantwortlicher, ein
                  verlässliches Ergebnis.
                </p>
                <p>
                  Verwurzelt in {COMPANY.city} und im gesamten Rhein-Main-Gebiet
                  übernehmen wir anspruchsvolle Arbeiten vom kontrollierten
                  Rückbau bis zur fertigen Renovierung. Privatkunden erhalten
                  bei uns einen klaren Sanierungsablauf. Unternehmen,
                  Generalunternehmer und Hausverwaltungen können uns
                  projektbezogen als flexiblen Ausführungspartner einsetzen.
                </p>
                <p className="font-display font-semibold text-charcoal">
                  {COMPANY.tagline}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-concrete-noise text-cream py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
        <div className="absolute -right-24 top-1/3 w-72 h-72 rounded-full bg-gold/6 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                Werte
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-cream text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Wofür wir <span className="text-gold">stehen.</span>
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => {
              const Icon = VALUE_ICONS[v.icon] ?? ShieldCheck;
              return (
                <div
                  key={v.title}
                  className="group p-6 lg:p-7 border border-cream/10 hover:border-gold/60 bg-charcoal-soft/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-gold/40 group-hover:bg-gold transition-colors mb-5">
                    <Icon className="h-6 w-6 text-gold group-hover:text-charcoal transition-colors" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-bold uppercase tracking-wide text-cream text-lg">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop image band */}
      <section className="relative overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.55) 100%), url('/images/workshop.png')",
          }}
          aria-hidden
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                Werkstatt & Team
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-cream text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Handwerk mit <span className="text-gold">Struktur.</span>
            </h2>
            <p className="mt-5 text-base lg:text-lg text-cream/75 leading-relaxed">
              Eine organisierte Werkstatt, sauberes Werkzeug und ein Team, das
              weiß, was es tut. Bei uns kein Baustellen-Chaos, sondern
              durchdachte Abläufe – vom ersten Termin bis zur besenreinen
              Übergabe.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-2 h-12 px-7 bg-gold text-charcoal font-display font-bold uppercase tracking-wider text-xs clip-slanted-right hover:bg-gold-light transition-colors"
            >
              Lernen Sie uns kennen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <StatsStrip />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
