
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from "react";
import { BlogPost } from "@/data/types/blog";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/blog/BlogCard";

interface BlogPageProps {
  posts: BlogPost[];
}

const Blog = ({ posts }: BlogPageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start preloading images immediately
    posts.forEach(post => {
      const img = new Image();
      img.src = post.featuredImage;
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [posts]);

  return (
    <>
      <NextSeo
        title="AI Image Generation Blog - Tips, Tutorials & Updates"
        description="Explore the latest in AI image generation. Learn tips, tricks, and best practices for creating stunning AI-generated images, logos, and more."
        canonical="https://aiimagegenerator.site/blog/"
        openGraph={{
          url: "https://aiimagegenerator.site/blog/",
          title: "AI Image Generation Blog - Tips, Tutorials & Updates",
          description: "Explore the latest in AI image generation. Learn tips, tricks, and best practices for creating stunning AI-generated images, logos, and more.",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "AI Image Generation Blog"
            }
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container max-w-7xl mx-auto py-12 px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Image Generation Blog
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore the latest in AI image generation. Learn tips, tricks, and best practices for creating stunning AI-generated images, logos, and more.
            </p>
          </div>
          
          {posts && posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} isLoading={isLoading} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">No Posts Yet</h3>
                <p className="text-slate-600">Check back soon for exciting new blog posts!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = Object.values(blogPosts);
  
  return {
    props: {
      posts,
    },
    revalidate: 3600, // Revalidate every hour
  };
};

export default Blog;
