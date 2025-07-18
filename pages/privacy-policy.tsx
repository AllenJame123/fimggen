import React from "react";
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
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <h2 className="mt-8 mb-2">Introduction</h2>
          <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how AI Image Generator collects, uses, and safeguards your data when you use our website and services.</p>
          <h2 className="mt-8 mb-2">Information We Collect</h2>
          <ul>
            <li><strong>Usage Data:</strong> We collect anonymous usage data such as browser type, device, and pages visited to improve our services.</li>
            <li><strong>Generated Content:</strong> Images and text you generate are processed securely and not stored permanently.</li>
            <li><strong>Contact Information:</strong> If you contact us, we may store your email address and message for support purposes.</li>
          </ul>
          <h2 className="mt-8 mb-2">How We Use Your Information</h2>
          <ul>
            <li>To provide and improve our services</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To analyze usage and enhance user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="mt-8 mb-2">Cookies</h2>
          <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and remember your preferences. You can control cookies through your browser settings.</p>
          <h2 className="mt-8 mb-2">Third-Party Services</h2>
          <p>We may use third-party analytics and hosting providers. These services may collect information as described in their own privacy policies.</p>
          <h2 className="mt-8 mb-2">Data Security</h2>
          <p>We implement reasonable security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
          <h2 className="mt-8 mb-2">Your Rights</h2>
          <ul>
            <li>You may request access to or deletion of your personal data by contacting us.</li>
            <li>You may opt out of cookies via your browser settings.</li>
          </ul>
          <h2 className="mt-8 mb-2">Children's Privacy</h2>
          <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children.</p>
          <h2 className="mt-8 mb-2">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
          <h2 className="mt-8 mb-2">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please use our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 