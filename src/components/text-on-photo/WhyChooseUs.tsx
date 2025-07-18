import { Sparkles, Zap, Palette, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUs = () => {
  return (
    <section className="max-w-3xl mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Text Editor</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="group p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-br hover:from-primary-gradient-from/5 hover:to-primary-gradient-to/5">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
              <p className="text-muted-foreground text-sm">
                Intuitive interface for adding and customizing text on your images without any design experience.
              </p>
            </div>
          </div>
        </Card>

        <Card className="group p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-br hover:from-primary-gradient-from/5 hover:to-primary-gradient-to/5">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Rich Customization</h3>
              <p className="text-muted-foreground text-sm">
                Multiple fonts, colors, sizes, and styles to make your text stand out perfectly.
              </p>
            </div>
          </div>
        </Card>

        <Card className="group p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-br hover:from-primary-gradient-from/5 hover:to-primary-gradient-to/5">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Real-time Preview</h3>
              <p className="text-muted-foreground text-sm">
                See your changes instantly as you edit, making it easy to perfect your design.
              </p>
            </div>
          </div>
        </Card>

        <Card className="group p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-br hover:from-primary-gradient-from/5 hover:to-primary-gradient-to/5">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Layout className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Professional Results</h3>
              <p className="text-muted-foreground text-sm">
                Create stunning text overlays that look professionally designed.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUs;