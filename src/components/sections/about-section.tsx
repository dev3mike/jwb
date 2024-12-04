import { Gem } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useData } from "@/hooks/useData";

export function AboutSection() {
  const data = useData();

  return (
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
  );
}
