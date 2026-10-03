"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useReveal, useImageReveal } from "@/hooks/useAnimations";
import { schoolInfo } from "@/lib/data/school";
import { siteImages } from "@/lib/data/images";

export default function About() {
  const contentRef = useReveal<HTMLDivElement>();
  const imageRef = useImageReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-stone-50/60 overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric 3-Image Composition (Rule 54: 1 Large + 2 Smaller) */}
          <div ref={imageRef} className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4 items-end">
              {/* Large Primary Image: Praktik Rekayasa & Lab */}
              <div className="col-span-8 relative">
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden group shadow-xl">
                  <Image
                    src={siteImages.about.primary.src}
                    alt={siteImages.about.primary.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-semibold">{siteImages.about.primary.caption}</span>
                  </div>
                </div>

                {/* Floating stat badge */}
                <div className="absolute -bottom-5 -left-4 bg-telkom-red text-white p-5 shadow-lg border-2 border-white">
                  <span className="block font-display font-extrabold text-2xl lg:text-3xl leading-none">
                    550+
                  </span>
                  <span className="text-[10px] tracking-widest uppercase opacity-90 font-medium">
                    Siswa Aktif
                  </span>
                </div>
              </div>

              {/* 2 Smaller Supporting Images Stacked Vertically */}
              <div className="col-span-4 space-y-4">
                {/* Small Image 1: Kelas Interaktif */}
                <div className="aspect-square bg-gray-100 relative overflow-hidden group shadow-md">
                  <Image
                    src={siteImages.about.classroom.src}
                    alt={siteImages.about.classroom.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Small Image 2: Kolaborasi Proyek */}
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden group shadow-md">
                  <Image
                    src={siteImages.about.activity.src}
                    alt={siteImages.about.activity.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
              </div>
            </div>

            {/* Official School Attribution Note */}
            <div className="mt-8 flex items-center gap-2 text-[11px] text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-telkom-red" />
              <span>Dokumentasi & Visual Kejuruan Teknologi Informatika Berstandar Industri</span>
            </div>
          </div>

          {/* Text side */}
          <div ref={contentRef} className="lg:col-span-6 order-1 lg:order-2">
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Lebih dari sekadar sekolah teknologi."
              className="mb-8"
            />

            <div className="space-y-5">
              <p className="text-body-lg text-gray-800">
                {schoolInfo.description}
              </p>
              <p className="text-body text-gray-600">
                Sebagai bagian dari ekosistem Yayasan Pendidikan Telkom, SMK
                Telkom Lampung membawa standar budaya digital, jejaring nasional,
                dan semangat inovasi ke ruang belajar siswa.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Ekosistem Telkom Schools",
                "Kurikulum Berbasis Industri",
                "Project-Based Learning",
                "Budaya Karakter Digital",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-gray-800"
                >
                  <span className="w-1.5 h-1.5 bg-telkom-red rounded-full shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/profile" variant="secondary" icon>
                Profil Sekolah Lengkap
              </Button>
              <Button href="/facilities" variant="outline">
                Lihat Sarana & Lab
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
