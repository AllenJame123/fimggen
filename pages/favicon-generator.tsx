import { GetStaticProps } from 'next';
import { NextSeo } from "next-seo";
import { useState } from "react";
import GeneratorForm from "@/components/favicon-generator/GeneratorForm";
import FaviconDisplay from "@/components/favicon-generator/FaviconDisplay";
import HowItWorks from "@/components/favicon-generator/HowItWorks";
import KeyFeatures from "@/components/favicon-generator/KeyFeatures";
import FAQ from "@/components/favicon-generator/FAQ";

const FaviconGenerator = () => {
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);

  const handleGenerateSuccess = (url: string) => {
    setFaviconUrl(url);
  };

  return (
    <>
      <NextSeo
        title="Free Favicon Generator - Create Website Icons Instantly"
        description="Generate beautiful favicons for your website instantly. Convert any image or create a new icon with our AI-powered favicon generator. Simple, fast, and free!"
        canonical="https://aiimagegenerator.site/favicon-generator/"
        openGraph={{
          url: "https://aiimagegenerator.site/favicon-generator/",
          title: "Free Favicon Generator - Create Website Icons Instantly",
          description: "Generate beautiful favicons for your website instantly. Convert any image or create a new icon with our AI-powered favicon generator. Simple, fast, and free!",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "Favicon Generator"
            }
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Free AI Favicon Generator</h1>
          <p className="text-xl text-muted-foreground">
            Create unique favicons for your website using AI. Just describe what you want!
          </p>
        </div>

        <GeneratorForm onGenerateSuccess={handleGenerateSuccess} />

        {faviconUrl && <FaviconDisplay faviconUrl={faviconUrl} />}

        <HowItWorks />
        <KeyFeatures />
        <FAQ />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 86400,
  };
};

export default FaviconGenerator; 