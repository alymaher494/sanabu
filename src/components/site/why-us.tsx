"use client";

import {
  HandHeart,
  Layers,
  SlidersHorizontal,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { WHY_US } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  HandHeart,
  Layers,
  SlidersHorizontal,
  MapPin,
};

export function WhyUs() {
  return (
    <section className="relative py-20 lg:py-28 bg-concrete-noise text-cream overflow-hidden">
      {/* gold edge bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
      <div className="absolute -left-24 top-1/2 w-72 h-72 rounded-full bg-gold/5 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              Warum Sam Bau
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-cream text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Wir machen Bauvorhaben <span className="text-gold">berechenbar.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-cream/70 leading-relaxed">
            Renovierung und Abbruch bedeuten für viele Eigentümer Stress und
            Unsicherheit. Wir reduzieren beides auf ein klares Versprechen:
            ein Vertrag, ein Verantwortlicher, ein verlässliches Ergebnis.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon] ?? HandHeart;
            return (
              <div
                key={item.title}
                className="group relative p-6 lg:p-7 border border-cream/10 hover:border-gold/60 bg-charcoal-soft/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute top-3 right-4 font-display font-extrabold text-3xl text-cream/5 group-hover:text-gold/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 items-center justify-center border-2 border-gold/40 group-hover:bg-gold transition-colors mb-5">
                  <Icon
                    className="h-6 w-6 text-gold group-hover:text-charcoal transition-colors"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="font-display font-bold uppercase tracking-wide text-cream text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
