
import { NextSeo } from "next-seo";
import ImageGenerator from "@/components/ImageGenerator";

const Index = () => {
  return (
    <>
      <NextSeo
        title="AI Image Generator - Create Images Online Free"
        description="AI image generator online with no sign-up required. Create unlimited high-quality images effortlessly—simple, fast, and free for all your creative needs!"
        canonical="https://aiimagegenerator.site/"
        openGraph={{
          url: "https://aiimagegenerator.site/",
          title: "AI Image Generator - Create Images Online Free",
          description: "AI image generator online with no sign-up required. Create unlimited high-quality images effortlessly—simple, fast, and free for all your creative needs!",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "AI Image Generator"
            }
          ],
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="container py-10">
        <ImageGenerator />
      </div>
    </>
  );
};

export default Index;
