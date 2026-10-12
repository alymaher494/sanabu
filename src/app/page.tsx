import { Hero } from "@/components/site/hero";
import { MarqueeStrip } from "@/components/site/marquee-strip";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { StatsStrip } from "@/components/site/stats-strip";
import { WhyUs } from "@/components/site/why-us";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ScrollAnimation direction="up" delay={0.1}>
        <About />
      </ScrollAnimation>
      <ScrollAnimation direction="up" delay={0.2}>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation direction="up" delay={0.3}>
        <StatsStrip />
      </ScrollAnimation>
      <ScrollAnimation direction="up" delay={0.4}>
        <WhyUs />
      </ScrollAnimation>
      <ScrollAnimation direction="up" delay={0.5}>
        <Process />
      </ScrollAnimation>
      <StaggerContainer staggerDelay={0.1}>
        <StaggerItem>
          <ScrollAnimation direction="up" delay={0.6}>
            <Testimonials />
          </ScrollAnimation>
        </StaggerItem>
      </StaggerContainer>
      <ScrollAnimation direction="up" delay={0.7}>
        <CtaBanner />
      </ScrollAnimation>
    </>
  );
}
