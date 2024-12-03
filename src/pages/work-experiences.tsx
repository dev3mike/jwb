import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useData } from "@/hooks/useData";
import BlurFade from "@/components/ui/blur-fade";

export function WorkExperiencesPage() {
  const data = useData();

  return (
    <BlurFade delay={0.2}>
      <div className="space-y-6">
        <section>
          <Card>
            <CardTitle>Work Experiences</CardTitle>
            <CardContent className="p-4">
              <div className="relative space-y-3 ml-5">
                <div className="absolute left-[5px] top-[12px] bottom-[40px] w-[2px] bg-orange-500/20 dark:bg-orange-500/20" />

                {data.workExperience.map((experience, index) => (
                  <div key={index} className="relative pb-8 pl-8">
                    <div className="absolute left-[0px] top-[12px] h-[10px] w-[10px] rounded-full bg-orange-500 ring-[4px] ring-orange-500/20" />

                    <h2 className="text-lg font-bold">{experience.title}</h2>
                    <div>
                      <a
                        href={experience.company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm dark:text-orange-500 hover:underline"
                      >
                        {experience.company.name}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="flex gap-5 text-muted-foreground mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                      <div>{experience.dateRange}</div>
                    </div>
                    <div className="text-muted-foreground mt-4">
                      {experience.description}
                    </div>
                    {experience.achievements && (
                      <div className="mt-4">
                        <h4 className="text-md mb-2">Key Achievements</h4>
                        <ul className="list-disc list-inside space-y-0 text-muted-foreground">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </BlurFade>
  );
}
