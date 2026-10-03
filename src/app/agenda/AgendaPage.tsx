"use client";

import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import { events } from "@/lib/data/school";
import { Calendar, MapPin } from "lucide-react";

export default function AgendaPage() {
  const heroRef = useReveal<HTMLDivElement>();
  const listRef = useStaggerReveal<HTMLDivElement>(0.1, ".agenda-row");

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white">
        <div className="container-main" ref={heroRef}>
          <span className="eyebrow text-telkom-red-light block mb-4">
            Agenda
          </span>
          <h1 className="heading-display text-white max-w-3xl">
            Agenda Sekolah
          </h1>
          <p className="text-body-lg text-gray-400 mt-6 max-w-2xl">
            Jadwal kegiatan dan agenda terdekat SMK Telkom Lampung.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          {events.length > 0 ? (
            <div ref={listRef} className="space-y-0">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="agenda-row group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-gray-200 last:border-b items-center"
                >
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-telkom-red shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {event.startDate}
                        </p>
                        <p className="text-sm text-gray-400">
                          s/d {event.endDate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="font-display font-bold text-xl text-gray-900 group-hover:text-telkom-red transition-colors">
                      {event.title}
                    </h2>
                  </div>
                  <div className="md:col-span-3 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} className="shrink-0" />
                    {event.location}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400">
                Belum ada agenda yang tersedia.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
