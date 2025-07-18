
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeGa8TlbhHIoxSdNlBjiBNq3UwC-93rZvUdIbQgLEXUFJvECg/viewform?embedded=true" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-gray-600">We typically respond to messages within 24 hours during business days.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Priority Support</h3>
                  <p className="text-gray-600">Technical issues and urgent matters receive priority handling.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Is the service really free?</h4>
                    <p className="text-sm text-gray-600">Yes! All our tools are completely free with no hidden costs.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Do I need to create an account?</h4>
                    <p className="text-sm text-gray-600">No signup required. Start using our tools immediately.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Can I use generated images commercially?</h4>
                    <p className="text-sm text-gray-600">Yes, you can use the generated images for commercial purposes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 86400,
  };
};

export default Contact;
