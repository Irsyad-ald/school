"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { schoolInfo, socialMedia } from "@/lib/data/school";

const footerNav = {
  about: {
    title: "Tentang",
    links: [
      { label: "Profil Sekolah", href: "/profile" },
      { label: "Visi & Misi", href: "/profile#visi-misi" },
      { label: "Kepala Sekolah", href: "/profile#kepala-sekolah" },
      { label: "Struktur Organisasi", href: "/profile#struktur" },
    ],
  },
  academic: {
    title: "Akademik",
    links: [
      { label: "Program Keahlian", href: "/program" },
      { label: "TJAT", href: "/program/teknik-jaringan-akses-telekomunikasi" },
      { label: "TKJ", href: "/program/teknik-komputer-dan-jaringan" },
      { label: "RPL", href: "/program/rekayasa-perangkat-lunak" },
      { label: "Animasi", href: "/program/animasi" },
    ],
  },
  student: {
    title: "Kesiswaan",
    links: [
      { label: "Kehidupan Siswa", href: "/student-life" },
      { label: "Prestasi", href: "/achievement" },
      { label: "Galeri", href: "/gallery" },
    ],
  },
  info: {
    title: "Informasi",
    links: [
      { label: "Berita & Artikel", href: "/news" },
      { label: "Agenda", href: "/agenda" },
      { label: "PPDB", href: "/ppdb" },
      { label: "Kontak", href: "/contact" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Subtle texture overlay (Rule 51: Section 12 Footer subtle texture) */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Red accent glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-telkom-red/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Footer */}
      <div className="container-main pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Link href="/" className="inline-block mb-3" aria-label={schoolInfo.name}>
                <div className="relative h-11 w-48">
                  <Image
                    src={schoolInfo.logoWhite}
                    alt={schoolInfo.name}
                    fill
                    sizes="192px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-telkom-red-light">
                {schoolInfo.tagline}
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              {schoolInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${schoolInfo.phone}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={14} />
                {schoolInfo.phone}
              </a>
              <a
                href={`mailto:${schoolInfo.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={14} />
                {schoolInfo.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>{schoolInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.values(footerNav).map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-main">
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SMK Telkom Lampung. Seluruh hak cipta
            dilindungi.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a
              href={socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a
              href={socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
            <a
              href={schoolInfo.spmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-telkom-red transition-colors ml-2 border border-gray-800 px-3 py-1.5"
            >
              SPMB Portal
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
