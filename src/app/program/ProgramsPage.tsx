"use client";

import Link from "next/link";
import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import { programs } from "@/lib/data/school";
import { ArrowRight } from "lucide-react";

export default function ProgramsPage() {
  const heroRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white">
        <div className="container-main" ref={heroRef}>
          <span className="eyebrow text-telkom-red-light block mb-4">
            Konsentrasi Keahlian
          </span>
          <h1 className="heading-display text-white max-w-3xl">
            Empat jalur menuju masa depan digital.
          </h1>
          <p className="text-body-lg text-gray-400 mt-6 max-w-2xl">
            Setiap konsentrasi keahlian dirancang untuk membangun kompetensi nyata
            yang dibutuhkan industri.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[number];
  index: number;
}) {
  const cardRef = useReveal<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image */}
      <div className={`${!isEven ? "lg:order-2" : ""}`}>
        <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden rounded-sm shadow-xl group">
          {program.image ? (
            <Image
              src={program.image}
              alt={`Kompetensi Kejuruan ${program.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Visual Kompetensi: {program.shortName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`${!isEven ? "lg:order-1" : ""}`}>
        <span className="font-display font-extrabold text-6xl text-gray-100 block mb-4">
          {program.number}
        </span>
        <span className="eyebrow block mb-2">{program.shortName}</span>
        <h2 className="heading-sub text-gray-900 mb-4">{program.name}</h2>
        <p className="text-body mb-6">{program.description}</p>

        {/* Curriculum */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-3">
            Fokus Kurikulum
          </h4>
          <ul className="space-y-2">
            {program.curriculum.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 bg-telkom-red rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Careers */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-3">
            Prospek Karier
          </h4>
          <div className="flex flex-wrap gap-2">
            {program.careers.map((career) => (
              <span
                key={career}
                className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 font-medium"
              >
                {career}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/program/${program.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-telkom-red hover:gap-3 transition-all"
        >
          Detail Program
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
