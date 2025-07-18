import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact Us - AI Image Generator"
        description="Get in touch with AI Image Generator team. Send us your questions, feedback, or support requests through our contact form."
        canonical="https://aiimagegenerator.site/contact/"
        openGraph={{
          url: "https://aiimagegenerator.site/contact/",
          title: "Contact Us - AI Image Generator",
          description: "Get in touch with AI Image Generator team. Send us your questions, feedback, or support requests through our contact form.",
          images: [
            {
              url: "https://aiimagegenerator.site/og-image.png",
              width: 1200,
              height: 630,
              alt: "Contact Us"
            }
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="mb-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeGa8TlbhHIoxSdNlBjiBNq3UwC-93rZvUdIbQgLEXUFJvECg/viewform?embedded=true"
            width="100%"
            height="819"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
        {/* ...rest of the contact page content... */}
      </div>
    </>
  );
};

export default Contact; 