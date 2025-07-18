import { ReactNode } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
