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
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="
        relative h-60 rounded-2xl overflow-hidden
        group cursor-pointer
      "
    >
      {/* 🖼 IMAGE */}
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.12 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* 🌑 DARK BASE */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 🔵 BRAND GRADIENT */}
      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-[var(--primary)]/80
        via-transparent
        to-transparent
      " />

      {/* ✨ CINEMATIC LIGHT (TOP) */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500
        bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_60%)]
      " />

      {/* ✨ SIDE LIGHT */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-700
        bg-[radial-gradient(circle_at_80%_50%,rgba(14,165,233,0.3),transparent_60%)]
      " />

      {/* 📦 CONTENT */}
      <div className="absolute bottom-6 left-6 right-6 text-white">

        {/* TITLE */}
        <motion.h3
          variants={{
            rest: { y: 0 },
            hover: { y: -8 },
          }}
          transition={{ duration: 0.4 }}
          className="text-lg font-semibold"
        >
          {title}
        </motion.h3>

        {/* SUB TEXT (REVEAL) */}
        <motion.p
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="text-sm text-white/80 mt-2"
        >
          Professional workforce solutions
        </motion.p>

      </div>

      {/* 🔥 BORDER GLOW */}
      <div className="
        absolute inset-0 rounded-2xl
        border border-white/10
        group-hover:border-[var(--primary)]/40
        transition
      " />

    </motion.div>
  );
}