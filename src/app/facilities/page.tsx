import type { Metadata } from "next";
import FacilitiesPage from "./FacilitiesPage";

export const metadata: Metadata = {
  title: "Fasilitas",
  description: "Fasilitas dan sarana prasarana SMK Telkom Lampung.",
};

export default function Page() {
  return <FacilitiesPage />;
}
