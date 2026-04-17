import {
  ServicesHero,
  ServicesList,
  IndustriesSection,
} from "@/modules/services";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <IndustriesSection />
    </>
  );
}