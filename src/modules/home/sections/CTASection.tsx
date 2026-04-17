"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="section relative overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="
        absolute inset-0
        bg-gradient-to-r
        from-[var(--primary)]
        to-[var(--primary-dark)]
      " />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="container relative z-10 text-center">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let’s Build Your Workforce Today
          </h2>

          {/* SUBTITLE */}
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Partner with us to find the right talent for your business.
            Fast, reliable, and professional recruitment solutions.
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/628XXXXXXXXXX"
              target="_blank"
              className="
                btn
                bg-white text-[var(--primary)]
                hover:bg-gray-100
                font-semibold
              "
            >
              💬 Contact via WhatsApp
            </a>

            {/* SECONDARY */}
            <a
              href="#services"
              className="
                btn
                border border-white/30
                text-white
                hover:bg-white/10
              "
            >
              View Services
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}