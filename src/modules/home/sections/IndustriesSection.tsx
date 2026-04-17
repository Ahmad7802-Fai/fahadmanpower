"use client";

import { motion } from "framer-motion";
import IndustryCard from "../components/IndustryCard";
import { industries } from "../data/industries";

export default function IndustriesSection() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.08),transparent_50%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4"
          >
            INDUSTRIES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Industries We{" "}
            <span className="text-[var(--primary)]">Support</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-muted"
          >
            We provide skilled manpower across various industries,
            ensuring efficiency, reliability, and long-term success.
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
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-3
            mt-16
          "
        >
          {industries.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <IndustryCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        {/* 🔻 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <p className="text-muted mb-4">
            Looking for workforce solutions tailored to your industry?
          </p>

          <a
            href="/contact"
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
            Get Consultation →
          </a>
        </motion.div>

      </div>
    </section>
  );
}