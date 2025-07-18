import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenLine, Sliders, Sparkles, LightbulbIcon, AlertCircle } from "lucide-react";
import GeneratedImage from './image-display/GeneratedImage';
import PromptInput from './image-generator/PromptInput';
import ProgressIndicator from './image-generator/ProgressIndicator';
import GenerateButton from './image-generator/GenerateButton';
import SpecialFeatures from './image-generator/SpecialFeatures';
import FAQ from './image-generator/FAQ';
import ErrorMessage from './image-generator/ErrorMessage';
import { useImageGeneration } from './image-generator/useImageGeneration';
import { Alert, AlertDescription } from "@/components/ui/alert";

const ImageGenerator = () => {
  const {
    prompt,
    setPrompt,
    isGenerating,
    generatedImage,
    timer,
    progress,
    loadingMessage,
    error,
    width,
    setWidth,
    height,
    setHeight,
    handleGenerate,
    handleDownload,
  } = useImageGeneration();

  const [isValidSize, setIsValidSize] = useState(true);
  const isServiceLimitReached = error?.includes('usage limit') || error?.includes('exceeded') || error?.includes('credits') || error?.includes('daily usage limit');

  return (
    <div className="min-h-screen w-full max-w-4xl mx-auto px-4 py-8 space-y-8">
      <header className="text-center space-y-3 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Free AI Image Generator – Unlimited, No Sign Up Needed</h1>
        <p className="text-xl text-muted-foreground">Create unlimited AI images online for free. Generate images from text instantly with our AI image creator online.</p>
      </header>

      <main>
        <section>
          {isServiceLimitReached && (
            <Alert className="mb-6 bg-amber-50 border-amber-300">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <div className="ml-2">
                <h4 className="font-semibold text-amber-800">Daily Limit Reached</h4>
                <p className="text-amber-700 text-sm mb-3">
                  Our free AI image generation service has reached its daily capacity. This helps us keep the service free for everyone.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.location.href = '/logo-generator'}
                    className="text-amber-700 border-amber-300 hover:bg-amber-100"
                  >
                    Try Logo Generator
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.location.href = '/favicon-generator'}
                    className="text-amber-700 border-amber-300 hover:bg-amber-100"
                  >
                    Try Favicon Generator
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.location.href = '/meme-generator'}
                    className="text-amber-700 border-amber-300 hover:bg-amber-100"
                  >
                    Try Meme Generator
                  </Button>
                </div>
              </div>
            </Alert>
          )}
          
          <Card className="p-6 glass-panel">
            <div className="space-y-6">
              <div className="flex flex-col gap-6">
                <PromptInput
                  prompt={prompt}
                  setPrompt={setPrompt}
                  isGenerating={isGenerating}
                  onEnterPress={handleGenerate}
                  width={width}
                  height={height}
                  setWidth={setWidth}
                  setHeight={setHeight}
                  onValidSizeChange={setIsValidSize}
                />
                <div className="flex justify-center">
                  <GenerateButton
                    onClick={handleGenerate}
                    isGenerating={isGenerating}
                    disabled={isGenerating || !prompt.trim() || !isValidSize || isServiceLimitReached}
                  />
                </div>
              </div>

              {isGenerating && (
                <p className="text-center text-muted-foreground animate-pulse">
                  {loadingMessage}
                </p>
              )}

              {error && <ErrorMessage message={error} />}

              <ProgressIndicator
                isGenerating={isGenerating}
                timer={timer}
                progress={progress}
              />

              <Card className="p-4 bg-muted/50">
                <div className="flex gap-2 items-start">
                  <LightbulbIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">Tips for Better Results:</h3>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Be very specific in your prompts (e.g., instead of "a cat", use "a Persian cat with long white fur sitting on a vintage leather armchair")</li>
                      <li>• Include details about:
                        <ul className="pl-4 mt-1">
                          <li>- Lighting conditions</li>
                          <li>- Camera angle</li>
                          <li>- Background/environment</li>
                          <li>- Mood/atmosphere</li>
                        </ul>
                      </li>
                      <li>• Avoid overly complex scenes or multiple subjects in one image</li>
                      <li>• Test different variations of your prompt to find what works best</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </section>

        {generatedImage && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Generated Image</h2>
            <GeneratedImage
              imageURL={generatedImage.imageURL}
              prompt={generatedImage.prompt}
              onDownload={handleDownload}
            />
          </section>
        )}

        <section className="mt-10">
          <div className="p-6 glass-panel space-y-6">
            <h2 className="text-2xl font-bold text-center">How Our Free AI Image Generator Works</h2>
            <ol className="space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="w-6 h-6 text-primary">✏️</span>
                </div>
                <div className="flex-1 pt-2">
                  <span className="font-bold text-primary">1.</span>
                  <span><strong>Describe Your Image:</strong> Enter a detailed text description of the image you want to generate.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="w-6 h-6 text-primary">⚙️</span>
                </div>
                <div className="flex-1 pt-2">
                  <span className="font-bold text-primary">2.</span>
                  <span><strong>Set the Size:</strong> Choose the dimensions for your image (default: 512 x 512 pixels).</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="w-6 h-6 text-primary">✨</span>
                </div>
                <div className="flex-1 pt-2">
                  <span className="font-bold text-primary">3.</span>
                  <span><strong>Generate and Download:</strong> Click "Generate" to create your image and download it instantly.</span>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-10">
          <div className="p-6 glass-panel">
            <h2 className="text-2xl font-bold text-center mb-6">Unlimited AI Image Generator Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-card border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Unlimited AI Image Generator</h3>
                <p className="text-muted-foreground">Generate unlimited AI images without any cost. No hidden fees, no credit card required. Perfect for blogs, social media, and creative projects.</p>
              </div>
              <div className="p-4 bg-card border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">No Sign-up Required</h3>
                <p className="text-muted-foreground">Start creating immediately without accounts, logins, or registration forms. Our free AI image generator no sign up process makes it simple.</p>
              </div>
              <div className="p-4 bg-card border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">AI Image Generator for Blog</h3>
                <p className="text-muted-foreground">Generate professional-grade images perfect for blog posts, social media content, or creative inspiration. Ideal for content creators.</p>
              </div>
              <div className="p-4 bg-card border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">AI Image Generator for Social Media</h3>
                <p className="text-muted-foreground">Create stunning visuals for Instagram, Facebook, Twitter, and more. Generate images from text with custom sizes for any platform.</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Why Choose Our AI Image Creator Online?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-2">Instant Generation</h4>
                  <p className="text-muted-foreground">Generate images from text free in seconds with our advanced AI technology.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-xl">🎨</span>
                  </div>
                  <h4 className="font-semibold mb-2">High Quality</h4>
                  <p className="text-muted-foreground">Create professional images perfect for blogs, social media, and marketing materials.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-xl">🔒</span>
                  </div>
                  <h4 className="font-semibold mb-2">No Registration</h4>
                  <p className="text-muted-foreground">Our free AI image generator no sign up policy ensures immediate access for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="p-6 glass-panel">
            <h2 className="text-2xl font-bold text-center mb-6">Perfect for Every Need</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold mb-2">Content Creators</h3>
                <p className="text-sm text-muted-foreground">Use our AI image creator online to generate images from text for blogs, articles, and digital content.</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold mb-2">Social Media Managers</h3>
                <p className="text-sm text-muted-foreground">Create engaging visuals with our unlimited AI image generator. Perfect for Instagram, Facebook, and Twitter.</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-lg font-semibold mb-2">Designers & Artists</h3>
                <p className="text-sm text-muted-foreground">Generate images from text free with our advanced AI technology. No sign up required for unlimited creativity.</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-center">Get Started with Our AI Image Generator</h3>
              <div className="text-center space-y-3">
                <p className="text-muted-foreground">Ready to create amazing visuals? Our free AI image generator no sign up process makes it easy to start generating images from text instantly. Whether you need images for your blog, social media, or creative projects, our AI image creator online delivers professional results every time.</p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Button variant="outline" onClick={() => window.location.href = '/logo-generator'}>
                    Try Logo Generator
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <FAQ />
        </section>
      </main>
    </div>
  );
};

export default ImageGenerator;
