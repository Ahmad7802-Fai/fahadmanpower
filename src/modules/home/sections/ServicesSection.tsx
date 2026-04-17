"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/modules/home/components/ServiceCard";
import { services } from "@/modules/home/data/services";

export default function ServicesSection() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 BACKGROUND LIGHT */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* ✨ SUBTLE GRADIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.08),transparent_50%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4"
          >
            OUR SERVICES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Workforce Solutions for{" "}
            <span className="text-[var(--primary)]">
              Global Industries
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-muted"
          >
            We provide skilled and reliable manpower across multiple sectors
            to support your business operations efficiently and effectively.
          </motion.p>

        </div>

        {/* 🔥 GRID */}
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
            mt-16
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

        {/* 🔻 CTA MINI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <a
            href="/services"
            className="
              inline-block
              px-6 py-3 rounded-xl
              bg-[var(--primary)]
              text-white
              font-medium
              hover:bg-[var(--primary-dark)]
              transition
            "
          >
            Explore All Services →
          </a>
        </motion.div>

      </div>
    </section>
  );
}