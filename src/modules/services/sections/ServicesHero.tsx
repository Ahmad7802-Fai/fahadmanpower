"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">

      {/* 🖼️ BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/asset/service-bg.jpg" // 👉 taruh di public/asset
          alt="Workforce Services"
          fill
          priority
          className="
            object-cover
            object-center
            scale-110
            brightness-75
          "
        />
      </div>

      {/* 🔵 GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)]/90 via-[var(--primary)]/80 to-[var(--primary-light)]/70" />

      {/* ✨ RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.15),transparent_60%)]" />

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container text-center text-white">

          {/* ANIMATION WRAPPER */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >

            {/* LABEL */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4"
            >
              FAHAD MANPOWER
            </motion.p>

            {/* 🔥 TITLE */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="
                text-4xl md:text-5xl lg:text-6xl
                font-bold leading-tight
                drop-shadow-[0_5px_20px_rgba(0,0,0,0.4)]
              "
            >
              Our Professional <br />
              Workforce Solutions
            </motion.h1>

            {/* 📝 SUBTITLE */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="
                mt-6 text-sm md:text-base
                text-white/80
                max-w-2xl mx-auto
              "
            >
              We provide comprehensive manpower services across industries,
              ensuring businesses get the right talent to grow efficiently and
              sustainably.
            </motion.p>

            {/* 🔘 CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-8 flex justify-center gap-4 flex-wrap"
            >
              <Button
                size="lg"
                className="
                  bg-white text-[var(--primary)]
                  hover:bg-gray-100
                "
              >
                Contact Us
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="
                  border-white text-white
                  hover:bg-white/10
                "
              >
                Explore Services
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* 🔽 SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs"
      >
        <div className="animate-bounce">↓ Scroll</div>
      </motion.div>
    </section>
  );
}