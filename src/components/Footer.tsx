import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Image Generator</h3>
            <p className="text-gray-600 text-sm">
              Free AI-powered image generation tools for everyone. Create stunning visuals, logos, and more with no signup required.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">Image Generator</Link>
              </li>
              <li>
                <Link href="/logo-generator" className="text-gray-600 hover:text-gray-900">Logo Generator</Link>
              </li>
              <li>
                <Link href="/favicon-generator" className="text-gray-600 hover:text-gray-900">Favicon Generator</Link>
              </li>
              <li>
                <Link href="/meme-generator" className="text-gray-600 hover:text-gray-900">Meme Generator</Link>
              </li>
              <li>
                <Link href="/add-text-to-photo" className="text-gray-600 hover:text-gray-900">Add Text to Photo</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-600 hover:text-gray-900">Disclaimer</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-600 hover:text-gray-900">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} AI Image Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
