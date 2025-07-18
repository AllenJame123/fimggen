
import { useRouter as useNextRouter } from 'next/router';
import { createContext, useContext, ReactNode } from 'react';

interface RouterContextType {
  pathname: string;
  asPath: string;
  push: (url: string) => void;
  replace: (url: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const router = useNextRouter();
  
  const contextValue: RouterContextType = {
    pathname: router.pathname,
    asPath: router.asPath,
    push: router.push,
    replace: router.replace,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
};
