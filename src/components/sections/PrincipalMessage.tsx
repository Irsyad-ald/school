"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useAnimations";
import { principal } from "@/lib/data/school";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-padding bg-white overflow-hidden border-b border-gray-100">
      <div className="container-main">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual Frame: Official Campus of SMK Telkom Lampung */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden shadow-2xl rounded-sm">
                  <Image
                    src="/images/school/official-campus-1.jpg"
                    alt="Kampus SMK Telkom Lampung"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Official badge overlay */}
                  <div className="absolute top-4 left-4 bg-telkom-red text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
                    Dokumentasi Resmi
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-display font-bold text-lg leading-tight">
                      {principal.name}
                    </p>
                    <p className="text-xs text-white/80 mt-0.5">
                      {principal.title} SMK Telkom Lampung
                    </p>
                  </div>
                </div>

                {/* Decorative border offset */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-telkom-red/30 -z-10 pointer-events-none" />
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-7">
              <div className="relative">
                <Quote
                  size={48}
                  className="text-telkom-red/15 mb-6 -scale-x-100"
                />
                <span className="text-xs font-semibold tracking-widest uppercase text-telkom-red mb-3 block">
                  Sambutan Kepala Sekolah
                </span>
                <blockquote>
                  <p className="text-lg lg:text-xl font-display font-medium text-gray-800 leading-relaxed">
                    &ldquo;{principal.quote}&rdquo;
                  </p>
                </blockquote>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-base">
                      {principal.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Kepala SMK Telkom Lampung
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-gray-400">
                      Yayasan Pendidikan Telkom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
