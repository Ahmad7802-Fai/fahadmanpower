"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-10 text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gray-950" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_60%)]" />

      {/* 💎 MAIN CONTENT */}
      <div className="container relative z-10 pt-28 pb-36">

        <div className="grid mt-10 gap-14 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="font-bold text-2xl">
              Fahad<span className="text-[var(--primary)]">Manpower</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Delivering professional manpower solutions to support global
              business growth with reliable, skilled, and trusted workforce.
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/6282260252836"
              target="_blank"
              className="
                inline-block mt-8 px-6 py-3
                rounded-xl
                bg-[var(--primary)]
                text-white text-sm font-semibold
                shadow-lg
                hover:opacity-90 transition
              "
            >
              💬 Start Consultation
            </a>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-6">Company</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-6">Services</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Construction</li>
              <li>Oil & Gas</li>
              <li>Hospitality</li>
              <li>Medical</li>
              <li>Recruitment</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-6">Contact</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 Jakarta, Indonesia</p>
              <p>✉️ info@fahadrecruitmen.com</p>
              <p>📞 +6221-29361198</p>

              <p className="text-xs text-gray-500 pt-4">
                Available for global recruitment partnerships.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* 🔻 BOTTOM BAR */}
      <div className="relative z-10 mt-10 border-t border-white/10 bg-gray-950">

        <div className="
          container py-8 md:py-10
          flex flex-col md:flex-row
          justify-between items-center
          gap-5
        ">

          {/* LEFT */}
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Fahad Fajar Mustika Manpower
          </p>

          {/* CENTER */}
          <div className="text-sm text-white/50 text-center">
            Design by{" "}
            <a
              href="https://ditelaga.digital"
              target="_blank"
              className="text-[var(--primary)] hover:underline"
            >
              Ditelaga Creative Digital
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex gap-6 text-sm pb-10 text-white/50">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
          </div>

        </div>

      </div>

    </footer>
  );
}