import { Hero } from "@/components/site/hero";
import { MarqueeStrip } from "@/components/site/marquee-strip";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { StatsStrip } from "@/components/site/stats-strip";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <About />
      <Services />
      <StatsStrip />
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
