import React from "react";
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
          <h2 className="mt-8 mb-2">What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device by your browser. They help websites remember your preferences, improve functionality, and analyze site usage.</p>
          <h2 className="mt-8 mb-2">How We Use Cookies</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for basic site functionality and security.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site so we can improve user experience.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a more personalized experience.</li>
          </ul>
          <h2 className="mt-8 mb-2">Managing Cookies</h2>
          <p>You can control or delete cookies through your browser settings. Disabling cookies may affect site functionality.</p>
          <h2 className="mt-8 mb-2">Third-Party Cookies</h2>
          <p>We may use third-party services (like analytics) that set their own cookies. These are governed by the respective third-party privacy policies.</p>
          <h2 className="mt-8 mb-2">Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date.</p>
          <h2 className="mt-8 mb-2">Contact</h2>
          <p>If you have questions about our use of cookies, please use our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.</p>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy; 