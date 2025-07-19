import { NextSeo } from "next-seo";
import type { NextPage } from "next";
import { useState } from "react";
import MemeForm from "@/components/meme-generator/MemeForm";
import GeneratedMeme from "@/components/meme-generator/GeneratedMeme";
import SpecialFeatures from "@/components/meme-generator/SpecialFeatures";
import HowItWorks from "@/components/meme-generator/HowItWorks";
import FAQ from "@/components/meme-generator/FAQ";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const MemeGenerator: NextPage = () => {
  const [generatedMeme, setGeneratedMeme] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const handleGenerate = async (prompt: string, top: string, bottom: string) => {
    setIsGenerating(true);
    setProgress(0);
    
    try {
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90));
      }, 500);

      console.log('Attempting to generate meme with prompt:', prompt);
      
      const { data, error } = await supabase.functions.invoke("generate-meme", {
        body: { 
          prompt,
          model: "stabilityai/stable-diffusion-2",
        }
      });

      clearInterval(progressInterval);
      
      console.log('Meme generation response:', { data, error });
      
      if (error) {
        console.error("Function error:", error);
        
        // Enhanced error handling with more specific messages
        if (error.message?.includes('JWT') || error.message?.includes('auth token')) {
          throw new Error('Authentication error with Edge Function. JWT verification has been disabled, please try again.');
        } else if (error.message?.includes('401') || error.message?.includes('auth')) {
          throw new Error('Authentication error. Please ensure the Hugging Face API key is set in Supabase secrets.');
        } else {
          throw error;
        }
      }

      if (!data?.success || !data?.imageUrl) {
        throw new Error(data?.error || "No image URL returned from generation");
      }

      setGeneratedMeme(data.imageUrl);
      setTopText(top);
      setBottomText(bottom);
      setProgress(100);
      toast.success("Meme generated successfully!");
    } catch (error: unknown) {
      console.error("Error generating meme:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to generate meme. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUpdateText = (position: 'top' | 'bottom', text: string) => {
    if (position === 'top') {
      setTopText(text);
    } else {
      setBottomText(text);
    }
  };

  const handleDownload = () => {
    if (!generatedMeme) return;
    
    try {
      const canvas = document.querySelector("canvas") as HTMLCanvasElement;
      if (!canvas) {
        throw new Error("Canvas not found");
      }

      const link = document.createElement("a");
      link.download = `meme-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Meme downloaded successfully!");
    } catch (error) {
      console.error("Error downloading meme:", error);
      toast.error("Failed to download meme");
    }
  };

  return (
    <>
      <NextSeo
        title="AI Meme Generator - Create Custom Memes Online Free"
        description="Create hilarious, custom memes with our AI-powered meme generator. Choose from templates or upload your own images. Easy to use and completely free!"
        canonical="https://aiimagegenerator.site/meme-generator"
        openGraph={{
          url: "https://aiimagegenerator.site/meme-generator",
          title: "AI Meme Generator - Create Custom Memes Online Free",
          description: "Create hilarious, custom memes with our AI-powered meme generator. Choose from templates or upload your own images. Easy to use and completely free!"
        }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Free AI Meme Generator</h1>
          <p className="text-xl text-muted-foreground">Create and customize hilarious memes in seconds</p>
        </div>

        <Card className="p-6">
          <MemeForm 
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            progress={progress}
          />
        </Card>

        {generatedMeme && (
          <GeneratedMeme 
            imageUrl={generatedMeme}
            topText={topText}
            bottomText={bottomText}
            onDownload={handleDownload}
            onUpdateText={handleUpdateText}
          />
        )}

        <HowItWorks />

        <Card className="p-6">
          <SpecialFeatures />
        </Card>

        <FAQ />
      </div>
    </>
  );
};

export default MemeGenerator; 