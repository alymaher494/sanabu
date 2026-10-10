"use client";

import {
  ClipboardCheck,
  FileText,
  Hammer,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  ClipboardCheck,
  FileText,
  Hammer,
  CheckCircle2,
};

export function Process() {
  return (
    <section id="ablauf" className="relative py-20 lg:py-28 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              So arbeiten wir
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            In vier Schritten zum <span className="text-gold">fertigen Ergebnis.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-charcoal/70 leading-relaxed">
            Keine Überraschungen, keine versteckten Kosten. Sie wissen jederzeit,
            wo Ihr Projekt steht und wer dafür verantwortlich ist.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* horizontal connecting line on large screens */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden />

          {PROCESS_STEPS.map((s) => {
            const Icon = ICONS[s.icon] ?? ClipboardCheck;
            return (
              <div
                key={s.step}
                className="relative flex flex-col items-start group"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-5">
                  <div className="flex h-18 w-18 items-center justify-center h-[72px] w-[72px] bg-white border-2 border-gold group-hover:bg-gold transition-colors duration-300 shadow-[0_8px_24px_-12px_rgba(212,160,23,0.5)]">
                    <Icon className="h-8 w-8 text-gold group-hover:text-charcoal transition-colors" strokeWidth={1.75} />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center bg-charcoal text-gold text-xs font-display font-extrabold tracking-wider border border-gold/40">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-display font-bold uppercase tracking-wide text-charcoal text-lg leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
