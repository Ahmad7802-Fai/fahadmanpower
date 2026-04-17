"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const industries = [
  { name: "Construction", icon: "🏗️" },
  { name: "Oil & Gas", icon: "🛢️" },
  { name: "Hospitality", icon: "🏨" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Marine & Cruise", icon: "🚢" },
  { name: "General Workforce", icon: "👷" },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]" />

      <div className="container relative z-10">

        {/* HEADER */}
        <Section
          title={
            <>
              Industries We <span className="text-[var(--primary)]">Serve</span>
            </>
          }
          subtitle="Delivering workforce solutions across diverse industries worldwide"
          center
        >
          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {industries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  card relative group
                  overflow-hidden
                "
              >
                {/* TOP LINE */}
                <div className="
                  absolute top-0 left-0 h-[3px] w-0
                  bg-[var(--primary)]
                  group-hover:w-full
                  transition-all duration-300
                " />

                {/* ICON */}
                <div className="text-3xl mb-4">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

                {/* GLOW */}
                <div className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  bg-[var(--primary)]/5
                  transition
                " />
              </motion.div>
            ))}

          </div>
        </Section>

      </div>
    </section>
  );
}