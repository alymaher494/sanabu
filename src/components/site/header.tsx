"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
  Hammer,
  Pickaxe,
  Trash2,
  Droplets,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
import { NAV_LINKS, SERVICES, COMPANY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  Hammer,
  Pickaxe,
  Trash2,
  Droplets,
  ClipboardCheck,
};

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close the mega menu on Escape. Panel links also close it onClick,
  // so no synchronizing setState-in-effect is needed for route changes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Home page has a full-screen dark hero -> transparent header at top.
  // All other (inner) pages start with a dark PageHero too, so transparent header
  // is fine everywhere at the top. Once scrolled, header gets the cream background.

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      onMouseLeave={() => setMegaOpen(false)}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(26,26,26,0.25)] border-b border-[#e7e2d6]"
          : "bg-transparent"
      )}
    >
      {/* Top contact bar */}
      <div
        className={cn(
          "hidden md:block border-b border-white/10 transition-all duration-300",
          scrolled
            ? "max-h-0 opacity-0 overflow-hidden border-[#e7e2d6]"
            : "max-h-12 opacity-100 bg-charcoal text-cream"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-xs">
          <div className="flex items-center gap-6">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.emailHref}
              className="hidden lg:flex items-center gap-2 hover:text-gold transition-colors"
            >
              {COMPANY.email}
            </a>
          </div>
          <span className="tracking-[0.2em] uppercase text-[10px] text-gold">
            {COMPANY.region}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="Sam Bau Startseite">
            <Image
              src="/images/logo.png"
              alt="Sam Bau"
              width={300}
              height={90}
              className="h-30 w-auto"
              loading="eager"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
            {NAV_LINKS.map((link) =>
              link.href === "/leistungen" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                >
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className={cn(
                        "relative pl-4 pr-1 py-2 text-sm font-display font-semibold tracking-wide uppercase transition-colors",
                        scrolled
                          ? "text-charcoal hover:text-gold"
                          : "text-cream hover:text-gold",
                        isActive(link.href) && "text-gold"
                      )}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <span className="absolute -bottom-0.5 left-4 right-1 h-0.5 bg-gold" />
                      )}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      aria-label="Leistungen-Menü öffnen"
                      onClick={() => setMegaOpen((v) => !v)}
                      className={cn(
                        "pr-3 pl-1 py-2 transition-colors",
                        scrolled
                          ? "text-charcoal hover:text-gold"
                          : "text-cream hover:text-gold",
                        isActive(link.href) && "text-gold"
                      )}
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          megaOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-display font-semibold tracking-wide uppercase transition-colors",
                    scrolled
                      ? "text-charcoal hover:text-gold"
                      : "text-cream hover:text-gold",
                    isActive(link.href) && "text-gold"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-gold" />
                  )}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              size="lg"
              className="clip-slanted-right bg-gold text-charcoal hover:bg-gold-dark font-display font-bold uppercase tracking-wider px-7 shadow-none"
            >
              <Link href="/kontakt">Angebot anfordern</Link>
            </Button>
          </div>

          {/* Mega menu panel (desktop) */}
          <div
            className={cn(
              "hidden lg:block absolute top-full left-0 right-0 transition-all duration-200 origin-top",
              megaOpen
                ? "opacity-100 scale-y-100 visible"
                : "opacity-0 scale-y-95 invisible pointer-events-none"
            )}
          >
            <div className="bg-cream border-b-2 border-gold shadow-[0_32px_64px_-24px_rgba(26,26,26,0.4)]">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-3 gap-4">
                  {SERVICES.map((s) => {
                    const Icon = SERVICE_ICONS[s.icon] ?? Hammer;
                    const active =
                      pathname === `/leistungen/${s.slug}`;
                    return (
                      <Link
                        key={s.id}
                        href={`/leistungen/${s.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className={cn(
                          "group flex items-start gap-4 p-4 border transition-colors",
                          active
                            ? "border-gold bg-gold/10"
                            : "border-[#e7e2d6] hover:border-gold hover:bg-white"
                        )}
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-gold/40 group-hover:border-gold group-hover:bg-gold transition-colors">
                          <Icon
                            className="h-6 w-6 text-gold group-hover:text-charcoal transition-colors"
                            strokeWidth={1.75}
                          />
                        </span>
                        <span>
                          <span
                            className={cn(
                              "block font-display font-bold uppercase tracking-wide text-sm",
                              active
                                ? "text-gold-dark"
                                : "text-charcoal group-hover:text-gold-dark"
                            )}
                          >
                            {s.title}
                          </span>
                          <span className="mt-1 block text-xs text-charcoal/65 leading-relaxed">
                            {s.short}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                  {/* CTA tile filling the 6th slot */}
                  <Link
                    href="/leistungen"
                    onClick={() => setMegaOpen(false)}
                    className="group flex flex-col justify-center gap-2 p-4 bg-charcoal text-cream hover:bg-charcoal-soft transition-colors"
                  >
                    <span className="font-display font-bold uppercase tracking-wide text-sm text-gold">
                      Alle Leistungen
                    </span>
                    <span className="text-xs text-cream/70 leading-relaxed">
                      Sanierung, Abbruch & Wiederherstellung – alles aus einer
                      Hand im Überblick.
                    </span>
                    <span className="mt-1 inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.18em] text-cream group-hover:text-gold transition-colors">
                      Übersicht ansehen
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-11 w-11",
                    scrolled ? "text-charcoal" : "text-cream"
                  )}
                  aria-label="Menü öffnen"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-sm bg-charcoal text-cream border-l-2 border-gold p-0"
              >
                <div className="flex items-center justify-between h-20 px-6 border-b border-white/10">
                  <Image
                    src="/images/logo.png"
                    alt="Sam Bau"
                    width={300}
                    height={90}
                    className="h-20 w-auto"
                  />
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-cream hover:text-gold"
                      aria-label="Menü schließen"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-6 gap-1" aria-label="Mobile Navigation">
                  {NAV_LINKS.map((link) =>
                    link.href === "/leistungen" ? (
                      <div key={link.href} className="border-b border-white/5">
                        <div className="flex items-center justify-between">
                          <SheetClose asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "font-display font-semibold tracking-[0.1em] uppercase py-3 transition-colors",
                                isActive(link.href)
                                  ? "text-gold"
                                  : "text-cream/90 hover:text-gold"
                              )}
                            >
                              {link.label}
                            </Link>
                          </SheetClose>
                          <button
                            type="button"
                            aria-expanded={mobileServicesOpen}
                            aria-label="Leistungen ein-/ausklappen"
                            onClick={() =>
                              setMobileServicesOpen((v) => !v)
                            }
                            className="p-3 text-cream/70 hover:text-gold transition-colors"
                          >
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform duration-200",
                                mobileServicesOpen && "rotate-180"
                              )}
                            />
                          </button>
                        </div>
                        <div
                          className={cn(
                            "grid transition-all duration-200",
                            mobileServicesOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="pb-3 pl-1 space-y-1">
                              {SERVICES.map((s) => {
                                const Icon =
                                  SERVICE_ICONS[s.icon] ?? Hammer;
                                const active =
                                  pathname === `/leistungen/${s.slug}`;
                                return (
                                  <SheetClose asChild key={s.id}>
                                    <Link
                                      href={`/leistungen/${s.slug}`}
                                      className={cn(
                                        "flex items-center gap-3 py-2.5 text-sm transition-colors",
                                        active
                                          ? "text-gold"
                                          : "text-cream/75 hover:text-gold"
                                      )}
                                    >
                                      <Icon
                                        className="h-4 w-4 text-gold shrink-0"
                                        strokeWidth={1.75}
                                      />
                                      {s.title}
                                    </Link>
                                  </SheetClose>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "font-display font-semibold tracking-[0.1em] uppercase py-3 border-b border-white/5 transition-colors",
                            isActive(link.href)
                              ? "text-gold"
                              : "text-cream/90 hover:text-gold"
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </nav>
                <div className="p-6 mt-auto space-y-4">
                  <Button
                    asChild
                    className="w-full clip-slanted-right bg-gold text-charcoal hover:bg-gold-dark font-display font-bold uppercase tracking-wider h-12"
                  >
                    <Link href="/kontakt">Angebot anfordern</Link>
                  </Button>
                  <div className="flex flex-col gap-2 text-sm text-cream/80">
                    <a
                      href={COMPANY.phoneHref}
                      className="flex items-center gap-2 hover:text-gold"
                    >
                      <Phone className="h-4 w-4 text-gold" />
                      {COMPANY.phone}
                    </a>
                    <a
                      href={COMPANY.emailHref}
                      className="hover:text-gold break-all"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
