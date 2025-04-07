'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and update visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 left-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-primary text-secondary
        shadow-lg hover:shadow-xl
        transform hover:scale-110
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50
        rtl:left-auto rtl:right-6
      `}
      aria-label="חזרה לראש העמוד"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTop;