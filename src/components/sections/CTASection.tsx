"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useAnimations";
import Button from "@/components/ui/Button";
import { schoolInfo } from "@/lib/data/school";
import { siteImages } from "@/lib/data/images";

export default function CTASection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Large Photographic Background (Rule 51: Section 11 PPDB CTA) */}
      <div className="absolute inset-0">
        <Image
          src={siteImages.backgrounds.cta.src}
          alt={siteImages.backgrounds.cta.alt}
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Telkom Red brand overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-telkom-red-dark/95 via-telkom-red/90 to-telkom-red-dark/95" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="container-main relative z-10 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-white/80 mb-6 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
          Penerimaan Peserta Didik Baru (PPDB)
        </span>
        <h2 className="font-display font-extrabold text-white text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] mb-6 max-w-3xl mx-auto drop-shadow-sm">
          Siap Membangun Masa Depan Digital?
        </h2>
        <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Bergabunglah dengan SMK Telkom Lampung dan jadilah bagian dari generasi ahli teknologi informasi dengan kompetensi berstandar industri nasional.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href={schoolInfo.spmbUrl}
            external
            variant="secondary"
            size="lg"
            icon
            className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl"
          >
            Daftar SPMB Online
          </Button>
          <Button
            href="/ppdb"
            variant="outline"
            size="lg"
            icon
            className="border-white/60 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
          >
            Alur & Informasi PPDB
          </Button>
        </div>
      </div>
    </section>
  );
}
