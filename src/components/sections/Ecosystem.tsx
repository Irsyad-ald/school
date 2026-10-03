"use client";

import { useReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import { telkomEcosystem } from "@/lib/data/school";

export default function Ecosystem() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-padding bg-gray-950 text-white overflow-hidden">
      <div className="container-main">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading
            eyebrow="Telkom Schools"
            title="Terhubung dengan ekosistem yang lebih besar."
            description={telkomEcosystem.description}
            align="center"
            dark
            className="mb-16"
          />

          {/* Ecosystem Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {telkomEcosystem.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-display font-extrabold text-5xl lg:text-6xl text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-lg text-gray-300 font-display font-medium">
              Dari Indonesia untuk masa depan digital.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Satu visi besar: mencetak talenta unggul yang siap tumbuh bersama
              industri dan membawa dampak untuk Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
