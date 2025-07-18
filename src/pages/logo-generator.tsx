
import { GetStaticProps } from 'next';
import { NextSeo } from "next-seo";
import { Card } from "@/components/ui/card";

export default function LogoGenerator() {
  return (
    <>
      <NextSeo
        title="Free Logo Generator - AI Logo Maker No Watermark"
        description="Create professional logos free with our AI logo generator. No watermark, high resolution downloads. Instant logo maker - no design skills needed!"
        canonical="https://yoursite.com/logo-generator"
        openGraph={{
          title: "Free Logo Generator - AI Logo Maker No Watermark",
          description: "Create professional logos free with our AI logo generator. No watermark, high resolution downloads. Instant logo maker - no design skills needed!",
          images: [{ url: "/logo-generator-preview.jpg" }],
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Free Logo Generator - Create Logo Without Design Skills
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI logo generator that creates high resolution logos instantly. No watermark, 
              completely free. Our online logo creator makes professional logos in seconds.
            </p>
            
            {/* Logo Generator Form */}
            <div className="bg-card p-8 rounded-2xl shadow-lg mb-12">
              <h2 className="text-2xl font-semibold mb-6">Instant Logo Maker - AI Powered</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Describe your logo (e.g., modern tech company logo)"
                    className="w-full p-4 border rounded-lg text-lg"
                  />
                </div>
                <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg text-lg font-medium hover:bg-primary/90">
                  Create Logo Free - No Watermark
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our AI Logo Generator?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚫</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">No Watermark</h3>
                <p className="text-muted-foreground">
                  Free logo generator with no watermark. Download clean, professional logos instantly.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Logo Maker</h3>
                <p className="text-muted-foreground">
                  Advanced AI creates unique logos. Our logo maker free tool generates professional designs.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Results</h3>
                <p className="text-muted-foreground">
                  Online logo creator that works instantly. Create logo without design skills in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How Our Free Logo Generator Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-semibold mb-2">Describe Your Logo</h3>
                <p className="text-muted-foreground">Tell our AI logo generator what you want. No design skills needed.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-semibold mb-2">AI Creates Your Logo</h3>
                <p className="text-muted-foreground">Our instant logo maker generates multiple options instantly.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-semibold mb-2">Download High Resolution</h3>
                <p className="text-muted-foreground">Get your high resolution logo maker results. Free, no watermark.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Create Logo Free - Professional Results
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">✓ Free Logo Generator Benefits:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• No watermark on downloads</li>
                  <li>• High resolution logo maker quality</li>
                  <li>• Create logo without design skills</li>
                  <li>• Instant logo maker - results in seconds</li>
                  <li>• AI logo generator technology</li>
                  <li>• Online logo creator accessibility</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">✓ Perfect For:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Small businesses</li>
                  <li>• Startups and entrepreneurs</li>
                  <li>• Personal brands</li>
                  <li>• Social media profiles</li>
                  <li>• Website headers</li>
                  <li>• Business cards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Updated FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Free Logo Generator FAQ
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Is this AI logo generator really free with no watermark?",
                  answer: "Yes! Our free logo generator creates logos with no watermark. You can download high resolution logos instantly without any branding or watermarks."
                },
                {
                  question: "Can I create logo without design skills?",
                  answer: "Absolutely! Our AI logo generator is designed for everyone. Just describe what you want, and our instant logo maker creates professional logos automatically."
                },
                {
                  question: "What makes this the best online logo creator?",
                  answer: "Our AI logo generator combines advanced technology with ease of use. Create logo free, get high resolution results, and download immediately with no watermark."
                },
                {
                  question: "How does the instant logo maker work?",
                  answer: "Simply describe your logo idea, and our AI logo generator creates multiple options in seconds. No design experience needed - our logo maker free tool does everything."
                },
                {
                  question: "What file formats does this high resolution logo maker provide?",
                  answer: "Our online logo creator provides PNG, JPG, and SVG formats in high resolution. All downloads are watermark-free and ready for immediate use."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 86400,
  };
};
