# Background and Motivation

The current website is a React app using Vite with React Router (SPA), but we need to migrate to Next.js for true server-side rendering (SSR) and static site generation (SSG) for optimal SEO. The site uses Hugging Face APIs for AI image generation and Supabase for backend services. Next.js will provide separate HTML files for each page with proper meta tags and better search engine optimization.

# Key Challenges and Analysis

- **Current Setup:** Vite SPA with React Router - single HTML file, client-side routing
- **Migration Target:** Next.js with file-based routing for true SSR/SSG
- **Existing Assets:** Already using Next.js components (NextSeo, NextPage) and patterns
- **Routing Conversion:** Need to convert React Router routes to Next.js file-based routing
- **Dynamic Content:** Pages with user input (meme generator) need hybrid SSR + client hydration
- **API Integration:** Hugging Face and Supabase APIs need to work with Next.js SSR/SSG
- **SEO Optimization:** Each page needs separate HTML with proper meta tags

# High-level Task Breakdown

1. **Migrate to Next.js Framework**
   - Set up Next.js project structure and configuration
   - Convert React Router routes to Next.js file-based routing
   - Update package.json scripts and dependencies

2. **Convert Pages to Next.js Format**
   - Move pages from `src/pages/` to `pages/` directory
   - Update imports and component structure
   - Add getStaticProps/getStaticPaths where needed
   - Ensure all pages use NextSeo for meta tags

3. **Handle Dynamic and Interactive Pages**
   - Convert meme-generator and other interactive pages
   - Ensure client-side functionality works with Next.js hydration
   - Add proper error boundaries and loading states

4. **Update App Structure and Routing**
   - Replace React Router with Next.js routing
   - Update navigation components
   - Ensure proper 404 and error pages

5. **Test and Validate Next.js Build**
   - Test development server
   - Build and test production version
   - Verify SEO meta tags and social sharing
   - Run Lighthouse audits

# Project Status Board

- [x] Migrate to Next.js Framework
- [x] Convert Pages to Next.js Format
- [x] Handle Dynamic and Interactive Pages
- [x] Update App Structure and Routing
- [~] Test and Validate Next.js Build (in progress: generator pages restored and under browser testing)

# Executor's Feedback or Assistance Requests

## Generator Pages Restoration Status
- ✅ Favicon Generator page restored and working
- ✅ Meme Generator page restored and working
- ✅ Add Text to Photo page restored and working
- ✅ All main generator pages now display full UI and logic in Next.js

## Next Step
- Continue browser testing for all generator pages
- Verify dynamic routes and API integrations
- Check for any missing components or errors
- Proceed to SEO and production build validation after confirming UI/logic

## Routing & Navigation Migration Status
- ✅ All React Router usage (useLocation, Link, BrowserRouter, Routes, etc.) has been removed from the codebase.
- ✅ All navigation now uses Next.js <Link> and <useRouter> where needed.
- ✅ All pages are in the Next.js `pages/` directory and use file-based routing.
- ✅ Dynamic routes (e.g., blog/[slug].tsx) use getStaticProps/getStaticPaths as required.
- ✅ Layout, navigation, and menu components are Next.js-native.
- ✅ The app is now fully Next.js-native with no React Router dependencies.

## Next Step
- Test the app in the browser and verify:
  - All navigation works as expected
  - Dynamic routes (e.g., blog posts) load correctly
  - No React Router errors remain
  - All styles and interactivity are present

# Lessons
- When migrating from React Router to Next.js, always replace navigation and route hooks/components with Next.js equivalents.
- File-based routing in Next.js simplifies navigation and dynamic route handling.

## Migration Plan: Vite SPA → Next.js SSR/SSG

### Current State Analysis
- ✅ All pages already use NextSeo for meta tags
- ✅ Next.js components and patterns already in place
- ✅ Dependencies already installed (next, next-seo, etc.)
- ✅ Page structure similar to Next.js conventions

### Migration Benefits
- **SEO:** Separate HTML files per page with proper meta tags
- **Performance:** Better Core Web Vitals and loading speeds
- **Social Sharing:** Each page has its own OpenGraph/Twitter meta tags
- **Search Engine Optimization:** True server-side rendering preferred by Google

### Migration Strategy
1. **Framework Setup:** Convert from Vite to Next.js build system
2. **Routing:** Replace React Router with Next.js file-based routing
3. **Pages:** Move and adapt existing pages to Next.js format
4. **Testing:** Verify all functionality works with Next.js SSR/SSG

# Lessons
- Vite projects require different SSR/SSG strategies than Next.js; use static generation and ensure meta tags are present in the initial HTML
- Use NextSeo for consistent, SEO-friendly meta tags across all pages
- Always check build output and test with real-world tools (Lighthouse, etc.) before deploying 