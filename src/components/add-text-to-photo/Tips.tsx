import { LightbulbIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const Tips = () => {
  return (
    <Card className="p-6 max-w-3xl mx-auto my-8">
      <div className="flex gap-2 items-start text-primary mb-4">
        <LightbulbIcon className="w-6 h-6 mt-1 flex-shrink-0" />
        <h2 className="text-2xl font-bold">Tips to Add Text to Photo Free Like a Pro</h2>
      </div>
      
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Choose the Right Font</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Use bold fonts for headlines when you add text to image</li>
              <li>• Script fonts work well for decorative text</li>
              <li>• Sans-serif fonts are great for readability</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Color Selection for Text on Photo Free</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Ensure good contrast with the background</li>
              <li>• Use complementary colors for emphasis</li>
              <li>• Consider adding a shadow for better visibility when you add text to picture online</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Text Placement</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Follow the rule of thirds for composition</li>
              <li>• Avoid placing text at image edges</li>
              <li>• Leave breathing room around your text</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Size and Spacing</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Keep text sizes consistent for harmony</li>
              <li>• Use proper line spacing for readability</li>
              <li>• Adjust letter spacing for emphasis when you add text to image online</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Tips; 