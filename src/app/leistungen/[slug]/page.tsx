import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Pickaxe,
  Trash2,
  Droplets,
  ClipboardCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Process } from "@/components/site/process";
import { CtaBanner } from "@/components/site/cta-banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ServiceJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/components/site/json-ld";
import { SERVICES, getServiceBySlug, COMPANY } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  Hammer,
  Pickaxe,
  Trash2,
  Droplets,
  ClipboardCheck,
};

/** Pre-render all 5 service pages at build time. */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/** Per-service SEO metadata. */
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) {
      return { title: "Leistung nicht gefunden" };
    }
    const url = `/leistungen/${service.slug}`;
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      keywords: service.keywords,
      alternates: { canonical: url },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url,
        type: "article",
        images: [{ url: service.image, width: 1344, height: 768, alt: service.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: service.metaTitle,
        description: service.metaDescription,
        images: [service.image],
      },
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const Icon = ICONS[service.icon] ?? Hammer;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const crumbs = [
    { label: "Leistungen", href: "/leistungen" },
    { label: service.title },
  ];

  const breadcrumbItems = [
    { name: "Start", url: "/" },
    { name: "Leistungen", url: "/leistungen" },
    { name: service.title, url: `/leistungen/${service.slug}` },
  ];

  return (
    <>
      <ServiceJsonLd
        serviceName={service.title}
        serviceDescription={service.metaDescription}
        slug={service.slug}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {service.faqs.length > 0 && <FaqJsonLd faqs={service.faqs} />}

      <PageHero
        eyebrow="Leistung"
        title={service.title}
        subtitle={service.description}
        crumbs={crumbs}
        image={service.image}
      />

      {/* Intro */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-gold">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                </div>
                <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                  {COMPANY.name} · {service.title}
                </span>
              </div>
              <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl leading-[1.1] tracking-tight">
                {service.short}
              </h2>
              <p className="mt-6 text-base lg:text-lg text-charcoal/75 leading-relaxed">
                {service.longDescription}
              </p>

              {/* Bullets quick list */}
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {service.bullets.map((b) => (
                  <li key={b} className="arrow-bullet text-sm text-charcoal/80">
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sticky contact card */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-charcoal text-cream p-6 lg:p-7 border-l-4 border-gold clip-corner-tr">
                <h3 className="font-display font-bold uppercase tracking-wide text-cream text-lg">
                  Diese Leistung anfragen
                </h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                  Sie möchten <span className="text-gold font-medium">{service.title}</span> beauftragen oder
                  unverbindlich anfragen? Wir melden uns zeitnah.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 h-12 bg-gold text-charcoal font-display font-bold uppercase tracking-wider text-xs clip-slanted-right hover:bg-gold-light transition-colors"
                >
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={COMPANY.phoneHref}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 h-11 border border-cream/30 text-cream font-display font-semibold text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                >
                  oder anrufen: {COMPANY.phone}
                </a>
                <p className="mt-4 text-[11px] text-cream/50 text-center">
                  Erstsbesichtigung kostenlos & unverbindlich
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Detailed points */}
      <section className="bg-white py-16 lg:py-24 border-t border-[#e7e2d6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                Was wir für Sie tun
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl leading-[1.05] tracking-tight">
              Leistungen im <span className="text-gold">Detail.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {service.detailedPoints.map((p, i) => (
              <div
                key={p.title}
                className="group flex flex-col p-6 lg:p-7 bg-cream border border-[#e7e2d6] hover:border-gold transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display font-extrabold text-2xl text-gold/30 group-hover:text-gold transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-gold ml-auto" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-bold uppercase tracking-wide text-charcoal text-base leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="bg-concrete-noise text-cream py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                  Ideal für
                </span>
              </div>
              <h2 className="font-display font-extrabold uppercase text-cream text-3xl sm:text-4xl leading-[1.05] tracking-tight">
                Für wen diese <span className="text-gold">Leistung</span> passt.
              </h2>
              <p className="mt-4 text-cream/70 leading-relaxed">
                Ob Privat, B2B oder Hausverwaltung – {service.title} bei Sam Bau
                passt zu vielen Bauvorhaben im Rhein-Main-Gebiet.
              </p>
            </div>
            <ul className="space-y-3">
              {service.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 bg-charcoal-soft/60 border border-cream/10 hover:border-gold/60 transition-colors"
                >
                  <Users className="h-5 w-5 text-gold shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="text-sm text-cream/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service-specific FAQ */}
      {service.faqs.length > 0 && (
        <section className="bg-cream py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10 bg-gold" />
                <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                  Häufige Fragen
                </span>
                <span className="h-px w-10 bg-gold" />
              </div>
              <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl leading-[1.05] tracking-tight">
                Fragen zu <span className="text-gold">{service.title}.</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {service.faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-[#e7e2d6] bg-white px-5 sm:px-6 data-[state=open]:border-gold transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-display font-bold text-charcoal text-base leading-snug">
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal/70 leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="bg-white py-16 lg:py-20 border-t border-[#e7e2d6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
              Weitere Leistungen
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-charcoal text-2xl sm:text-3xl leading-tight mb-8">
            Das könnten Sie auch <span className="text-gold">interessieren.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((s) => {
              const RIcon = ICONS[s.icon] ?? Hammer;
              return (
                <Link
                  key={s.id}
                  href={`/leistungen/${s.slug}`}
                  className="group flex flex-col p-6 bg-cream border border-[#e7e2d6] hover:border-gold transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-gold/30 group-hover:border-gold transition-colors mb-4">
                    <RIcon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-bold uppercase tracking-wide text-charcoal text-base leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/65 leading-relaxed flex-1">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.18em] text-charcoal group-hover:text-gold transition-colors">
                    Mehr erfahren
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Process />
      <CtaBanner />
    </>
  );
}
