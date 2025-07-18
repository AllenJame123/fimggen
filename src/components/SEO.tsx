
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

const DEFAULT_TITLE = "AI Image Generator - Create Images Online Free";
const DEFAULT_DESCRIPTION = "AI image generator online with no sign-up required. Create unlimited high-quality images effortlessly—simple, fast, and free for all your creative needs!";
const DEFAULT_IMAGE = "/og-image.png";
const SITE_URL = "https://aiimagegenerator.site";

const SEO = ({ 
  title = DEFAULT_TITLE, 
  description = DEFAULT_DESCRIPTION, 
  image = DEFAULT_IMAGE, 
  article = false 
}: SEOProps) => {
  // Ensure we have a valid URL for the current page
  const url = typeof window !== 'undefined' 
    ? `${SITE_URL}${window.location.pathname}`
    : SITE_URL;
    
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  
  return (
    <Helmet prioritizeSeoTags>
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
      
      {/* Add preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Add structured data for better SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": article ? "Article" : "WebSite",
          "name": title,
          "description": description,
          "image": fullImageUrl,
          "url": url,
          "publisher": {
            "@type": "Organization",
            "name": "AI Image Generator",
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/favicon.svg`
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
