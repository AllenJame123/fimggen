import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['aiimagegenerator.site'],
  },
  // Enable static generation for better SEO
  trailingSlash: true,
  // Ensure compatibility with current file imports
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src')
    };
    return config;
  },
  // Enable SSG for all pages
  generateBuildId: async () => {
    return 'ai-image-generator-build'
  }
};

export default nextConfig;
