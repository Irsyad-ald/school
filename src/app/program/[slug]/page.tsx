import { notFound } from "next/navigation";
import { programs } from "@/lib/data/school";
import ProgramDetail from "./ProgramDetail";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();
  return <ProgramDetail program={program} />;
}
