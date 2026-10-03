"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useAnimations";
import { siteImages } from "@/lib/data/images";
import { X, ZoomIn, Info } from "lucide-react";

const categories = [
  "Semua",
  "Praktik Kejuruan",
  "Akademik",
  "Kesiswaan",
  "Fasilitas",
];

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  categoryName: string;
  source: string;
  sourceUrl: string;
  photographer?: string;
  license: string;
  category: "gallery";
  aspectRatio?: string;
  spanClass?: string;
  isOfficial?: boolean;
}

// Combine all real photography for gallery
const allGalleryItems: GalleryItem[] = [
  ...siteImages.gallery.map((g) => ({
    ...g,
    category: "gallery" as const,
  })),
  {
    id: "gal-campus-official",
    src: "/images/school/official-campus-1.jpg",
    alt: "Gedung dan Lingkungan Kampus SMK Telkom Lampung",
    caption: "Dokumentasi Resmi Kampus SMK Telkom Lampung",
    categoryName: "Fasilitas",
    source: "SMK Telkom Lampung",
    sourceUrl: "https://smktelkom-lpg.sch.id",
    photographer: "SMK Telkom Media",
    license: "Official School Media",
    category: "gallery" as const,
    aspectRatio: "aspect-[16/9]",
    spanClass: "md:col-span-2 md:row-span-1",
    isOfficial: true,
  },
  {
    id: "gal-lab-computer",
    src: "/images/facilities/lab-komputer.webp",
    alt: "Laboratorium Komputer Terpadu",
    caption: "Fasilitas Laboratorium Komputer Modern",
    categoryName: "Fasilitas",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/lab-komputer",
    photographer: "Vasily Kolotusha",
    license: "Unsplash License",
    category: "gallery" as const,
    aspectRatio: "aspect-square",
    spanClass: "md:col-span-1 md:row-span-1",
    isOfficial: false,
  },
  {
    id: "gal-network-practice",
    src: "/images/facilities/lab-networking.webp",
    alt: "Praktik Infrastruktur Server & Jaringan",
    caption: "Konfigurasi Server Rack & Kabel Data",
    categoryName: "Praktik Kejuruan",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/lab-network",
    photographer: "Jordan Harrison",
    license: "Unsplash License",
    category: "gallery" as const,
    aspectRatio: "aspect-[3/4]",
    spanClass: "md:col-span-1 md:row-span-2",
    isOfficial: false,
  },
];

export default function GalleryPage() {
  const heroRef = useReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeItem, setActiveItem] = useState<(typeof allGalleryItems)[0] | null>(null);

  const filtered =
    activeCategory === "Semua"
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.categoryName === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-telkom-red/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-main relative z-10" ref={heroRef}>
          <span className="text-xs font-semibold tracking-widest uppercase text-telkom-red-light block mb-4">
            Dokumentasi Visual
          </span>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white max-w-3xl leading-[1.05] tracking-tight mb-4">
            Galeri Kegiatan & Lingkungan Sekolah
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-light">
            Eksplorasi aktivitas pembelajaran, praktikum kejuruan berstandar industri, serta suasana kampus SMK Telkom Lampung.
          </p>
        </div>
      </section>

      {/* Gallery Section with Masonry & Variable Sizing (Rule 58) */}
      <section className="section-padding bg-stone-50/70">
        <div className="container-main">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded-sm ${
                  activeCategory === cat
                    ? "bg-telkom-red text-white shadow-md shadow-telkom-red/20"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Variable Size Grid (Rule 58) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative overflow-hidden bg-gray-900 cursor-pointer shadow-md rounded-sm ${item.spanClass || "md:col-span-1 md:row-span-1"}`}
              >
                {/* Real Photography */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay (Rule 60) */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge: Official vs Visual Pendukung */}
                <div className="absolute top-3 left-3 z-10">
                  {item.isOfficial ? (
                    <span className="bg-telkom-red text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      Dokumentasi Resmi
                    </span>
                  ) : (
                    <span className="bg-black/60 backdrop-blur-sm text-white/90 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Visual Kejuruan
                    </span>
                  )}
                </div>

                {/* Hover Caption (Rule 60) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[11px] font-medium text-telkom-red-light block mb-0.5">
                    {item.categoryName}
                  </span>
                  <h4 className="font-display font-bold text-sm leading-snug drop-shadow-sm">
                    {item.caption || item.alt}
                  </h4>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-white/60 pt-2 border-t border-white/10">
                    <span>{item.isOfficial ? "SMK Telkom Lampung" : `Photo by ${item.photographer || "Unsplash"}`}</span>
                    <span className="flex items-center gap-1 font-semibold text-white/80">
                      <ZoomIn size={12} /> Perbesar
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Photography Transparency Notice (Rule 63 & 68) */}
          <div className="mt-12 p-5 bg-white border border-gray-200 rounded-sm text-xs text-gray-500 flex items-start gap-3">
            <Info size={16} className="text-telkom-red shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Transparansi Dokumentasi Visual:</strong> Foto yang bertanda <em>Dokumentasi Resmi</em> merupakan dokumentasi autentik SMK Telkom Lampung. Foto lainnya digunakan secara legal sebagai visual pendukung representatif untuk menggambarkan aktivitas kurikulum kejuruan teknologi industri. Dilarang keras memalsukan atau merekayasa foto dengan generator AI.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal (Rule 58) */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-8 animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-gray-950 border border-white/10 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 bg-gray-900/90 border-b border-white/10 flex items-center justify-between text-white">
              <div>
                <span className="text-xs font-semibold text-telkom-red uppercase tracking-wider">
                  {activeItem.categoryName}
                </span>
                <h3 className="font-display font-bold text-base mt-0.5">
                  {activeItem.caption || activeItem.alt}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Tutup"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image View */}
            <div className="relative flex-1 min-h-[400px] lg:min-h-[550px] bg-black">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                quality={95}
                className="object-contain"
              />
            </div>

            {/* Footer Metadata (Rule 63) */}
            <div className="p-4 bg-gray-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-3">
                <span className="text-white font-medium">Sumber:</span>
                <span>{activeItem.source}</span>
                {activeItem.photographer && (
                  <>
                    <span>&bull;</span>
                    <span>Fotografer: {activeItem.photographer}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded text-[11px]">
                  {activeItem.license}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
