
import React from 'react';
import { useRouter } from '@/components/RouterProvider';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Enhanced link wrapper that works without Next.js dependencies
export function Link({ 
  href, 
  children, 
  className, 
  prefetch = false, 
  replace = false, 
  scroll = true, 
  onClick, 
  ...props 
}: LinkProps) {
  
  // Handle navigation
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent default if it's not an external URL
    if (!href.startsWith('http')) {
      e.preventDefault();
      
      if (onClick) {
        onClick(e);
      }
      
      // Use direct URL change
      window.location.href = href;
    } else if (onClick) {
      // If it's an external link but we have an onClick handler, call it
      onClick(e);
    }
  };

  // For external links, don't use our custom routing
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} {...props} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}

export default Link;
