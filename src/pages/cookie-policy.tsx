
import { NextSeo } from 'next-seo';

const CookiePolicy = () => {
  return (
    <>
      <NextSeo 
        title="Cookie Policy - AI Image Generator"
        description="Learn about how AI Image Generator uses cookies and similar technologies to improve your browsing experience."
        canonical="https://aiimagegenerator.site/cookie-policy/"
        noindex={true}
        nofollow={true}
        openGraph={{
          url: "https://aiimagegenerator.site/cookie-policy/",
          title: "Cookie Policy - AI Image Generator",
          description: "Learn about how AI Image Generator uses cookies and similar technologies to improve your browsing experience.",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "Cookie Policy"
            }
          ],
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow certain website functions to work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="mb-4">
              AI Image Generator uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
              <p className="mb-4">
                We use Google Analytics to collect information about how visitors use our website. This helps us improve our services and user experience.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Advertising Cookies</h3>
              <p className="mb-4">
                Google AdSense uses cookies to display personalized advertisements based on your interests and browsing history.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              Our website may contain third-party cookies from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
              <li><strong>Hugging Face:</strong> For AI model services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in several ways:
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>View what cookies are stored on your device</li>
                <li>Delete existing cookies</li>
                <li>Block cookies from being set</li>
                <li>Set preferences for specific websites</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Google Ad Settings</h3>
              <p className="mb-4">
                You can manage your Google advertising preferences at: 
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  https://adssettings.google.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Impact of Disabling Cookies</h2>
            <p className="mb-4">
              Please note that disabling cookies may affect your experience on our website:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Some features may not work properly</li>
              <li>Preferences and settings may not be saved</li>
              <li>You may see less relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@aiimagegenerator.site
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
