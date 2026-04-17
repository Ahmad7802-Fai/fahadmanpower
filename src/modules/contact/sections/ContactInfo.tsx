"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Address",
    value:
      "Komando Building, Street Cipinang Indah Raya No. 1, East Jakarta 13420",
    icon: "📍",
    link: "https://maps.google.com",
  },
  {
    title: "Email",
    value: "info@fahadmanpower.com",
    icon: "✉️",
    link: "mailto:info@fahadmanpower.com",
  },
  {
    title: "Phone",
    value: "+62 21 29361198",
    icon: "📞",
    link: "tel:+622129361198",
  },
];

export default function ContactInfo() {
  return (
    <div className="relative -mt-20 z-20 container">

      <div className="grid md:grid-cols-3 gap-6">

        {items.map((item, i) => (
          <motion.a
            href={item.link}
            target="_blank"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              bg-white rounded-2xl p-6 text-center
              shadow-md border border-gray-100
              group transition
              hover:shadow-xl
            "
          >
            {/* ICON */}
            <div className="
              text-2xl mb-3
              transition group-hover:scale-110
            ">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            {/* VALUE */}
            <p className="text-sm text-muted mt-1 leading-relaxed">
              {item.value}
            </p>

            {/* MINI CTA */}
            <p className="
              text-xs text-[var(--primary)] mt-3
              opacity-0 group-hover:opacity-100 transition
            ">
              Click to open →
            </p>
          </motion.a>
        ))}

      </div>

    </div>
  );
}