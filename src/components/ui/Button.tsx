import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "soft";
  size?: "sm" | "md" | "lg";
  full?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  full = false,
  className = "",
  ...props
}: Props) {
  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
    outline:
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
    soft:
      "bg-[rgba(14,165,233,0.1)] text-[var(--primary)] hover:bg-[rgba(14,165,233,0.2)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm md:text-base",
    lg: "px-6 py-3 text-base md:text-lg",
  };

  return (
    <button
      type="button"
      {...props} // 🔥 INI KUNCI NYA
      className={`
        rounded-xl font-medium transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${full ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}