"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { processSteps } from "../data/process";

export default function ProcessSection() {
  return (
    <Section
      title={
        <>
          Our <span className="text-[var(--primary)]">Process</span>
        </>
      }
      subtitle="A structured approach to deliver the best workforce solutions"
      center
    >
      <div className="relative mt-16">

        {/* 🔵 LINE */}
        <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-[var(--border)]" />

        <div className="grid md:grid-cols-4 gap-10">

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center md:text-left"
            >

              {/* 🔢 NUMBER */}
              <div className="
                relative z-10 w-12 h-12 mx-auto md:mx-0
                rounded-full
                bg-[var(--primary)]
                text-white
                flex items-center justify-center
                font-semibold
                shadow-md
              ">
                {i + 1}
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-lg font-semibold">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </Section>
  );
}