import { SectionMoreButton } from "@/components/section-more-button";
import { Slider } from "@/components/slider";
import BlurFade from "@/components/ui/blur-fade";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Gem, MapPin } from "lucide-react";
import { useData } from "@/hooks/useData";
import { Link } from "react-router-dom";

export function HomePage() {
  const data = useData();

  return (
    <BlurFade delay={0.2}>
      <div className="space-y-3">
        <section>
          <Card>
            <CardTitle>About Me</CardTitle>
            <CardContent className="p-4">
              <div>{data.about.description}</div>
              <div id="top-skills" className="border rounded-md p-4 mt-6">
                <h2 className="flex items-center gap-2 text-sm dark:text-orange-500 mb-2">
                  <Gem className="h-4 w-4" />
                  Top Skills
                </h2>
                <ul className="grid grid-cols-3 gap-1 text-sm">
                  {data.skills.top.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
        {data.projects.show_projects_section_in_homepage && (
          <section>
            <Card>
              <CardTitle>Projects</CardTitle>
              <CardContent className="p-4">
                {/* Pinned Project */}
                <div className="border-b pb-4">
                  {data.projects.featured.map((project, i) => (
                    <div
                      key={i}
                      className="flex gap-4 border rounded-md p-4 mb-4"
                    >
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
                    <div
                      key={i}
                      className="border rounded-md p-4 w-[220px] h-[100px]"
                    >
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
        )}
        {data.blog.show_blog_section_in_homepage && (
          <section>
            <Card>
              <CardTitle>Blog</CardTitle>
              <CardContent className="p-4">
                <div className="border-b pb-4">
                  <div className="grid grid-cols-1 gap-6">
                    {data.blog.posts.map((post) => (
                      <div key={post.slug} className="flex gap-4">
                        <div className="flex-1">
                          <h2 className="text-lg font-bold hover:text-orange-500 dark:hover:text-orange-500">
                            <a
                              href={`${post.link_url}`}
                              className="flex items-center gap-1 text-white dark:hover:text-orange-500 line-clamp-2"
                              target="_blank"
                              title={post.title}
                            >
                              {post.title}
                            </a>
                          </h2>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {post.short_description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="rounded-md w-[120px] h-[80px] object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <SectionMoreButton href="/blog" title="View my blog" />
              </CardContent>
            </Card>
          </section>
        )}
        <section>
          <Card>
            <CardTitle>Work Experiences</CardTitle>
            <CardContent className="p-4">
              <div className="border-b pb-4">
                <h2 className="text-lg font-bold mb-0">
                  {data.workExperience[0].title}
                </h2>
                <div className="text-sm">
                  <div id="company-name">
                    <a
                      href={data.workExperience[0].company.url}
                      className="flex items-center gap-1 dark:text-orange-500 dark:hover:text-orange-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.workExperience[0].company.name}{" "}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex gap-5 text-muted-foreground mt-2">
                    <div id="location" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {data.workExperience[0].location}
                    </div>
                    <div id="date-range">
                      {data.workExperience[0].dateRange}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground line-clamp-6">
                      {data.workExperience[0].description}
                    </p>
                  </div>
                </div>
              </div>
              <SectionMoreButton
                href="/work-experiences"
                title="View All Work Experiences"
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </BlurFade>
  );
}
