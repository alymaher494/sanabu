"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              Kundenstimmen
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Was unsere <span className="text-gold">Kunden sagen.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
          }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" }}
              className="relative flex flex-col bg-cream border border-[#e7e2d6] p-6 lg:p-7 hover:border-gold transition-colors group"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/15 group-hover:text-gold/30 transition-colors" strokeWidth={1.5} />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 text-gold fill-gold" />
                ))}
              </div>

              <blockquote className="text-charcoal/80 leading-relaxed text-sm flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-[#e7e2d6]">
                <div className="flex h-11 w-11 items-center justify-center bg-charcoal text-gold font-display font-bold text-sm tracking-wider">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-charcoal">
                    {t.name}
                  </div>
                  <div className="text-xs text-charcoal/60">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
