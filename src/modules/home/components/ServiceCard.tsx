"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  icon: string;
  index?: number; // ✅ tambahin ini
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="card group relative"
    >
      {/* ICON */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-muted leading-relaxed">
        {description}
      </p>

      {/* ACCENT LINE */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full rounded-b-xl" />
    </motion.div>
  );
}