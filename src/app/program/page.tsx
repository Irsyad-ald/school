import type { Metadata } from "next";
import ProgramsPage from "./ProgramsPage";

export const metadata: Metadata = {
  title: "Konsentrasi Keahlian",
  description:
    "4 Konsentrasi Keahlian SMK Telkom Lampung: Teknik Jaringan Akses Telekomunikasi, Teknik Komputer dan Jaringan, Rekayasa Perangkat Lunak, dan Animasi.",
};

export default function Page() {
  return <ProgramsPage />;
}
