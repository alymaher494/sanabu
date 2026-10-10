import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { MarqueeStrip } from "@/components/site/marquee-strip";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { StatsStrip } from "@/components/site/stats-strip";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { CtaBanner } from "@/components/site/cta-banner";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <StatsStrip />
        <WhyUs />
        <Process />
        <CtaBanner />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
