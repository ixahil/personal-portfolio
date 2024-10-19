import BlogSection from "@/components/sections/blogs-section";
import CertificationSection from "@/components/sections/certification-section";
import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectSection from "@/components/sections/projects-section";
import TechStack from "@/components/sections/tech-stack";
import TestimonialSection from "@/components/sections/testimonials-section";
import WorkExperienceSection from "@/components/sections/work-experience-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <WorkExperienceSection />
      <EducationSection />
      <CertificationSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
      <TechStack />
    </>
  );
}
