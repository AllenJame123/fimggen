import Link from 'next/link';
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">Menu</button>
      {isOpen && (
        <ul className="flex flex-col space-y-2 bg-white shadow-lg p-4 absolute top-12 left-0 w-full z-50">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link href="/logo-generator" onClick={() => setIsOpen(false)}>Logo Generator</Link></li>
          <li><Link href="/favicon-generator" onClick={() => setIsOpen(false)}>Favicon Generator</Link></li>
          <li><Link href="/meme-generator" onClick={() => setIsOpen(false)}>Meme Generator</Link></li>
          <li><Link href="/add-text-to-photo" onClick={() => setIsOpen(false)}>Add Text to Photo</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default MobileMenu;
