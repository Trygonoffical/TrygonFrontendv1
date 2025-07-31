'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaPalette, 
  FaUsers, 
  FaMobile, 
  FaDesktop,
  FaEye,
  FaPencilRuler,
  FaLightbulb,
  FaHeart,
  FaCheckCircle,
  FaArrowRight,
  FaUserCheck,
  FaChartLine,
  FaMousePointer,
  FaCog
} from 'react-icons/fa';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Image from 'next/image';

const UIUXDesignPage = () => {
  const designTypes = [
    { 
      icon: FaDesktop, 
      name: 'Web Design', 
      description: 'Modern, responsive website designs that convert visitors',
      color: 'bg-blue-500'
    },
    { 
      icon: FaMobile, 
      name: 'Mobile App Design', 
      description: 'Intuitive mobile interfaces for iOS and Android',
      color: 'bg-green-500'
    },
    { 
      icon: FaEye, 
      name: 'User Experience', 
      description: 'Research-driven UX that improves user satisfaction',
      color: 'bg-purple-500'
    },
    { 
      icon: FaPalette, 
      name: 'Brand Identity', 
      description: 'Cohesive visual identity and brand systems',
      color: 'bg-orange-500'
    }
  ];

  const services = [
    {
      icon: FaUsers,
      title: 'User Research & Analysis',
      description: 'Deep dive into user behavior, needs, and pain points to inform design decisions.',
      features: ['User Interviews', 'Surveys & Analytics', 'Persona Development', 'Journey Mapping']
    },
    {
      icon: FaPencilRuler,
      title: 'Wireframing & Prototyping',
      description: 'Create detailed wireframes and interactive prototypes to test and validate concepts.',
      features: ['Low-fi Wireframes', 'High-fi Prototypes', 'Interactive Mockups', 'Usability Testing']
    },
    {
      icon: FaPalette,
      title: 'Visual Design',
      description: 'Stunning visual designs that align with your brand and engage your audience.',
      features: ['UI Design Systems', 'Brand Guidelines', 'Icon Design', 'Illustration']
    },
    {
      icon: FaMousePointer,
      title: 'Interaction Design',
      description: 'Design intuitive interactions and micro-animations that delight users.',
      features: ['Micro-interactions', 'Animation Design', 'State Management', 'Accessibility']
    },
    {
      icon: FaUserCheck,
      title: 'Usability Testing',
      description: 'Test designs with real users to ensure optimal user experience and conversion.',
      features: ['User Testing Sessions', 'A/B Testing', 'Heatmap Analysis', 'Conversion Optimization']
    },
    {
      icon: FaCog,
      title: 'Design Systems',
      description: 'Build scalable design systems that ensure consistency across all touchpoints.',
      features: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Documentation']
    }
  ];

  const principles = [
    { icon: FaUsers, title: 'User-Centered', description: 'Always prioritize user needs and goals' },
    { icon: FaLightbulb, title: 'Innovation', description: 'Creative solutions that stand out' },
    { icon: FaHeart, title: 'Empathy', description: 'Understanding and designing for human emotions' },
    { icon: FaChartLine, title: 'Data-Driven', description: 'Decisions backed by research and analytics' }
  ];

  const tools = [
    { category: 'Design Tools', items: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Creative Suite'] },
    { category: 'Prototyping', items: ['Figma', 'InVision', 'Principle', 'Framer'] },
    { category: 'Research Tools', items: ['Hotjar', 'Maze', 'UsabilityHub', 'Google Analytics'] },
    { category: 'Collaboration', items: ['Miro', 'Notion', 'Slack', 'Zeplin'] }
  ];

  const process = [
    {
      step: 1,
      title: 'Research & Discovery',
      description: 'Understand users, business goals, and market landscape through comprehensive research.'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Define design strategy, user personas, and information architecture.'
    },
    {
      step: 3,
      title: 'Wireframing & Concepts',
      description: 'Create wireframes and initial concepts to establish layout and functionality.'
    },
    {
      step: 4,
      title: 'Visual Design',
      description: 'Develop the visual language, UI components, and high-fidelity designs.'
    },
    {
      step: 5,
      title: 'Prototyping & Testing',
      description: 'Build interactive prototypes and conduct usability testing for validation.'
    },
    {
      step: 6,
      title: 'Handoff & Support',
      description: 'Deliver final designs with documentation and support during development.'
    }
  ];

  const portfolio = [
    {
      title: 'FinTech Mobile App',
      category: 'Mobile App Design',
      description: 'Complete redesign of a financial app that improved user engagement by 40%.',
      metrics: '40% increase in user engagement',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Design',
      description: 'Modern e-commerce design that increased conversion rates by 25%.',
      metrics: '25% increase in conversions',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Healthcare Dashboard',
      category: 'Dashboard Design',
      description: 'Intuitive healthcare dashboard that reduced task completion time by 50%.',
      metrics: '50% faster task completion',
      image: '/api/placeholder/400/300'
    }
  ];

  const pricing = [
    {
      name: 'UI Design',
      price: '$1,999',
      description: 'Visual design for existing wireframes',
      features: [
        'Visual design system',
        'High-fidelity mockups',
        'Responsive design',
        'Design documentation',
        '2 rounds of revisions'
      ]
    },
    {
      name: 'Complete UX/UI',
      price: '$4,999',
      description: 'Full UX research and UI design process',
      features: [
        'User research & analysis',
        'Wireframing & prototyping',
        'Visual design system',
        'Usability testing',
        'Design handoff',
        'Unlimited revisions'
      ],
      popular: true
    },
    {
      name: 'Design System',
      price: '$7,999',
      description: 'Comprehensive design system development',
      features: [
        'Complete design system',
        'Component library',
        'Style guide documentation',
        'Design tokens',
        'Developer handoff',
        'Training & support'
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
                UI/UX <span className="text-blue-400">Design</span> Services
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Create exceptional user experiences that engage your audience and drive business growth through thoughtful, user-centered design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Design Project <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900">
                    View Design Portfolio
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
                {designTypes.map((type, index) => (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm">{type.name}</h3>
                    <p className="text-xs text-blue-100">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Design</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive UI/UX design services that transform ideas into engaging digital experiences.
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
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
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

      {/* Design Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Design <span className="text-blue-600">Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our design process and ensure exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Design <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to design that ensures we create solutions that truly meet user needs.
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
                    <FaPalette className="w-16 h-16 text-blue-600" />
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
              Featured <span className="text-blue-600">Design</span> Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of our design work that have delivered exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Result:</div>
                    <div className="text-sm text-green-700">{project.metrics}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Design <span className="text-blue-600">Tools & Software</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading design tools to create exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((toolCategory, index) => (
              <motion.div
                key={toolCategory.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{toolCategory.category}</h3>
                  <ul className="space-y-2">
                    {toolCategory.items.map((tool, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>
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
              Design <span className="text-blue-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options for UI/UX design projects of different scopes and requirements.
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
              Ready to Create Amazing User Experiences?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s design digital experiences that your users will love and that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Design Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-blue-600">
                  View Design Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesignPage;