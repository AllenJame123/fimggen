import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { toast } from 'sonner';

interface GeneratedLogoProps {
  logoUrl: string;
  prompt: string;
}

const GeneratedLogo = ({ logoUrl, prompt }: GeneratedLogoProps) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(logoUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `logo-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success('Logo downloaded successfully!');
    } catch (error) {
      console.error('Error downloading logo:', error);
      toast.error('Failed to download logo');
    }
  };

  return (
    <Card className="p-6 glass-panel space-y-4 animate-image-fade">
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">
          Your generated logo is ready to download
        </p>
        <Button
          onClick={handleDownload}
          className="primary-gradient"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Logo
        </Button>
      </div>
      
      <div className="relative rounded-lg overflow-hidden bg-white">
        <img
          src={logoUrl}
          alt={`Generated logo for ${prompt}`}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-sm text-muted-foreground text-center">
        {prompt}
      </p>
    </Card>
  );
};

export default GeneratedLogo;