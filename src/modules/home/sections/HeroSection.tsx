"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const ref = useRef(null);
  const router = useRouter();

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
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-700 to-sky-500" />

      {/* IMAGE */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -translate-x-12"
      >
        <Image
          src="/asset/hero.jpg"
          alt="Professional Workforce"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-125 grayscale brightness-90"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full md:w-1/2 ml-auto px-6 md:px-12 text-white">

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
            }}
          >

            {/* 🔥 TRUST BADGE */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="
                inline-flex items-center gap-2
                px-4 py-2 mb-6
                rounded-full
                bg-white/10 backdrop-blur
                text-xs text-white/80
                border border-white/20
              "
            >
              ⭐ Trusted by 150+ Global Companies
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Hire Skilled Workforce <br />
              <span className="text-[var(--primary)]">
                Fast & Reliable
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-6 text-white/80 max-w-lg"
            >
              Get pre-screened, job-ready workers within days.
              Trusted manpower solutions for global industries.
            </motion.p>

            {/* 💣 STATS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-6 flex gap-6 text-sm"
            >
              <span>✔ 2000+ Workers</span>
              <span>✔ 150+ Clients</span>
              <span>✔ 25+ Years Experience</span>
            </motion.div>

            {/* 🔥 CTA */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                variant="gradient"
                leftIcon="💬"
                onClick={() =>
                  window.open(
                    "https://wa.me/6282260252836?text=Hello, I want to hire workers",
                    "_blank"
                  )
                }
              >
                Hire Workers Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                rightIcon="→"
                onClick={() => router.push("/services")}
                className="border-white/30 text-white hover:bg-white/10"
              >
                View Services
              </Button>
            </motion.div>

            {/* ⚠️ URGENCY */}
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              className="mt-4 text-xs text-yellow-300"
            >
              ⚡ Limited slots available this month
            </motion.p>

          </motion.div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}