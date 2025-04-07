import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaClock, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-gray-800 pt-10 pb-6 dir-rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="בית קפה אלפא" 
                width={60} 
                height={60} 
                className="ml-2"
              />
              <h3 className="text-2xl font-bold text-secondary">בית קפה אלפא</h3>
            </div>
            <p className="mb-4">
              בית קפה אלפא הוא מקום מפגש ייחודי המציע קפה איכותי, מאפים טריים ואווירה נעימה.
              אנו מאמינים בשירות מקצועי, איכות ללא פשרות וחוויה ישראלית אותנטית.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-secondary transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-secondary transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-secondary transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://wa.me/972123456789" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-secondary transition-colors duration-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-secondary">ניווט מהיר</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-secondary transition-colors duration-300">דף הבית</Link>
              </li>
              <li className="mb-2">
                <Link href="/menu" className="hover:text-secondary transition-colors duration-300">תפריט</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-secondary transition-colors duration-300">אודות</Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery" className="hover:text-secondary transition-colors duration-300">גלריה</Link>
              </li>
              <li className="mb-2">
                <Link href="/events" className="hover:text-secondary transition-colors duration-300">אירועים</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-secondary transition-colors duration-300">צור קשר</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-secondary">צור קשר</h3>
            <ul>
              <li className="mb-3 flex items-center">
                <FaMapMarkerAlt className="ml-2 text-secondary" />
                <span>רחוב הראשונים 123, תל אביב</span>
              </li>
              <li className="mb-3 flex items-center">
                <FaPhone className="ml-2 text-secondary" />
                <a href="tel:+972123456789" className="hover:text-secondary transition-colors duration-300">
                  072-123-4567
                </a>
              </li>
              <li className="mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@cafe-alpha.co.il" className="hover:text-secondary transition-colors duration-300">
                  info@cafe-alpha.co.il
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-secondary">שעות פעילות</h3>
            <ul>
              <li className="mb-2 flex items-center">
                <FaClock className="ml-2 text-secondary" />
                <div>
                  <p>ראשון - חמישי</p>
                  <p>08:00 - 22:00</p>
                </div>
              </li>
              <li className="mb-2 flex items-center">
                <FaClock className="ml-2 text-secondary" />
                <div>
                  <p>שישי</p>
                  <p>08:00 - 15:00</p>
                </div>
              </li>
              <li className="mb-2 flex items-center">
                <FaClock className="ml-2 text-secondary" />
                <div>
                  <p>שבת</p>
                  <p>סגור</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Keywords and Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              <span className="text-sm text-gray-600">מילות מפתח: </span>
              <span className="text-sm text-gray-600">בית קפה, שירות, איכות, מקצועיות, ישראל</span>
            </p>
            <p className="text-sm text-gray-600">
              &copy; {currentYear} בית קפה אלפא. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;