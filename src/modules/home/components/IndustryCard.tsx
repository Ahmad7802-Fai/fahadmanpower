"use client";

import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function IndustryCard({ title, image }: Props) {
  return (
    <div
      className="
        relative h-56 rounded-2xl overflow-hidden
        group cursor-pointer
      "
    >
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        className="
          object-cover
          group-hover:scale-110
          transition duration-500
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* BLUE GRADIENT */}
      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-[var(--primary)]/70
        via-transparent
        to-transparent
        opacity-80
      " />

      {/* CONTENT */}
      <div className="
        absolute bottom-4 left-4 right-4
        text-white
      ">
        <h3 className="font-semibold text-lg">
          {title}
        </h3>
      </div>

      {/* HOVER EFFECT */}
      <div className="
        absolute inset-0
        opacity-0 group-hover:opacity-100
        transition
        bg-white/10
      " />
    </div>
  );
}