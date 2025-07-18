
import { Card } from "@/components/ui/card";
import { PenLine, Sliders, Sparkles } from "lucide-react";

const HowItWorks = () => {
  return (
    <Card className="glass-panel p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">How Our AI Favicon Generator Works</h2>
      <ol className="space-y-6 text-lg">
        <li className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <PenLine className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 pt-2">
            <span className="font-bold text-primary">1.</span>
            <span><strong>Describe Your Icon:</strong> Tell our AI favicon creator what style and elements you want for your website favicon.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Sliders className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 pt-2">
            <span className="font-bold text-primary">2.</span>
            <span><strong>AI Powered Generation:</strong> Our free AI favicon generator analyzes your input and creates unique favicons instantly.</span>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 pt-2">
            <span className="font-bold text-primary">3.</span>
            <span><strong>Download & Use:</strong> Generate favicon with AI in ICO, PNG formats. AI favicon maker no watermark downloads ready for your website.</span>
          </div>
        </li>
      </ol>
    </Card>
  );
};

export default HowItWorks;
