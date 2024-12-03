import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function SectionMoreButton({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <div className="text-center mt-4">
      <Link
        to={href}
        className="flex items-center justify-center gap-2 text-sm text-muted-foreground dark:hover:text-orange-500"
      >
        {title}
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
