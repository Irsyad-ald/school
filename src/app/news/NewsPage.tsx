"use client";

import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import { news, announcements } from "@/lib/data/school";
import { ArrowRight } from "lucide-react";

export default function NewsPage() {
  const heroRef = useReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(0.1, ".news-item");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="container-main relative z-10" ref={heroRef}>
          <span className="text-xs font-semibold tracking-widest uppercase text-telkom-red-light block mb-4">
            Berita & Pengumuman
          </span>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white max-w-3xl leading-[1.05] tracking-tight mb-4">
            Kabar Terbaru SMK Telkom Lampung
          </h1>
          <p className="text-body-lg text-gray-400 max-w-2xl font-light">
            Publikasi kegiatan akademik, pembelajaran vokasi industri, serta informasi resmi civitas akademika.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div ref={gridRef} className="space-y-8">
            {news.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-item group grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-gray-100 hover:border-telkom-red/30 transition-colors"
              >
                {/* Real Photography */}
                <div className="md:col-span-4">
                  <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative rounded-sm shadow-md">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 35vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-telkom-red">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl lg:text-2xl text-gray-900 mb-3 group-hover:text-telkom-red transition-colors duration-300 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 group-hover:text-telkom-red transition-colors">
                    Baca artikel lengkap di portal berita
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Announcements */}
          {announcements.length > 0 && (
            <div className="mt-16 pt-16 border-t border-gray-200">
              <h2 className="font-display font-extrabold text-2xl text-gray-900 mb-8">
                Pengumuman Resmi Sekolah
              </h2>
              <div className="space-y-4">
                {announcements.map((ann) => (
                  <div
                    key={ann.id}
                    className="p-6 bg-stone-50 border-l-4 border-telkom-red"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-telkom-red uppercase tracking-wider">Pemberitahuan</span>
                      <span className="text-xs text-gray-400">&bull; {ann.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-gray-900 mb-1">
                      {ann.title}
                    </h3>
                    <p className="text-sm text-gray-600">{ann.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
