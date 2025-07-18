
import { NextSeo } from 'next-seo';

const TermsOfService = () => {
  return (
    <>
      <NextSeo 
        title="Terms of Service - AI Image Generator"
        description="Terms of Service for AI Image Generator - Read our terms and conditions for using our AI-powered image generation services."
        canonical="https://aiimagegenerator.site/terms-of-service/"
        noindex={true}
        nofollow={true}
        openGraph={{
          url: "https://aiimagegenerator.site/terms-of-service/",
          title: "Terms of Service - AI Image Generator",
          description: "Terms of Service for AI Image Generator - Read our terms and conditions for using our AI-powered image generation services.",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "Terms of Service"
            }
          ],
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-left">Terms of Service</h1>
        <div className="text-left space-y-8">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">1. Acceptance of Terms</h2>
            <p className="mb-4 text-left">
              By accessing and using AI Image Generator, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">2. Description of Service</h2>
            <p className="mb-4 text-left">
              AI Image Generator provides AI-powered image generation services including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>General image generation from text prompts</li>
              <li>Logo generation and design</li>
              <li>Favicon creation</li>
              <li>Meme generation</li>
              <li>Text overlay on photos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">3. User Responsibilities</h2>
            <p className="mb-4 text-left">Users agree to:</p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>Use the service for lawful purposes only</li>
              <li>Not generate inappropriate, harmful, or offensive content</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to reverse engineer or misuse the service</li>
              <li>Not violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">4. Content Guidelines</h2>
            <p className="mb-4 text-left">Prohibited content includes:</p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>Violent, graphic, or disturbing imagery</li>
              <li>Adult or sexually explicit content</li>
              <li>Discriminatory or hateful content</li>
              <li>Content that infringes copyright or trademarks</li>
              <li>Misleading or fraudulent content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">5. Intellectual Property</h2>
            <p className="mb-4 text-left">
              Generated images are provided for your use, but we retain the right to use generated content for service improvement. Users are responsible for ensuring their prompts don't infringe on third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">6. Limitation of Liability</h2>
            <p className="mb-4 text-left">
              AI Image Generator is provided "as is" without warranties. We are not liable for any damages arising from the use of our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">7. Service Availability</h2>
            <p className="mb-4 text-left">
              We strive to maintain service availability but do not guarantee uninterrupted access. We reserve the right to modify or discontinue the service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">8. Changes to Terms</h2>
            <p className="mb-4 text-left">
              We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">9. Contact Information</h2>
            <p className="mb-4 text-left">
              For questions about these Terms of Service, please contact us through our contact form.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
