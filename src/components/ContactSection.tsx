'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(null), 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16 font-cafe-alpha" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            צור קשר
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            אנחנו תמיד שמחים לשמוע מכם! שלחו לנו הודעה או בקרו אותנו בבית קפה אלפא
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">פרטי התקשרות</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-secondary text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">כתובת</h4>
                  <p className="text-gray-600">רחוב הרצל 123, תל אביב</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary p-3 rounded-full mr-4">
                  <FaPhone className="text-secondary text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">טלפון</h4>
                  <p className="text-gray-600 hover:text-secondary transition-colors">
                    <a href="tel:+972-3-1234567">03-1234567</a>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-primary p-3 rounded-full mr-4">
                  <FaEnvelope className="text-secondary text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">אימייל</h4>
                  <p className="text-gray-600 hover:text-secondary transition-colors">
                    <a href="mailto:info@cafealpha.co.il">info@cafealpha.co.il</a>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">שעות פתיחה</h4>
              <div className="space-y-2 text-gray-600">
                <p>ראשון - חמישי: 08:00 - 22:00</p>
                <p>שישי: 08:00 - 16:00</p>
                <p>שבת: 10:00 - 22:00</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">עקבו אחרינו</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary p-3 rounded-full"
                  whileHover={{ y: -5, backgroundColor: "#FF6B6B" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaFacebook className="text-secondary text-xl" />
                </motion.a>
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary p-3 rounded-full"
                  whileHover={{ y: -5, backgroundColor: "#FF6B6B" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaInstagram className="text-secondary text-xl" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary p-3 rounded-full"
                  whileHover={{ y: -5, backgroundColor: "#FF6B6B" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FaTwitter className="text-secondary text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">שלחו לנו הודעה</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם</label>
                <motion.input 
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">אימייל</label>
                <motion.input 
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  required
                ></motion.textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin mr-2">⟳</span>
                ) : (
                  <FaPaperPlane className="mr-2" />
                )}
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </motion.button>

              {submitSuccess === true && (
                <motion.div 
                  className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                </motion.div>
              )}

              {submitSuccess === false && (
                <motion.div 
                  className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="mt-16 rounded-xl overflow-hidden shadow-lg h-96 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27034.817159698802!2d34.76383005!3d32.0852999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1656543251232!5m2!1sen!2sil" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="בית קפה אלפא מפה"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;