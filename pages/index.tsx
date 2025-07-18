import { NextSeo } from "next-seo";
import ImageGenerator from "@/components/ImageGenerator";

const Index = () => {
  return (
    <>
      <NextSeo
        title="Free AI Image Generator – Unlimited, No Sign Up Needed"
        description="Create unlimited AI images online for free. No sign up required. Generate art, photos, and graphics instantly with our easy AI image generator."
        canonical="https://aiimagegenerator.site/"
        openGraph={{
          url: "https://aiimagegenerator.site/",
          title: "Free AI Image Generator – Unlimited, No Sign Up Needed",
          description: "Create unlimited AI images online for free. No sign up required. Generate art, photos, and graphics instantly with our easy AI image generator.",
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