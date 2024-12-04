import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { useData } from "@/hooks/useData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useMobile } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet";

export function ProjectPage() {
  const { slug } = useParams();
  const data = useData();
  const isMobile = useMobile();
  const allProjects = [...data.projects.featured, ...data.projects.list];
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <BlurFade delay={0.2}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {project.name} | {data.profile.name}
        </title>
        <meta name="description" content={`My Projects | ${project.name}`} />
      </Helmet>
      <Card>
        <CardTitle>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm hover:text-orange-500 text-muted-foreground mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-2xl text-white">{project.name}</h1>
        </CardTitle>
        <CardContent className="p-4 pt-2 space-y-6">
          <div className="flex flex-wrap gap-2 items-center">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.image && (
            <div>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg w-full"
              />
            </div>
          )}

          <div className="space-y-4">
            <div dangerouslySetInnerHTML={{ __html: project.description }} />

            <div
              className={cn(
                "flex flex-wrap gap-8 text-sm",
                isMobile && "flex-col gap-0"
              )}
            >
              {project.link_url && (
                <a
                  href={project.link_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-orange-500 hover:text-orange-500"
                >
                  {project.link_text}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.link2_url && (
                <a
                  href={project.link2_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-orange-500 hover:text-orange-500"
                >
                  {project.link2_text}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              {project.link3_url && (
                <a
                  href={project.link3_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-orange-500 hover:text-orange-500"
                >
                  {project.link3_text}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            {project.youtube_url && (
              <div className="aspect-video p-2 rounded-lg overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${
                    project.youtube_url.split("v=")[1]
                  }`}
                  title={project.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}
