import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ServiceDetail } from "@/components/site/service-detail";
import { Process } from "@/components/site/process";
import { Faq } from "@/components/site/faq";
import { CtaBanner } from "@/components/site/cta-banner";
import { SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Kernleistungen: Sanierung & Renovierung, Abbrucharbeiten, Entrümpelung & Entsorgung, Bautrocknung & Wasserschadensanierung sowie Beratung & Besichtigung – alles aus einer Hand.",
};

export default function LeistungenPage() {
  return (
    <>
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

      {/* Service details */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {SERVICES.map((service, i) => (
            <ServiceDetail key={service.id} service={service} index={i} />
          ))}
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
