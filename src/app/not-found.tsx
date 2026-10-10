import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { SamBauLogo } from "@/components/sam-bau-logo";
import { COMPANY } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-concrete-noise text-cream overflow-hidden pt-24 pb-16">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
      <div className="absolute -left-24 top-1/4 w-72 h-72 rounded-full bg-gold/8 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <SamBauLogo variant="dark" />
        </div>

        <p className="font-display font-extrabold text-7xl sm:text-8xl text-gold leading-none">
          404
        </p>
        <h1 className="mt-4 font-display font-extrabold uppercase text-cream text-2xl sm:text-3xl tracking-tight">
          Seite nicht gefunden.
        </h1>
        <p className="mt-4 text-cream/70 leading-relaxed max-w-md mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
          Kein Problem – bringen wir Sie zurück ins Trockene.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-gold text-charcoal font-display font-bold uppercase tracking-wider text-xs clip-slanted-right hover:bg-gold-light transition-colors"
          >
            <Home className="h-4 w-4" />
            Zur Startseite
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 border border-gold/60 text-cream font-display font-bold uppercase tracking-wider text-xs hover:bg-gold hover:text-charcoal hover:border-gold transition-colors"
          >
            Leistungen ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-8 text-sm text-cream/50">
          Oder direkt anrufen:{" "}
          <a href={COMPANY.phoneHref} className="text-gold hover:underline inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" />
            {COMPANY.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
