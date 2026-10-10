"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { SamBauLogo } from "@/components/sam-bau-logo";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-concrete-noise text-cream">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-10 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <SamBauLogo variant="dark" showTagline />
            <p className="mt-5 text-sm text-cream/65 leading-relaxed max-w-xs">
              Ihr verlässlicher Partner für Sanierung, Abbruch und
              Wiederherstellung in {COMPANY.city} und dem Rhein-Main-Gebiet.
            </p>
            <p className="mt-4 font-display text-sm tracking-[0.2em] uppercase text-gold">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-sm text-cream mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/65 hover:text-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-gold/50 group-hover:w-5 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-cream/65 hover:text-gold transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-px w-3 bg-gold/50 group-hover:w-5 transition-all" />
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-cream/65 hover:text-gold transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="h-px w-3 bg-gold/50 group-hover:w-5 transition-all" />
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-sm text-cream mb-4">
              Leistungen
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/leistungen#${s.slug}`}
                    className="text-sm text-cream/65 hover:text-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-gold/50 group-hover:w-5 transition-all" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-sm text-cream mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-cream/70">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>
                  {COMPANY.street}
                  <br />
                  {COMPANY.zipCity}
                </span>
              </li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold shrink-0" strokeWidth={1.75} />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-gold shrink-0" strokeWidth={1.75} />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50 text-center sm:text-left">
            © {year} {COMPANY.name} · {COMPANY.street}, {COMPANY.zipCity}
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/50">
            <Link href="/impressum" className="hover:text-gold transition-colors">
              Impressum
            </Link>
            <span className="h-3 w-px bg-cream/20" />
            <Link href="/datenschutz" className="hover:text-gold transition-colors">
              Datenschutz
            </Link>
            <Link
              href="/"
              className="ml-2 inline-flex items-center gap-1.5 text-gold hover:text-cream transition-colors"
              aria-label="Nach oben"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Nach oben
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
