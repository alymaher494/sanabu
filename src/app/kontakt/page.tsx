import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Contact } from "@/components/site/contact";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { COMPANY } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontakt – Sam Bau Kahl am Main",
  description:
    "Kontaktieren Sie Sam Bau in Kahl am Main – telefonisch, per E-Mail oder über unser Anfrageformular. Bei Wasserschäden reagieren wir innerhalb von 24 Stunden.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt – Sam Bau Kahl am Main",
    description: "Telefon, E-Mail oder Anfrageformular – wir melden uns innerhalb von 24 Stunden.",
    url: "/kontakt",
    images: [{ url: "/images/cta-bg.jpg", width: 1344, height: 768, alt: "Sam Bau Kontakt" }],
  },
};

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Kontakt", url: "/kontakt" },
        ]}
      />
      <PageHero
        eyebrow="Kontakt"
        title={<>Wir sind <span className="text-gold">für Sie da.</span></>}
        subtitle="Ob Sanierung, Abbruch oder Wasserschaden – wir reagieren schnell und unkompliziert. Schreiben Sie uns oder rufen Sie an, wir beraten Sie ehrlich und unverbindlich."
        crumbs={[{ label: "Kontakt" }]}
        image="/images/cta-bg.jpg"
      />

      {/* Quick info strip */}
      <section className="bg-gold text-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid sm:grid-cols-3 gap-6 divide-x divide-charcoal/20">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-3 sm:justify-center hover:opacity-80 transition-opacity"
            >
              <Phone className="h-6 w-6 shrink-0" strokeWidth={1.75} />
              <div>
                <div className="text-[10px] font-display font-bold uppercase tracking-[0.2em] opacity-70">
                  Direkt anrufen
                </div>
                <div className="font-display font-bold">{COMPANY.phone}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 sm:justify-center px-0 sm:px-4">
              <MapPin className="h-6 w-6 shrink-0" strokeWidth={1.75} />
              <div>
                <div className="text-[10px] font-display font-bold uppercase tracking-[0.2em] opacity-70">
                  Standort
                </div>
                <div className="font-display font-bold text-sm">
                  {COMPANY.street}, {COMPANY.zipCity}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:justify-center px-0 sm:px-4">
              <Clock className="h-6 w-6 shrink-0" strokeWidth={1.75} />
              <div>
                <div className="text-[10px] font-display font-bold uppercase tracking-[0.2em] opacity-70">
                  Erreichbar
                </div>
                <div className="font-display font-bold text-sm">{COMPANY.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Map / Location band */}
      <section className="bg-charcoal text-cream py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                  Standort
                </span>
              </div>
              <h2 className="font-display font-extrabold uppercase text-cream text-2xl sm:text-3xl leading-tight">
                {COMPANY.city} &<br /><span className="text-gold">Rhein-Main</span>
              </h2>
              <p className="mt-4 text-sm text-cream/70 leading-relaxed">
                Unser Standort ist {COMPANY.street}, {COMPANY.zipCity}. Wir
                arbeiten im gesamten Rhein-Main-Gebiet – kurze Wege und
                schnelle Reaktion inklusive.
              </p>
              <div className="mt-6 space-y-2 text-sm text-cream/80">
                <p className="font-display font-bold uppercase tracking-wide text-xs text-gold">
                  {COMPANY.name}
                </p>
                <p>{COMPANY.street}</p>
                <p>{COMPANY.zipCity}</p>
                <p className="pt-2 text-cream/60">{COMPANY.hours}</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative h-64 lg:h-80 w-full overflow-hidden border-2 border-gold/30">
                <iframe
                  title="Sam Bau Standort auf der Karte"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=9.0380%2C50.0660%2C9.0780%2C50.0860&layer=mapnik&marker=50.0760%2C9.0580"
                  className="w-full h-full grayscale-[0.3] contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-xs text-cream/50">
                Karte: OpenStreetMap. Exakte Adresse &amp; Routenplanung auf
                Anfrage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
