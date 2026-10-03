"use client";

import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import { schoolInfo, principal, vision, missions } from "@/lib/data/school";
import { Quote, Target, Eye } from "lucide-react";

export default function ProfilePage() {
  const heroRef = useReveal<HTMLDivElement>();
  const visionRef = useReveal<HTMLDivElement>();
  const missionRef = useStaggerReveal<HTMLDivElement>(0.08, ".mission-item");
  const principalRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white">
        <div className="container-main" ref={heroRef}>
          <span className="eyebrow text-telkom-red-light block mb-4">
            Tentang Kami
          </span>
          <h1 className="heading-display text-white max-w-3xl">
            Profil SMK Telkom Lampung
          </h1>
          <p className="text-body-lg text-gray-400 mt-6 max-w-2xl">
            {schoolInfo.description}
          </p>
        </div>
      </section>

      {/* Vision */}
      <section id="visi-misi" className="section-padding bg-white">
        <div className="container-main">
          <div ref={visionRef} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Eye size={24} className="text-telkom-red" />
                  <span className="eyebrow">Visi</span>
                </div>
                <h2 className="heading-sub text-gray-900">
                  {vision}
                </h2>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target size={24} className="text-telkom-red" />
                  <span className="eyebrow">Misi</span>
                </div>
                <div ref={missionRef}>
                  <ol className="space-y-4">
                    {missions.map((mission, i) => (
                      <li
                        key={i}
                        className="mission-item flex gap-4 text-sm text-gray-600 leading-relaxed"
                      >
                        <span className="font-display font-bold text-telkom-red text-base shrink-0 w-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {mission}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal */}
      <section id="kepala-sekolah" className="section-padding bg-gray-50">
        <div className="container-main">
          <div ref={principalRef} className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Kepala Sekolah"
              title="Sambutan Kepala Sekolah"
              className="mb-12"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src="/images/school/official-campus-1.jpg"
                    alt="Kampus SMK Telkom Lampung"
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-telkom-red text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    Dokumentasi Resmi
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-display font-bold text-sm">
                      {principal.name}
                    </p>
                    <p className="text-xs text-white/70">{principal.title}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <Quote
                  size={36}
                  className="text-telkom-red/10 mb-4 -scale-x-100"
                />
                <blockquote className="text-lg lg:text-xl font-display text-gray-900 leading-relaxed">
                  &ldquo;{principal.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
