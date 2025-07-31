'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      position: 'CEO',
      rating: 5,
      image: "/api/placeholder/80/80",
      testimonial: 'Trygon transformed our online presence completely. Their web development team delivered beyond our expectations with a modern, fast website that significantly increased our conversions by 300%.',
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      company: 'Global Retail Co.',
      position: 'CTO',
      rating: 5,
      image: "/api/placeholder/80/80",
      testimonial: 'The e-commerce platform they built for us has been a game-changer. Sales increased by 200% in the first quarter after launch. Their team is professional and delivers exceptional results.',
      project: 'Multi-vendor Marketplace'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      position: 'Founder',
      rating: 5,
      image: "/api/placeholder/80/80",
      testimonial: 'Professional, responsive, and incredibly talented. The mobile app they developed for us won industry awards. We couldn\'t be happier with the results and ongoing support.',
      project: 'Creative Portfolio App'
    },
    {
      name: 'David Kim',
      company: 'HealthTech Solutions',
      position: 'VP of Technology',
      rating: 5,
      image: "/api/placeholder/80/80",
      testimonial: 'Trygon delivered a complex healthcare platform that exceeded all our requirements. Their attention to security and compliance was outstanding. Highly recommended!',
      project: 'Healthcare Management System'
    }
  ];

  // Auto-scroll for testimonials
  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isClient, testimonials.length]);

  if (!isClient) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentTestimonial * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center relative"
                  >
                    <FaQuoteLeft className="text-4xl text-blue-600 mx-auto mb-6" />

                    <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                      &quot;{testimonial.testimonial}&quot;
                    </p>

                    <div className="flex items-center justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-yellow-400 mr-1" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center">
                                            <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div className="text-left">
                        <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.position}</div>
                        <div className="text-blue-600 font-medium">{testimonial.company}</div>
                        <div className="text-sm text-gray-500 mt-1">Project: {testimonial.project}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <FaChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <FaChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;