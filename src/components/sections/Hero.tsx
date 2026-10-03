"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import { schoolInfo } from "@/lib/data/school";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-desc",
          { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-scroll-indicator",
          { opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Real Photography Background with subtle zoom and atmospheric layers */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero/hero-campus.webp"
          alt="Siswa SMK Telkom Lampung berkolaborasi dalam suasana pembelajaran teknologi modern"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center hero-bg-image scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic dark overlay for text contrast (Rule 49: dark overlay + subtle gradient) */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/75 to-gray-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Red accent atmospheric glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-telkom-red/10 blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container-main relative z-10 pb-16 lg:pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-telkom-red" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-telkom-red-light">
              {schoolInfo.tagline}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6">
            <span className="hero-title-line block font-display font-extrabold text-white text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em]">
              SMK Telkom
            </span>
            <span className="hero-title-line block font-display font-extrabold text-white text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em]">
              Lampung
            </span>
          </h1>

          {/* Description */}
          <p className="hero-desc text-white/70 text-lg lg:text-xl max-w-xl leading-relaxed mb-10">
            Membangun talenta digital yang siap menghadapi dunia nyata melalui
            pendidikan informatika yang relevan dengan industri.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <div className="hero-cta">
              <Button
                href="#about"
                variant="primary"
                size="lg"
                icon
              >
                Jelajahi SMK Telkom
              </Button>
            </div>
            <div className="hero-cta">
              <Button
                href="/ppdb"
                variant="outline"
                size="lg"
                icon
                className="border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                Penerimaan Peserta Didik Baru
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() =>
            document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Scroll ke bawah"
        >
          <span className="text-[0.65rem] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
