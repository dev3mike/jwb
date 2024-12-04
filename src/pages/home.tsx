import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { WorkExperienceSection } from "@/components/sections/work-experience-section";
import BlurFade from "@/components/ui/blur-fade";
import { useData } from "@/hooks/useData";
import { Helmet } from "react-helmet";

export function HomePage() {
  const data = useData();
  return (
    <BlurFade delay={0.2}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.profile.name} | Homepage</title>
        <meta name="description" content={data.profile.bio} />
      </Helmet>
      <div className="space-y-3">
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <WorkExperienceSection />
      </div>
    </BlurFade>
  );
}
