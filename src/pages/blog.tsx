import { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { useData } from "@/hooks/useData";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 20;

export function BlogPage() {
  const data = useData();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.blog.posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = data.blog.posts.slice(startIndex, endIndex);

  return (
    <BlurFade delay={0.2}>
      <Card>
        <CardTitle>Blog Posts</CardTitle>
        <CardContent className="p-4 space-y-6">
          {currentPosts.map((post) => (
            <div key={post.slug} className="flex gap-4 border rounded-md p-4">
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
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  {post.short_description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-md w-[200px] h-[120px] object-cover"
                />
              )}
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}
