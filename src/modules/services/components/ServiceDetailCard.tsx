"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  index: number;
}

export default function ServiceDetailCard({
  title,
  description,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="
        relative group rounded-2xl p-6
        bg-[var(--card)]
        border border-[var(--border)]
        overflow-hidden
        transition-all duration-300
      "
    >
      {/* 🔥 TOP GRADIENT LINE */}
      <div className="
        absolute top-0 left-0 h-[3px] w-0
        bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]
        group-hover:w-full
        transition-all duration-500
      " />

      {/* ✨ BACKGROUND GLOW */}
      <div className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]
        transition
      " />

      {/* 🧩 ICON (AUTO BASED ON TITLE) */}
      <div className="text-3xl mb-4">
        {getIcon(title)}
      </div>

      {/* 🏷️ TITLE */}
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      {/* 📝 DESCRIPTION */}
      <p className="text-muted leading-relaxed">
        {description}
      </p>

      {/* 🔘 MINI CTA */}
      <div className="mt-4 text-sm text-[var(--primary)] font-medium opacity-0 group-hover:opacity-100 transition">
        Learn more →
      </div>

      {/* 🔥 SHADOW HOVER */}
      <div className="
        absolute inset-0 rounded-2xl
        shadow-[0_20px_40px_rgba(0,0,0,0.05)]
        opacity-0 group-hover:opacity-100
        transition
      " />
    </motion.div>
  );
}

/* 🎯 ICON MAPPING (AUTO) */
function getIcon(title: string) {
  const map: Record<string, string> = {
    "Construction": "🏗️",
    "Oil & Gas": "🛢️",
    "Hospitality": "🏨",
    "Cruise Crew": "🚢",
    "Medical": "🏥",
    "General Recruitment": "👷",
  };

  return map[title] || "⚙️";
}