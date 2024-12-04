import BlurFade from "@/components/ui/blur-fade";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useData } from "@/hooks/useData";
import { allSupportedPlatforms } from "@/lib/social-links-helper";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export function ContactPage() {
  const data = useData();

  // Split email into parts for styling
  const [username, domain] = data.contact.public_email.split("@");

  return (
    <BlurFade delay={0.2}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.profile.name} | Contact</title>
        <meta
          name="description"
          content={`Do you want to get in touch with ${data.profile.name}?`}
        />
      </Helmet>
      <div className="space-y-8">
        <Card>
          <CardTitle>Get in Touch</CardTitle>
          <CardContent className="p-6">
            <div>
              <div className="space-y-4">
                <p className="text-lg">
                  {data.contact.message.split("\n").map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </p>

                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">You can reach me at:</p>
                  <code className="block mt-2 text-primary">
                    {username}
                    <span className="text-orange-500"> [at] </span>
                    {domain}
                  </code>
                </div>

                {data.contact.show_social_links && (
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="font-medium mb-2">You can also find me on:</p>
                    <div className="flex flex-col gap-1">
                      {Object.entries(data.socialLinks).map(([key, value]) => (
                        <Link
                          key={key}
                          to={value}
                          target="_blank"
                          className="text-sm text-muted-foreground hover:text-muted-foreground"
                        >
                          {
                            allSupportedPlatforms.find(
                              (platform) => platform.key === key
                            )?.title
                          }
                          : <span className="text-white">{value}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BlurFade>
  );
}
