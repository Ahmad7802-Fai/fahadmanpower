"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* 🧠 TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          {/* LABEL */}
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--primary)] mb-4">
            OUR FOUNDATION
          </p>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
            Vision & Mission That Drive <br />
            Our Global Growth
          </h2>

          {/* 🔥 VISION CARD */}
          <div className="
            p-6 rounded-2xl
            bg-white border border-[var(--border)]
            shadow-sm
          ">
            <p className="text-sm text-[var(--primary)] font-semibold mb-2">
              OUR VISION
            </p>

            <p className="text-muted leading-relaxed">
              To become a leading global manpower provider recognized for
              reliability, quality, and excellence in workforce solutions
              across industries worldwide.
            </p>
          </div>

          {/* 🔥 MISSION CARD */}
          <div className="
            p-6 rounded-2xl mt-5
            bg-white border border-[var(--border)]
            shadow-sm
          ">
            <p className="text-sm text-[var(--primary)] font-semibold mb-2">
              OUR MISSION
            </p>

            <ul className="space-y-2 text-muted text-sm">
              <li>✔ Deliver high-quality workforce solutions</li>
              <li>✔ Connect businesses with skilled professionals</li>
              <li>✔ Build long-term partnerships with clients</li>
              <li>✔ Create opportunities for global talent</li>
            </ul>
          </div>

        </motion.div>

        {/* 🖼️ IMAGE (CINEMATIC) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative h-[420px] rounded-3xl overflow-hidden">

            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80"
              alt="Vision and Mission"
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
              bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_60%)]
            " />

          </div>

          {/* FLOAT STAT */}
          <div className="
            absolute -bottom-6 -left-6
            bg-white text-black
            px-6 py-4 rounded-xl shadow-xl
            hidden md:block
          ">
            <p className="text-sm text-gray-500">Global Reach</p>
            <p className="text-lg font-bold text-[var(--primary)]">
              200+ Clients
            </p>
          </div>

        </motion.div>

      </div>
    </Section>
  );
}