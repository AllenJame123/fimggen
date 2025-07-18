import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Upload Your Image",
              description: "Choose any image you want to add text to - photos, backgrounds, or designs."
            },
            {
              step: 2,
              title: "Add & Style Text",
              description: "Type your text and customize fonts, colors, size, and position."
            },
            {
              step: 3,
              title: "Download",
              description: "Save your creation in high quality, ready to share or use."
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

export default HowItWorks;