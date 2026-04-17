"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6282260252836?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-green-500 text-white
        px-4 py-3 rounded-full
        shadow-lg
        hover:scale-105
        transition
      "
    >
      💬 <span className="hidden md:inline">Chat Us</span>
    </a>
  );
}