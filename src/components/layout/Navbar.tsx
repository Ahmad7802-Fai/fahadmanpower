"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">

        {/* LOGO */}
        <h1
          className={`
            font-bold text-lg transition-colors
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          Fahad<span className="text-[var(--primary)]">Manpower</span>
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 font-medium">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className={`
                transition-colors
                ${scrolled 
                  ? "text-gray-700 hover:text-black" 
                  : "text-white/80 hover:text-white"}
              `}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className={`
              px-5 py-2 rounded-xl text-sm font-medium transition
              ${scrolled
                ? "bg-[var(--primary)] text-white"
                : "bg-white/20 text-white backdrop-blur"}
            `}
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`
            md:hidden text-xl
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-60" : "max-h-0"}
        `}
      >
        <div className="bg-white border-t px-6 py-4 space-y-4">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="block text-gray-700"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}