
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { KeyRound } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const HuggingFaceKeyInput = () => {
  const [apiKey, setApiKey] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      toast.error("Please enter a valid API key");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("update-huggingface-key", {
        body: { apiKey }
      });
      
      if (error) {
        console.error("Error invoking function:", error);
        throw new Error(`Error invoking function: ${error.message}`);
      }
      
      if (!data?.success) {
        console.error("Function returned error:", data?.error);
        throw new Error(data?.error || "Failed to update API key");
      }
      
      toast.success("API key updated successfully!");
      setApiKey("");
      
    } catch (error: unknown) {
      console.error("Error updating API key:", error);
      toast.error((error as Error).message || "Failed to update API key");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="p-4 bg-card border border-border shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-sm mb-2">
          <h3 className="font-semibold mb-1">Add your Hugging Face token to Supabase secrets</h3>
          <p className="text-muted-foreground text-xs">
            Once entered, it will be securely stored and available to all edge functions.
          </p>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Enter Hugging Face API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
            autoComplete="off"
          />
          <Button type="submit" disabled={isSubmitting} className="flex items-center gap-1">
            <KeyRound className="h-4 w-4" />
            {isSubmitting ? "Adding..." : "Add API Key"}
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          <p>
            Get your API key from{" "}
            <a 
              href="https://huggingface.co/settings/tokens" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              huggingface.co/settings/tokens
            </a>
          </p>
        </div>
      </form>
    </Card>
  );
};

export default HuggingFaceKeyInput;
