import { ArrowUpRight, MapPin } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SectionMoreButton } from "@/components/section-more-button";
import { useData } from "@/hooks/useData";

export function WorkExperienceSection() {
  const data = useData();
  const recentExperiences = data.workExperiences.slice(0, 3);

  return (
    <section>
      <Card>
        <CardTitle>Work Experiences</CardTitle>
        <CardContent className="p-4">
          <div className="space-y-4">
            {recentExperiences.map((experience, index) => (
              <div
                key={experience.company.name}
                className={`${
                  index !== recentExperiences.length - 1 ? "border-b pb-4" : ""
                }`}
              >
                <h2 className="text-lg font-bold mb-0">{experience.title}</h2>
                <div className="text-sm">
                  <div id="company-name">
                    <a
                      href={experience.company.url}
                      className="flex items-center gap-1 dark:text-orange-500 dark:hover:text-orange-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.company.name}{" "}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex gap-5 text-muted-foreground mt-2">
                    <div id="location" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </div>
                    <div id="date-range">{experience.dateRange}</div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground line-clamp-6">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SectionMoreButton
            href="/work-experiences"
            title="View All Work Experiences"
          />
        </CardContent>
      </Card>
    </section>
  );
}
