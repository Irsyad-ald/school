"use client";

import Image from "next/image";
import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import { bmwPathways } from "@/lib/data/school";

const storytellingStages = [
  {
    step: "01",
    stage: "CLASSROOM",
    title: "Pembelajaran Interaktif Berbasis Karakter",
    description: "Fondasi keilmuan dan etika kerja digital diasah sejak awal melalui diskusi aktif di ruang kelas modern.",
    image: "/images/school/about-classroom-small.webp",
    alt: "Pembelajaran interaktif di kelas SMK Telkom",
  },
  {
    step: "02",
    stage: "PRACTICE",
    title: "Praktikum Langsung di Laboratorium",
    description: "Siswa menguji teori langsung pada perangkat jaringan nyata, server rack, fiber optic, dan workstation grafis.",
    image: "/images/gallery/gallery-5.webp",
    alt: "Praktik kejuruan dan perakitan hardware di lab",
  },
  {
    step: "03",
    stage: "PROJECT",
    title: "Project-Based Learning (PBL)",
    description: "Membangun aplikasi riil, konfigurasi topologi jaringan, dan konten kreatif yang dapat dijadikan portofolio profesional.",
    image: "/images/projects/project-web.webp",
    alt: "Pengembangan proyek aplikasi dan sistem siswa",
  },
  {
    step: "04",
    stage: "COMPETITION",
    title: "Eksplorasi Kompetensi & Lomba Kejuruan",
    description: "Menguji daya saing dalam ajang kompetisi teknologi informasi, inovasi terapan, dan kejuaraan vokasi.",
    image: "/images/gallery/gallery-4.webp",
    alt: "Kompetisi teknologi dan inovasi kejuruan",
  },
  {
    step: "05",
    stage: "COLLABORATION",
    title: "Kolaborasi Tim & Culture Kerja Industri",
    description: "Membiasakan metode Scrum, agile development, dan kerja sama lintas disiplin menyerupai lingkungan kerja digital.",
    image: "/images/gallery/gallery-1.webp",
    alt: "Kolaborasi tim siswa dalam workshop coding",
  },
  {
    step: "06",
    stage: "ACHIEVEMENT",
    title: "Karier & Gerbang Masa Depan",
    description: "Lulusan siap terserap di dunia usaha, industri telekomunikasi & IT, atau melanjutkan ke universitas terkemuka.",
    image: "/images/backgrounds/bmw-career.webp",
    alt: "Karier masa depan talenta digital muda",
  },
];

export default function StudentLifePage() {
  const heroRef = useReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>(0.1, ".story-card");
  const bmwRef = useStaggerReveal<HTMLDivElement>(0.15, ".bmw-item");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-telkom-red/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="container-main relative z-10" ref={heroRef}>
          <span className="text-xs font-semibold tracking-widest uppercase text-telkom-red-light block mb-4">
            Kehidupan Siswa
          </span>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white max-w-3xl leading-[1.05] tracking-tight mb-4">
            Pengalaman Belajar yang Nyata & Bertumbuh.
          </h1>
          <p className="text-body-lg text-gray-400 max-w-2xl font-light">
            Perjalanan transformasi setiap peserta didik di SMK Telkom Lampung melalui tahapan terstruktur menuju kompetensi digital unggul.
          </p>
        </div>
      </section>

      {/* Visual Storytelling Section (Rule 56: CLASSROOM -> PRACTICE -> PROJECT -> COMPETITION -> COLLABORATION -> ACHIEVEMENT) */}
      <section className="section-padding bg-stone-50/70">
        <div className="container-main">
          <SectionHeading
            eyebrow="Student Experience Roadmap"
            title="Visual Storytelling: Perjalanan Siswa"
            description="Enam tahapan pembinaan komprehensif yang membentuk lulusan berkompetensi nyata dan berkarakter unggul."
            className="mb-16"
          />

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {storytellingStages.map((stage) => (
              <div
                key={stage.step}
                className="story-card group bg-white border border-gray-200/80 hover:border-gray-900 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl rounded-sm flex flex-col"
              >
                {/* Real Photography Candid */}
                <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-sm">
                    STAGE {stage.step}
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-semibold tracking-wider uppercase text-telkom-red-light">
                    {stage.stage}
                  </div>
                </div>

                <div className="p-6 lg:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-telkom-red transition-colors mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>Budaya Belajar</span>
                    <span className="font-medium text-telkom-red">SMK Telkom</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMW Section */}
      <section className="section-padding bg-gray-950 text-white relative overflow-hidden">
        <div className="container-main relative z-10">
          <SectionHeading
            eyebrow="Jalur Masa Depan"
            title="BMW Career Pathway"
            description="Tiga opsi jalur pasti setelah menyelesaikan pendidikan di SMK Telkom Lampung."
            dark
            className="mb-16"
          />

          <div ref={bmwRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bmwPathways.map((pathway) => (
              <div
                key={pathway.letter}
                className="bmw-item group bg-gray-900/90 border border-white/10 p-8 lg:p-10 hover:border-telkom-red/50 transition-all duration-500 shadow-xl"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-display font-black text-6xl text-white/20 group-hover:text-telkom-red/40 transition-colors">
                    {pathway.letter}
                  </span>
                  <span className="text-xs font-mono text-telkom-red border border-telkom-red/30 px-2 py-0.5 rounded">
                    Pathway
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {pathway.title}
                </h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  {pathway.description}
                </p>
                <ul className="space-y-3">
                  {pathway.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-telkom-red rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
