"use client";

import { motion } from "framer-motion";
import { processSteps } from "../data/process";

export default function ProcessSection() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-white" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.08),transparent_50%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4"
          >
            OUR PROCESS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Our Proven Recruitment{" "}
            <span className="text-[var(--primary)]">Workflow</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-muted"
          >
            We follow a structured and efficient process to ensure you get
            the right workforce — fast, reliable, and qualified.
          </motion.p>

        </div>

        {/* 🔥 TIMELINE */}
        <div className="relative mt-20">

          {/* 🔵 LINE */}
          <div className="
            hidden md:block
            absolute top-8 left-0 w-full h-[2px]
            bg-gradient-to-r from-transparent via-[var(--border)] to-transparent
          " />

          <div className="grid md:grid-cols-4 gap-10">

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative group text-center md:text-left"
              >

                {/* 🔢 NUMBER + GLOW */}
                <div className="relative z-10 flex justify-center md:justify-start">
                  <div className="
                    w-14 h-14 rounded-full
                    bg-[var(--primary)]
                    text-white
                    flex items-center justify-center
                    font-bold
                    shadow-lg
                    group-hover:scale-110
                    transition
                  ">
                    {i + 1}
                  </div>

                  {/* GLOW */}
                  <div className="
                    absolute w-14 h-14 rounded-full
                    bg-[var(--primary)]
                    opacity-20 blur-xl
                  " />
                </div>

                {/* 📦 CARD */}
                <div className="
                  mt-6 p-6 rounded-2xl
                  bg-white
                  border border-[var(--border)]
                  shadow-sm
                  group-hover:shadow-xl
                  transition
                ">

                  <h3 className="text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* 🔻 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <p className="text-muted mb-4">
            Need a fast and reliable hiring process?
          </p>

          <a
            href="https://wa.me/6282260252836"
            target="_blank"
            className="
              inline-block
              px-6 py-3 rounded-xl
              bg-[var(--primary)]
              text-white
              font-medium
              hover:bg-[var(--primary-dark)]
              transition
            "
          >
            Start Hiring Now →
          </a>
        </motion.div>

      </div>
    </section>
  );
}