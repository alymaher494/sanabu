"use client";

import { ShieldCheck, Clock, Users } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function About() {
  return (
    <section
      id="ueber-uns"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* main image with clip */}
              <div className="relative overflow-hidden clip-corner-tr border border-[#e7e2d6] shadow-[0_24px_48px_-24px_rgba(26,26,26,0.35)]">
                <img
                  src="/images/about.png"
                  alt="Sam Bau Handwerker bei der Arbeit – professionelle Sanierung und Renovierung"
                  className="w-full h-[420px] lg:h-[540px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
              </div>

              {/* gold accent frame */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-4 border-t-4 border-gold pointer-events-none" aria-hidden />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-4 border-b-4 border-gold pointer-events-none" aria-hidden />

              {/* floating stat card */}
              <div className="absolute -bottom-6 -right-2 sm:right-8 bg-charcoal text-cream p-5 max-w-[200px] shadow-xl border-l-4 border-gold">
                <p className="font-display font-extrabold text-3xl text-gold leading-none">
                  1 Vertrag
                </p>
                <p className="mt-1 text-xs text-cream/70 leading-tight">
                  für alle Gewerke – ein Ansprechpartner, volle Verantwortung.
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                Über Sam Bau
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Stark im Bestand.
              <br />
              <span className="text-gold">Verlässlich in der Ausführung.</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg text-charcoal/75 leading-relaxed">
              Sam Bau ist in {COMPANY.zipCity.split(" ").slice(1).join(" ")} und
              im gesamten Rhein-Main-Gebiet für Sie da. Wir übernehmen
              anspruchsvolle Arbeiten rund um Abbruch, Sanierung, Trocknung
              und Wiederherstellung – vom kontrollierten Rückbau bis zur
              fertigen Renovierung.
            </p>
            <p className="mt-4 text-base text-charcoal/70 leading-relaxed">
              Privatkunden erhalten bei uns einen klaren, verständlichen
              Sanierungsablauf. Unternehmen, Generalunternehmer und
              Hausverwaltungen können uns projektbezogen als flexiblen
              Ausführungspartner einsetzen.
            </p>

            {/* Mini feature row */}
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {[
                { icon: ShieldCheck, title: "Festpreis", text: "Transparente Angebote ohne versteckte Kosten." },
                { icon: Users, title: "Persönlich", text: "Ein Ansprechpartner vom ersten bis zum letzten Tag." },
                { icon: Clock, title: "Termintreu", text: "Wir halten den vereinbarten Zeitrahmen ein." },
              ].map((f) => (
                <div key={f.title} className="flex flex-col gap-2">
                  <f.icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                  <span className="font-display font-bold uppercase text-sm text-charcoal tracking-wide">
                    {f.title}
                  </span>
                  <span className="text-xs text-charcoal/65 leading-relaxed">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
