import type { Metadata } from "next";
import StudentLifePage from "./StudentLifePage";

export const metadata: Metadata = {
  title: "Kehidupan Siswa",
  description:
    "Pengalaman belajar dan kehidupan siswa di SMK Telkom Lampung.",
};

export default function Page() {
  return <StudentLifePage />;
}
