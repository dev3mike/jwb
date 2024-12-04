import { Link, useLocation } from "react-router-dom";
import { MapPin } from "lucide-react";
import { cn, getStatusThemeClassnames } from "@/lib/utils";
import { allSupportedPlatformsGrayScaleFast } from "@/lib/social-links-helper";
import BlurFade from "./ui/blur-fade";
import { useData } from "@/hooks/useData";

export function Sidebar() {
  const data = useData();
  const location = useLocation();
  const statusTheme = getStatusThemeClassnames(data.profile.status_theme);

  return (
    <div>
      <div className="sticky top-8 space-y-2">
        <div className="text-left">
          <BlurFade delay={0.25}>
            {data.profile.show_avatar_image && (
              <div className="relative mb-4 max-w-[256px] max-h-[400px] overflow-hidden rounded-lg">
                <img src={"/images/avatar.jpg"} alt={data.profile.name} />
              </div>
            )}
          </BlurFade>
          <BlurFade delay={0.45}>
            <h1 className="text-2xl mb-0">{data.profile.name}</h1>
            <p className="text-lg text-muted-foreground">
              {data.profile.title}
            </p>

            <div className="mt-2 mb-6 flex flex-wrap items-center gap-4">
              <span
                className={cn(
                  "px-2 py-1 inline-flex items-center rounded-full text-xs",
                  statusTheme.parent
                )}
              >
                <span
                  className={cn(
                    "inline-block mr-2 rounded-full",
                    statusTheme.icon
                  )}
                ></span>
                {data.profile.status}
              </span>

              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {data.profile.location}
              </span>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={0.55}>
          <div className="space-y-9">
            <p className="text-pretty text-sm text-muted-foreground">
              {data.profile.bio}
            </p>
            <nav className="flex flex-col">
              {data.navigation.links.map((link) => {
                const isActive = location.pathname === link.url.toLowerCase();
                return (
                  <Link
                    key={link.url}
                    to={link.url.toLowerCase()}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    className={cn(
                      "text-muted-foreground underline-offset-4 hover:bg-accent hover:text-accent-foreground rounded-md text-md transition-colors py-1",
                      isActive && "text-orange-500 font-medium"
                    )}
                  >
                    <span className="text-muted-foreground opacity-30 mr-1">
                      -
                    </span>
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="pt-10 grid grid-cols-11 gap-1">
            {Object.entries(data.socialLinks).map(([key, value]) => (
              <a key={key} href={value} aria-label={key} target="_blank">
                <img
                  src={allSupportedPlatformsGrayScaleFast[key].icon_url}
                  className="w-5 h-5 grayscale opacity-50 hover:opacity-80 transition-all ease-in-out duration-300"
                />
              </a>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
