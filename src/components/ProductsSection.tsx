'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'קפה שחור קלאסי',
      description: 'קפה שחור עשיר וארומטי, נטחן טרי מדי יום',
      price: 12,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'קפוצ׳ינו איטלקי',
      description: 'קפוצ׳ינו קרמי עם חלב מוקצף בקפידה',
      price: 16,
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'לאטה מקרמל',
      description: 'לאטה עשיר עם סירופ קרמל ביתי וקצפת',
      price: 18,
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'קרואסון שוקולד',
      description: 'קרואסון חמאה פריך במילוי שוקולד בלגי',
      price: 14,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'סלט ים תיכוני',
      description: 'סלט טרי עם ירקות עונתיים, גבינת פטה וזיתים',
      price: 32,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'כריך אבוקדו',
      description: 'כריך בלחם מחמצת עם אבוקדו טרי, ביצה ועגבניות',
      price: 28,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      name: 'עוגת גבינה',
      description: 'עוגת גבינה קרמית אפויה עם שכבת פירות יער',
      price: 22,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 8,
      name: 'מאפינס תפוחים',
      description: 'מאפינס תפוחים עם קינמון וקראמבל על הקצפת',
      price: 15,
      image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <section className="py-16 px-4 bg-cream-100 rtl" dir="rtl">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-coffee-800 font-cafe">
            התפריט שלנו
          </h2>
          <p className="text-lg md:text-xl text-coffee-600 max-w-2xl mx-auto">
            אנו מציעים מבחר עשיר של קפה איכותי, מאפים טריים ומנות קלות. כל המוצרים שלנו מוכנים מחומרי גלם מקומיים ובאיכות הגבוהה ביותר.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 bg-gradient-to-b from-cream-50 to-cream-100">
                <h3 className="text-xl font-bold text-coffee-800 mb-2 font-cafe">{product.name}</h3>
                <p className="text-coffee-600 mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-accent">₪{product.price}</span>
                  <button className="bg-accent text-white py-1 px-4 rounded-full hover:bg-accent-dark transition-colors duration-300 text-sm font-medium">
                    הוסף להזמנה
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;