import { Card } from "@/components/ui/card";

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Add Text to Photo Free FAQ</h2>
      <div className="grid gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            How do I add text to image online?
          </h3>
          <p className="text-muted-foreground">
            Simply upload your image, click "Add Text", and start typing. You can drag the text to position it anywhere when you add text to photo free using our online editor. Customize its appearance with available options.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            Can I customize the text on photo free?
          </h3>
          <p className="text-muted-foreground">
            Yes! You can change the font family, size, color, and apply styles like bold, italic, or underline. The text is fully customizable to match your needs when you add text to picture online.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            What image formats are supported?
          </h3>
          <p className="text-muted-foreground">
            Our tool supports common image formats including JPG, PNG, and GIF. The final image will be downloaded as a high-quality PNG file with no watermark.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            Is there an add text to photo no watermark guarantee?
          </h3>
          <p className="text-muted-foreground">
            Absolutely! You can add text to image with our editor and download clean, professional results. No watermarks, no hidden fees - just high-quality photos with your custom text.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default FAQ; 