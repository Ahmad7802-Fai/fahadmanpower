"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
}

export default function IndustryCard({ title, image }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        group relative overflow-hidden rounded-2xl
        h-[260px]
        cursor-pointer
      "
    >
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
          transition duration-500
          group-hover:scale-110
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* TITLE */}
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-lg font-semibold">
          {title}
        </h3>
      </div>

      {/* HOVER EFFECT */}
      <div className="
        absolute inset-0
        bg-[var(--primary)]/20
        opacity-0 group-hover:opacity-100
        transition
      " />
    </motion.div>
  );
}