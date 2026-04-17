"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">

        {/* 💎 LOGO */}
        <Link href="/" className="flex items-center gap-3">

            {/* LOGO */}
            <div className="relative w-9 h-9">
                <Image
                src="/favicon.svg"
                alt="Fahad Manpower"
                fill
                className="object-contain"
                priority
                />
            </div>

            {/* TEXT */}
            <div className="leading-tight">
                <p className={`font-bold text-sm ${scrolled ? "text-black" : "text-white"}`}>
                Fahad Fajar Mustika
                </p>
                <p className="text-[var(--primary)] font-bold text-sm">
                Manpower
                </p>
            </div>

            </Link>

        {/* 💎 DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-medium items-center">
          {menu.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative transition-all
                  ${scrolled ? "text-gray-700" : "text-white/80"}
                  ${active ? "text-[var(--primary)]" : ""}
                `}
              >
                {item.name}

                {/* 🔥 ACTIVE UNDERLINE */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-[2px]
                    bg-[var(--primary)]
                    transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* 💎 CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6282260252836"
            target="_blank"
            className="
              relative px-5 py-2 rounded-xl text-sm font-semibold
              text-white
              bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]
              shadow-md
              hover:shadow-lg
              hover:scale-[1.03]
              transition
            "
          >
            💬 Get Consultation
          </a>
        </div>

        {/* 💎 MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            md:hidden text-xl transition
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 💎 MOBILE MENU */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${open ? "max-h-[300px]" : "max-h-0"}
        `}
      >
        <div className="
          bg-white/95 backdrop-blur-xl
          border-t border-gray-100
          px-6 py-6 space-y-5
        ">
          {menu.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  block text-lg font-medium
                  ${active ? "text-[var(--primary)]" : "text-gray-700"}
                `}
              >
                {item.name}
              </Link>
            );
          })}

          {/* 🔥 MOBILE CTA */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="
              block text-center mt-4
              py-3 rounded-xl
              bg-[var(--primary)]
              text-white font-semibold
            "
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}