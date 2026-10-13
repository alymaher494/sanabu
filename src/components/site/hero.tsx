"use client";

import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site-data";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center overflow-hidden bg-concrete-noise"
    >
      {/* Background image with dark overlay */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(26,26,26,0.72) 0%, rgba(26,26,26,0.48) 45%, rgba(26,26,26,0.18) 100%), url('/images/hero-bg.jpg')",
        }}
        aria-hidden
      />
      {/* Gold glow accent on the right */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-20 w-[320px] h-[320px] rounded-full bg-gold/12 blur-3xl hidden md:block"
        aria-hidden
      />
      {/* Vertical gold seam line at far right */}
      <div
        className="absolute top-0 bottom-0 right-0 w-[3px] bg-gradient-to-b from-gold/0 via-gold to-gold/0 hidden lg:block"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-28 md:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-gold/40 rounded-full bg-charcoal/60 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-gold">
              Bauunternehmen · {COMPANY.region}
            </span>
          </motion.div>

          {/* Big headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 1.02 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-display font-extrabold uppercase tracking-tight text-cream leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Sam <span className="text-gold">Bau</span>
          </motion.h1>

          {/* Service line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 flex items-center gap-3"
          >
            <span className="hidden sm:block h-px w-12 bg-gold" />
            <p className="font-display font-semibold tracking-[0.22em] uppercase text-base sm:text-lg text-cream">
              Sanierung <span className="text-gold">|</span> Renovierung
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl font-light text-cream/95 text-balance"
          >
            Ihr Haus – <span className="text-gold font-semibold">unsere Sorge.</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-cream/85 leading-relaxed"
          >
            Wir übernehmen anspruchsvolle Arbeiten vom kontrollierten Rückbau
            bis zur fertigen Renovierung – sauber geplant, zuverlässig
            ausgeführt, mit nur einem Ansprechpartner.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="clip-slanted-right bg-gold text-charcoal hover:bg-gold-light font-display font-bold uppercase tracking-wider h-14 px-8 text-sm shadow-[0_8px_30px_-8px_rgba(212,160,23,0.6)]"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                Angebot anfordern
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gold/60 text-cream hover:bg-gold hover:text-charcoal hover:border-gold font-display font-bold uppercase tracking-wider h-14 px-8 text-sm bg-transparent"
            >
              <Link href="/leistungen" className="flex items-center gap-2">
                Leistungen ansehen
              </Link>
            </Button>
          </motion.div>

          {/* Quick contact line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cream/70"
          >
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span className="font-display font-medium tracking-wide">
                {COMPANY.phone}
              </span>
            </a>
            <span className="hidden sm:inline h-4 w-px bg-cream/20" />
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold fill-gold" />
              Festpreis-Angebote · regionale Verwurzelung
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scalloped "Alles aus einer Hand" seal badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100, damping: 15 }}
        className="hidden xl:flex absolute right-12 bottom-16 z-10 items-center justify-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="relative w-44 h-44">
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-slow-zoom">
            <defs>
              <path
                id="seal-text-path"
                d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
              />
            </defs>
            {/* scalloped outer */}
            <circle cx="100" cy="100" r="90" fill="#d4a017" />
            <circle cx="100" cy="100" r="86" fill="none" stroke="#fdfbf7" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="70" fill="#1a1a1a" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="#d4a017" strokeWidth="1.5" />
            <text fill="#d4a017" fontSize="13.5" fontFamily="Montserrat, sans-serif" fontWeight="700" letterSpacing="3">
              <textPath href="#seal-text-path" startOffset="0%">
                ALLES AUS EINER HAND · ALLES AUS EINER HAND ·
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="font-display font-extrabold uppercase text-cream text-2xl leading-none">
              Sam
            </span>
            <span className="font-display font-extrabold uppercase text-gold text-2xl leading-none mt-1">
              Bau
            </span>
            <span className="mt-2 h-px w-8 bg-gold" />
            <span className="mt-2 text-[9px] font-display tracking-[0.3em] uppercase text-cream/60">
              Seit Tag 1
            </span>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-cream/50"
      >
        <span className="text-[10px] font-display tracking-[0.3em] uppercase">
          Scrollen
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
