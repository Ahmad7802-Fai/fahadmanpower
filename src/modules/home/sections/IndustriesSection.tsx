"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import IndustryCard from "../components/IndustryCard";
import { industries } from "../data/industries";

export default function IndustriesSection() {
  return (
    <Section
      title={
        <>
          Industries We <span className="text-[var(--primary)]">Serve</span>
        </>
      }
      subtitle="Delivering workforce solutions across diverse sectors"
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
              staggerChildren: 0.15,
            },
          },
        }}
        className="
          grid gap-6
          md:grid-cols-2
          lg:grid-cols-3
          mt-14
        "
      >
        {industries.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <IndustryCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}