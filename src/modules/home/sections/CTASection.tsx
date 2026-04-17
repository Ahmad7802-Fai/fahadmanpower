"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-32">

      <div className="container">

        <div className="
          relative overflow-hidden rounded-3xl
          px-6 py-16 md:py-20 text-center
        ">

          {/* 🔵 BACKGROUND */}
          <div className="
            absolute inset-0
            bg-gradient-to-r
            from-[var(--primary)]
            to-[var(--primary-dark)]
          " />

          {/* ✨ GLOW */}
          <div className="
            absolute inset-0
            bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_60%)]
          " />

          {/* ✨ EXTRA LIGHT */}
          <div className="
            absolute inset-0 opacity-20 blur-3xl
            bg-white
          " />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-white"
          >

            {/* 🔥 LABEL */}
            <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4">
              START NOW
            </p>

            {/* 💣 HEADLINE (JUALAN) */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Start Hiring Skilled Workers <br />
              For Your Business Today
            </h2>

            {/* 🔥 URGENCY */}
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Get qualified candidates in just a few days. 
              Fast process, reliable workforce, and guaranteed quality.
            </p>

            {/* 💣 TRUST MINI */}
            <div className="mt-6 flex justify-center flex-wrap gap-4 text-sm text-white/80">
              <span>✔ 500+ Workers</span>
              <span>✔ 50+ Clients</span>
              <span>✔ Fast Deployment</span>
            </div>

            {/* 🔘 BUTTON */}
            <div className="mt-10 flex justify-center gap-4 flex-wrap">

              {/* 🔥 PRIMARY (WAJIB MENONJOL) */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                className="
                  px-7 py-3 rounded-xl
                  bg-white text-[var(--primary)]
                  font-semibold
                  shadow-xl
                  hover:scale-105 hover:bg-gray-100
                  transition
                "
              >
                💬 Hire Workers Now
              </a>

              {/* SECONDARY */}
              <a
                href="/services"
                className="
                  px-7 py-3 rounded-xl
                  border border-white/40
                  text-white
                  hover:bg-white/10
                  transition
                "
              >
                Explore Services
              </a>

            </div>

            {/* 🔻 MICRO COPY (PSYCHOLOGICAL) */}
            <p className="mt-4 text-xs text-white/70">
              Free consultation • No obligation • Fast response
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}