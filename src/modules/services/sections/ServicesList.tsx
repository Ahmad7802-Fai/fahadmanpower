"use client";

import { motion } from "framer-motion";
import { services } from "../data/services";
import ServiceDetailCard from "../components/ServiceDetailCard";

export default function ServicesList() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* ✨ RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.05),transparent_60%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-3xl mx-auto">

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
            Workforce Solutions for{" "}
            <span className="text-[var(--primary)]">Global Industries</span>
          </motion.h2>

          {/* 🔥 UPGRADE COPY */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="subheading mt-5"
          >
            We provide skilled and reliable manpower across multiple sectors,
            helping companies scale efficiently with the right workforce.
          </motion.p>

          {/* 💎 TRUST BADGE */}
          <div className="flex justify-center flex-wrap gap-4 mt-6 text-sm text-muted">
            <span>✔ Verified Workers</span>
            <span>✔ Fast Deployment</span>
            <span>✔ Global Experience</span>
          </div>

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
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <ServiceDetailCard {...item} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 MINI CTA */}
        <div className="text-center mt-20">

          <p className="text-muted">
            Need a reliable workforce for your business?
          </p>

          <a
            href="https://wa.me/6282260252836"
            target="_blank"
            className="
              inline-block mt-4 px-6 py-3
              rounded-xl
              bg-[var(--primary)]
              text-white
              hover:opacity-90
              transition
            "
          >
            Get Consultation →
          </a>

        </div>

      </div>
    </section>
  );
}