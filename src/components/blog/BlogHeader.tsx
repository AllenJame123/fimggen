import { useState, useEffect } from "react";

interface BlogHeaderProps {
  title: string;
  featuredImage: string;
}

const BlogHeader = ({ title, featuredImage }: BlogHeaderProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = featuredImage;
    img.onload = () => setImageLoaded(true);
  }, [featuredImage]);

  return (
    <div className="space-y-8">
      <div className="glass-panel p-6 rounded-2xl overflow-hidden">
        <div className="relative">
          {!imageLoaded && (
            <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-xl" />
          )}
          <img
            src={featuredImage}
            alt={title}
            className={`w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1200"
            height="400"
          />
        </div>
        <h1 className="blog-title mt-6 bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BlogHeader;