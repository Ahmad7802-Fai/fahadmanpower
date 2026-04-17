"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const text = `Hello, my name is ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    const url = `https://wa.me/6282260252836?text=${text}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 500);
  };

  return (
    <section className="relative py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(14,165,233,0.06),transparent_60%)]" />

      <div className="container relative z-10">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading">
              Let’s Talk About Your Project
            </h2>

            <p className="subheading mt-4">
              Tell us your manpower needs and we will provide the best solution tailored for your business.
            </p>

            {/* TRUST POINT */}
            <div className="mt-6 space-y-2 text-sm text-muted">
              <p>✔ Fast response within 24 hours</p>
              <p>✔ Experienced recruitment team</p>
              <p>✔ Trusted by global companies</p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl p-8
              bg-white
              border border-[var(--border)]
              shadow-xl
              space-y-5
            "
          >
            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full border border-gray-200 p-3 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
                transition
              "
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full border border-gray-200 p-3 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
                transition
              "
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Tell us your needs..."
              rows={4}
              className="
                w-full border border-gray-200 p-3 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
                transition
              "
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-3 rounded-xl
                bg-[var(--primary)]
                text-white font-semibold
                shadow-md
                hover:shadow-lg hover:scale-[1.02]
                transition
                disabled:opacity-70
              "
            >
              {loading ? "Sending..." : "💬 Send via WhatsApp"}
            </button>

            {/* MICRO COPY */}
            <p className="text-xs text-center text-muted">
              Free consultation • No obligation • Fast response
            </p>
          </motion.form>

        </div>

      </div>
    </section>
  );
}