"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[65vh] min-h-[450px] overflow-hidden">

      {/* 🖼️ BACKGROUND IMAGE (UNSPLASH) */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
          alt="About Fahad Manpower"
          fill
          priority
          className="
            object-cover
            scale-110
            brightness-75
            contrast-110
          "
        />
      </div>

      {/* 🌑 DARK BASE */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔵 LEFT GRADIENT (BIAR FOKUS KE TEXT) */}
      <div className="
        absolute inset-0
        bg-gradient-to-r
        from-black via-black/60 to-transparent
      " />

      {/* 🔷 BRAND COLOR BLEND */}
      <div className="
        absolute inset-0
        bg-[var(--primary)]/30
        mix-blend-multiply
      " />

      {/* ✨ CINEMATIC LIGHT */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.25),transparent_60%)]
      " />

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container">

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="max-w-2xl text-white"
          >

            {/* LABEL */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4"
            >
              ABOUT US
            </motion.p>

            {/* TITLE */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="
                text-3xl md:text-5xl font-bold leading-tight
                drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]
              "
            >
              Building Reliable Workforce <br />
              For Global Industries
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-6 text-white/80 leading-relaxed"
            >
              Fahad Fajar Mustika Manpower delivers professional workforce solutions
              across multiple industries with a strong commitment to quality,
              reliability, and long-term partnerships worldwide.
            </motion.p>

          </motion.div>
        </div>
      </div>

      {/* 🔽 FADE BOTTOM */}
      <div className="
        absolute bottom-0 left-0 w-full h-28
        bg-gradient-to-t from-[var(--bg)] to-transparent
      " />

    </section>
  );
}