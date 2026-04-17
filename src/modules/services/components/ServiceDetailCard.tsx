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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="
        relative group rounded-2xl p-7
        bg-white/70 backdrop-blur-md
        border border-white/20
        overflow-hidden
        transition-all duration-300
      "
    >
      {/* 🔥 TOP ACCENT LINE */}
      <div className="
        absolute top-0 left-0 h-[3px] w-0
        bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]
        group-hover:w-full
        transition-all duration-500
      " />

      {/* ✨ SOFT GRADIENT GLOW */}
      <div className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]
        transition duration-500
      " />

      {/* 💎 ICON BADGE */}
      <div className="
        w-12 h-12 flex items-center justify-center
        rounded-xl
        bg-[var(--primary)]/10
        text-[var(--primary)]
        text-xl
        mb-5
        group-hover:scale-110
        transition
      ">
        {getIcon(title)}
      </div>

      {/* 🏷️ TITLE */}
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      {/* 📝 DESCRIPTION */}
      <p className="text-muted leading-relaxed text-sm">
        {description}
      </p>

      {/* 🔘 CTA */}
      <div className="
        mt-6 flex items-center gap-2
        text-sm font-medium
        text-[var(--primary)]
        opacity-0 translate-y-2
        group-hover:opacity-100 group-hover:translate-y-0
        transition
      ">
        <span>Learn more</span>
        <span className="group-hover:translate-x-1 transition">→</span>
      </div>

      {/* 🔥 DEPTH SHADOW */}
      <div className="
        absolute inset-0 rounded-2xl
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        opacity-0 group-hover:opacity-100
        transition duration-500
      " />
    </motion.div>
  );
}

/* 🎯 ICON MAPPING (UPGRADE) */
function getIcon(title: string) {
  const map: Record<string, string> = {
    "Construction": "🏗",
    "Oil & Gas": "⚙️",
    "Hospitality": "🏨",
    "Cruise Crew": "🚢",
    "Medical": "🏥",
    "General Recruitment": "👷",
  };

  return map[title] || "⚡";
}