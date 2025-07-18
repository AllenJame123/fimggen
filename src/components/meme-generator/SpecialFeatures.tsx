import { CheckCircle } from "lucide-react";

const SpecialFeatures = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">AI Meme Generator Free Online Features</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">AI-Powered Image Generation</h3>
              <p className="text-muted-foreground">
                Create unique, custom meme templates using our advanced AI - just describe what you want and our online meme creator does the rest!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Smart Text Placement</h3>
              <p className="text-muted-foreground">
                Add custom text at the top and bottom of your meme, with automatic text scaling to fit perfectly.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Viral Meme Maker Preview</h3>
              <p className="text-muted-foreground">
                Preview your meme with the added text before downloading, ensuring your meme looks exactly how you want it.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">High-Quality Downloads</h3>
              <p className="text-muted-foreground">
                Download your memes in high-quality PNG format from our free meme generator, perfect for sharing on any platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;