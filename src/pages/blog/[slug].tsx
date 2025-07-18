
import { GetStaticProps, GetStaticPaths } from 'next';
import { NextSeo } from 'next-seo';
import { BlogPost } from "@/data/types/blog";
import { blogPosts } from "@/data/blogPosts";
import BlogContent from "@/components/blog/BlogContent";
import BlogHeader from "@/components/blog/BlogHeader";
import RecentPosts from "@/components/blog/RecentPosts";

interface BlogPostPageProps {
  post: BlogPost;
  recentPosts: BlogPost[];
}

const BlogPostPage = ({ post, recentPosts }: BlogPostPageProps) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://aiimagegenerator.site/blog/${post.slug}/`}
        openGraph={{
          url: `https://aiimagegenerator.site/blog/${post.slug}/`,
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: post.title
            }
          ],
          type: 'article',
          article: {
            publishedTime: post.publishedAt,
            authors: [post.author.name],
            tags: post.tags,
          }
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="container py-10">
        <div className="max-w-4xl mx-auto">
          <BlogHeader title={post.title} featuredImage={post.featuredImage} />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            <div className="lg:col-span-3">
              <BlogContent content={post.content} />
            </div>
            <div className="lg:col-span-1">
              <RecentPosts excludeSlug={post.slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = Object.values(blogPosts);
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = Object.values(blogPosts);
  const post = posts.find(p => p.slug === params?.slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  const recentPosts = posts.filter(p => p.slug !== post.slug).slice(0, 4);

  return {
    props: {
      post,
      recentPosts,
    },
    revalidate: 3600,
  };
};

export default BlogPostPage;
