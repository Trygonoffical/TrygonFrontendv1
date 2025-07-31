'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  FaCode,
  FaMobile,
  FaShoppingCart,
  FaChartLine,
  FaCloud,
  FaPalette,
  FaArrowRight
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const ServicesSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      icon: FaCode,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
      link: '/services/website-development'
    },
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      link: '/services/mobile-app-development'
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, and analytics.',
      link: '/services/ecommerce-development'
    },
    {
      icon: FaChartLine,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that increase visibility and drive conversions.',
      link: '/services/digital-marketing'
    },
    {
      icon: FaCloud,
      title: 'DevOps & Cloud',
      description: 'Scalable cloud infrastructure and automated deployment pipelines.',
      link: '/services/devops-cloud'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences.',
      link: '/services/ui-ux-design'
    }
  ];

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
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive IT solutions to help your business thrive in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <Link href={service.link}>
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn More <FaArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;