"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site-data";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.75) 50%, rgba(26,26,26,0.6) 100%), url('/images/cta-bg.png')",
        }}
        aria-hidden
      />
      {/* gold accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/40" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="max-w-2xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              Ihr Projekt
            </span>
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="font-display font-extrabold uppercase text-cream text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight"
          >
            Ihr Projekt.
            <br />
            <span className="text-gold">Unser nächster Einsatz.</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mt-5 text-base lg:text-lg text-cream/75 leading-relaxed"
          >
            Schildern Sie uns kurz Ihr Vorhaben – wir melden uns
            zeitnah, vereinbaren eine kostenlose Besichtigung und erstellen
            Ihnen ein klares, transparentes Festpreis-Angebot.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="clip-slanted-right bg-gold text-charcoal hover:bg-gold-light font-display font-bold uppercase tracking-wider h-14 px-8 text-sm shadow-[0_8px_30px_-8px_rgba(212,160,23,0.6)]"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                Projekt anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gold/60 text-cream hover:bg-gold hover:text-charcoal hover:border-gold font-display font-bold uppercase tracking-wider h-14 px-8 text-sm bg-transparent"
            >
              <a href={COMPANY.phoneHref} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
