import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PTFahad Fajar Mustika Manpower, a trusted recruitment agency providing skilled workforce solutions for construction, oil & gas, hospitality, and global industries.",
  keywords: [
    "about manpower company",
    "recruitment agency Indonesia",
    "global manpower supplier",
    "oil and gas workers",
    "construction workforce",
  ],
};

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