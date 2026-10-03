import type { Metadata } from "next";
import AchievementPage from "./AchievementPage";

export const metadata: Metadata = {
  title: "Prestasi",
  description:
    "Prestasi siswa dan sekolah SMK Telkom Lampung dalam berbagai kompetisi dan sertifikasi.",
};

export default function Page() {
  return <AchievementPage />;
}
