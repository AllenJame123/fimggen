
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

function getRandomPosts(posts, count) {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const RecentPosts = ({ excludeSlug }: { excludeSlug?: string }) => {
  const allPosts = Object.values(blogPosts).filter(post => post.slug !== excludeSlug);
  // Show the first 5 posts by default (SSR-safe)
  const [posts, setPosts] = useState(allPosts.slice(0, 5));

  useEffect(() => {
    setPosts(getRandomPosts(allPosts, 5));
    // eslint-disable-next-line
  }, [excludeSlug]);

  return (
    <Card className="p-6 rounded-2xl shadow-lg bg-white/90 border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg text-gray-900">Recent Posts</h3>
      </div>
      <CardContent className="p-0">
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="block text-base font-medium text-gray-800 hover:text-primary transition-colors rounded-lg px-2 py-1 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
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

export default RecentPosts;
