import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
    
    // Also scroll the document element for better browser compatibility
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    
    // Focus the main content for accessibility
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus({ preventScroll: true });
    }
  }, [pathname, search]);

  return null;
}
