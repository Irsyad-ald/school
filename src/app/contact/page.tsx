import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi SMK Telkom Lampung. Alamat, telepon, email, dan peta lokasi.",
};

export default function Page() {
  return <ContactPage />;
}
