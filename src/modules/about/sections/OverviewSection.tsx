"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function OverviewSection() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* 🖼️ IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/asset/about/company.jpg"
            alt="Company"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* ✨ TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading mb-4">
            Who We Are
          </h2>

          <p className="text-muted leading-relaxed">
            Fahad Manpower is a professional recruitment and manpower
            supply company dedicated to providing high-quality workforce
            solutions for global industries.
          </p>

          <p className="text-muted mt-4 leading-relaxed">
            With years of experience, we connect businesses with skilled
            and reliable workers, ensuring efficiency, productivity,
            and long-term success.
          </p>
        </motion.div>

      </div>
    </Section>
  );
}