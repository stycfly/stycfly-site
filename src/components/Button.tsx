import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-6 py-3.5 font-semibold text-[0.98rem] transition-transform duration-150 whitespace-nowrap";

  const styles =
    variant === "primary"
      ? "bg-coral text-white shadow-[0_1px_0_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(255,107,74,0.55)]"
      : "border border-line text-ink hover:border-sky hover:text-sky";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
