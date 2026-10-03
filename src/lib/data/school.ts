/**
 * School Data Layer
 * Source: https://smktelkom-lpg.sch.id (verified October 2026)
 * 
 * All data is sourced from the official SMK Telkom Lampung website.
 * CMS-ready: structured for easy replacement with API/database.
 */

// ============================================================
// Types
// ============================================================

export interface SchoolInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  spmbUrl: string;
  mapUrl: string;
  logo: string;
  logoWhite: string;
}

export interface Principal {
  name: string;
  title: string;
  quote: string;
  photo?: string;
}

export interface QuickStat {
  value: string;
  label: string;
}

export interface Program {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  curriculum: string[];
  careers: string[];
  image?: string;
  slug: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  slug: string;
  url: string;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Event {
  id: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface BMWPathway {
  letter: string;
  title: string;
  description: string;
  items: string[];
}

export interface WhyReason {
  number: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image?: string;
}

// ============================================================
// Data (sourced from smktelkom-lpg.sch.id)
// ============================================================

export const schoolInfo: SchoolInfo = {
  name: "SMK Telkom Lampung",
  tagline: "The Real Informatics School",
  description:
    "Di sini, kami tidak hanya mengajarkan teknologi, tapi membentuk masa depan. Kami berkomitmen menyajikan pendidikan informatika yang nyata, relevan dengan industri, dan siap mengantar generasi muda menjadi ahli digital yang unggul serta berkarakter.",
  address:
    "Jl. Raya Gadingrejo, Gading Rejo, Kec. Gading Rejo, Kabupaten Pringsewu, Lampung 35372",
  phone: "0811-7970-1215",
  email: "info@smktelkom-lpg.sch.id",
  website: "smktelkom-lpg.sch.id",
  spmbUrl: "https://ppdb.smktelkom-lpg.sch.id/",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.8!2d104.96!3d-5.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSMK+Telkom+Lampung!5e0!3m2!1sid!2sid!4v1",
  logo: "/images/logo/smk-telkom-lampung-logo.png",
  logoWhite: "/images/logo/smk-telkom-lampung-logo-white.png",
};

export const principal: Principal = {
  name: "Dedi Eko Cahyono, S.Kom., Gr.",
  title: "Kepala Sekolah",
  quote:
    "Selamat datang di website SMK Telkom Lampung yang hadir sebagai media informasi dan silaturahmi bagi seluruh civitas akademika serta masyarakat luas. Kami sangat terbuka atas masukan konstruktif demi penyempurnaan layanan dan perbaikan sekolah ke depan. Mari bersama-sama bekerja dan berkarya dengan penuh keikhlasan demi melahirkan generasi bangsa yang unggul.",
};

export const quickStats: QuickStat[] = [
  { value: "550+", label: "Siswa Aktif" },
  { value: "04", label: "Konsentrasi Keahlian" },
  { value: "12+", label: "SMK Telkom Nasional" },
  { value: "100%", label: "Kurikulum Industri" },
];

export const vision =
  "Menjadi lembaga pendidikan terdepan yang mencetak generasi unggul, berkarakter, dan siap bersaing di era digital.";

export const missions = [
  "Menyelenggarakan pembelajaran aktif, kontekstual, dan berbasis proyek yang berorientasi pada pembentukan karakter, kreativitas, kemandirian, serta nilai iman dan takwa.",
  "Memfasilitasi pembelajaran dan pelatihan berbasis keterampilan abad 21, budaya kerja, budaya belajar sepanjang hayat, dan kecakapan hidup sebagai bekal berkarir dan berwirausaha.",
  "Mengembangkan program kokurikuler dan ekstrakurikuler untuk menumbuhkan budaya anak Indonesia hebat, minat, bakat, dan potensi peserta didik.",
  "Menyelenggarakan manajemen terpadu dengan pelayanan digital yang optimal sesuai core values AKHLAK Group.",
  "Membangun kemitraan strategis dengan dunia usaha, dunia industri, dan masyarakat guna meningkatkan kualitas lulusan agar siap kerja, berwirausaha, atau melanjutkan pendidikan.",
  "Mengembangkan kreativitas dan inovasi dalam bidang Teknologi Informasi dan Ekonomi Kreatif untuk kepentingan masyarakat.",
  "Menyediakan sarana dan prasarana pembelajaran sesuai standar nasional pendidikan dan kebutuhan satuan pendidikan.",
  "Meningkatkan kompetensi kepala sekolah, guru, dan tenaga kependidikan melalui pelatihan berkelanjutan.",
  "Memfasilitasi kesejahteraan guru dan tenaga kependidikan sesuai kemampuan satuan pendidikan.",
];

export const programs: Program[] = [
  {
    id: "tjat",
    number: "01",
    name: "Teknik Jaringan Akses Telekomunikasi",
    shortName: "TJAT",
    description:
      "Mempelajari instalasi, pengukuran, dan pemeliharaan jaringan akses telekomunikasi berbasis fiber optic, radio, dan perangkat transmisi modern.",
    curriculum: [
      "Dasar telekomunikasi",
      "Instalasi fiber optic dan FTTH",
      "Pengukuran jaringan akses",
      "Jaringan nirkabel terapan",
      "Keselamatan kerja lapangan",
    ],
    careers: [
      "Teknisi Fiber Optic",
      "Network Technician",
      "Telecom Engineer",
      "Field Engineer",
    ],
    image: "/images/programs/tjat-telecom.webp",
    slug: "teknik-jaringan-akses-telekomunikasi",
  },
  {
    id: "tkj",
    number: "02",
    name: "Teknik Komputer dan Jaringan",
    shortName: "TKJ",
    description:
      "Berfokus pada administrasi jaringan, server, keamanan infrastruktur, cloud dasar, dan layanan teknologi informasi untuk kebutuhan industri.",
    curriculum: [
      "Administrasi server Linux dan Windows",
      "Routing dan switching",
      "Keamanan jaringan",
      "Cloud computing dasar",
      "Mikrotik dan Cisco",
    ],
    careers: [
      "System Administrator",
      "Network Engineer",
      "IT Support Specialist",
      "Cloud Technician",
    ],
    image: "/images/programs/tkj-networking.webp",
    slug: "teknik-komputer-dan-jaringan",
  },
  {
    id: "rpl",
    number: "03",
    name: "Rekayasa Perangkat Lunak",
    shortName: "RPL",
    description:
      "Mengembangkan kemampuan membangun aplikasi web, mobile, basis data, UI/UX, dan produk digital dengan praktik kerja proyek.",
    curriculum: [
      "Pemrograman web frontend",
      "Backend dan REST API",
      "Mobile app development",
      "Database design",
      "UI/UX dan software testing",
    ],
    careers: [
      "Web Developer",
      "Mobile Developer",
      "UI/UX Designer",
      "Software Engineer",
    ],
    image: "/images/programs/rpl-programming.webp",
    slug: "rekayasa-perangkat-lunak",
  },
  {
    id: "ani",
    number: "04",
    name: "Animasi",
    shortName: "ANI",
    description:
      "Membekali siswa dengan kompetensi ilustrasi digital, storyboard, animasi 2D dan 3D, editing, compositing, serta produksi konten kreatif.",
    curriculum: [
      "Desain karakter",
      "Storyboard",
      "Animasi 2D dan 3D",
      "Rigging",
      "Video editing dan compositing",
    ],
    careers: [
      "Animator",
      "Motion Designer",
      "Video Editor",
      "Creative Content Producer",
    ],
    image: "/images/programs/animasi-creative.webp",
    slug: "animasi",
  },
];

export const bmwPathways: BMWPathway[] = [
  {
    letter: "B",
    title: "Bekerja",
    description: "Siap terjun ke dunia industri dengan kompetensi nyata.",
    items: [
      "Magang Industri",
      "Teaching Factory",
      "Kelas Expertise",
      "Job Fair",
      "Bootcamp",
      "Career Center",
      "Sertifikasi Kompetensi",
    ],
  },
  {
    letter: "M",
    title: "Melanjutkan",
    description: "Persiapan optimal untuk pendidikan tinggi.",
    items: ["Fast Track", "Bimbel UTBK", "IELTS / TOEFL", "Edu Fair"],
  },
  {
    letter: "W",
    title: "Wirausaha",
    description: "Membangun bisnis digital dan industri kreatif.",
    items: [
      "Bisnis Digital",
      "E-Commerce",
      "Aplikasi",
      "Konten Kreatif",
      "Business Center",
    ],
  },
];

export const whyReasons: WhyReason[] = [
  {
    number: "01",
    title: "Ekosistem Telkom Schools",
    description:
      "Bagian dari jaringan pendidikan Telkom yang menaungi 32 PAUD, 3 SD, 4 SMP, dan 12 SMK tersebar di Indonesia.",
  },
  {
    number: "02",
    title: "Kurikulum Relevan Industri",
    description:
      "Kurikulum Telkom Schools yang dirancang sesuai kebutuhan industri teknologi dan digital.",
  },
  {
    number: "03",
    title: "Pembelajaran Berbasis Projek",
    description:
      "Siswa belajar melalui proyek nyata, membangun portofolio sejak dini.",
  },
  {
    number: "04",
    title: "Pengembangan Karakter",
    description:
      "Membentuk karakter unggul dengan nilai AKHLAK dan budaya digital.",
  },
  {
    number: "05",
    title: "Portofolio & Karya Siswa",
    description:
      "Setiap siswa memiliki portofolio digital sebagai bukti kompetensi.",
  },
  {
    number: "06",
    title: "BMW Career Pathway",
    description:
      "Tiga jalur masa depan: Bekerja, Melanjutkan, dan Wirausaha.",
  },
];

export const news: NewsArticle[] = [
  {
    id: "1",
    title:
      "Pembelajaran Jurusan RPL SMK Telkom Lampung — Project-Based Learning Wujudkan Developer Muda Siap Kerja",
    excerpt:
      "Pembelajaran Jurusan RPL SMK Telkom Lampung menerapkan Project-Based Learning agar siswa jadi developer muda siap kerja.",
    category: "Teknologi",
    date: "5 Agustus 2026",
    image: "/images/news/news-rpl.webp",
    slug: "pembelajaran-jurusan-rpl-smk-telkom-lampung",
    url: "https://smktelkom-lpg.sch.id/artikel/pembelajaran-jurusan-rpl-smk-telkom-lampung--project-based-learning-wujudkan-developer-mud-20260805154638",
  },
  {
    id: "2",
    title:
      "4 Jurusan SMK Telkom Lampung yang Siap Membuka Jalan Karier Digital",
    excerpt:
      "Kenali empat jurusan SMK Telkom Lampung, mulai dari jaringan telekomunikasi, TKJ, RPL, hingga Animasi, beserta peluang kariernya.",
    category: "Jurusan",
    date: "4 Juli 2026",
    image: "/images/news/news-majors.webp",
    slug: "4-jurusan-smk-telkom-lampung-karier-digital",
    url: "https://smktelkom-lpg.sch.id/artikel/4-jurusan-smk-telkom-lampung-karier-digital",
  },
];

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Daftar ulang peserta didik baru",
    description:
      "Daftar ulang dilaksanakan pada jam kerja melalui loket administrasi sekolah.",
    date: "21 Juni 2026",
  },
  {
    id: "2",
    title: "Pemeliharaan sistem informasi akademik",
    description:
      "Akses sistem akademik sementara dibatasi saat proses pemeliharaan terjadwal.",
    date: "19 Juni 2026",
  },
];

