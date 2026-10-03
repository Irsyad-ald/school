"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useReveal } from "@/hooks/useAnimations";
import { programs } from "@/lib/data/school";

export default function Programs() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-gray-950 text-white overflow-hidden relative">
      {/* Subtle atmospheric glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-telkom-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-main relative z-10">
        <div ref={headerRef}>
          <SectionHeading
            eyebrow="Konsentrasi Keahlian"
            title="Empat jalur menuju masa depan digital."
            description="Setiap konsentrasi keahlian dirancang untuk membangun kompetensi nyata yang dibutuhkan industri."
            dark
            className="mb-16"
          />
        </div>

        {/* Programs List — dark background + large photography (Rule 51 & 55) */}
        <div className="space-y-0">
          {programs.map((program, index) => (
            <ProgramRow key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramRow({
  program,
  index,
}: {
  program: (typeof programs)[number];
  index: number;
}) {
  const rowRef = useReveal<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={rowRef}
      className="group border-t border-white/10 last:border-b transition-colors duration-300 hover:border-telkom-red/30"
    >
      <Link
        href={`/program/${program.slug}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 lg:py-14 items-center"
      >
        {/* Number */}
        <div className="lg:col-span-1">
          <span className="font-display font-extrabold text-5xl lg:text-6xl text-white/10 group-hover:text-telkom-red transition-colors duration-500">
            {program.number}
          </span>
        </div>

        {/* Large Relevant Photography (Rule 55) */}
        <div
          className={`lg:col-span-4 ${isEven ? "lg:order-2" : "lg:order-3"}`}
        >
          <div className="aspect-[16/10] bg-gray-900 overflow-hidden relative rounded-sm shadow-xl">
            {program.image ? (
              <Image
                src={program.image}
                alt={`Kompetensi Kejuruan ${program.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            ) : null}
            {/* Dark overlay & micro caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white/80">
              <span className="bg-black/60 px-2 py-0.5 backdrop-blur-sm rounded text-[10px] uppercase tracking-wider">
                {program.shortName}
              </span>
              <span className="text-[10px] text-white/60">Visual Kejuruan</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`lg:col-span-5 ${isEven ? "lg:order-3" : "lg:order-2"}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-telkom-red">
              {program.shortName}
            </span>
          </div>
          <h3 className="font-display font-bold text-xl lg:text-2xl text-white mb-3 group-hover:text-telkom-red transition-colors duration-300">
            {program.name}
          </h3>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            {program.description}
          </p>

          {/* Skills preview */}
          <div className="flex flex-wrap gap-2 mb-4">
            {program.curriculum.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 bg-white/5 text-gray-300 border border-white/10 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="lg:col-span-2 lg:order-4 flex lg:justify-end">
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-telkom-red group-hover:bg-telkom-red transition-all duration-300">
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </div>
  );
}
