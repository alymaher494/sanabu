"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
import { NAV_LINKS, COMPANY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
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
            ))}
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
                <nav className="flex flex-col p-6 gap-1">
                  {NAV_LINKS.map((link) => (
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
                  ))}
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
