"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">

      {/* 🖼️ BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/asset/about/hero.jpg"
          alt="About Fahad Manpower"
          fill
          priority
          className="object-cover scale-110"
        />
      </div>

      {/* 🔵 OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* 🔷 BRAND TINT */}
      <div className="absolute inset-0 bg-[var(--primary)]/30 mix-blend-multiply" />

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >

            {/* SMALL LABEL */}
            <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4">
              About Us
            </p>

            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              About Fahad Manpower
            </h1>

            {/* SUBTEXT */}
            <p className="mt-5 text-white/80">
              We deliver professional workforce solutions across multiple
              industries with a strong commitment to quality, reliability,
              and long-term partnerships.
            </p>

          </motion.div>
        </div>
      </div>

      {/* 🔽 FADE BOTTOM (BIAR SMOOTH KE SECTION) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--bg)] to-transparent" />

    </section>
  );
}