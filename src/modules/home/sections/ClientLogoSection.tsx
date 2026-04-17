"use client";

import Image from "next/image";

const clients = [
  "/asset/clients/1.webp",
  "/asset/clients/2.webp",
  "/asset/clients/3.webp",
  "/asset/clients/4.webp",
  "/asset/clients/5.webp",
  "/asset/clients/6.webp",
  "/asset/clients/7.webp",
  "/asset/clients/8.webp",
  "/asset/clients/9.webp",
  "/asset/clients/10.webp",
  "/asset/clients/11.webp",
];

export default function ClientLogoSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      <div className="container">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
            TRUSTED CLIENTS
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Trusted by Leading Companies Worldwide
          </h2>
        </div>

        {/* 🔥 LOGO AREA */}
        <div className="relative mt-16 space-y-10 overflow-hidden">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* 🔥 ROW 1 */}
          <div className="group overflow-hidden">
            <div className="flex gap-16 animate-marquee group-hover:[animation-play-state:paused] w-max">
              {[...clients, ...clients].map((logo, i) => (
                <LogoItem key={i} logo={logo} />
              ))}
            </div>
          </div>

          {/* 🔥 ROW 2 (reverse arah biar dinamis) */}
          <div className="group overflow-hidden">
            <div className="flex gap-16 animate-marquee-reverse group-hover:[animation-play-state:paused] w-max">
              {[...clients, ...clients].map((logo, i) => (
                <LogoItem key={i} logo={logo} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* 🔥 COMPONENT ITEM */
function LogoItem({ logo }: { logo: string }) {
  return (
    <div
      className="
        flex items-center justify-center
        min-w-[140px]
        opacity-80
        hover:opacity-100
        transition duration-300
      "
    >
      <Image
        src={logo}
        alt="client"
        width={140}
        height={70}
        className="
          object-contain
          hover:scale-110
          transition duration-300
        "
      />
    </div>
  );
}