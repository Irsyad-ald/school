"use client";

import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { news } from "@/lib/data/school";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsSection() {
  const headerRef = useReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(0.12, ".news-card");

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <SectionHeading
            eyebrow="Berita & Artikel"
            title="Kabar terbaru dari SMK Telkom Lampung."
            description="Informasi seputar kegiatan belajar, kurikulum kejuruan, dan agenda terkini."
          />
          <Button href="/news" variant="ghost" icon className="shrink-0">
            Lihat Semua Berita
          </Button>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Article with Large Real Photography */}
          {news[0] && (
            <a
              href={news[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-card group lg:col-span-7 bg-gray-900 overflow-hidden relative shadow-lg min-h-[420px] flex flex-col justify-end"
            >
              <div className="absolute inset-0">
                {news[0].image ? (
                  <Image
                    src={news[0].image}
                    alt={news[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
              </div>
              <div className="relative z-10 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-white bg-telkom-red px-3 py-1 uppercase tracking-wider">
                    {news[0].category}
                  </span>
                  <span className="text-xs text-white/70">
                    {news[0].date}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl lg:text-2xl text-white leading-tight mb-3 group-hover:text-telkom-red-light transition-colors duration-300">
                  {news[0].title}
                </h3>
                <p className="text-sm text-white/70 line-clamp-2 max-w-xl">
                  {news[0].excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/90 group-hover:text-telkom-red-light transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          )}

          {/* Secondary Articles with Real Photography Thumbnails */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {news.slice(1).map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card group flex flex-col sm:flex-row gap-5 p-4 border border-gray-100 hover:border-gray-300 bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="sm:w-44 h-32 shrink-0 bg-gray-100 relative overflow-hidden">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="200px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-semibold text-telkom-red uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-900 leading-snug mb-2 group-hover:text-telkom-red transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </a>
            ))}

            {/* Quick Announcement Box */}
            <div className="p-6 bg-stone-50 border-l-4 border-telkom-red">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-telkom-red block mb-1">
                Pengumuman Akademik
              </span>
              <h4 className="font-display font-bold text-sm text-gray-900 mb-1">
                Daftar Ulang Peserta Didik Baru & Pemeliharaan Sistem
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                Informasi penting mengenai jadwal administrasi sekolah dan layanan sistem informasi.
              </p>
              <Link href="/news" className="text-xs font-semibold text-telkom-red hover:underline flex items-center gap-1">
                Lihat Semua Pengumuman &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
