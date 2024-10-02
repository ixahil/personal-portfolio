import ContactSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/projects-section";
import TechStack from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ContactSection />
      <TechStack />
    </>
  );
}
