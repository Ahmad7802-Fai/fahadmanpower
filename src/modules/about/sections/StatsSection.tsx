"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/Section";

const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Workers Deployed", value: 500, suffix: "+" },
  { label: "Global Clients", value: 50, suffix: "+" },
  { label: "Industries Served", value: 6, suffix: "+" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🔵 BACKGROUND LIGHT */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* ✨ RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]" />

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="heading">
            Our <span className="text-[var(--primary)]">Impact</span>
          </h2>
          <p className="subheading mt-3">
            Delivering measurable results across industries
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <StatCard key={i} {...item} index={i} />
          ))}

        </div>
      </div>
    </section>
  );
}

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
    const duration = 1000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="
        card relative text-center
        overflow-hidden group
      "
    >
      {/* 🔥 TOP LINE */}
      <div className="
        absolute top-0 left-0 h-[3px] w-0
        bg-[var(--primary)]
        group-hover:w-full
        transition-all duration-300
      " />

      {/* NUMBER */}
      <h3 className="text-4xl font-bold text-[var(--primary)]">
        {count}{suffix}
      </h3>

      {/* LABEL */}
      <p className="text-muted mt-2">
        {label}
      </p>

      {/* GLOW */}
      <div className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        bg-[var(--primary)]/5
        transition
      " />
    </motion.div>
  );
}