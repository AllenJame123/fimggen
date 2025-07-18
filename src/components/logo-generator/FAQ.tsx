import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid gap-6">
          {[
            {
              question: "What makes this AI logo maker different?",
              answer: "Our online logo generator is free, requires no design skills, and acts as an instant logo maker. Just enter your idea and get a professional logo in seconds."
            },
            {
              question: "What file formats are available for logo downloads?",
              answer: "You can download your generated logos in PNG, JPG, or WebP formats, suitable for different use cases and platforms."
            },
            {
              question: "Can I use the generated logos commercially?",
              answer: "Yes, all logos generated through our platform are free for commercial use. You receive full rights to use them for your business or project."
            },
            {
              question: "How detailed should my logo description be?",
              answer: "The more specific your description, the better the results. Include details about style, colors, and any specific elements you want in your logo."
            },
            {
              question: "How long does it take to generate a logo?",
              answer: "Logo generation typically takes 15-30 seconds. The exact time may vary based on the complexity of your request."
            },
            {
              question: "What if I'm not satisfied with the generated logo?",
              answer: "You can try generating another logo with a more detailed or different description. There's no limit to how many logos you can generate."
            }
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;