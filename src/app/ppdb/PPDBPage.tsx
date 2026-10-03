"use client";

import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import Button from "@/components/ui/Button";
import { schoolInfo, programs } from "@/lib/data/school";
import { siteImages } from "@/lib/data/images";

export default function PPDBPage() {
  const heroRef = useReveal<HTMLDivElement>();
  const programsRef = useStaggerReveal<HTMLDivElement>(0.1, ".ppdb-program");

  return (
    <>
      {/* Hero with Real Photographic Background */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-telkom-red overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={siteImages.backgrounds.cta.src}
            alt={siteImages.backgrounds.cta.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-telkom-red-dark via-telkom-red/90 to-telkom-red-dark" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container-main relative z-10" ref={heroRef}>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80 block mb-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
            Penerimaan Peserta Didik Baru (PPDB)
          </span>
          <h1 className="font-display font-extrabold text-white text-4xl lg:text-6xl max-w-3xl leading-[1.05] tracking-tight mb-4">
            Siap Membangun Masa Depan Digital?
          </h1>
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl font-light">
            Bergabunglah dengan SMK Telkom Lampung dan mulai perjalanan Anda menuju karier profesional di dunia teknologi informasi.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href={schoolInfo.spmbUrl}
              external
              variant="secondary"
              size="lg"
              icon
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl"
            >
              Daftar SPMB Online
            </Button>
            <Button
              href={`https://wa.me/6281179701215`}
              external
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
            >
              Konsultasi WhatsApp (0811-7970-1215)
            </Button>
          </div>
        </div>
      </section>

      {/* Program Selection with Real Photography */}
      <section className="section-padding bg-stone-50/70">
        <div className="container-main">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-telkom-red block mb-2">
              Pilihan Konsentrasi Keahlian
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-gray-900">
              4 Jalur Keahlian Vokasi Digital
            </h2>
            <p className="text-body-lg text-gray-600 mt-3">
              Pilih konsentrasi keahlian yang selaras dengan minat, bakat, dan rencana masa depan karier Anda.
            </p>
          </div>

          <div ref={programsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="ppdb-program group bg-white border border-gray-200/80 hover:border-gray-900 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl rounded-sm flex flex-col"
              >
                {/* Real Photography */}
                <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                  {program.image ? (
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-mono px-2 py-0.5 rounded">
                    {program.shortName}
                  </span>
                  <span className="absolute bottom-3 left-3 font-display font-extrabold text-2xl text-white">
                    {program.number}
                  </span>
                </div>

                <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-telkom-red transition-colors duration-300 mb-2">
                      {program.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                      Prospek Karier Lulusan:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {program.careers.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2.5 py-1 bg-stone-100 text-gray-700 font-medium rounded-sm border border-stone-200/60"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Note */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-main text-center">
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Informasi lengkap mengenai formulir pendaftaran, verifikasi berkas, beasiswa, dan jadwal tes akademik tersedia secara transparan di portal SPMB resmi.
          </p>
          <div className="mt-6">
            <Button
              href={schoolInfo.spmbUrl}
              external
              variant="primary"
              size="lg"
              icon
            >
              Kunjungi Portal SPMB Online
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
