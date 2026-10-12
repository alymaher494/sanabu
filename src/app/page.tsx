import { Hero } from "@/components/site/hero";
import { MarqueeStrip } from "@/components/site/marquee-strip";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { StatsStrip } from "@/components/site/stats-strip";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { ImageBand } from "@/components/site/image-band";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";

// NOTE: Do NOT wrap these sections in extra scroll-animation containers.
// Every section already owns its entrance animation (framer-motion,
// whileInView with opacity restored in the "show" variant). An additional
// wrapper with initial opacity 0 hides the whole section if its own
// "show" state never restores opacity — this previously made the entire
// homepage invisible. Keep this composition flat.
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
      <ImageBand />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
