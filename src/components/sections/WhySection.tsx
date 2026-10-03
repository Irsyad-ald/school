"use client";

import { useStaggerReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyReasons } from "@/lib/data/school";

export default function WhySection() {
  const gridRef = useStaggerReveal<HTMLDivElement>(0.1, ".why-card");

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <SectionHeading
          eyebrow="Keunggulan"
          title="Kenapa SMK Telkom Lampung?"
          description="Untuk siswa yang ingin belajar dengan arah, praktik, karakter, dan peluang. Untuk orang tua yang ingin melihat anaknya tumbuh di lingkungan produktif dan relevan dengan zaman."
          align="center"
          className="mb-16"
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {whyReasons.map((reason) => (
            <div
              key={reason.number}
              className="why-card group bg-white p-8 lg:p-10 transition-colors duration-300 hover:bg-gray-950"
            >
              <span className="block font-display font-bold text-4xl text-gray-200 group-hover:text-telkom-red transition-colors duration-300 mb-6">
                {reason.number}
              </span>
              <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-white transition-colors duration-300 mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
