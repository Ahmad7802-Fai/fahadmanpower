"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // optional helper (kalau ada)

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg" | "icon";
  full?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: Props) {
  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-md",

    outline:
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",

    ghost:
      "text-[var(--primary)] hover:bg-[var(--primary)]/10",

    gradient:
      "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white shadow-lg hover:opacity-90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm md:text-base",
    lg: "px-6 py-3 text-base md:text-lg",
    icon: "w-10 h-10 flex items-center justify-center",
  };

  return (
    <button
      type="button"
      disabled={disabled || loading}
      {...props}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl font-medium
        transition-all duration-300
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed

        ${variants[variant]}
        ${sizes[size]}
        ${full ? "w-full" : ""}
        ${className}
      `}
    >
      {/* 🔄 LOADING */}
      {loading && (
        <span className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
      )}

      {/* 👈 LEFT ICON */}
      {!loading && leftIcon && (
        <span className="flex items-center">{leftIcon}</span>
      )}

      {/* TEXT */}
      <span>{children}</span>

      {/* 👉 RIGHT ICON */}
      {!loading && rightIcon && (
        <span className="flex items-center">{rightIcon}</span>
      )}
    </button>
  );
}