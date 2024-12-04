import BlurFade from "@/components/ui/blur-fade";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useData } from "@/hooks/useData";
import { Helmet } from "react-helmet";
import { Navigate, useParams } from "react-router-dom";

export function CustomPage() {
  const data = useData();
  const { slug } = useParams();

  const customPage = data.customPages.find((page) => page.slug === slug);

  if (!customPage) {
    // redirect to home page
    return <Navigate to="/" />;
  }

  return (
    <BlurFade delay={0.2}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.profile.name}</title>
        <meta
          name="description"
          content={`${customPage.title} | ${data.profile.name}`}
        />
      </Helmet>
      <div className="space-y-8">
        <Card>
          <CardTitle>{customPage.title}</CardTitle>
          <CardContent className="p-6">
            <div dangerouslySetInnerHTML={{ __html: customPage.content }}></div>
          </CardContent>
        </Card>
      </div>
    </BlurFade>
  );
}
