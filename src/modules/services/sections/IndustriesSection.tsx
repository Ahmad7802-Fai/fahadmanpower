"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    name: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
  },
  {
    name: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
  },
  {
    name: "Marine & Cruise",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "General Workforce",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* RADIAL LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.06),transparent_60%)]" />

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            INDUSTRIES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We <span className="text-[var(--primary)]">Serve</span>
          </h2>

          <p className="text-muted mt-4">
            Delivering workforce solutions across diverse industries worldwide
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {industries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                relative h-60 rounded-2xl overflow-hidden
                group cursor-pointer
              "
            >

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50" />

              {/* BLUE GRADIENT */}
              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-[var(--primary)]/70
                via-transparent
                to-transparent
              " />

              {/* CONTENT */}
              <div className="
                absolute bottom-6 left-6 right-6
                text-white
              ">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                {/* HOVER TEXT */}
                <p className="
                  text-sm text-white/80 mt-2
                  opacity-0 translate-y-4
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition
                ">
                  Professional workforce solutions tailored for this industry.
                </p>
              </div>

              {/* HOVER GLOW */}
              <div className="
                absolute inset-0 opacity-0
                group-hover:opacity-100
                bg-white/5
                transition
              " />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}