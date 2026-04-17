"use client";

import { motion } from "framer-motion";

const info = [
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
    value: "+62 812-3456-7890",
    icon: "📞",
  },
];

export default function ContactInfo() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">

          {info.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="
                card text-center
                backdrop-blur-md
                bg-white/70
              "
            >
              <div className="text-2xl mb-3">{item.icon}</div>

              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted mt-1">{item.value}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}