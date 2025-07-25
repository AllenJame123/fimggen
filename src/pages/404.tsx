
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page Not Found | AI Image Generator"
        description="The page you're looking for doesn't exist or has been moved."
        noindex={true}
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="primary-gradient">
          <Link href="/">
            Go back home
          </Link>
        </Button>
      </div>
    </>
  );
}
