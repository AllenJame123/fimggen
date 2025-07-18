import Link from 'next/link';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { BlogPost } from "@/data/types/blog";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  isLoading: boolean;
}

const BlogCard = ({ post, isLoading }: BlogCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const img = new Image();
      img.src = post.featuredImage;
      img.onload = () => setImageLoaded(true);
    }
  }, [isLoading, post?.featuredImage]);

  if (isLoading) {
    return (
      <Card className="h-full overflow-hidden group">
        <div className="relative">
          <Skeleton className="w-full h-56" />
        </div>
        <CardContent className="p-6">
          <Skeleton className="h-6 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex items-center gap-2 mt-4">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-24" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full group">
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-0 shadow-lg">
        <div className="relative overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse" />
          )}
          <img
            src={post.featuredImage}
            alt={post.title}
            className={`w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            width="400"
            height="300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            {post.metaDescription || post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>Recent</span>
            </div>
            <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all duration-200">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
