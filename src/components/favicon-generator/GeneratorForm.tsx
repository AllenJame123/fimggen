
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, LightbulbIcon, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { validatePrompt } from "@/utils/contentFilter";

interface GeneratorFormProps {
  onGenerateSuccess: (url: string) => void;
}

const GeneratorForm = ({ onGenerateSuccess }: GeneratorFormProps) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const generateFavicon = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    const validationResult = validatePrompt(prompt);
    if (!validationResult.isValid) {
      toast.error(validationResult.message);
      return;
    }

    setIsGenerating(true);
    setError(null);
    
    try {
      console.log('Attempting to generate favicon with prompt:', prompt);
      
      // Create an AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
      const { data, error } = await supabase.functions.invoke("generate-favicon", {
        body: { prompt }
      });

      // Clear the timeout
      clearTimeout(timeoutId);

      console.log('Function response:', { data, error });

      if (error) {
        console.error("Edge function error:", error);
        
        if (retryCount < 1) {
          console.log('Retrying with fallback endpoint...');
          setRetryCount(prev => prev + 1);
          
          // Create new AbortController for fallback request
          const fallbackController = new AbortController();
          const fallbackTimeoutId = setTimeout(() => fallbackController.abort(), 30000);
          
          const { data: fallbackData, error: fallbackError } = await supabase.functions.invoke("generate-favicon-icon", {
            body: {}
          });
          
          // Clear the fallback timeout
          clearTimeout(fallbackTimeoutId);
          
          if (fallbackError) {
            throw fallbackError;
          }
          
          if (!fallbackData?.success || !fallbackData?.image) {
            throw new Error('Failed to generate favicon with fallback');
          }
          
          onGenerateSuccess(fallbackData.image);
          toast.success("AI favicon generated successfully using fallback generator!");
          return;
        }
        
        throw error;
      }

      if (!data?.success || !data?.image) {
        throw new Error(data?.error || 'Failed to generate favicon with AI');
      }

      onGenerateSuccess(data.image);
      toast.success("AI favicon created successfully!");
    } catch (error: unknown) {
      console.error("Error generating favicon:", error);
      setError(error instanceof Error ? error.message : "Failed to generate favicon with AI");
      toast.error(error instanceof Error ? error.message : "AI favicon generation failed");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isGenerating) {
      generateFavicon();
    }
  };

  return (
    <Card className="p-6 glass-panel">
      <div className="space-y-6">
        <div className="space-y-4">
          <Input
            placeholder="Describe your favicon (e.g., 'modern blue tech icon' or 'minimalist letter A')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isGenerating}
          />
          <Button
            className="w-full primary-gradient"
            onClick={generateFavicon}
            disabled={isGenerating || !prompt.trim()}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating with AI...
              </>
            ) : (
              "Generate Favicon with AI - Free & No Watermark"
            )}
          </Button>
          
          {error && (
            <div className="p-3 bg-destructive/10 text-destructive rounded flex items-start gap-2">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">AI generation failed</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}
        </div>

        <Card className="p-4 bg-muted/50">
          <div className="flex gap-2 items-start">
            <LightbulbIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <h3 className="font-semibold">Tips for Better AI Favicon Results:</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Keep descriptions simple - our AI favicon maker works best with clear concepts</li>
                <li>• Use contrasting colors (e.g., "deep blue icon with white outline")</li>
                <li>• Specify style preferences (e.g., "minimalist", "geometric", "flat design")</li>
                <li>• Include shape descriptions for the AI favicon creator (e.g., "circular", "square")</li>
                <li>• Our free AI favicon generator optimizes for small sizes automatically</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default GeneratorForm;
