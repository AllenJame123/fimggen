import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How Our Logo Generator from Text Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Describe Your Logo (Text Input)",
              description: "Enter your logo idea or business name. Our logo generator from text and ai logo maker will do the rest."
            },
            {
              step: 2,
              title: "Generate with AI Logo Maker",
              description: "Our AI powered logo generator instantly creates unique logos for you."
            },
            {
              step: 3,
              title: "Download from Online Logo Generator Free",
              description: "Download your professional logo instantly—no design skills needed."
            }
          ].map((item, index) => (
            <div key={item.step} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-white flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-6 w-8 h-8 text-primary/30" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;