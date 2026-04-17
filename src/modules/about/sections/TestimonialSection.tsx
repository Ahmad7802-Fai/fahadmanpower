"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "HR Manager, Oil Company",
    text: "Fahad Manpower provided highly skilled workers with fast and professional service.",
  },
  {
    name: "Michael Tan",
    role: "Project Manager, Construction",
    text: "Reliable recruitment partner with excellent candidate quality and quick response.",
  },
  {
    name: "Sarah Lee",
    role: "Hotel Director",
    text: "Professional and efficient manpower solutions that exceeded our expectations.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]" />

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="heading">
            What Our <span className="text-[var(--primary)]">Clients Say</span>
          </h2>
          <p className="subheading mt-3">
            Trusted by companies across industries
          </p>
        </div>

        {/* SLIDER */}
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              card relative p-10
              text-center
              overflow-hidden
            "
          >

            {/* QUOTE ICON */}
            <div className="text-5xl text-[var(--primary)] mb-4">“</div>

            {/* TEXT */}
            <p className="text-lg text-muted italic leading-relaxed">
              {current.text}
            </p>

            {/* USER */}
            <div className="mt-6">
              <p className="font-semibold">{current.name}</p>
              <p className="text-sm text-muted">{current.role}</p>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-[var(--primary)]/5 opacity-0 hover:opacity-100 transition" />

          </motion.div>

          {/* DOT NAVIGATION */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  w-3 h-3 rounded-full cursor-pointer transition
                  ${i === index
                    ? "bg-[var(--primary)]"
                    : "bg-gray-300"}
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}