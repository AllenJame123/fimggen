
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wand2, Download, LightbulbIcon } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GeneratorSection = () => {
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt for your logo");
      return;
    }

    try {
      setIsGenerating(true);
      console.log('Attempting to generate logo with prompt:', prompt.trim());
      
      const { data, error } = await supabase.functions.invoke('generate-logo', {
        body: { prompt: prompt.trim() }
      });

      console.log('Logo generation response:', { data, error });

      if (error) {
        console.error('Function error:', error);
        
        // Enhanced error handling with more specific messages
        if (error.message?.includes('JWT') || error.message?.includes('auth token')) {
          throw new Error('Authentication error with Edge Function. JWT verification has been disabled, please try again.');
        } else if (error.message?.includes('401') || error.message?.includes('auth')) {
          throw new Error('Authentication error. Please ensure the Hugging Face API key is set in Supabase secrets.');
        } else {
          throw error;
        }
      }

      if (!data?.success || !data?.image) {
        throw new Error(data?.error || 'Failed to generate logo');
      }

      setLogoUrl(data.image);
      toast.success('Logo generated successfully!');
    } catch (error: unknown) {
      console.error('Error generating logo:', error);
      toast.error((error as Error).message || 'Failed to generate logo. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isGenerating) {
      handleGenerate();
    }
  };

  const handleDownload = async (format: string) => {
    try {
      const response = await fetch(logoUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `logo-${Date.now()}.${format}`;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success(`Logo downloaded as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Error downloading logo:', error);
      toast.error('Failed to download logo');
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6 glass-panel">
        <div className="space-y-6">
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <div className="relative space-y-2">
              <div className="flex gap-2">
                <Input
                  placeholder="Describe your logo (e.g., 'modern tech company logo with abstract shapes')"
                  value={prompt}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 150) {
                      setPrompt(value);
                    }
                  }}
                  onKeyPress={handleKeyPress}
                  className="w-full h-14 pl-4 pr-12 text-lg bg-white/50 backdrop-blur-sm border-2 focus:border-primary"
                  disabled={isGenerating}
                  maxLength={150}
                />
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="primary-gradient h-14 px-8"
                >
                  {isGenerating ? (
                    <>
                      <Wand2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4 mr-2" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
              <div className="flex justify-end">
                <span className={`text-sm ${prompt.length === 150 ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {prompt.length}/150
                </span>
              </div>
            </div>
          </div>

          <Card className="p-4 bg-muted/50">
            <div className="flex gap-2 items-start">
              <LightbulbIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold">Tips for Better Logo Results:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Be specific about your brand identity (e.g., instead of "tech logo", use "modern cybersecurity company logo with shield icon")</li>
                  <li>• Include details about:
                    <ul className="pl-4 mt-1">
                      <li>- Desired style (minimalist, modern, vintage, etc.)</li>
                      <li>- Color preferences</li>
                      <li>- Industry-specific elements</li>
                      <li>- Brand personality (professional, playful, luxurious)</li>
                    </ul>
                  </li>
                  <li>• Keep the design concept simple and memorable</li>
                  <li>• Specify if you want text-free or icon-only designs</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Card>

      {logoUrl && (
        <div className="mt-8 p-6 glass-panel">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-muted-foreground">
              Your generated logo is ready to download
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleDownload('png')}>
                  Download as PNG
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDownload('jpg')}>
                  Download as JPG
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleDownload('webp')}>
                  Download as WebP
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <img
            src={logoUrl}
            alt={`Generated logo for ${prompt}`}
            className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            {prompt}
          </p>
        </div>
      )}
    </div>
  );
};

export default GeneratorSection;
