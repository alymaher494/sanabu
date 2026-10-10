"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
  image?: string;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image,
  align = "left",
}: PageHeroProps) {
  const pathname = usePathname();

  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-concrete-noise text-cream overflow-hidden">
      {/* background image */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.75) 55%, rgba(26,26,26,0.6) 100%), url('${image}')`,
          }}
          aria-hidden
        />
      )}
      {/* gold accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
      <div
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gold/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "flex items-center gap-2 text-xs text-cream/60 mb-6",
              align === "center" && "justify-center"
            )}
          >
            <Link
              href="/"
              className="hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              <Home className="h-3.5 w-3.5" />
              Start
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-gold/60" />
                {c.href && c.href !== pathname ? (
                  <Link href={c.href} className="hover:text-gold transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold font-medium">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold" />
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-display font-extrabold uppercase text-cream text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-base lg:text-lg text-cream/80 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
