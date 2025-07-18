
import { NextSeo } from 'next-seo';

const PrivacyPolicy = () => {
  return (
    <>
      <NextSeo 
        title="Privacy Policy - AI Image Generator"
        description="Privacy Policy for AI Image Generator - Learn how we collect, use, and protect your personal information."
        canonical="https://aiimagegenerator.site/privacy-policy/"
        noindex={true}
        nofollow={true}
        openGraph={{
          url: "https://aiimagegenerator.site/privacy-policy/",
          title: "Privacy Policy - AI Image Generator",
          description: "Privacy Policy for AI Image Generator - Learn how we collect, use, and protect your personal information.",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "Privacy Policy"
            }
          ],
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-left">Privacy Policy</h1>
        <div className="text-left space-y-8">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">1. Information We Collect</h2>
            <p className="mb-4 text-left">
              When you use our AI Image Generator website, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>Usage data and analytics information</li>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Images and prompts you submit for generation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">2. How We Use Your Information</h2>
            <p className="mb-4 text-left">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>Provide and improve our AI image generation services</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Prevent abuse and ensure service security</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">3. Third-Party Services</h2>
            <p className="mb-4 text-left">Our website uses the following third-party services:</p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Hugging Face API:</strong> For AI image generation</li>
              <li><strong>Supabase:</strong> For backend services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">4. Cookies and Tracking</h2>
            <p className="mb-4 text-left">
              We use cookies and similar technologies to enhance your browsing experience. These may include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Advertising cookies for personalized ads</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">5. Data Security</h2>
            <p className="mb-4 text-left">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">6. Your Rights</h2>
            <p className="mb-4 text-left">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-left space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">7. Contact Us</h2>
            <p className="mb-4 text-left">
              If you have any questions about this Privacy Policy, please contact us through our contact form.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-left">8. Changes to This Policy</h2>
            <p className="mb-4 text-left">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
