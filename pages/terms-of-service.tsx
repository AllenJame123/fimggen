import React from "react";
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
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <h2 className="mt-8 mb-2">Acceptance of Terms</h2>
          <p>By using AI Image Generator, you agree to these Terms of Service. If you do not agree, please do not use our website or services.</p>
          <h2 className="mt-8 mb-2">Use of Services</h2>
          <ul>
            <li>You may use our tools for personal or commercial projects, subject to these terms.</li>
            <li>You are responsible for any content you generate and share using our platform.</li>
            <li>You may not use our services for unlawful, harmful, or abusive purposes.</li>
          </ul>
          <h2 className="mt-8 mb-2">Intellectual Property</h2>
          <ul>
            <li>All site content, except for user-generated images, is owned by AI Image Generator.</li>
            <li>You retain rights to images you create, but we may use them for promotional purposes unless you request removal.</li>
          </ul>
          <h2 className="mt-8 mb-2">Account Registration</h2>
          <p>No account is required to use our services. If you choose to register, you are responsible for maintaining the confidentiality of your account.</p>
          <h2 className="mt-8 mb-2">Disclaimer</h2>
          <p>Our services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation.</p>
          <h2 className="mt-8 mb-2">Limitation of Liability</h2>
          <p>AI Image Generator is not liable for any damages arising from your use of our services.</p>
          <h2 className="mt-8 mb-2">Changes to Terms</h2>
          <p>We may update these Terms of Service at any time. Continued use of the site constitutes acceptance of the new terms.</p>
          <h2 className="mt-8 mb-2">Contact</h2>
          <p>For questions about these terms, please use our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.</p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService; 