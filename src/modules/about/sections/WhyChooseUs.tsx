"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Professional Process",
    desc: "Structured recruitment system ensuring efficiency and accuracy.",
    icon: "⚙️",
  },
  {
    title: "Global Network",
    desc: "Access to a wide international pool of skilled manpower.",
    icon: "🌍",
  },
  {
    title: "Verified Candidates",
    desc: "All candidates are screened, tested, and fully verified.",
    icon: "✅",
  },
  {
    title: "Fast Placement",
    desc: "Quick turnaround time to meet urgent workforce needs.",
    icon: "⚡",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.08),transparent_50%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4"
          >
            WHY CHOOSE US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Why Companies Trust{" "}
            <span className="text-[var(--primary)]">Fahad Manpower</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-muted"
          >
            We combine professionalism, speed, and global reach to deliver
            workforce solutions that drive business success.
          </motion.p>

        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover="hover"
              className="
                relative p-8 rounded-2xl
                bg-white
                border border-[var(--border)]
                shadow-sm
                overflow-hidden
                group
              "
            >

              {/* ✨ ICON WRAPPER */}
              <motion.div
                variants={{
                  hover: { scale: 1.15, rotate: 5 },
                }}
                className="
                  w-14 h-14 flex items-center justify-center
                  rounded-xl
                  bg-[var(--primary)]/10
                  text-2xl mb-6
                "
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-muted leading-relaxed">
                {item.desc}
              </p>

              {/* 🔥 TOP LINE */}
              <div className="
                absolute top-0 left-0 w-0 h-[3px]
                bg-[var(--primary)]
                group-hover:w-full
                transition-all duration-300
              " />

              {/* ✨ GLOW HOVER */}
              <div className="
                absolute inset-0 opacity-0
                group-hover:opacity-100
                bg-[var(--primary)]/5
                transition
              " />

            </motion.div>
          ))}

        </div>

        {/* 🔻 CTA MINI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <p className="text-muted mb-4">
            Ready to build your workforce with us?
          </p>

          <a
            href="https://wa.me/6282260252836"
            target="_blank"
            className="
              inline-block
              px-6 py-3 rounded-xl
              bg-[var(--primary)]
              text-white
              font-medium
              hover:bg-[var(--primary-dark)]
              transition
            "
          >
            Contact Us →
          </a>
        </motion.div>

      </div>
    </section>
  );
}