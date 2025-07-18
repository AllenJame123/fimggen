
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Home, BookOpen, Palette, Image, Smile, Type } from "lucide-react";
import NextMobileMenu from "./NextMobileMenu";
import Footer from "./Footer";
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const NextLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // This ensures hydration doesn't cause mismatches between server and client
  useEffect(() => {
    setMounted(true);
  }, []);

  const getActiveClass = (path: string) => {
    const isActive = router.pathname === path;
    return `inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to text-white shadow-md"
        : "text-foreground hover:bg-secondary/80"
    }`;
  };

  const getIconColor = (path: string) => {
    const isActive = router.pathname === path;
    return isActive ? "white" : "#8A2BE2";
  };
  
  // SSR-safe render
  if (!mounted) {
    // During SSR, render a basic version
    return (
      <div className="min-h-screen flex flex-col">
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Static elements for SSR */}
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Client-side render with full interactivity
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <NextMobileMenu />
              <div className="hidden md:flex md:space-x-2">
                <Link href="/" className={getActiveClass("/")}>
                  <Home className="w-4 h-4 mr-2" color={getIconColor("/")} />
                  Image Generator
                </Link>
                <Link
                  href="/logo-generator"
                  className={getActiveClass("/logo-generator")}
                >
                  <Palette className="w-4 h-4 mr-2" color={getIconColor("/logo-generator")} />
                  Logo Generator
                </Link>
                <Link
                  href="/favicon-generator"
                  className={getActiveClass("/favicon-generator")}
                >
                  <Image className="w-4 h-4 mr-2" color={getIconColor("/favicon-generator")} />
                  Favicon Generator
                </Link>
                <Link
                  href="/meme-generator"
                  className={getActiveClass("/meme-generator")}
                >
                  <Smile className="w-4 h-4 mr-2" color={getIconColor("/meme-generator")} />
                  Meme Generator
                </Link>
                <Link
                  href="/add-text-to-photo"
                  className={getActiveClass("/add-text-to-photo")}
                >
                  <Type className="w-4 h-4 mr-2" color={getIconColor("/add-text-to-photo")} />
                  Add Text to Photo
                </Link>
                <Link
                  href="/blog"
                  className={getActiveClass("/blog")}
                >
                  <BookOpen className="w-4 h-4 mr-2" color={getIconColor("/blog")} />
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NextLayout;
