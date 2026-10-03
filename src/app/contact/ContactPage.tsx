"use client";

import { useReveal } from "@/hooks/useAnimations";
import { schoolInfo, socialMedia } from "@/lib/data/school";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const heroRef = useReveal<HTMLDivElement>();
  const contentRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white">
        <div className="container-main" ref={heroRef}>
          <span className="eyebrow text-telkom-red-light block mb-4">
            Kontak
          </span>
          <h1 className="heading-display text-white max-w-3xl">
            Datang dan terhubung.
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-main" ref={contentRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="heading-sub text-gray-900 mb-8">
                Informasi Kontak
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 shrink-0">
                    <MapPin size={20} className="text-telkom-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {schoolInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 shrink-0">
                    <Phone size={20} className="text-telkom-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Telepon / WhatsApp
                    </h4>
                    <a
                      href={`tel:${schoolInfo.phone}`}
                      className="text-sm text-gray-500 hover:text-telkom-red transition-colors"
                    >
                      {schoolInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 shrink-0">
                    <Mail size={20} className="text-telkom-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href={`mailto:${schoolInfo.email}`}
                      className="text-sm text-gray-500 hover:text-telkom-red transition-colors"
                    >
                      {schoolInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 shrink-0">
                    <Clock size={20} className="text-telkom-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Jam Operasional
                    </h4>
                    <p className="text-sm text-gray-500">
                      Senin — Jumat: 07.00 — 16.00 WIB
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-4">
                  Media Sosial
                </h4>
                <div className="flex gap-4">
                  {Object.entries(socialMedia).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-600 hover:bg-gray-900 hover:text-white transition-colors capitalize"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="aspect-square lg:aspect-auto lg:h-full bg-gray-100 min-h-[400px]">
                <iframe
                  src={schoolInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi SMK Telkom Lampung"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
