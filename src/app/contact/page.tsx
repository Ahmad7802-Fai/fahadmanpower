import type { Metadata } from "next";

import {
  ContactHero,
  ContactInfo,
  ContactForm,
  MapSection,
} from "@/modules/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Fahad Manpower for reliable and professional workforce solutions. Contact us via WhatsApp, email, or office visit.",
  keywords: [
    "contact manpower agency",
    "hire workers contact",
    "recruitment agency Indonesia contact",
    "manpower supplier contact",
    "global workforce recruitment contact",
  ],
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* 🔥 QUICK CONTACT CTA (HIGH CONVERSION) */}
      <section className="py-10 text-center">
        <p className="text-sm text-muted mb-4">
          Need workers urgently? Get fast response within 24 hours.
        </p>

        <a
          href="https://wa.me/6282260252836"
          target="_blank"
          className="
            inline-block px-6 py-3 rounded-xl
            bg-green-500 text-white font-semibold
            shadow-md
            hover:bg-green-600 transition
          "
        >
          💬 Chat via WhatsApp Now
        </a>
      </section>

      <ContactInfo />
      <ContactForm />

      {/* 🔥 TRUST LINE */}
      <div className="text-center mt-6 text-sm text-muted">
        Trusted by 150+ global clients • Fast response • Professional team
      </div>

      <MapSection />

      {/* 🔥 FINAL CTA */}
      <section className="py-16 text-center">
        <h3 className="text-xl font-semibold mb-3">
          Let’s Start Your Workforce Solution Today
        </h3>

        <p className="text-muted mb-6">
          Our team is ready to help you find the right talent quickly and efficiently.
        </p>

        <a
          href="https://wa.me/6282260252836"
          target="_blank"
          className="
            inline-block px-7 py-3 rounded-xl
            bg-[var(--primary)]
            text-white font-semibold
            hover:opacity-90 transition
          "
        >
          Start Consultation
        </a>
      </section>
    </>
  );
}