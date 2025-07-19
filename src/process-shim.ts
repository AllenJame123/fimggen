
// This provides a minimal process shim for client-side code that expects Node.js process
if (typeof window !== 'undefined' && !window.process) {
  window.process = {
    env: {
      NODE_ENV: import.meta.env.MODE || 'development',
      // Add these Next.js specific environment variables
      NEXT_PUBLIC_SUPABASE_URL: import.meta.env.NEXT_PUBLIC_SUPABASE_URL || '',
      __NEXT_ROUTER_BASEPATH: '',
      __NEXT_HAS_REWRITES: false,
    },
    browser: true,
    // Add expected functions used by Next.js
    cwd: () => '/',
  } as unknown as typeof window.process;
}

// Export diagnostic info to window for debugging
if (typeof window !== 'undefined') {
  (window as unknown as Record<string, unknown>).__ENV_INFO = {
    mode: import.meta.env.MODE,
    supabase_url: import.meta.env.NEXT_PUBLIC_SUPABASE_URL,
    timestamp: new Date().toISOString()
  };
}

export {};
