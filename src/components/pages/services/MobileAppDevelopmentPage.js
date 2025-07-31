'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaMobile, 
  FaApple, 
  FaAndroid, 
  FaReact, 
  FaCloud,
  FaBell,
  FaShoppingCart,
  FaGamepad,
  FaCheckCircle,
  FaArrowRight,
  FaDownload,
  FaStar,
  FaUsers
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Image from 'next/image';

const MobileAppDevelopmentPage = () => {
  const platforms = [
    { 
      icon: FaApple, 
      name: 'iOS Development', 
      description: 'Native iOS apps using Swift and SwiftUI for optimal performance',
      color: 'bg-gray-800'
    },
    { 
      icon: FaAndroid, 
      name: 'Android Development', 
      description: 'Native Android apps using Kotlin and Jetpack Compose',
      color: 'bg-green-500'
    },
    { 
      icon: FaReact, 
      name: 'Cross-Platform', 
      description: 'React Native and Flutter for multi-platform deployment',
      color: 'bg-blue-500'
    },
    { 
      icon: FaCloud, 
      name: 'Backend Integration', 
      description: 'Seamless API integration and cloud services',
      color: 'bg-purple-500'
    }
  ];

  const appTypes = [
    {
      icon: FaShoppingCart,
      title: 'E-commerce Apps',
      description: 'Mobile shopping experiences with payment processing and inventory management.',
      features: ['Product Catalogs', 'Secure Payments', 'Order Tracking', 'Push Notifications']
    },
    {
      icon: FaBell,
      title: 'Social & Communication',
      description: 'Social networking and messaging apps with real-time communication.',
      features: ['Real-time Messaging', 'Social Features', 'Media Sharing', 'User Profiles']
    },
    {
      icon: FaGamepad,
      title: 'Entertainment & Gaming',
      description: 'Engaging entertainment apps and casual gaming experiences.',
      features: ['Interactive UI', 'Multimedia Support', 'Social Integration', 'Analytics']
    },
    {
      icon: FaCloud,
      title: 'Business & Productivity',
      description: 'Professional apps for workflow management and team collaboration.',
      features: ['Task Management', 'Team Collaboration', 'Document Sharing', 'Reporting']
    }
  ];

  const features = [
    { icon: FaMobile, title: 'Native Performance', description: 'Optimized for each platform with native look and feel' },
    { icon: FaCloud, title: 'Cloud Integration', description: 'Seamless backend services and API connectivity' },
    { icon: FaBell, title: 'Push Notifications', description: 'Engage users with targeted messaging' },
    { icon: FaUsers, title: 'User Analytics', description: 'Comprehensive insights into user behavior' }
  ];

  const process = [
    {
      step: 1,
      title: 'Strategy & Planning',
      description: 'We analyze your target audience, define user journeys, and create a comprehensive app strategy.'
    },
    {
      step: 2,
      title: 'UI/UX Design',
      description: 'Our designers create intuitive interfaces that provide exceptional user experiences.'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'We build your app using best practices and conduct thorough testing across devices.'
    },
    {
      step: 4,
      title: 'Launch & Marketing',
      description: 'We handle app store submission and provide marketing strategies for user acquisition.'
    },
    {
      step: 5,
      title: 'Maintenance & Updates',
      description: 'Ongoing support, updates, and feature enhancements to keep your app competitive.'
    }
  ];

  const technologies = [
    { name: 'React Native', description: 'Cross-platform development' },
    { name: 'Flutter', description: 'Google\'s UI toolkit' },
    { name: 'Swift', description: 'iOS native development' },
    { name: 'Kotlin', description: 'Android native development' },
    { name: 'Firebase', description: 'Backend services' },
    { name: 'AWS Mobile', description: 'Cloud infrastructure' }
  ];

  const portfolio = [
    {
      title: 'FitTracker Pro',
      category: 'Health & Fitness',
      description: 'Comprehensive fitness tracking app with AI-powered recommendations.',
      downloads: '50K+',
      rating: 4.8,
      image: '/api/placeholder/300/200'
    },
    {
      title: 'ShopEasy',
      category: 'E-commerce',
      description: 'Modern shopping app with AR try-on features and social shopping.',
      downloads: '100K+',
      rating: 4.6,
      image: '/api/placeholder/300/200'
    },
    {
      title: 'TaskMaster',
      category: 'Productivity',
      description: 'Team collaboration app with project management and time tracking.',
      downloads: '25K+',
      rating: 4.9,
      image: '/api/placeholder/300/200'
    }
  ];

  const pricing = [
    {
      name: 'MVP App',
      price: '$7,999',
      description: 'Perfect for startups and proof of concepts',
      features: [
        'Single platform (iOS or Android)',
        'Basic features (5-7 screens)',
        'Standard UI design',
        'Basic backend integration',
        '3 months support'
      ]
    },
    {
      name: 'Professional App',
      price: '$15,999',
      description: 'Full-featured app for growing businesses',
      features: [
        'Cross-platform (iOS + Android)',
        'Advanced features (10-15 screens)',
        'Custom UI/UX design',
        'Complete backend integration',
        'Push notifications',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise App',
      price: 'Custom',
      description: 'Complex apps with advanced functionality',
      features: [
        'Native development',
        'Advanced features & integrations',
        'Custom animations',
        'Advanced security',
        'App store optimization',
        '12 months support'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Mobile App <span className="text-blue-400">Development</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Create powerful mobile applications that engage users and drive business growth across iOS and Android platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your App Project <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900">
                    View App Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mb-4`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{platform.name}</h3>
                    <p className="text-sm text-blue-100">{platform.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of <span className="text-blue-600">Mobile Apps</span> We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From e-commerce to entertainment, we create custom mobile applications for every industry and use case.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <type.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mobile App <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build apps with essential features that users love and businesses need to succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Development <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your mobile app is successful from concept to app store.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <Card>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </Card>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <FaMobile className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-blue-600">Mobile Apps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successful mobile applications we&apos;ve developed for various industries and platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    className="w-full h-48 object-cover mb-4"
                    width={400}
                    height={300}
                  />
                  <div className="text-sm text-blue-600 font-medium mb-2">{app.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FaDownload className="w-4 h-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{app.downloads} downloads</span>
                    </div>
                    <div className="flex items-center">
                      <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{app.rating}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Technologies We <span className="text-blue-600">Use</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build high-performance mobile applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mobile App <span className="text-blue-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for mobile app development projects of all sizes and complexities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`text-center h-full ${plan.popular ? 'ring-2 ring-blue-600 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'primary' : 'outline'}>
                    Get Started
                  </Button>
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s turn your app idea into reality with our expert mobile development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Your App Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-blue-600">
                  View App Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;