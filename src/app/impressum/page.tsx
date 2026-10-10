import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { COMPANY } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        subtitle="Anbieterkennzeichnung gemäß § 5 TMG."
        crumbs={[{ label: "Impressum" }]}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-legal space-y-10 text-charcoal/80">
            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-1 leading-relaxed">
                <p className="font-display font-bold text-charcoal">{COMPANY.name}</p>
                <p>{COMPANY.street}</p>
                <p>{COMPANY.zipCity}</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                Kontakt
              </h2>
              <div className="space-y-1 leading-relaxed">
                <p>
                  <span className="text-charcoal/50">Telefon: </span>
                  <a href={COMPANY.phoneHref} className="text-gold hover:underline">
                    {COMPANY.phone}
                  </a>
                </p>
                <p>
                  <span className="text-charcoal/50">E-Mail: </span>
                  <a href={COMPANY.emailHref} className="text-gold hover:underline break-all">
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="space-y-1 leading-relaxed">
                <p>{COMPANY.owner}</p>
                <p>{COMPANY.street}</p>
                <p>{COMPANY.zipCity}</p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              </p>
              <p className="mt-2 text-charcoal/60 italic">
                Wird auf Anfrage mitgeteilt.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                Haftung für Inhalte
              </h2>
              <p className="leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="leading-relaxed mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                Haftung für Links
              </h2>
              <p className="leading-relaxed">
                Unser Angebot enthält ggf. Links zu externen Webseiten
                Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
                können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                Streitschlichtung
              </h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  className="text-gold hover:underline ml-1 break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Wir sind nicht verpflichtet und nicht bereit, an einem
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
