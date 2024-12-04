import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SectionMoreButton } from "@/components/section-more-button";
import { Slider } from "@/components/slider";
import { useData } from "@/hooks/useData";

export function ProjectsSection() {
  const data = useData();

  if (!data.projects.show_projects_section_in_homepage) {
    return null;
  }

  return (
    <section>
      <Card>
        <CardTitle>Projects</CardTitle>
        <CardContent className="p-4">
          {/* Pinned Projects */}
          <div>
            {data.projects.featured.map((project, i) => (
              <div key={i} className="flex gap-4 border rounded-md p-4 mb-4">
                <div className="flex-1">
                  <div>
                    <h2 className="text-lg font-bold truncate">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="hover:text-orange-500 text-white"
                      >
                        {project.name}
                      </Link>
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-4">
                      {project.description}
                    </p>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground dark:hover:text-orange-500 mt-4"
                    >
                      {project.link_text}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt="Project"
                  className="rounded-md max-w-[200px]"
                />
              </div>
            ))}
          </div>
          <Slider
            perView={3}
            spacing={10}
            className="h-[100px]"
            items={data.projects.list.map((project, i) => (
              <div key={i} className="border rounded-md p-4 w-[220px] h-[100px]">
                <Link
                  to={`/projects/${project.slug}`}
                  className="hover:text-orange-500 text-white"
                >
                  <h3 className="text-md truncate">{project.name}</h3>
                </Link>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          />
          <SectionMoreButton href="/projects" title="View All Projects" />
        </CardContent>
      </Card>
    </section>
  );
}
