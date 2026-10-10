"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/site-data";

export function Faq() {
  return (
    <section className="relative py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              Häufige Fragen
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Gut zu <span className="text-gold">wissen.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-charcoal/70 leading-relaxed">
            Die wichtigsten Fragen rund um unsere Arbeit, Preise und Abläufe –
            ehrlich und kurz beantwortet.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-[#e7e2d6] bg-white px-5 sm:px-6 data-[state=open]:border-gold transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" strokeWidth={1.75} />
                    <span className="font-display font-bold text-charcoal text-base sm:text-lg leading-snug">
                      {item.q}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed pb-5 pl-8">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
