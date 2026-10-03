import type { Metadata } from "next";
import PPDBPage from "./PPDBPage";

export const metadata: Metadata = {
  title: "Penerimaan Peserta Didik Baru (PPDB)",
  description:
    "Informasi Penerimaan Peserta Didik Baru (PPDB) SMK Telkom Lampung. Daftar sekarang dan mulai perjalanan digital Anda.",
};

export default function Page() {
  return <PPDBPage />;
}
