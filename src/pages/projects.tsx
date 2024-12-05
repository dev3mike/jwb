import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useData } from "@/hooks/useData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/useMobile";
import { Helmet } from "react-helmet";

const PROJECTS_PER_PAGE = 5;

export function ProjectsPage() {
  const data = useData();
  const isMobile = useMobile();
  const allProjects = [...data.projects.featured, ...data.projects.list];
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = allProjects.slice(startIndex, endIndex);

  return (
    <BlurFade delay={0.2}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.profile.name} | Projects</title>
        <meta
          name="description"
          content={`Check out ${data.profile.name}'s projects`}
        />
      </Helmet>
      <Card>
        <CardTitle>All Projects</CardTitle>
        <CardContent className="p-4 space-y-4">
          {currentProjects.map((project, i) => (
            <div key={i} className="flex gap-4 border rounded-md p-4">
              <div className="flex-1">
                <div>
                  <Link to={`/projects/${project.slug}`}>
                    <h2 className="text-lg font-bold hover:text-orange-500 text-white truncate">
                      {project.name}
                    </h2>
                  </Link>
                  <p
                    className="text-sm text-muted-foreground line-clamp-4"
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  />
                  <div className="flex gap-6 mt-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-orange-500 dark:hover:text-orange-500"
                    >
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              {project.image && !isMobile && (
                <div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-md w-[200px] max-h-[150px]"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {Math.max(totalPages, 1)}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages || totalPages === 0}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}
