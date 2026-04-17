"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const items = [
  {
    title: "Professional Process",
    desc: "Structured recruitment system ensuring efficiency and accuracy.",
    icon: "⚙️",
  },
  {
    title: "Global Network",
    desc: "Access to a wide international pool of skilled manpower.",
    icon: "🌍",
  },
  {
    title: "Verified Candidates",
    desc: "All candidates are screened, tested, and fully verified.",
    icon: "✅",
  },
  {
    title: "Fast Placement",
    desc: "Quick turnaround time to meet urgent workforce needs.",
    icon: "⚡",
  },
];

export default function WhyChooseUs() {
  return (
    <Section
      title={
        <>
          Why Choose <span className="text-[var(--primary)]">Us</span>
        </>
      }
      subtitle="We deliver value through professionalism, speed, and trust"
      center
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              card group relative text-center
              overflow-hidden
            "
          >

            {/* ICON */}
            <div className="text-4xl mb-4">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-muted leading-relaxed">
              {item.desc}
            </p>

            {/* HOVER LINE */}
            <div className="
              absolute bottom-0 left-0 w-0 h-[3px]
              bg-[var(--primary)]
              group-hover:w-full
              transition-all duration-300
            " />

            {/* HOVER GLOW */}
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
  );
}