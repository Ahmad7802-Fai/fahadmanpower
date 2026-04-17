type Props = {
  children: React.ReactNode;
  variant?: "primary" | "soft" | "outline";
  size?: "sm" | "md";
};

export default function Badge({
  children,
  variant = "soft",
  size = "sm",
}: Props) {
  const variants = {
    primary: "bg-[var(--primary)] text-white",
    soft: "bg-[rgba(14,165,233,0.1)] text-[var(--primary)]",
    outline: "border border-[var(--primary)] text-[var(--primary)]",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3 py-1.5",
  };

  return (
    <span
      className={`
        inline-block rounded-full font-medium
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
}