import type { Metadata } from "next";
import GalleryPage from "./GalleryPage";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri foto dan dokumentasi kegiatan SMK Telkom Lampung.",
};

export default function Page() {
  return <GalleryPage />;
}
