'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaComment } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

interface BookingFormInputs {
  name: string;
  phone: string;
  email: string;
  message: string;
  dateTime: Date;
}

const BookingSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors },
    reset
  } = useForm<BookingFormInputs>();

  const onSubmit = async (data: BookingFormInputs) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section dir="rtl" className="relative py-16 overflow-hidden bg-primary-light">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
          alt="קפה אלפא אווירה" 
          className="object-cover w-full h-full opacity-20"
        />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-4xl font-bold text-secondary font-cafe">הזמנת מקום בבית קפה אלפא</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            אנו מזמינים אתכם להזמין מקום בבית הקפה שלנו. מלאו את הטופס ונחזור אליכם בהקדם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-white rounded-lg shadow-xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-secondary font-cafe">פרטי יצירת קשר</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <FaPhone className="text-secondary" />
                <span className="text-gray-700">03-1234567</span>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <FaEnvelope className="text-secondary" />
                <span className="text-gray-700">info@cafe-alpha.co.il</span>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-200">
                <h4 className="mb-2 text-xl font-semibold text-secondary">שעות פעילות</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>ראשון - חמישי: 08:00 - 22:00</li>
                  <li>שישי: 08:00 - 16:00</li>
                  <li>שבת: 10:00 - 22:00</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={formAnimation}
            className="p-6 bg-white rounded-lg shadow-xl"
          >
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                <div className="w-16 h-16 mb-4 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-secondary">תודה על הזמנתך!</h3>
                <p className="text-gray-600">נחזור אליך בהקדם לאישור ההזמנה.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={itemAnimation} className="form-group">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaUser className="text-secondary" />
                      שם מלא *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'שדה חובה' })}
                    className={`w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="הכנס את שמך המלא"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </motion.div>

                <motion.div variants={itemAnimation} className="form-group">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaPhone className="text-secondary" />
                      טלפון *
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { 
                      required: 'שדה חובה',
                      pattern: {
                        value: /^0\d{8,9}$/,
                        message: 'מספר טלפון לא תקין'
                      }
                    })}
                    className={`w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="הכנס את מספר הטלפון שלך"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                </motion.div>

                <motion.div variants={itemAnimation} className="form-group">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaEnvelope className="text-secondary" />
                      אימייל *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'שדה חובה',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'כתובת אימייל לא תקינה'
                      }
                    })}
                    className={`w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="הכנס את כתובת האימייל שלך"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </motion.div>

                <motion.div variants={itemAnimation} className="form-group">
                  <label htmlFor="dateTime" className="block mb-2 text-sm font-medium text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-secondary" />
                      תאריך ושעה *
                    </span>
                  </label>
                  <Controller
                    control={control}
                    name="dateTime"
                    rules={{ required: 'שדה חובה' }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        timeCaption="שעה"
                        dateFormat="dd/MM/yyyy HH:mm"
                        minDate={new Date()}
                        className={`w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 ${errors.dateTime ? 'border-red-500' : 'border-gray-300'}`}
                        placeholderText="בחר תאריך ושעה"
                      />
                    )}
                  />
                  {errors.dateTime && <p className="mt-1 text-sm text-red-500">{errors.dateTime.message}</p>}
                </motion.div>

                <motion.div variants={itemAnimation} className="form-group">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaComment className="text-secondary" />
                      הודעה
                    </span>
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 text-right border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300"
                    placeholder="הוסף הערות או בקשות מיוחדות"
                  ></textarea>
                </motion.div>

                <motion.div variants={itemAnimation} className="form-group">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 text-lg font-medium text-white transition-all duration-300 rounded-md bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        מעבד...
                      </span>
                    ) : (
                      'קבע תור עכשיו'
                    )}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;