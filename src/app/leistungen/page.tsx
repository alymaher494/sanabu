import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Process } from "@/components/site/process";
import { Faq } from "@/components/site/faq";
import { CtaBanner } from "@/components/site/cta-banner";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Kernleistungen: Sanierung & Renovierung, Abbrucharbeiten, Entrümpelung & Entsorgung, Bautrocknung & Wasserschadensanierung sowie Beratung & Besichtigung – alles aus einer Hand in Kahl am Main.",
  keywords: [
    "Bauunternehmen Kahl am Main",
    "Sanierung",
    "Abbruch",
    "Entrümpelung",
    "Bautrocknung",
    "Rhein-Main",
    "Sam Bau",
  ],
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Leistungen", url: "/leistungen" },
        ]}
      />

      <PageHero
        eyebrow="Unsere Leistungen"
        title={<>Sanierung, Abbruch &<br />Wiederherstellung.</>}
        subtitle="Wir decken die gesamten Arbeiten rund um Bestand und Umbau ab – vom ersten Hammerschlag bis zur schlüsselfertigen Übergabe. Jedes Gewerk führen wir selbst oder mit festen Partner-Teams aus, die wir koordinieren."
        crumbs={[{ label: "Leistungen" }]}
        image="/images/srv-sanierung.png"
      />

      {/* Intro band */}
      <section className="bg-cream py-12 lg:py-16 border-b border-[#e7e2d6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "5 Kernleistungen", d: "Vom Abbruch bis zur fertigen Renovierung – alles aus einer Hand." },
              { t: "Festpreis-Angebote", d: "Sie wissen vor dem ersten Schlag, wo Sie dran sind." },
              { t: "1 Ansprechpartner", d: "Volle Verantwortung, keine Weiterreichung an Dritte." },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <div className="font-display font-bold uppercase tracking-wide text-sm text-charcoal">
                    {x.t}
                  </div>
                  <div className="text-sm text-charcoal/65 leading-relaxed mt-0.5">
                    {x.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service cards grid (each links to a dedicated detail page) */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                Leistungen im Überblick
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Alle Leistungen <span className="text-gold">auf einen Blick.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.id}
                href={`/leistungen/${service.slug}`}
                className="group relative flex flex-col bg-white border border-[#e7e2d6] hover:border-gold transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(26,26,26,0.25)] overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} – Sam Bau`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <span className="font-display font-extrabold text-cream text-2xl drop-shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-gold bg-charcoal/70 px-2 py-1">
                      {service.short}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold uppercase tracking-wide text-charcoal text-lg leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/65 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {service.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="arrow-bullet text-xs text-charcoal/70">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.18em] text-gold group-hover:text-gold-dark transition-colors">
                    Leistung ansehen
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Faq />

      {/* Closing CTA strip */}
      <section className="bg-white py-16 lg:py-20 border-t border-[#e7e2d6]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold uppercase text-charcoal text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Unsicher, welche Leistung <span className="text-gold">die richtige ist?</span>
          </h2>
          <p className="mt-4 text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            Wir beraten Sie ehrlich und unverbindlich – auch wenn Ihr Vorhaben
            nicht in eine einzige Schublade passt. Die Erstbesichtigung ist für
            Sie kostenlos.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex items-center justify-center gap-2 h-12 px-7 bg-gold text-charcoal font-display font-bold uppercase tracking-wider text-xs clip-slanted-right hover:bg-gold-light transition-colors"
          >
            Kostenlose Besichtigung anfragen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
