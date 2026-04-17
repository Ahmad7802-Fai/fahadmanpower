"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const text = `Hello, my name is ${form.name}. ${form.message}`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="section">
      <div className="container">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="heading">
              Let’s Talk About Your Project
            </h2>
            <p className="subheading mt-4">
              Tell us your manpower needs and we will provide the best solution tailored for your business.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-2xl p-6
              bg-white
              border border-[var(--border)]
              shadow-lg
              space-y-4
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button className="btn btn-primary w-full">
              Send via WhatsApp
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}