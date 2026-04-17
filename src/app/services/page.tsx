import type { Metadata } from "next";

import {
  ServicesHero,
  ServicesList,
  IndustriesSection,
} from "@/modules/services";

import CTASection from "@/modules/home/sections/CTASection";

export const metadata: Metadata = {
  title: "Manpower Services",
  description:
    "Explore professional manpower services including construction, oil & gas, hospitality, healthcare, and global workforce recruitment solutions.",
  keywords: [
    "manpower services",
    "recruitment agency",
    "oil and gas manpower",
    "construction workers supplier",
    "hospitality staff recruitment",
    "global workforce solutions",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <IndustriesSection />
      <CTASection />
    </>
  );
}