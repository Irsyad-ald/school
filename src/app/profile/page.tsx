import type { Metadata } from "next";
import ProfilePage from "./ProfilePage";

export const metadata: Metadata = {
  title: "Profil Sekolah",
  description:
    "Profil SMK Telkom Lampung — The Real Informatics School. Sejarah, visi misi, kepala sekolah, dan identitas sekolah.",
};

export default function Page() {
  return <ProfilePage />;
}
