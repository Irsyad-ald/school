"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useAnimations";
import Button from "@/components/ui/Button";
import type { Program } from "@/lib/data/school";

export default function ProgramDetail({ program }: { program: Program }) {
  const heroRef = useReveal<HTMLDivElement>();
  const contentRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white">
        <div className="container-main" ref={heroRef}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display font-extrabold text-5xl text-telkom-red">
              {program.number}
            </span>
            <span className="eyebrow text-gray-400">{program.shortName}</span>
          </div>
          <h1 className="heading-display text-white max-w-3xl">
            {program.name}
          </h1>
          <p className="text-body-lg text-gray-400 mt-6 max-w-2xl">
            {program.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-main" ref={contentRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image */}
            <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden rounded-sm shadow-xl">
              {program.image ? (
                <Image
                  src={program.image}
                  alt={`Kompetensi Kejuruan ${program.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                Visual Kejuruan: {program.shortName}
              </span>
            </div>

            {/* Details */}
            <div>
              {/* Curriculum */}
              <div className="mb-10">
                <h2 className="heading-sub text-gray-900 mb-6">
                  Fokus Kurikulum
                </h2>
                <ul className="space-y-3">
                  {program.curriculum.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="font-display font-bold text-telkom-red text-sm mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Careers */}
              <div className="mb-10">
                <h2 className="heading-sub text-gray-900 mb-6">
                  Prospek Karier
                </h2>
                <div className="flex flex-wrap gap-3">
                  {program.careers.map((career) => (
                    <span
                      key={career}
                      className="text-sm px-4 py-2 bg-gray-100 text-gray-700 font-medium"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <Button href="/ppdb" variant="primary" icon>
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
