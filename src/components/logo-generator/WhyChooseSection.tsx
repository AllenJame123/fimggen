import { Sparkles, Zap, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseSection = () => {
  return (
    <section className="max-w-3xl mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Logo Creator?</h2>
      <div className="space-y-4">
        <Card className="group p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-br hover:from-primary-gradient-from/5 hover:to-primary-gradient-to/5">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Smart Technology</h3>
              <p className="text-muted-foreground text-sm">
                Advanced AI understands your vision and creates unique, professional logos that perfectly match your brand identity.
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
              <h3 className="text-lg font-semibold mb-2">Lightning Fast Results</h3>
              <p className="text-muted-foreground text-sm">
                Get your logo in seconds, not hours. Our streamlined process delivers high-quality results instantly.
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
              <h3 className="text-lg font-semibold mb-2">No Design Experience Required</h3>
              <p className="text-muted-foreground text-sm">
                Anyone can create stunning logos. Simply describe your idea and watch your vision come to life professionally.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseSection;