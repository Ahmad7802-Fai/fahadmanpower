"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years Experience", value: 25, suffix: "+" },
  { label: "Workers Deployed", value: 2000, suffix: "+" },
  { label: "Global Clients", value: 150, suffix: "+" },
  { label: "Industries Served", value: 6, suffix: "+" },
];

export default function StatsSection() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4"
          >
            OUR IMPACT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Numbers That Reflect Our{" "}
            <span className="text-[var(--primary)]">Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-muted"
          >
            Delivering measurable workforce solutions with proven results
            across industries worldwide.
          </motion.p>

        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, i) => (
            <StatCard key={i} {...item} index={i} />
          ))}

        </div>

      </div>
    </section>
  );
}

/* 🔥 CARD */
function StatCard({
  value,
  label,
  suffix,
  index,
}: {
  value: number;
  label: string;
  suffix: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="
        relative p-8 rounded-2xl text-center
        bg-white
        border border-[var(--border)]
        shadow-sm
        overflow-hidden group
      "
    >

      {/* 🔥 GLOW BACK */}
      <div className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition duration-500
        bg-[radial-gradient(circle_at_50%_30%,rgba(14,165,233,0.15),transparent_70%)]
      " />

      {/* 🔢 NUMBER */}
      <h3 className="
        text-4xl md:text-5xl font-bold
        bg-gradient-to-r from-[var(--primary)] to-sky-400
        bg-clip-text text-transparent
      ">
        {count}{suffix}
      </h3>

      {/* LABEL */}
      <p className="text-muted mt-3 text-sm">
        {label}
      </p>

      {/* 🔥 TOP LINE */}
      <div className="
        absolute top-0 left-0 h-[3px] w-0
        bg-gradient-to-r from-[var(--primary)] to-sky-400
        group-hover:w-full
        transition-all duration-300
      " />

    </motion.div>
  );
}