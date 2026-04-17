"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
    <section className="relative h-[65vh] min-h-[520px] overflow-hidden">

      {/* 🖼️ BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2070&q=80"
            alt="Workforce Services"
            fill
            priority
            className="
                object-cover
                object-center
                scale-110
                brightness-90
                contrast-110
            "
            />
      </div>

      {/* 🔥 DARK BASE (INI KUNCI) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔵 BRAND GRADIENT (BIAR TETAP ADA WARNA) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/70 via-transparent to-transparent" />

      {/* ✨ RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(14,165,233,0.25),transparent_60%)]" />

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container">

          <div className="max-w-2xl text-white">

            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.3em] text-xs text-white/60 mb-4"
            >
              FAHAD MANPOWER
            </motion.p>

            {/* 🔥 TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-4xl md:text-5xl lg:text-6xl
                font-bold leading-tight
              "
            >
              Hire Skilled Workforce <br />
              For Your Business Growth
            </motion.h1>

            {/* 📝 SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                mt-6 text-base
                text-white/80
              "
            >
              We deliver reliable and professional manpower solutions to help
              companies scale faster with the right people.
            </motion.p>

            {/* ✅ TRUST POINT (INI BIKIN MAHAL) */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
              <span>✔ 2000+ Workers</span>
              <span>✔ 150+ Clients</span>
              <span>✔ Fast Recruitment</span>
            </div>

            {/* 🔘 CTA (INI YANG DIPERBAIKI) */}
            <div className="mt-8 flex gap-4 flex-wrap">

              <Button
                size="lg"
                className="
                  bg-[var(--primary)]
                  text-white
                  shadow-lg
                  hover:scale-105
                  transition
                "
              >
                Contact Us
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="
                  border-white/40
                  text-white
                  hover:bg-white/10
                "
              >
                Explore Services
              </Button>

            </div>

          </div>
        </div>
      </div>

      {/* 🔽 SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs">
        <div className="animate-bounce">↓ Scroll</div>
      </div>
    </section>
  );
}