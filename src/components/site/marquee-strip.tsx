"use client";

import { SERVICES } from "@/lib/site-data";

/**
 * Infinite marquee strip of service names — pure visual brand element
 * matching the reference site's scrolling services ticker.
 */
export function MarqueeStrip() {
  const items = [...SERVICES.map((s) => s.title), "Festpreis-Angebote"];
  const doubled = [...items, ...items];

  return (
    <section
      className="bg-charcoal text-cream border-y border-gold/20 py-5 overflow-hidden"
      aria-hidden
    >
      <div className="flex w-max animate-marquee">
        {doubled.map((label, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-display font-bold uppercase tracking-[0.2em] text-lg lg:text-xl text-cream/90 px-8 whitespace-nowrap">
              {label}
            </span>
            <span className="text-gold text-xl">/</span>
          </div>
        ))}
      </div>
    </section>
  );
}
