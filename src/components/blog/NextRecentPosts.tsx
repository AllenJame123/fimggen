
import Link from "next/link";
import { BlogPost } from "@/data/types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export interface RecentPostsProps {
  posts: BlogPost[];
  currentSlug: string;
}

const NextRecentPosts = ({ posts, currentSlug }: RecentPostsProps) => {
  // Get 6 random posts (excluding current post)
  const availablePosts = posts.filter(post => post.slug !== currentSlug);
  const randomPosts = availablePosts
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4" />
        <h3 className="font-semibold">Popular Posts</h3>
      </div>
      <CardContent className="p-0">
        <ul className="space-y-3">
          {randomPosts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/${post.slug}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-2"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default NextRecentPosts;
