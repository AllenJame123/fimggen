
import { NextSeo } from 'next-seo';

const Disclaimer = () => {
  return (
    <>
      <NextSeo 
        title="Disclaimer - AI Image Generator"
        description="Important disclaimer and legal information about using AI Image Generator services and AI-generated content."
        canonical="https://aiimagegenerator.site/disclaimer/"
        noindex={true}
        nofollow={true}
        openGraph={{
          url: "https://aiimagegenerator.site/disclaimer/",
          title: "Disclaimer - AI Image Generator",
          description: "Important disclaimer and legal information about using AI Image Generator services and AI-generated content.",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "Disclaimer"
            }
          ],
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-left">Disclaimer</h1>
        <div className="text-left space-y-8">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">AI-Generated Content</h2>
            <p className="mb-4 text-left">
              All images generated through our AI Image Generator are created using artificial intelligence models. These images are generated based on text prompts and may not always accurately represent real people, places, or objects.
            </p>
            <p className="mb-4 text-left">
              <strong>Important:</strong> AI-generated content should be used responsibly and users should verify the accuracy and appropriateness of generated content before use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">No Warranty</h2>
            <p className="mb-4 text-left">
              The information and services provided on this website are offered on an "as-is" basis without warranties of any kind, either express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>The service will be uninterrupted or error-free</li>
              <li>Generated images will meet your specific requirements</li>
              <li>All generated content will be appropriate or accurate</li>
              <li>The service will be available at all times</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">Limitation of Liability</h2>
            <p className="mb-4 text-left">
              In no event shall AI Image Generator be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the service, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>Loss of profits or revenue</li>
              <li>Loss of data or content</li>
              <li>Business interruption</li>
              <li>Personal or property damage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">Content Responsibility</h2>
            <p className="mb-4 text-left">
              Users are solely responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>The prompts and content they submit</li>
              <li>Ensuring generated content doesn't infringe on third-party rights</li>
              <li>Verifying the appropriateness of generated content for their intended use</li>
              <li>Compliance with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">Third-Party Services</h2>
            <p className="mb-4 text-left">
              Our service relies on third-party AI models and services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>The availability or performance of third-party services</li>
              <li>The accuracy or quality of third-party AI models</li>
              <li>Any issues arising from third-party service disruptions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">Educational Purpose</h2>
            <p className="mb-4 text-left">
              The information provided on our blog and educational content is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, or reliability of the information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">Changes to Disclaimer</h2>
            <p className="mb-4 text-left">
              We reserve the right to modify this disclaimer at any time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">Contact</h2>
            <p className="mb-4 text-left">
              If you have any questions about this disclaimer, please contact us through our contact form.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
