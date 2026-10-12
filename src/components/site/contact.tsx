"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { COMPANY, SERVICES } from "@/lib/site-data";
import { contactSchema } from "@/lib/contact";

/**
 * Client-side schema: same rules as the server (single source of truth),
 * with user-friendly messages for the visible fields.
 */
const schema = contactSchema.extend({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein (min. 2 Zeichen)."),
  email: z
    .string()
    .min(1, "E-Mail ist erforderlich.")
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z
    .string()
    .min(6, "Bitte geben Sie eine gültige Telefonnummer ein."),
  service: z.string().min(1, "Bitte wählen Sie einen Leistungsbereich."),
  message: z
    .string()
    .min(10, "Bitte beschreiben Sie kurz Ihr Anliegen (min. 10 Zeichen).")
    .max(2000, "Die Nachricht ist zu lang (max. 2000 Zeichen)."),
  consent: z.boolean().refine((v) => v === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu.",
  }),
});

type FormValues = z.input<typeof schema>;

const CONTACT_ITEMS: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: MapPin,
    label: "Adresse",
    value: `${COMPANY.street}, ${COMPANY.zipCity}`,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: COMPANY.email,
    href: COMPANY.emailHref,
  },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: COMPANY.hours,
  },
];

export function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const [formStartedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
      website: "",
      startedAt: formStartedAt,
    },
  });

  const serviceValue = watch("service");

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Übermittlung fehlgeschlagen.");
      }
      setSubmitted(true);
      reset();
      toast({
        title: "Anfrage versendet",
        description:
          "Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
    } catch (e) {
      toast({
        title: "Fehler beim Senden",
        description:
          e instanceof Error ? e.message : "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="kontakt" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-gold">
                Kontakt
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-charcoal text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Sprechen Sie <span className="text-gold">mit uns.</span>
            </h2>
            <p className="mt-5 text-base text-charcoal/70 leading-relaxed">
              Ob Sanierung, Abbruch oder Wasserschaden – wir reagieren
              schnell und unkompliziert. Schreiben Sie uns oder rufen Sie
              an, wir beraten Sie ehrlich und unverbindlich.
            </p>

            <div className="mt-8 space-y-4">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 border border-[#e7e2d6] hover:border-gold transition-colors group">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-gold/40 group-hover:bg-gold transition-colors">
                      <Icon className="h-5 w-5 text-gold group-hover:text-charcoal transition-colors" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold uppercase tracking-wider text-[10px] text-charcoal/50">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm text-charcoal break-words font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Notfall hint */}
            <div className="mt-6 p-5 bg-charcoal text-cream border-l-4 border-gold">
              <p className="font-display font-bold uppercase tracking-wider text-sm text-gold">
                Notfall nach Wasserschaden?
              </p>
              <p className="mt-2 text-sm text-cream/75 leading-relaxed">
                Rufen Sie uns direkt an – bei Wasserschäden zählt jede Stunde.
                Wir bringen Trocknung & Sanierung schnell auf den Weg.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="relative bg-cream p-6 sm:p-8 lg:p-10 border border-[#e7e2d6] clip-corner-tr">
              <div className="absolute top-0 right-0 h-1 w-24 bg-gold" aria-hidden />

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 mb-6">
                    <CheckCircle2 className="h-10 w-10 text-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-extrabold uppercase text-2xl text-charcoal">
                    Vielen Dank!
                  </h3>
                  <p className="mt-3 text-charcoal/70 max-w-md">
                    Ihre Anfrage ist bei uns eingegangen. Wir melden uns
                    innerhalb von 24 Stunden bei Ihnen – in dringenden Fällen
                    erreichen Sie uns telefonisch unter {COMPANY.phone}.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-8 border-gold text-charcoal hover:bg-gold hover:text-charcoal font-display font-bold uppercase tracking-wider"
                  >
                    Weitere Anfrage senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-display font-bold uppercase tracking-wider text-xs text-charcoal">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Max Mustermann"
                        autoComplete="name"
                        className="bg-white border-[#e7e2d6] focus-visible:ring-gold focus-visible:border-gold h-11"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-display font-bold uppercase tracking-wider text-xs text-charcoal">
                        E-Mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="max@beispiel.de"
                        autoComplete="email"
                        className="bg-white border-[#e7e2d6] focus-visible:ring-gold focus-visible:border-gold h-11"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="text-xs text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-display font-bold uppercase tracking-wider text-xs text-charcoal">
                        Telefon *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="01590 6510642"
                        autoComplete="tel"
                        className="bg-white border-[#e7e2d6] focus-visible:ring-gold focus-visible:border-gold h-11"
                        {...register("phone")}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="text-xs text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-display font-bold uppercase tracking-wider text-xs text-charcoal">
                        Leistungsbereich *
                      </Label>
                      <Select
                        value={serviceValue}
                        onValueChange={(v) => setValue("service", v, { shouldValidate: true })}
                      >
                        <SelectTrigger
                          id="service"
                          className="bg-white border-[#e7e2d6] focus-visible:ring-gold focus-visible:border-gold h-11"
                          aria-invalid={!!errors.service}
                          aria-describedby={errors.service ? "service-error" : undefined}
                        >
                          <SelectValue placeholder="Bitte wählen…" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.id} value={s.title}>
                              {s.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="Sonstiges">Sonstiges</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p id="service-error" role="alert" className="text-xs text-destructive">{errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-display font-bold uppercase tracking-wider text-xs text-charcoal">
                      Ihre Nachricht *
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Beschreiben Sie kurz Ihr Bauvorhaben, die Adresse und den gewünschten Zeitpunkt…"
                      className="bg-white border-[#e7e2d6] focus-visible:ring-gold focus-visible:border-gold resize-y"
                      {...register("message")}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Honeypot: hidden from humans, filled by bots. */}
                  <div className="absolute h-px w-px overflow-hidden whitespace-nowrap" style={{ clip: "rect(0 0 0 0)", clipPath: "inset(50%)" }} aria-hidden="true">
                    <label htmlFor="website">
                      Bitte lassen Sie dieses Feld leer.
                      <input
                        id="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("website")}
                      />
                    </label>
                  </div>

                  <label className="flex items-start gap-3 text-xs text-charcoal/70 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-0.5 h-4 w-4 accent-[#d4a017]"
                      {...register("consent")}
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? "consent-error" : undefined}
                    />
                    <span>
                      Ich habe die{" "}
                      <a href="/datenschutz" className="underline underline-offset-2 hover:text-charcoal">
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und bin damit einverstanden, dass meine Angaben
                      zur Bearbeitung meiner Anfrage per E-Mail an Sam Bau
                      übermittelt werden.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" className="text-xs text-destructive -mt-3">{errors.consent.message}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto clip-slanted-right bg-gold text-charcoal hover:bg-gold-light font-display font-bold uppercase tracking-wider h-13 px-8 shadow-none disabled:opacity-60 h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        Anfrage senden
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-[11px] text-charcoal/50">
                    Wir antworten in der Regel innerhalb von 24 Stunden.
                    Ihre Daten werden vertraulich behandelt.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
