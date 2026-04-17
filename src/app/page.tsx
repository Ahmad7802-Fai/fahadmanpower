import {
  HeroSection,
  ClientLogoSection, // 👈 TAMBAH INI
  ServicesSection,
  ProcessSection,
  IndustriesSection,
  CTASection,
} from "@/modules/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 🔥 TRUST BOOSTER */}
      <ClientLogoSection />

      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}