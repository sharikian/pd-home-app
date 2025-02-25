import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check initial state on client side
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false; // Default value for SSR
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const observer = new MutationObserver((mutations) => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    // Observe changes to the class attribute of the HTML element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;