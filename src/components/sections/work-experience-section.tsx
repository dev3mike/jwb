import { ArrowUpRight, MapPin } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SectionMoreButton } from "@/components/section-more-button";
import { useData } from "@/hooks/useData";

export function WorkExperienceSection() {
  const data = useData();

  return (
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
                <div id="date-range">{data.workExperience[0].dateRange}</div>
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
  );
}
