import '../index.css';
import { AppProps } from 'next/app';
import { Toaster } from "sonner";
import NextLayout from '@/components/NextLayout';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextLayout>
        <Component {...pageProps} />
      </NextLayout>
      <Toaster />
    </QueryClientProvider>
  );
}

export default MyApp; 