"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-telkom-red text-white hover:bg-telkom-red-dark active:scale-[0.98]",
  secondary:
    "bg-gray-900 text-white hover:bg-black active:scale-[0.98]",
  outline:
    "bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  ghost:
    "bg-transparent text-gray-900 hover:text-telkom-red",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  icon = false,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = `
    group inline-flex items-center gap-2 font-semibold rounded-none
    transition-all duration-300 ease-out
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-telkom-red
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}
