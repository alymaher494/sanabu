import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { COMPANY } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Sam Bau gemäß DSGVO – Kahl am Main.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Datenschutz", url: "/datenschutz" },
        ]}
      />
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        subtitle="Wir nehmen den Schutz Ihrer persönlichen Daten ernst und behandeln sie gemäß DSGVO."
        crumbs={[{ label: "Datenschutz" }]}
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-legal space-y-10 text-charcoal/80">
            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <p className="leading-relaxed mb-3">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen oder unser Kontaktformular nutzen.
              </p>
              <p className="leading-relaxed">
                Verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <div className="mt-2 space-y-1 leading-relaxed">
                <p className="font-display font-bold text-charcoal">{COMPANY.name}</p>
                <p>{COMPANY.street}</p>
                <p>{COMPANY.zipCity}</p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                2. Datenerfassung beim Kontaktformular
              </h2>
              <p className="leading-relaxed">
                Wenn Sie uns über das Kontaktformular anfragen, werden Ihre
                Angaben aus dem Formular inklusive der von Ihnen dort
                angegebenen Kontaktdaten (Name, E-Mail, Telefon, gewählter
                Leistungsbereich und Ihre Nachricht) zwecks Bearbeitung der
                Anfrage per E-Mail an uns übermittelt und im Rahmen der
                üblichen Geschäftskorrespondenz verarbeitet. Es erfolgt keine
                Speicherung in einer Website-Datenbank. Diese Daten geben wir
                nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="leading-relaxed mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                Fällen beruht die Verarbeitung auf unserem berechtigten
                Interesse an der Beantwortung Ihrer Anfrage (Art. 6 Abs. 1
                lit. f DSGVO) bzw. auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO), sofern diese abgegeben wurde.
              </p>
              <p className="leading-relaxed mt-3">
                Die per Kontaktformular übermittelten Angaben verbleiben im
                Rahmen unserer Geschäftskorrespondenz bei uns, bis Sie uns
                zur Löschung auffordern, Sie Ihre Einwilligung widerrufen
                oder der Zweck der Speicherung entfällt (z. B. nach
                abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                gesetzliche Aufbewahrungsfristen bleiben unberührt.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                3. Server-Log-Dateien
              </h2>
              <p className="leading-relaxed">
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in sogenannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 leading-relaxed">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                4. Ihre Rechte
              </h2>
              <p className="leading-relaxed mb-3">
                Ihnen stehen im Rahmen der DSGVO folgende Rechte zu:
              </p>
              <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Zudem haben Sie das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold uppercase text-charcoal text-xl tracking-wide mb-4">
                5. Kontakt
              </h2>
              <p className="leading-relaxed">
                Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten
                erreichen Sie uns unter:
              </p>
              <div className="mt-2 space-y-1 leading-relaxed">
                <p className="font-display font-bold text-charcoal">{COMPANY.name}</p>
                <p>{COMPANY.street}, {COMPANY.zipCity}</p>
                <p>
                  E-Mail:{" "}
                  <a href={COMPANY.emailHref} className="text-gold hover:underline break-all">
                    {COMPANY.email}
                  </a>
                </p>
                <p>
                  Telefon:{" "}
                  <a href={COMPANY.phoneHref} className="text-gold hover:underline">
                    {COMPANY.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
