"use client";

import { useReveal } from "@/hooks/useAnimations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        ${align === "center" ? "text-center mx-auto" : ""}
        ${align === "center" ? "max-w-3xl" : "max-w-2xl"}
        ${className}
      `}
    >
      {eyebrow && (
        <span
          className={`eyebrow block mb-4 ${
            dark ? "text-telkom-red-light" : "text-telkom-red"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`heading-section ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-body-lg mt-5 ${
            dark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
