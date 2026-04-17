"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Address",
    value: "Jakarta, Indonesia",
    icon: "📍",
  },
  {
    title: "Email",
    value: "info@fahadmanpower.com",
    icon: "✉️",
  },
  {
    title: "Phone",
    value: "+62 812 3456 7890",
    icon: "📞",
  },
];

export default function ContactInfo() {
  return (
    <div className="relative -mt-20 z-20 container">

      <div className="grid md:grid-cols-3 gap-6">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              bg-white rounded-2xl p-6 text-center
              shadow-lg border border-gray-100
              group
            "
          >
            <div className="text-2xl mb-3">
              {item.icon}
            </div>

            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-muted mt-1">
              {item.value}
            </p>
          </motion.div>
        ))}

      </div>

    </div>
  );
}