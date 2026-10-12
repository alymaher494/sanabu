"use client";

import { STATS } from "@/lib/site-data";
import { motion } from "framer-motion";

export function StatsStrip() {
  return (
    <section className="relative bg-gold text-charcoal overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='%231a1a1a' stroke-width='1' opacity='.3'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-14"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="flex flex-col items-center text-center lg:border-r last:border-r-0 border-charcoal/20"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                className="font-display font-extrabold text-4xl lg:text-5xl text-charcoal leading-none"
              >
                {s.value}
              </motion.span>
              <span className="mt-2 font-display font-semibold uppercase tracking-[0.15em] text-[10px] lg:text-xs text-charcoal/70">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
