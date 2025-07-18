import { Card } from "@/components/ui/card";

const FAQ = () => {
  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8">AI Favicon Generator FAQ</h2>
      <div className="grid gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            How does the AI favicon generator work?
          </h3>
          <p className="text-muted-foreground">
            Our AI powered favicon generator uses advanced artificial intelligence to understand your description and create unique favicons. Simply describe your vision, and our AI favicon maker generates professional results instantly.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            Is the AI favicon creator really free with no watermark?
          </h3>
          <p className="text-muted-foreground">
            Yes! Our free AI favicon generator creates favicons with no watermark. You can generate favicon with AI and download clean, professional icons in ICO, PNG, and SVG formats completely free.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            What file formats does the AI favicon generator provide?
          </h3>
          <p className="text-muted-foreground">
            Our AI favicon maker creates favicons in ICO, PNG, and SVG formats. The AI favicon generator free online tool automatically optimizes for 16x16, 32x32, and 48x48 pixel sizes.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            Can I use AI-generated favicons commercially?
          </h3>
          <p className="text-muted-foreground">
            Absolutely! All favicons created with our AI favicon creator are free for commercial use. Our AI favicon maker no watermark policy ensures clean, professional results for business websites.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            How detailed should my AI favicon description be?
          </h3>
          <p className="text-muted-foreground">
            The more specific your description, the better our AI powered favicon generator performs. Include colors, style, and elements like "minimalist blue tech icon with rounded corners" for optimal AI favicon results.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">
            What if I want to generate favicon with AI again?
          </h3>
          <p className="text-muted-foreground">
            You can use our free AI favicon generator unlimited times! Try different descriptions with our AI favicon creator until you get the perfect favicon for your website.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;