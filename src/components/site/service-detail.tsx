"use client";

import {
  Hammer,
  Pickaxe,
  Trash2,
  Droplets,
  ClipboardCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { type Service } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  Hammer,
  Pickaxe,
  Trash2,
  Droplets,
  ClipboardCheck,
};

type ServiceDetailProps = {
  service: Service;
  index: number;
};

export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const Icon = ICONS[service.icon] ?? Hammer;
  const flipped = index % 2 === 1;

  return (
    <article id={service.slug} className="scroll-mt-28">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className={flipped ? "lg:order-2" : "lg:order-1"}>
          <div className="relative">
            <div className="relative overflow-hidden clip-corner-tr border border-[#e7e2d6] shadow-[0_24px_48px_-24px_rgba(26,26,26,0.35)]">
              <img
                src={service.image}
                alt={`${service.title} – Sam Bau`}
                className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
            {/* number badge */}
            <div className="absolute -bottom-4 left-4 lg:left-8 bg-gold text-charcoal font-display font-extrabold text-2xl px-5 py-2 clip-slanted-right shadow-lg">
              {String(index + 1).padStart(2, "0")}
            </div>
            {/* gold corner accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-r-4 border-t-4 border-gold pointer-events-none" aria-hidden />
          </div>
        </div>

        {/* Text */}
        <div className={flipped ? "lg:order-1" : "lg:order-2"}>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-gold">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
            </div>
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              Leistung {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h2 className="font-display font-extrabold uppercase text-charcoal text-2xl sm:text-3xl lg:text-4xl leading-[1.05] tracking-tight">
            {service.title}
          </h2>

          <p className="mt-2 text-gold font-display font-medium text-base">
            {service.short}
          </p>

          <p className="mt-5 text-charcoal/75 leading-relaxed">
            {service.longDescription}
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
            {service.bullets.map((b) => (
              <li key={b} className="arrow-bullet text-sm text-charcoal/80">
                {b}
              </li>
            ))}
          </ul>

          <a
            href="/kontakt"
            className="mt-7 inline-flex items-center gap-2 h-11 px-6 bg-charcoal text-cream font-display font-bold uppercase tracking-wider text-xs clip-slanted-right hover:bg-gold hover:text-charcoal transition-colors"
          >
            Diese Leistung anfragen
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
