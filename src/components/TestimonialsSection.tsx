'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronRight, FaChevronLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'דניאל לוי',
      quote: 'בית קפה אלפא הוא המקום המושלם ללמוד ולהנות מקפה איכותי. האווירה נעימה והצוות מקצועי ואדיב.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'מיכל כהן',
      quote: 'השיעורים בבית הקפה אלפא שינו את הדרך שבה אני מתייחסת ללימודים. המקום מספק סביבה תומכת ומעודדת יצירתיות.',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'יוסי אברהם',
      quote: 'הקפה הטוב ביותר בעיר! והאווירה הלימודית עוזרת לי להתרכז בעבודה. ממליץ בחום על המקום.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'רונית שמעון',
      quote: 'המדריכים בבית קפה אלפא מקצועיים ואכפתיים. הם תמיד מוכנים לעזור ולתמוך בתהליך הלמידה.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 5,
      name: 'אבי גולדשטיין',
      quote: 'המאפים הטריים והקפה האיכותי הם רק חלק ממה שהופך את בית קפה אלפא למיוחד. האווירה הלימודית מושלמת.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsToShow = width < 768 ? 1 : width < 1024 ? 2 : 3;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow >= testimonials.length 
        ? 0 
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, testimonials.length - itemsToShow) 
        : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-500" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <section className="bg-gradient-to-b from-primary-light to-white py-16 px-4 md:px-8 rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-secondary font-cafe">מה הלקוחות שלנו אומרים</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            הלקוחות שלנו משתפים את החוויות שלהם בבית קפה אלפא - המקום המושלם לקפה איכותי ולמידה
          </p>
        </div>

        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <AnimatePresence initial={false}>
              <motion.div 
                className="flex gap-6"
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {visibleTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    className="bg-white rounded-lg shadow-lg p-6 flex-1 min-w-0 transform transition-transform duration-300 hover:scale-105"
                    whileHover={{ y: -10 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mr-4">
                        <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-4 bg-white text-secondary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="הקודם"
          >
            <FaChevronRight className="text-xl" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-4 bg-white text-secondary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="הבא"
          >
            <FaChevronLeft className="text-xl" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsToShow)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === Math.floor(currentIndex / itemsToShow) 
                  ? 'bg-secondary' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`עבור לסט חוות דעת ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;