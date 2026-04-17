"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 text-white overflow-hidden">

      {/* 🔥 DIVIDER TOP (BIAR GA NYATU) */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-gray-950" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_60%)]" />

      <div className="container relative z-10 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* 🔥 BRAND */}
          <div>
            <h2 className="font-bold text-xl">
              Fahad<span className="text-[var(--primary)]">Manpower</span>
            </h2>

            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Professional manpower solutions to support business growth
              with reliable and skilled workforce.
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="
                inline-block mt-4 text-sm
                text-[var(--primary)]
                hover:underline
              "
            >
              Contact via WhatsApp →
            </a>
          </div>

          {/* 🔗 MENU */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* 🧩 SERVICES */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>Construction</li>
              <li>Oil & Gas</li>
              <li>Hospitality</li>
              <li>Medical</li>
              <li>Recruitment</li>
            </ul>
          </div>

          {/* 📞 CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <p className="text-sm text-gray-400">
              📍 Jakarta, Indonesia
            </p>

            <p className="text-sm text-gray-400 mt-2">
              ✉️ info@fahadmanpower.com
            </p>

            <p className="text-sm text-gray-400 mt-2">
              📞 +62 812 3456 7890
            </p>
          </div>

        </div>
      </div>

    {/* 🔻 BOTTOM */}
    <div className="border-t border-white/10 bg-gray-950 relative z-10">
    <div className="
        container py-8
        flex flex-col md:flex-row
        justify-between items-center
        gap-4
    ">

        {/* COPYRIGHT */}
        <p className="
        text-base md:text-sm
        text-white/70
        font-medium
        tracking-wide
        ">
        © {new Date().getFullYear()} Fahad Manpower. All rights reserved.
        </p>

        {/* LINKS */}
        <div className="flex gap-6 text-sm text-white/60">
        <Link href="#" className="hover:text-white transition">
            Privacy Policy
        </Link>
        <Link href="#" className="hover:text-white transition">
            Terms
        </Link>
        </div>

    </div>
    </div>

    </footer>
  );
}