
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishedAt: string;
  author: {
    name: string;
    avatar?: string;
  };
  tags: string[];
  readingTime?: number;
  metaDescription?: string;
}
