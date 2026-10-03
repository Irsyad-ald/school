import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smktelkom-lpg.sch.id"),
  title: {
    default: "SMK Telkom Lampung — The Real Informatics School",
    template: "%s | SMK Telkom Lampung",
  },
  description:
    "SMK Telkom Lampung — The Real Informatics School. Pendidikan informatika yang nyata, relevan dengan industri, dan siap mengantar generasi muda menjadi ahli digital yang unggul serta berkarakter.",
  keywords: [
    "SMK Telkom Lampung",
    "SMK",
    "Telkom Schools",
    "sekolah teknologi",
    "informatika",
    "Lampung",
    "Pringsewu",
    "Gadingrejo",
    "RPL",
    "TKJ",
    "TJAT",
    "Animasi",
    "sekolah kejuruan",
  ],
  authors: [{ name: "SMK Telkom Lampung" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://smktelkom-lpg.sch.id",
    siteName: "SMK Telkom Lampung",
    title: "SMK Telkom Lampung — The Real Informatics School",
    description:
      "Pendidikan informatika yang nyata, relevan dengan industri, dan siap mengantar generasi muda menjadi ahli digital yang unggul serta berkarakter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMK Telkom Lampung — The Real Informatics School",
    description:
      "Pendidikan informatika yang nyata, relevan dengan industri.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smktelkom-lpg.sch.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Structured Data — EducationalOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SMK Telkom Lampung",
              alternateName: "The Real Informatics School",
              url: "https://smktelkom-lpg.sch.id",
              logo: "https://smktelkom-lpg.sch.id/images/logo/smk-telkom-lampung-logo.png",
              telephone: "0811-7970-1215",
              email: "info@smktelkom-lpg.sch.id",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Raya Gadingrejo, Gading Rejo",
                addressLocality: "Kec. Gading Rejo",
                addressRegion: "Lampung",
                postalCode: "35372",
                addressCountry: "ID",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "Yayasan Pendidikan Telkom",
              },
            }),
          }}
        />
      </head>
      <body
        className={`font-sans antialiased`}
        style={{
          fontFamily: "var(--font-inter), var(--font-space-grotesk), system-ui, sans-serif",
        }}
      >
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
