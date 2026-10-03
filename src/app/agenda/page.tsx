import type { Metadata } from "next";
import AgendaPage from "./AgendaPage";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Agenda dan kegiatan terjadwal SMK Telkom Lampung.",
};

export default function Page() {
  return <AgendaPage />;
}
