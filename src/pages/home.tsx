import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { WorkExperienceSection } from "@/components/sections/work-experience-section";
import BlurFade from "@/components/ui/blur-fade";
export function HomePage() {
  return (
    <BlurFade delay={0.2}>
      <div className="space-y-3">
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <WorkExperienceSection />
      </div>
    </BlurFade>
  );
}