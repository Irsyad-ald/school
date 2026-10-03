import Hero from "@/components/sections/Hero";
import QuickStats from "@/components/sections/QuickStats";
import About from "@/components/sections/About";
import WhySection from "@/components/sections/WhySection";
import Programs from "@/components/sections/Programs";
import BMWPathway from "@/components/sections/BMWPathway";
import StudentWork from "@/components/sections/StudentWork";
import NewsSection from "@/components/sections/NewsSection";
import AgendaSection from "@/components/sections/AgendaSection";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import Ecosystem from "@/components/sections/Ecosystem";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickStats />
      <About />
      <WhySection />
      <Programs />
      <BMWPathway />
      <StudentWork />
      <PrincipalMessage />
      <NewsSection />
      <AgendaSection />
      <Ecosystem />
      <CTASection />
      <ContactSection />
    </>
  );
}
