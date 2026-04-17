import {
  AboutHero,
  OverviewSection,
  VisionMission,
  WhyChooseUs,
  StatsSection,
  TestimonialSection,
  ClientLogoSection,
} from "@/modules/about";

import CTASection from "@/modules/home/sections/CTASection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OverviewSection />
      <VisionMission />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialSection />
      <ClientLogoSection />
      <CTASection />
    </>
  );
}