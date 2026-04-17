"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative py-32 overflow-hidden text-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)]" />

      {/* RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.2),transparent_60%)]" />

      {/* GLOW */}
      <div className="absolute inset-0 blur-3xl opacity-30 bg-[var(--primary)]" />

      <div className="container relative z-10 text-white">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4"
        >
          CONTACT US
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Let’s Build Something <br />
          Great Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-white/80 max-w-2xl mx-auto"
        >
          Reach out to us and get the right workforce solutions tailored for your business needs.
        </motion.p>

      </div>
    </section>
  );
}