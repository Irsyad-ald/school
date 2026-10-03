"use client";

import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import { Monitor, Wifi, BookOpen, Dumbbell, Building, Server } from "lucide-react";

const facilitiesList = [
  {
    icon: Monitor,
    title: "Laboratorium Komputer Terpadu",
    description: "Lab komputer modern dengan spesifikasi tinggi untuk praktikum pemrograman web, rekayasa perangkat lunak, dan simulasi sistem.",
    image: "/images/facilities/lab-komputer.webp",
    tag: "Lab Praktik",
  },
  {
    icon: Server,
    title: "Laboratorium Jaringan & Server",
    description: "Infrastruktur server rack, switch manageable, Mikrotik, dan perangkat routing Cisco untuk konfigurasi jaringan skala korporat.",
    image: "/images/facilities/lab-networking.webp",
    tag: "Lab Praktik",
  },
  {
    icon: Building,
    title: "Gedung & Lingkungan Kampus",
    description: "Area kampus yang nyaman, asri, dan representatif di Gadingrejo, Pringsewu, mendukung ekosistem belajar produktif.",
    image: "/images/school/official-campus-1.jpg",
    tag: "Dokumentasi Resmi",
    isOfficial: true,
  },
  {
    icon: BookOpen,
    title: "Perpustakaan & Digital Learning Center",
    description: "Koleksi literatur fisik dan akses digital repository untuk pengayaan wawasan akademik dan teknologi siswa.",
    image: "/images/facilities/perpustakaan.webp",
    tag: "Sumber Belajar",
  },
  {
    icon: Wifi,
    title: "Lab Transmisi & Fiber Optic",
    description: "Peralatan splicer fiber optic, OTDR, dan sarana telekomunikasi untuk keahlian instalasi kabel serat optik lapangan.",
    image: "/images/programs/tjat-telecom.webp",
    tag: "Lab Industri",
  },
  {
    icon: Dumbbell,
    title: "Studio Kreatif Multimedia",
    description: "Workstation desain grafis dan animasi digital untuk pembuatan aset 2D/3D, audio editing, dan konten multimedia.",
    image: "/images/programs/animasi-creative.webp",
    tag: "Studio Kreatif",
  },
];

export default function FacilitiesPage() {
  const heroRef = useReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(0.1, ".facility-card");

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="container-main" ref={heroRef}>
          <span className="text-xs font-semibold tracking-widest uppercase text-telkom-red-light block mb-4">
            Sarana & Prasarana
          </span>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white max-w-3xl leading-[1.05] tracking-tight mb-4">
            Fasilitas Pembelajaran Modern
          </h1>
          <p className="text-body-lg text-gray-400 max-w-2xl font-light">
            Sarana berstandar industri yang dirancang untuk mengasah keterampilan praktis siswa dalam menyongsong dunia kerja dan pendidikan tinggi.
          </p>
        </div>
      </section>

      <section className="section-padding bg-stone-50/60">
        <div className="container-main">
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {facilitiesList.map((facility) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.title}
                  className="facility-card group bg-white border border-gray-200/80 hover:border-gray-900 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl rounded-sm flex flex-col"
                >
                  {/* Real Photography */}
                  <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-black/60 text-white backdrop-blur-sm">
                      {facility.tag}
                    </span>
                  </div>

                  <div className="p-6 lg:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon size={20} className="text-telkom-red shrink-0" />
                        <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-telkom-red transition-colors">
                          {facility.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                      <span>Standard Industri</span>
                      <span className="text-telkom-red font-medium">SMK Telkom</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-gray-400 mt-12">
            * Seluruh fasilitas dikelola dan dipelihara secara berkala demi menjamin kenyamanan serta keselamatan belajar siswa.
          </p>
        </div>
      </section>
    </>
  );
}
