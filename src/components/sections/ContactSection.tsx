"use client";

import { useReveal } from "@/hooks/useAnimations";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail } from "lucide-react";
import { schoolInfo } from "@/lib/data/school";

export default function ContactSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          eyebrow="Kontak"
          title="Datang dan terhubung."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
            <iframe
              src={schoolInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi SMK Telkom Lampung"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100">
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
                <div className="p-3 bg-gray-100">
                  <Phone size={20} className="text-telkom-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                  <a
                    href={`tel:${schoolInfo.phone}`}
                    className="text-sm text-gray-500 hover:text-telkom-red transition-colors"
                  >
                    {schoolInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
