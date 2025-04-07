'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="בית קפה אלפא"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2"
        >
          <h1 className="font-cafe text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            בית קפה אלפא
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            בית קפה מוביל בישראל
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 max-w-xl"
        >
          <p className="text-lg text-gray-200 md:text-xl">
            חווית לקוח מושלמת בכל ביקור
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="rounded-full bg-secondary px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl">
            קבע תור עכשיו
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;