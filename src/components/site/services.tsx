"use client";

import Link from "next/link";
import {
  Hammer,
  Pickaxe,
  Trash2,
  Droplets,
  ClipboardCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/site-data";
import { motion } from "framer-motion";

const ICONS: Record<string, LucideIcon> = {
  Hammer,
  Pickaxe,
  Trash2,
  Droplets,
  ClipboardCheck,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICONS[service.icon] ?? Hammer;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col bg-white border border-[#e7e2d6] hover:border-gold transition-all duration-300 hover:shadow-[0_24px_48px_-24px_rgba(26,26,26,0.25)] overflow-hidden"
      whileHover={{ y: -4, boxShadow: "0 24px 48px -24px rgba(26,26,26,0.25)" }}
    >
      {/* Gold accent top bar */}
      <div className="h-1 bg-gold w-0 group-hover:w-full transition-all duration-500" />

      <div className="p-6 lg:p-7 flex flex-col h-full">
        {/* Icon */}
        <div className="relative mb-5">
          <div className="flex h-14 w-14 items-center justify-center border-2 border-gold/30 group-hover:border-gold transition-colors">
            <Icon className="h-7 w-7 text-gold" strokeWidth={1.75} />
          </div>
          <span className="absolute -top-2 -right-2 font-display font-extrabold text-[11px] tracking-widest text-gold/40 group-hover:text-gold transition-colors">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold uppercase tracking-wide text-lg text-charcoal leading-tight">
          {service.title}
        </h3>

        {/* Short */}
        <p className="mt-2 text-sm text-gold font-display font-medium">
          {service.short}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
          {service.description}
        </p>

        {/* Bullets */}
        <ul className="mt-5 space-y-2 mb-6">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="arrow-bullet text-sm text-charcoal/80"
            >
              {b}
            </li>
          ))}
        </ul>

        {/* Footer link */}
        <div className="mt-auto flex flex-col gap-3">
          <Link
            href={`/leistungen/${service.slug}`}
            className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.18em] text-charcoal hover:text-gold transition-colors group/link"
          >
            Mehr erfahren
            <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.18em] text-gold hover:text-gold-dark transition-colors"
          >
            Leistung anfragen
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section
      id="leistungen"
      className="relative py-20 lg:py-28 bg-cream"
    >
      {/* Top divider */}
      <div className="divider-gold max-w-7xl mx-auto" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading block */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              Unsere Kernleistungen
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Sanierung, Abbruch & Wiederherstellung – <span className="text-gold">aus einer Hand.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-charcoal/70 leading-relaxed">
            Wir decken die gesamten Arbeiten rund um Bestand und Umbau ab –
            vom ersten Hammerschlag bis zur schlüsselfertigen Übergabe.
            Jedes Gewerk führen wir selbst oder mit festen Partner-Teams aus,
            die wir koordinieren.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </motion.div>

          {/* CTA card filling the 6th slot */}
          <div className="relative flex flex-col justify-between p-6 lg:p-7 bg-charcoal text-cream overflow-hidden clip-corner-tr">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" aria-hidden />
            <div className="relative">
              <span className="font-display font-extrabold text-5xl text-gold/30">
                06
              </span>
              <h3 className="mt-4 font-display font-bold uppercase tracking-wide text-lg text-cream">
                Nichts Passendes dabei?
              </h3>
              <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                Wir finden für fast jedes Bauvorhaben eine Lösung. Sprechen Sie
                uns an – wir beraten Sie ehrlich, auch wenn Ihr Gewerk hier
                nicht steht.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="relative mt-6 inline-flex items-center justify-center gap-2 h-11 px-5 bg-gold text-charcoal font-display font-bold uppercase tracking-wider text-xs clip-slanted-right hover:bg-gold-light transition-colors"
            >
              Persönlich anfragen
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
