"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { quickStats } from "@/lib/data/school";

gsap.registerPlugin(ScrollTrigger);

export default function QuickStats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Animate stat items
      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });

      // Counter animation for numeric values
      el.querySelectorAll(".stat-value").forEach((valueEl) => {
        const text = valueEl.textContent || "";
        const numericMatch = text.match(/\d+/);
        if (!numericMatch) return;

        const endVal = parseInt(numericMatch[0], 10);
        const suffix = text.replace(/\d+/, "");
        const counter = { val: 0 };

        gsap.to(counter, {
          val: endVal,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            valueEl.textContent = `${Math.round(counter.val).toString().padStart(text.startsWith("0") ? 2 : 1, "0")}${suffix}`;
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative bg-white border-b border-gray-100"
    >
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat, i) => (
            <div
              key={i}
              className={`stat-item py-10 lg:py-14 flex flex-col items-center text-center
                ${i > 0 ? "border-l border-gray-100" : ""}`}
            >
              <span className="stat-value font-display font-extrabold text-3xl lg:text-4xl tracking-tight text-gray-900">
                {stat.value}
              </span>
              <span className="text-xs font-medium tracking-wide text-gray-500 mt-2 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
