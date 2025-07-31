'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaHandshake, 
  FaLightbulb, 
  FaChartLine, 
  FaCode,
  FaCogs,
  FaUsers,
  FaGraduationCap,
  FaSearchPlus,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaBrain,
  FaTools
} from 'react-icons/fa';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const SoftwareConsultingPage = () => {
  const consultingAreas = [
    { 
      icon: FaLightbulb, 
      name: 'Technology Strategy', 
      description: 'Strategic technology planning and roadmap development',
      color: 'bg-yellow-500'
    },
    { 
      icon: FaCogs, 
      name: 'Architecture Review', 
      description: 'Software architecture assessment and optimization',
      color: 'bg-blue-500'
    },
    { 
      icon: FaCode, 
      name: 'Code Audits', 
      description: 'Comprehensive code quality and security reviews',
      color: 'bg-green-500'
    },
    { 
      icon: FaUsers, 
      name: 'Team Training', 
      description: 'Skill development and best practices training',
      color: 'bg-purple-500'
    }
  ];

  const services = [
    {
      icon: FaLightbulb,
      title: 'Technology Strategy & Planning',
      description: 'Develop comprehensive technology strategies aligned with your business objectives.',
      features: ['Technology Roadmap', 'Platform Selection', 'Scalability Planning', 'Risk Assessment']
    },
    {
      icon: FaCogs,
      title: 'Software Architecture Review',
      description: 'Evaluate and optimize your software architecture for performance and scalability.',
      features: ['Architecture Assessment', 'Performance Analysis', 'Scalability Review', 'Best Practices']
    },
    {
      icon: FaCode,
      title: 'Code Review & Audit',
      description: 'Comprehensive code analysis to improve quality, security, and maintainability.',
      features: ['Code Quality Analysis', 'Security Assessment', 'Performance Optimization', 'Documentation Review']
    },
    {
      icon: FaGraduationCap,
      title: 'Team Training & Mentoring',
      description: 'Upskill your development team with modern technologies and best practices.',
      features: ['Technical Training', 'Best Practices Workshops', 'Mentoring Programs', 'Skill Assessments']
    },
    {
      icon: FaSearchPlus,
      title: 'Technical Due Diligence',
      description: 'Thorough technical evaluation for mergers, acquisitions, or investments.',
      features: ['Technology Assessment', 'Risk Analysis', 'Valuation Support', 'Recommendation Reports']
    },
    {
      icon: FaRocket,
      title: 'Digital Transformation',
      description: 'Guide your organization through comprehensive digital transformation initiatives.',
      features: ['Transformation Strategy', 'Process Optimization', 'Change Management', 'Implementation Support']
    }
  ];

  const expertise = [
    { icon: FaBrain, title: 'Strategic Thinking', description: 'Long-term technology vision and planning' },
    { icon: FaShieldAlt, title: 'Risk Management', description: 'Identify and mitigate technical risks' },
    { icon: FaRocket, title: 'Innovation', description: 'Cutting-edge solutions and emerging technologies' },
    { icon: FaUsers, title: 'Team Leadership', description: 'Building and leading high-performing teams' }
  ];

  const technologies = [
    { category: 'Programming Languages', items: ['JavaScript/TypeScript', 'Python', 'Java', 'C#/.NET', 'Go', 'Rust'] },
    { category: 'Frameworks & Libraries', items: ['React/Next.js', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Spring Boot'] },
    { category: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Serverless'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL', 'DynamoDB'] },
    { category: 'Architecture Patterns', items: ['Microservices', 'Event-Driven', 'Domain-Driven Design', 'CQRS', 'Clean Architecture'] },
    { category: 'DevOps & Tools', items: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Security', 'Performance Testing'] }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'Understand your current technology landscape, challenges, and business objectives.'
    },
    {
      step: 2,
      title: 'Analysis & Evaluation',
      description: 'Conduct thorough analysis of systems, processes, and team capabilities.'
    },
    {
      step: 3,
      title: 'Strategy Development',
      description: 'Create actionable recommendations and strategic roadmaps.'
    },
    {
      step: 4,
      title: 'Implementation Planning',
      description: 'Develop detailed implementation plans with timelines and milestones.'
    },
    {
      step: 5,
      title: 'Execution Support',
      description: 'Provide ongoing guidance and support during implementation.'
    }
  ];

  const caseStudies = [
    {
      title: 'Enterprise Architecture Modernization',
      client: 'Fortune 500 Company',
      challenge: 'Legacy monolithic system causing scalability issues',
      solution: 'Designed microservices architecture migration strategy',
      results: [
        'Reduced system downtime by 80%',
        'Improved development velocity by 3x',
        'Enhanced system scalability',
        'Reduced operational costs by 40%'
      ]
    },
    {
      title: 'Startup Technology Strategy',
      client: 'SaaS Startup',
      challenge: 'Technical debt and scaling challenges',
      solution: 'Comprehensive code review and architecture redesign',
      results: [
        'Improved code quality by 60%',
        'Reduced bugs and technical debt',
        'Enhanced team productivity',
        'Successful Series A funding'
      ]
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'E-commerce',
    'Manufacturing',
    'Technology',
    'Education',
    'Government',
    'Non-Profit'
  ];

  const pricing = [
    {
      name: 'Hourly Consultation',
      price: '$199/hour',
      description: 'Flexible consulting for specific needs',
      features: [
        'Expert technical advice',
        'Problem-solving sessions',
        'Technology recommendations',
        'Architecture reviews',
        'No minimum commitment'
      ]
    },
    {
      name: 'Project-Based',
      price: '$5,000+',
      description: 'Comprehensive consulting projects',
      features: [
        'Complete assessment',
        'Detailed recommendations',
        'Implementation roadmap',
        'Documentation',
        'Follow-up support',
        'Progress reviews'
      ],
      popular: true
    },
    {
      name: 'Retainer Agreement',
      price: '$10,000+/month',
      description: 'Ongoing strategic partnership',
      features: [
        'Dedicated consultant',
        'Monthly strategy sessions',
        'Continuous support',
        'Team training',
        'Priority access',
        'Quarterly reviews'
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
                Software <span className="text-blue-400">Consulting</span> Services
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Expert guidance to optimize your technology strategy, improve software quality, and accelerate your development process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Schedule Consultation <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900">
                    View Case Studies
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
                {consultingAreas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mb-4`}>
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm">{area.name}</h3>
                    <p className="text-xs text-blue-100">{area.description}</p>
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
              Our <span className="text-blue-600">Consulting</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software consulting services to help you make informed technology decisions and optimize your development process.
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
                    <h4 className="font-semibold text-gray-900 mb-3">Key Areas:</h4>
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

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of combined experience in software development, architecture, and technology leadership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
              Technology <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across a wide range of technologies, frameworks, and architectural patterns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <span key={idx} className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md mr-2 mb-2">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide consulting services across various industries, bringing domain-specific expertise to each engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <h3 className="text-lg font-medium text-gray-900">{industry}</h3>
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
              Our Consulting <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to consulting that ensures we deliver actionable insights and practical recommendations.
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
                    <FaHandshake className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Consulting <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results achieved through our strategic consulting and technical expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Consulting <span className="text-blue-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible engagement models to fit your specific consulting needs and budget.
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
              Ready to Optimize Your Technology Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our consulting expertise can help you make better technology decisions and accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-blue-600">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareConsultingPage;