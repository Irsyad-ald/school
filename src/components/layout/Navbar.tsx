"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems, schoolInfo } from "@/lib/data/school";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
              : isHome
              ? "bg-transparent"
              : "bg-white/95 backdrop-blur-md"
          }
        `}
      >
        <nav className="container-main flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center relative z-50 py-1"
            aria-label={schoolInfo.name}
          >
            <div className="relative h-9 sm:h-10 w-36 sm:w-44 transition-opacity duration-300">
              <Image
                src={
                  isMobileOpen || (!isScrolled && isHome)
                    ? schoolInfo.logoWhite
                    : schoolInfo.logo
                }
                alt={schoolInfo.name}
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-3 py-2 text-[0.8125rem] font-medium
                  transition-colors duration-300
                  ${
                    pathname === item.href
                      ? !isScrolled && isHome
                        ? "text-white"
                        : "text-telkom-red"
                      : !isScrolled && isHome
                      ? "text-white/80 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-telkom-red" />
                )}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/ppdb"
              className={`
                ml-3 px-5 py-2 text-[0.8125rem] font-semibold
                transition-all duration-300
                ${
                  !isScrolled && isHome
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-telkom-red text-white hover:bg-telkom-red-dark"
                }
              `}
            >
              PPDB
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`
              lg:hidden relative z-50 p-2
              transition-colors duration-300
              ${
                isMobileOpen
                  ? "text-white"
                  : !isScrolled && isHome
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
            aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 bg-gray-950
          transition-all duration-500 ease-out
          lg:hidden
          ${
            isMobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col justify-center h-full px-8">
          <nav className="space-y-1">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  block py-3 text-2xl font-display font-bold
                  transition-all duration-300
                  ${
                    isMobileOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }
                  ${
                    pathname === item.href
                      ? "text-telkom-red"
                      : "text-white/80 hover:text-white"
                  }
                `}
                style={{
                  transitionDelay: isMobileOpen ? `${i * 50 + 200}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 pt-8 border-t border-white/10">
            <Link
              href="/ppdb"
              className="inline-block bg-telkom-red text-white px-8 py-4 text-sm font-semibold hover:bg-telkom-red-dark transition-colors"
            >
              Daftar PPDB Sekarang
            </Link>
            <div className="mt-6 space-y-1">
              <p className="text-white/50 text-sm">{schoolInfo.phone}</p>
              <p className="text-white/50 text-sm">{schoolInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
