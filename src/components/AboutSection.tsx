'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  return (
    <section 
      ref={ref} 
      className="py-16 bg-primary-light text-right overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-cafe">
              אודות בית קפה אלפא
            </h2>
            <p className="text-xl leading-relaxed mb-6">
              אנחנו בית קפה מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <p className="text-lg leading-relaxed">
              בבית קפה אלפא, אנו מאמינים שהחיבור בין קפה איכותי לסביבת למידה מעוררת השראה יוצר את החוויה המושלמת. המרחב שלנו מתוכנן כדי לאפשר לכם ליהנות מרגעי שקט, שיחות מעמיקות או עבודה יצירתית, כל זאת לצד הקפה המשובח שלנו.
            </p>
            <motion.button 
              className="mt-6 bg-secondary text-white py-3 px-8 rounded-lg font-bold hover:bg-secondary-dark transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              קראו עוד
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="בית קפה אלפא - אווירה לימודית"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-secondary bg-opacity-20 hover:bg-opacity-0 transition-all duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;