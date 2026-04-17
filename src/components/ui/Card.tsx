type Props = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  hover = true,
}: Props) {
  return (
    <div
      className={`
        bg-white border border-[var(--border)]
        rounded-2xl p-5 md:p-6
        transition-all duration-300
        ${hover ? "hover:-translate-y-1 hover:shadow-xl" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}