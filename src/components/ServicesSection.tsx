'use client';

import React, { useEffect, useRef } from 'react';
import { FaBook, FaLaptop, FaCoffee, FaUsers, FaChalkboardTeacher, FaWifi } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 rtl"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl mb-4 text-secondary">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const services = [
    {
      icon: <FaCoffee />,
      title: "אזור קפה ייחודי",
      description: "אווירה נעימה עם קפה איכותי ומבחר מאפים טריים לצד הלימודים",
    },
    {
      icon: <FaBook />,
      title: "ספרייה חינוכית",
      description: "מגוון ספרי לימוד וספרות מקצועית זמינים לעיון ולהשאלה",
    },
    {
      icon: <FaLaptop />,
      title: "פינות עבודה שקטות",
      description: "מרחבי עבודה מאובזרים ללימוד ועבודה בשקט ובנוחות",
    },
    {
      icon: <FaUsers />,
      title: "מרחבי למידה קבוצתיים",
      description: "אזורים מיוחדים ללמידה משותפת ולעבודה בקבוצות",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "סדנאות חינוכיות",
      description: "מגוון סדנאות והרצאות בנושאים מקצועיים ואקדמיים",
    },
    {
      icon: <FaWifi />,
      title: "אינטרנט מהיר",
      description: "חיבור אינטרנט אלחוטי מהיר וחופשי לכל המבקרים",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-primary bg-opacity-20 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            בית קפה אלפא מציע מגוון שירותים חינוכיים לצד חוויית קפה מושלמת. המקום מיועד ללמידה, עבודה ומפגשים בסביבה נעימה ומעוררת השראה.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;