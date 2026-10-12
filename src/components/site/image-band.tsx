"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/site-data";

/**
 * Full-bleed image divider band (workshop photo + tagline + CTA).
 * Uses plain object-literal animations only (no variant labels), so the
 * band can never get stuck invisible — see page.tsx note.
 */
export function ImageBand() {
  return (
    <section className="relative overflow-hidden" aria-label={COMPANY.tagline}>
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(26,26,26,0.88) 0%, rgba(26,26,26,0.55) 60%, rgba(26,26,26,0.35) 100%), url('/images/workshop.jpg')",
        }}
        aria-hidden
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-display font-semibold tracking-[0.25em] uppercase text-sm text-gold">
            {COMPANY.serviceLine}
          </p>
          <p className="mt-3 font-display font-extrabold uppercase text-cream text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Ihr Haus – <span className="text-gold">unsere Sorge.</span>
          </p>
          <p className="mt-4 text-cream/75 leading-relaxed">
            Ein Ansprechpartner, ein Festpreis, ein Team für alle Gewerke —
            von der Besichtigung bis zur sauberen Abnahme.
          </p>
          <Link
            href="/kontakt"
            className="mt-7 inline-flex items-center gap-2 h-11 px-6 bg-gold text-charcoal font-display font-bold uppercase tracking-wider text-xs clip-slanted-right hover:bg-gold-light transition-colors"
          >
            Kostenlose Besichtigung anfragen
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
