"use client";

import { useReveal, useStaggerReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { events } from "@/lib/data/school";
import { Calendar, MapPin } from "lucide-react";

export default function AgendaSection() {
  const headerRef = useReveal<HTMLDivElement>();
  const listRef = useStaggerReveal<HTMLDivElement>(0.1, ".agenda-item");

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <SectionHeading
            eyebrow="Agenda"
            title="Agenda terdekat."
          />
          <Button href="/agenda" variant="ghost" icon className="shrink-0">
            Lihat Semua Agenda
          </Button>
        </div>

        <div ref={listRef} className="space-y-0">
          {events.map((event) => (
            <div
              key={event.id}
              className="agenda-item group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-gray-200 last:border-b items-center"
            >
              {/* Date */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-3">
                  <Calendar
                    size={16}
                    className="text-telkom-red shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {event.startDate}
                    </p>
                    <p className="text-xs text-gray-400">
                      s/d {event.endDate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="md:col-span-6">
                <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-telkom-red transition-colors duration-300">
                  {event.title}
                </h3>
              </div>

              {/* Location */}
              <div className="md:col-span-3 flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={14} className="shrink-0" />
                {event.location}
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">
              Belum ada agenda yang tersedia.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
