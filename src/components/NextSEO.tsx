
import Head from 'next/head';
import { useRouter } from '@/components/RouterProvider';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  canonical?: string;
}

const DEFAULT_TITLE = "AI Image Generator - Create Images Online Free";
const DEFAULT_DESCRIPTION = "AI image generator online with no sign-up required. Create unlimited high-quality images effortlessly—simple, fast, and free for all your creative needs!";
const DEFAULT_IMAGE = "/og-image.png";
const SITE_URL = "https://aiimagegenerator.site";

const NextSEO = ({ 
  title = DEFAULT_TITLE, 
  description = DEFAULT_DESCRIPTION, 
  image = DEFAULT_IMAGE, 
  article = false,
  canonical
}: SEOProps) => {
  const router = useRouter();
  const url = canonical || `${SITE_URL}${router.asPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content={article ? "article" : "website"} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional tags for SSR benefits */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default NextSEO;
