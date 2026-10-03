"use client";

import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import { bmwPathways } from "@/lib/data/school";
import { siteImages } from "@/lib/data/images";

export default function BMWPathway() {
  const headerRef = useReveal<HTMLDivElement>();
  const cardsRef = useStaggerReveal<HTMLDivElement>(0.15, ".bmw-card");

  return (
    <section className="section-padding relative bg-gray-950 text-white overflow-hidden">
      {/* Photographic background with overlay (Rule 51: Section 05 BMW) */}
      <div className="absolute inset-0">
        <Image
          src={siteImages.backgrounds.bmw.src}
          alt={siteImages.backgrounds.bmw.alt}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        {/* Dark cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-gray-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-transparent to-gray-950/95" />
      </div>

      <div className="container-main relative z-10">
        <div ref={headerRef}>
          <SectionHeading
            eyebrow="Jalur Masa Depan"
            title="BMW Career Pathway"
            description="SMK Telkom Lampung menyiapkan tiga jalur masa depan bagi setiap siswa: Bekerja, Melanjutkan, atau Wirausaha."
            dark
            className="mb-16"
          />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bmwPathways.map((pathway) => (
            <div
              key={pathway.letter}
              className="bmw-card group relative bg-gray-900/80 backdrop-blur-md p-8 lg:p-10 border border-white/10 hover:border-telkom-red/50 hover:bg-gray-900/95 transition-all duration-500 shadow-xl"
            >
              {/* Large letter */}
              <div className="mb-6 flex items-baseline justify-between">
                <span className="font-display font-black text-6xl lg:text-7xl leading-none text-white/15 group-hover:text-telkom-red/40 transition-colors duration-500 select-none">
                  {pathway.letter}
                </span>
                <span className="text-xs font-mono text-telkom-red tracking-wider uppercase border border-telkom-red/30 px-2 py-0.5 rounded">
                  Pathway 0{pathway.letter === "B" ? "1" : pathway.letter === "M" ? "2" : "3"}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-telkom-red transition-colors duration-300">
                {pathway.title}
              </h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                {pathway.description}
              </p>

              {/* Items */}
              <ul className="space-y-3">
                {pathway.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-telkom-red rounded-full shrink-0 group-hover:scale-125 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-telkom-red via-telkom-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
