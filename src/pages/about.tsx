
import { NextSeo } from 'next-seo';

const About = () => {
  return (
    <>
      <NextSeo 
        title="About Us - AI Image Generator"
        description="Learn about AI Image Generator - Our mission to make AI-powered image creation accessible to everyone through free, easy-to-use tools."
        canonical="https://aiimagegenerator.site/about/"
        openGraph={{
          url: "https://aiimagegenerator.site/about/",
          title: "About Us - AI Image Generator",
          description: "Learn about AI Image Generator - Our mission to make AI-powered image creation accessible to everyone through free, easy-to-use tools.",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "About AI Image Generator"
            }
          ],
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">About AI Image Generator</h1>
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              AI Image Generator was born out of a passion for creativity and technology. Our founders noticed how difficult and expensive it was for individuals and small businesses to access high-quality design tools. Inspired to make a difference, we set out to build a platform where anyone can generate beautiful images, logos, and graphics using the power of artificial intelligence—no design experience required.
            </p>
            <p className="mb-4">
              As we look to the future, our vision is to continually expand our suite of tools, making advanced AI accessible to everyone, everywhere. We are committed to innovation, transparency, and empowering our users to unlock their creative potential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At AI Image Generator, we believe that creativity should be accessible to everyone. Our mission is to democratize AI-powered image creation by providing free, easy-to-use tools that empower users to bring their ideas to life.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <p className="mb-4">
              Our comprehensive suite of AI-powered tools includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>AI Image Generator:</strong> Transform text prompts into stunning visuals</li>
              <li><strong>Logo Generator:</strong> Create professional logos for your brand</li>
              <li><strong>Favicon Generator:</strong> Design perfect website icons</li>
              <li><strong>Meme Generator:</strong> Craft entertaining memes with ease</li>
              <li><strong>Text on Photo:</strong> Add stylish text overlays to images</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">100% Free</h3>
                <p>No hidden costs, no subscriptions. All tools are completely free to use with unlimited generations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">No Sign-up Required</h3>
                <p>Start creating immediately without the hassle of account registration or personal information.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Latest AI Technology</h3>
                <p>Powered by cutting-edge AI models for high-quality, professional results.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">User-Friendly</h3>
                <p>Intuitive interface designed for both beginners and professionals.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
            <p className="mb-4">
              We leverage state-of-the-art artificial intelligence models and cloud infrastructure to deliver fast, reliable image generation. Our platform is built with modern web technologies to ensure optimal performance across all devices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
            <p className="mb-4">
              We take your privacy seriously. Generated images are processed securely, and we don't store your personal creations permanently. Read our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for complete details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              Have questions, suggestions, or need support? We'd love to hear from you!
            </p>
            <p className="mb-4">
              Email: <a href="mailto:hello@aiimagegenerator.site" className="text-blue-600 hover:underline">hello@aiimagegenerator.site</a><br />
              Visit our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a> for more ways to reach us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="mb-4">
              Follow our blog for the latest tips, tutorials, and updates about AI image generation. Learn how to craft better prompts, discover new techniques, and stay updated with the latest AI developments.
            </p>
            <p className="mb-4">
              <a href="/blog" className="text-blue-600 hover:underline">Visit our Blog →</a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
