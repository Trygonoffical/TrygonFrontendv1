'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
      image: "/assets/logo/profile.png",
      testimonial: 'Trygon transformed our online presence completely. Their web development team delivered beyond our expectations with a modern, fast website that significantly increased our conversions by 300%.',
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      company: 'Global Retail Co.',
      position: 'CTO',
      rating: 5,
      image: "/assets/logo/profile.png",
      testimonial: 'The e-commerce platform they built for us has been a game-changer. Sales increased by 200% in the first quarter after launch. Their team is professional and delivers exceptional results.',
      project: 'Multi-vendor Marketplace'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      position: 'Founder',
      rating: 5,
      image: "/assets/logo/profile.png",
      testimonial: 'Professional, responsive, and incredibly talented. The mobile app they developed for us won industry awards. We couldn\'t be happier with the results and ongoing support.',
      project: 'Creative Portfolio App'
    },
    {
      name: 'David Kim',
      company: 'HealthTech Solutions',
      position: 'VP of Technology',
      rating: 5,
      image: "/assets/logo/profile.png",
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
    <section className="py-20 bg-[#030712] relative overflow-hidden">
       {/* Background Patterns */}
       <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center opacity-10"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client <span className="text-blue-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Success stories from businesses we&apos;ve helped transform.
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
                    className="glass rounded-3xl p-8 lg:p-12 text-center relative border border-white/5 bg-white/5"
                  >
                    <FaQuoteLeft className="text-4xl text-blue-500 mx-auto mb-6 opacity-50" />

                    <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed italic font-light">
                      &quot;{testimonial.testimonial}&quot;
                    </p>

                    <div className="flex items-center justify-center mb-6 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 text-yellow-500" />
                      ))}
                    </div>

                    <div className="flex items-center justify-center">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500"
                      />
                      <div className="text-left">
                        <div className="font-bold text-lg text-white">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.position}, <span className="text-blue-400">{testimonial.company}</span></div>
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-16 bg-white/5 border border-white/10 rounded-full p-3 hover:bg-white/10 transition-colors text-white"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-16 bg-white/5 border border-white/10 rounded-full p-3 hover:bg-white/10 transition-colors text-white"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-700'
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