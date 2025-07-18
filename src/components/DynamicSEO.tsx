import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

interface DynamicSEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

const DynamicSEO = ({ title, description, image, canonical }: DynamicSEOProps) => {
  const router = useRouter();
  const url = canonical || `https://aiimagegenerator.site${router.asPath}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: image ? [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title || 'AI Image Generator',
          },
        ] : [],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default DynamicSEO;
