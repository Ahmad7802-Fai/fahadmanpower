"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Smith",
    role: "HR Manager, Oil Company",
    text: "Fahad Manpower provided highly skilled workers with fast and professional service.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Michael Tan",
    role: "Project Manager, Construction",
    text: "Reliable recruitment partner with excellent candidate quality and quick response.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sarah Lee",
    role: "Hotel Director",
    text: "Professional and efficient manpower solutions that exceeded our expectations.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4"
          >
            TESTIMONIALS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold"
          >
            What Our Clients{" "}
            <span className="text-[var(--primary)]">Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-muted"
          >
            Trusted by companies across industries worldwide
          </motion.p>

        </div>

        {/* 🔥 CARD */}
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              relative p-10 md:p-14 rounded-3xl
              bg-white
              border border-[var(--border)]
              shadow-lg
              overflow-hidden
            "
          >

            {/* ✨ BIG QUOTE */}
            <div className="
              absolute top-6 left-6
              text-[80px] text-[var(--primary)]/10
              font-bold
            ">
              “
            </div>

            {/* ⭐ RATING */}
            <div className="flex justify-center mb-6 text-yellow-400 text-lg">
              ★★★★★
            </div>

            {/* TEXT */}
            <p className="text-lg md:text-xl text-muted italic leading-relaxed relative z-10">
              {current.text}
            </p>

            {/* 👤 USER */}
            <div className="mt-8 flex flex-col items-center">

              <Image
                src={current.avatar}
                alt={current.name}
                width={60}
                height={60}
                className="rounded-full mb-3"
              />

              <p className="font-semibold">{current.name}</p>
              <p className="text-sm text-muted">{current.role}</p>

            </div>

            {/* ✨ GLOW */}
            <div className="
              absolute inset-0 opacity-0 hover:opacity-100
              transition
              bg-[radial-gradient(circle_at_50%_30%,rgba(14,165,233,0.1),transparent_70%)]
            " />

          </motion.div>

          {/* 🔘 DOT */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  w-3 h-3 rounded-full cursor-pointer transition
                  ${i === index
                    ? "bg-[var(--primary)] scale-110"
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