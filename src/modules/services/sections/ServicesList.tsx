"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { services } from "../data/services";
import ServiceDetailCard from "../components/ServiceDetailCard";

export default function ServicesList() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* ✨ RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.06),transparent_60%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-xs text-[var(--primary)] mb-3"
          >
            OUR SERVICES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="heading"
          >
            What We <span className="text-[var(--primary)]">Provide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="subheading mt-4"
          >
            Professional manpower solutions across multiple industries,
            ensuring quality, efficiency, and reliability.
          </motion.p>
        </div>

        {/* 🧩 GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <ServiceDetailCard {...item} index={i} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}