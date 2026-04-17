"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ServiceCard from "@/modules/home/components/ServiceCard";
import { services } from "@/modules/home/data/services";

export default function ServicesSection() {
  return (
    <Section
      title={
        <>
          Our <span className="text-[var(--primary)]">Services</span>
        </>
      }
      subtitle="Comprehensive workforce solutions across multiple industries"
      center
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="
          grid gap-8 md:grid-cols-2 lg:grid-cols-3
          mt-14
        "
      >
        {services.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ServiceCard {...item} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}