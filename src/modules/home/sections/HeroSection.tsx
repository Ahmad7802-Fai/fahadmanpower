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

  // 🎯 PARALLAX
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] min-h-[700px] overflow-hidden"
    >
      {/* 🔵 BASE BACKGROUND */}
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

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-sky-700/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.35),transparent_60%)]" />
      </motion.div>

      {/* ✨ CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full md:w-1/2 ml-auto px-6 md:px-12">

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
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
              TRUSTED MANPOWER SOLUTION
            </motion.p>

            {/* 🔥 HEADLINE */}
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
              Hire Skilled Workforce <br />
              For Your Business Growth
            </motion.h1>

            {/* 💣 TRUST */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-6 flex flex-wrap gap-4 text-sm text-white/80"
            >
              <span>✔ 500+ Workers Deployed</span>
              <span>✔ 50+ Global Clients</span>
              <span>✔ Fast Recruitment</span>
            </motion.div>

            {/* SUBTEXT */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-6 text-sm md:text-base text-white/80 max-w-lg"
            >
              We deliver reliable and professional manpower solutions 
              to help companies scale faster with the right people.
            </motion.p>

            {/* 🔘 BUTTON */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {/* PRIMARY (FIXED) */}
              <Button
                size="lg"
                className="
                  bg-[var(--primary)]
                  text-white
                  hover:bg-[var(--primary-dark)]
                  font-semibold
                  shadow-lg
                "
              >
                Hire Workers Now
              </Button>

              {/* SECONDARY */}
              <Button
                variant="outline"
                size="lg"
                className="
                  border-white/30
                  text-white
                  hover:bg-white/10
                "
              >
                View Services
              </Button>
            </motion.div>

            {/* MICRO COPY */}
            <p className="mt-3 text-xs text-white/60">
              Get qualified candidates in just a few days
            </p>

          </motion.div>
        </div>
      </div>

      {/* 🔽 SCROLL */}
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