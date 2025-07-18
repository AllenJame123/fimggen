import { GetStaticProps } from 'next';
import { NextSeo } from "next-seo";
import Editor from "@/components/text-on-photo/Editor";
import HowItWorks from "@/components/text-on-photo/HowItWorks";
import WhyChooseUs from "@/components/text-on-photo/WhyChooseUs";
import FAQ from "@/components/text-on-photo/FAQ";
import Tips from "@/components/text-on-photo/Tips";

const TextOnPhoto = () => {
  return (
    <>
      <NextSeo
        title="Add Text to Photos Online - Free Photo Text Editor"
        description="Add text to your photos easily with our free online editor. Customize fonts, colors, and styles. Perfect for creating social media posts, memes, and more!"
        canonical="https://aiimagegenerator.site/add-text-to-photo/"
        openGraph={{
          url: "https://aiimagegenerator.site/add-text-to-photo/",
          title: "Add Text to Photos Online - Free Photo Text Editor",
          description: "Add text to your photos easily with our free online editor. Customize fonts, colors, and styles. Perfect for creating social media posts, memes, and more!",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "Add Text to Photo"
            }
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Add Text to Photos Online</h1>
          <p className="text-lg text-muted-foreground">
            Easily add and customize text on your images with our free online editor
          </p>
        </div>

        <Editor />
        <Tips />
        <HowItWorks />
        <WhyChooseUs />
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

export default TextOnPhoto; 