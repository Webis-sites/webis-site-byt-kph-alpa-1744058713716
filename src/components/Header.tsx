'use client';

import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'ראשי' },
    { id: 'about', label: 'אודות' },
    { id: 'products', label: 'מוצרים' },
    { id: 'services', label: 'שירותים' },
    { id: 'booking', label: 'הזמנות' },
    { id: 'testimonials', label: 'המלצות' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 20);
      
      // Find active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              בית קפה אלפא
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`px-4 py-2 mx-1 rounded-md text-lg font-medium cursor-pointer transition-colors duration-300 hover:text-secondary ${
                  activeSection === item.id
                    ? 'text-secondary font-bold'
                    : 'text-gray-700'
                }`}
                activeClass="active"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-secondary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-primary hover:bg-opacity-20 ${
                    activeSection === item.id
                      ? 'text-secondary font-bold bg-primary bg-opacity-10'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;