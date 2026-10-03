"use client";

import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteImages } from "@/lib/data/images";

export default function StudentWork() {
  const headerRef = useReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(0.1, ".work-card");

  return (
    <section className="section-padding bg-stone-100/70 border-y border-stone-200/80">
      <div className="container-main">
        <div ref={headerRef}>
          <SectionHeading
            eyebrow="Karya Siswa"
            title="Built by Students."
            description="Proyek dan portofolio nyata yang dikerjakan siswa dalam pembelajaran berbasis proyek."
            className="mb-16"
          />
        </div>

        {/* CMS-Ready Grid with Real Project Showcase Photography (Rule 57) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Application & Academic Dashboard",
              category: "Rekayasa Perangkat Lunak",
              desc: "Pengembangan sistem analitik data dan portal manajemen berbasis web modern dengan RESTful API.",
              image: siteImages.projects[0].src,
              alt: siteImages.projects[0].alt,
              caption: siteImages.projects[0].caption,
            },
            {
              title: "Smart Hardware & IoT Monitoring",
              category: "Teknik Jaringan & IoT",
              desc: "Integrasi sensor mikrokontroler dengan telemetry dashboard untuk pemantauan parameter lingkungan secara realtime.",
              image: siteImages.projects[1].src,
              alt: siteImages.projects[1].alt,
              caption: siteImages.projects[1].caption,
            },
            {
              title: "3D Motion Graphic & Asset Animation",
              category: "Animasi & Multimedia",
              desc: "Produksi aset karakter 3D, animasi interaktif, dan visual storytelling untuk media digital.",
              image: siteImages.projects[2].src,
              alt: siteImages.projects[2].alt,
              caption: siteImages.projects[2].caption,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="work-card group bg-white border border-stone-200/80 hover:border-gray-900 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
            >
              {/* Real Project Image Showcase */}
              <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </span>
              </div>

              <div className="p-6 lg:p-7">
                <span className="text-xs font-semibold tracking-wider text-telkom-red uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>Project Based Learning</span>
                  <span className="font-medium text-gray-700 group-hover:text-telkom-red transition-colors">Portofolio Siswa &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          * Portofolio dan proyek siswa diperbarui secara berkala melalui sistem CMS kurikulum industri.
        </p>
      </div>
    </section>
  );
}
