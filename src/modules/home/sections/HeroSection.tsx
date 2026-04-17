"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const ref = useRef(null);

  // ✅ SCROLL BASED ON HERO SECTION
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ✅ PARALLAX EFFECT
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] min-h-[700px] overflow-hidden"
    >
      {/* 🔵 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-700 to-sky-500" />

      {/* 🖼️ IMAGE */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -translate-x-12"
      >
        <Image
          src="/asset/hero.jpg"
          alt="Professional Workforce"
          fill
          priority
          className="
            object-cover
            object-[0%_center]
            scale-125
            grayscale
            brightness-90
            contrast-110
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* LEFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        {/* BLUE BLEND */}
        <div className="absolute inset-0 bg-sky-700/30 mix-blend-multiply" />

        {/* RADIAL LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.35),transparent_60%)]" />

        {/* BLUR DEPTH */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </motion.div>

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full md:w-1/2 ml-auto px-6 md:px-12">

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="text-white"
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

            {/* HEADLINE */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-bold leading-tight
                drop-shadow-[0_5px_20px_rgba(0,0,0,0.6)]
              "
            >
              BUSINESS SUCCESS <br />
              IS DRIVEN BY <br />
              HUMAN RESOURCES
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-6 text-sm md:text-base text-white/80 max-w-lg"
            >
              We provide professional workforce solutions to help businesses
              grow and succeed with the right human resources.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="
                  backdrop-blur-md
                  bg-white/10
                  hover:bg-white/20
                  border border-white/20
                "
              >
                Contact Us
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="
                  border-white/30
                  text-white
                  hover:bg-white/10
                  backdrop-blur-md
                "
              >
                View Services
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