import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SectionMoreButton } from "@/components/section-more-button";
import { useData } from "@/hooks/useData";
import { useMobile } from "@/hooks/useMobile";

export function BlogSection() {
  const data = useData();
  const isMobile = useMobile();

  if (!data.blog.show_blog_section_in_homepage) {
    return null;
  }

  return (
    <section>
      <Card>
        <CardTitle>Blog</CardTitle>
        <CardContent className="p-4">
          <div className="border-b pb-4">
            <div className="grid grid-cols-1 gap-6">
              {data.blog.posts.slice(0, 4).map((post, i) => (
                <div key={i} className="flex gap-4">
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
                  {post.image && !isMobile && (
                    <div>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="rounded-md w-[120px] max-h-[150px]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <SectionMoreButton href="/blog" title="View my blog" />
        </CardContent>
      </Card>
    </section>
  );
}
