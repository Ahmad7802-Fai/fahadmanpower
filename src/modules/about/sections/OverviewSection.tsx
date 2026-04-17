"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function OverviewSection() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* 🖼️ IMAGE (CINEMATIC) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative h-[420px] rounded-3xl overflow-hidden">

            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80"
              alt="Company Overview"
              fill
              className="
                object-cover
                scale-105
                group-hover:scale-110
                transition duration-700
              "
            />

            {/* DARK */}
            <div className="absolute inset-0 bg-black/40" />

            {/* GRADIENT */}
            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-[var(--primary)]/60
              via-transparent
              to-transparent
            " />

            {/* LIGHT EFFECT */}
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              transition duration-700
              bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]
            " />

          </div>

          {/* FLOAT CARD (TRUST ELEMENT) */}
          <div className="
            absolute -bottom-6 -right-6
            bg-white text-black
            px-6 py-4 rounded-xl shadow-xl
            hidden md:block
          ">
            <p className="text-sm text-gray-500">Experience</p>
            <p className="text-lg font-bold text-[var(--primary)]">
              25+ Years
            </p>
          </div>
        </motion.div>

        {/* ✨ TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          {/* LABEL */}
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--primary)] mb-4">
            COMPANY OVERVIEW
          </p>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Building Workforce Excellence <br />
            Across Global Industries
          </h2>

          {/* DESC */}
          <p className="text-muted mt-6 leading-relaxed">
            Fahad Fajar Mustika Manpower is a trusted recruitment and manpower
            solutions provider, delivering highly skilled professionals to
            companies across various industries worldwide.
          </p>

          <p className="text-muted mt-4 leading-relaxed">
            With a strong commitment to quality, reliability, and long-term
            partnerships, we help businesses scale efficiently with the right
            workforce at the right time.
          </p>

          {/* ✅ VALUE POINTS */}
          <div className="mt-6 space-y-3">

            {[
              "Experienced & Skilled Workforce",
              "Fast & Reliable Recruitment Process",
              "Trusted by Global Companies",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-[var(--primary)]">✔</span>
                <span>{item}</span>
              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </Section>
  );
}