export const events: Event[] = [
  {
    id: "1",
    title: "Perkiraan Kokurikuler I",
    location: "SMK Telkom Lampung",
    startDate: "19 Oktober 2026",
    endDate: "23 Oktober 2026",
  },
  {
    id: "2",
    title: "Perkiraan TKA",
    location: "SMK Telkom Lampung",
    startDate: "26 Oktober 2026",
    endDate: "8 November 2026",
  },
];

// Achievements data not available from source
export const achievements: Achievement[] = [];

export const telkomEcosystem = {
  description:
    "Jaringan pendidikan Telkom menaungi 32 PAUD, 3 SD, 4 SMP, dan 12 SMK yang tersebar di Indonesia. SMK Telkom Lampung menjadi bagian dari ekosistem ini untuk menghadirkan pendidikan vokasi digital di Sumatera.",
  stats: [
    { value: "32", label: "PAUD" },
    { value: "3", label: "SD" },
    { value: "4", label: "SMP" },
    { value: "12", label: "SMK" },
  ],
};

export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profile" },
  { label: "Pendidikan", href: "/program" },
  { label: "Kesiswaan", href: "/student-life" },
  { label: "Prestasi", href: "/achievement" },
  { label: "Berita", href: "/news" },
  { label: "Galeri", href: "/gallery" },
  { label: "PPDB", href: "/ppdb" },
  { label: "Kontak", href: "/contact" },
];

export const socialMedia = {
  instagram: "https://www.instagram.com/smktelkomlampung/",
  facebook: "https://www.facebook.com/smktelkomlampung",
  youtube: "https://www.youtube.com/@smktelkomlampung",
  tiktok: "https://www.tiktok.com/@smktelkomlampung",
};
