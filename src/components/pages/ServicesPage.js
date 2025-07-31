'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaCode, 
  FaMobile, 
  FaShoppingCart, 
  FaChartLine, 
  FaCloud, 
  FaPalette, 
  FaLightbulb,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaRocket
} from 'react-icons/fa';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ServicesPage = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'Modern Frameworks (React, Next.js)',
        'SEO Optimization',
        'Performance Optimization',
        'CMS Integration'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'Tailwind CSS'],
      startingPrice: '$2,499',
      href: '/services/website-development'
    },
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'Native iOS & Android',
        'Cross-platform Development',
        'App Store Optimization',
        'Push Notifications',
        'API Integration'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      startingPrice: '$7,999',
      href: '/services/mobile-app-development'
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce Development',
      description: 'Complete online stores with payment integration and inventory management.',
      features: [
        'Custom E-commerce Platforms',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Tracking',
        'Multi-vendor Support'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
      startingPrice: '$4,999',
      href: '/services/ecommerce-development'
    },
    {
      icon: FaChartLine,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and PPC campaigns to grow your online presence.',
      features: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'Pay-Per-Click Advertising',
        'Content Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'SEMrush', 'Google Analytics', 'HubSpot'],
      startingPrice: '$1,499',
      href: '/services/digital-marketing'
    },
    {
      icon: FaCloud,
      title: 'DevOps & Cloud Services',
      description: 'Cloud infrastructure, CI/CD pipelines, and deployment automation.',
      features: [
        'Cloud Infrastructure Setup',
        'CI/CD Pipeline Implementation',
        'Docker & Kubernetes',
        'Server Management',
        'Security & Monitoring'
      ],
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
      startingPrice: '$2,999',
      href: '/services/devops-cloud'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive digital experiences.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design System Creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      startingPrice: '$1,999',
      href: '/services/ui-ux-design'
    },
    {
      icon: FaLightbulb,
      title: 'Software Consulting',
      description: 'Expert guidance on technology strategy, architecture, and implementation.',
      features: [
        'Technology Strategy',
        'Architecture Planning',
        'Code Review & Audit',
        'Performance Optimization',
        'Team Training'
      ],
      technologies: ['Various', 'Custom', 'Enterprise', 'Scalable', 'Secure'],
      startingPrice: '$199/hr',
      href: '/services/software-consulting'
    },
    {
      icon: FaShieldAlt,
      title: 'AMC Services',
      description: 'Annual Maintenance Contracts for websites, applications, and digital infrastructure.',
      features: [
        'Regular Updates & Patches',
        'Security Monitoring',
        'Performance Optimization',
        'Backup & Recovery',
        '24/7 Technical Support'
      ],
      technologies: ['Monitoring Tools', 'Security', 'Analytics', 'Automation', 'Support'],
      startingPrice: '$199/month',
      href: '/services/amc'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.'
    },
    {
      step: 2,
      title: 'Design & Architecture',
      description: 'Our team designs the solution architecture and user experience.'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'We build your solution using best practices and rigorous testing.'
    },
    {
      step: 4,
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Our developers and designers are experts in their respective fields with years of experience.'
    },
    {
      title: 'Proven Process',
      description: 'We follow a time-tested development process that ensures quality and timely delivery.'
    },
    {
      title: 'Latest Technologies',
      description: 'We use cutting-edge technologies and frameworks to build future-ready solutions.'
    },
    {
      title: 'Ongoing Support',
      description: 'We provide comprehensive support and maintenance to keep your solutions running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT solutions to transform your business and drive growth 
              in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-blue-600">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                      <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-blue-600 font-medium">Starting at {service.startingPrice}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link href={service.href}>
                      <Button className="w-full group-hover:bg-blue-700 transition-colors">
                        Learn More <FaArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Trygon?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaRocket className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how our expert team can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;