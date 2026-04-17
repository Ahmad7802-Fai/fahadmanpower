"use client";

import Image from "next/image";

const logos = [
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
    <section className="relative py-24 overflow-hidden">

      {/* 🔵 BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg)]" />

      {/* ✨ SOFT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.06),transparent_60%)]" />

      <div className="container relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-3">
            TRUSTED CLIENTS
          </p>

          <h2 className="text-xl md:text-2xl font-semibold">
            Trusted by Leading Companies Worldwide
          </h2>
        </div>

        {/* 🔥 SLIDER */}
        <div className="relative overflow-hidden">

          {/* FADE LEFT */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />

          {/* FADE RIGHT */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

          {/* SLIDE TRACK */}
          <div className="
            flex gap-16 w-max
            animate-marquee
            hover:[animation-play-state:paused]
          ">

            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center
                  min-w-[160px]
                  opacity-80
                  hover:opacity-100
                  transition duration-300
                "
              >
                <Image
                  src={logo}
                  alt="client"
                  width={160}
                  height={80}
                  className="
                    h-12 w-auto
                    object-contain
                    grayscale
                    hover:grayscale-0
                    hover:scale-110
                    transition duration-300
                  "
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}