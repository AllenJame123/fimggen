
import { Card } from "@/components/ui/card";

const KeyFeatures = () => {
  return (
    <Card className="glass-panel p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">AI Favicon Generator Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold">AI Powered Creation</h3>
            <p className="text-muted-foreground">Free AI favicon generator creates unique, professional favicons using advanced artificial intelligence.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">No Watermark Downloads</h3>
            <p className="text-muted-foreground">AI favicon maker no watermark guarantee. Download clean favicons in ICO, PNG, and SVG formats.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Instant AI Generation</h3>
            <p className="text-muted-foreground">Generate favicon with AI technology in seconds. Our AI favicon creator delivers instant results.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">No Design Skills Required</h3>
            <p className="text-muted-foreground">Anyone can create stunning favicons. Simply describe your idea and our AI favicon maker does the rest.</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default KeyFeatures;
