import type { Metadata } from "next";
import NewsPage from "./NewsPage";

export const metadata: Metadata = {
  title: "Berita & Artikel",
  description:
    "Berita dan artikel terbaru dari SMK Telkom Lampung — The Real Informatics School.",
};

export default function Page() {
  return <NewsPage />;
}
