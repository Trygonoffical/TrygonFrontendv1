'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaShieldAlt,
  FaCog,
  FaCloud,
  FaBug,
  FaRocket,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaDatabase,
  FaLock,
  FaChartLine,
  FaTools,
  FaServer,
  FaMobile,
  FaGlobe,
  FaLifeRing
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Input, Textarea, Select } from '@/components/ui/Form';
import QuickConnectForm from '@/components/quickconnect/QuickConnectForm';
import PopUpForm from '@/components/quickconnect/PopUpForm';

const AMCPage = () => {
  const amcPlans = [
    {
      name: 'Basic AMC',
      price: '$299',
      period: '/month',
      popular: false,
      features: [
        'Monthly security updates',
        'Basic performance monitoring',
        'Email support (48h response)',
        'Monthly backup',
        'Basic bug fixes',
        'Content updates (2 hours/month)'
      ],
      icon: FaShieldAlt,
      color: 'blue'
    },
    {
      name: 'Professional AMC',
      price: '$599',
      period: '/month',
      popular: true,
      features: [
        'Weekly security updates',
        'Advanced performance monitoring',
        'Priority support (24h response)',
        'Weekly automated backups',
        'Advanced bug fixes & optimizations',
        'Content updates (8 hours/month)',
        'SEO monitoring & basic optimization',
        'Monthly performance reports'
      ],
      icon: FaRocket,
      color: 'purple'
    },
    {
      name: 'Enterprise AMC',
      price: '$1299',
      period: '/month',
      popular: false,
      features: [
        '24/7 security monitoring',
        'Real-time performance monitoring',
        '24/7 phone & chat support',
        'Daily automated backups',
        'Proactive maintenance & optimization',
        'Unlimited content updates',
        'Advanced SEO optimization',
        'Detailed analytics & reports',
        'Emergency response team',
        'Custom feature development (4 hours/month)'
      ],
      icon: FaLifeRing,
      color: 'green'
    }
  ];

  const services = [
    {
      icon: FaShieldAlt,
      title: 'Security Monitoring',
      description: 'Continuous security scanning, malware detection, and vulnerability assessments to keep your site safe.',
      features: ['24/7 Security Scanning', 'Malware Detection', 'SSL Certificate Management', 'Security Patches']
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Regular performance audits and optimizations to ensure your website loads fast and runs smoothly.',
      features: ['Speed Optimization', 'Database Cleanup', 'Image Compression', 'CDN Management']
    },
    {
      icon: FaDatabase,
      title: 'Backup & Recovery',
      description: 'Automated daily backups with instant recovery options to protect your data and ensure business continuity.',
      features: ['Automated Backups', 'One-click Restore', 'Cloud Storage', 'Version Control']
    },
    {
      icon: FaBug,
      title: 'Bug Fixes & Updates',
      description: 'Quick resolution of issues and regular updates to keep your platform running at peak performance.',
      features: ['Bug Identification', 'Quick Fixes', 'Framework Updates', 'Plugin Management']
    },
    {
      icon: FaHeadset,
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical support from our expert team to resolve any issues quickly.',
      features: ['24/7 Availability', 'Expert Team', 'Multiple Channels', 'Emergency Response']
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Reporting',
      description: 'Comprehensive reports on website performance, security status, and user analytics.',
      features: ['Performance Reports', 'Security Audits', 'User Analytics', 'Monthly Reviews']
    }
  ];

  const benefits = [
    { icon: FaClock, title: 'Save Time', description: 'Focus on your business while we handle all technical maintenance' },
    { icon: FaLock, title: 'Enhanced Security', description: 'Proactive security measures to protect against threats' },
    { icon: FaRocket, title: 'Better Performance', description: 'Optimized websites that load faster and rank higher' },
    { icon: FaTools, title: 'Expert Support', description: 'Access to skilled developers and technical experts' }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Audit',
      description: 'We conduct a comprehensive audit of your current website or application to identify areas for improvement.'
    },
    {
      step: 2,
      title: 'Custom Plan',
      description: 'Based on the audit, we create a customized maintenance plan tailored to your specific needs and requirements.'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'We implement monitoring tools, backup systems, and security measures to start protecting your digital assets.'
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'Regular maintenance, updates, and support to ensure your platform continues to perform at its best.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Annual Maintenance 
                <span className="text-blue-400 block">Contract (AMC)</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Keep your website and applications running smoothly with our comprehensive maintenance services. 24/7 monitoring, security updates, and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#plans">
                  <Button size="lg" className="w-full sm:w-auto">
                    View AMC Plans
                    <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
                
                {/* <Link href="#contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:!bg-white hover:!text-blue-900">
                    Get Custom Quote
                  </Button>
                </Link> */}
                  <PopUpForm webbtn={true} btntxt='Get Custom Quote' />
              </div>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <FaShieldAlt className="w-8 h-8 sm:w-12 sm:h-12 text-green-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold">99.9%</div>
                    <div className="text-xs sm:text-sm text-blue-200">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <FaClock className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold">24/7</div>
                    <div className="text-xs sm:text-sm text-blue-200">Support Available</div>
                  </div>
                  <div className="text-center">
                    <FaRocket className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold">&lt;2s</div>
                    <div className="text-xs sm:text-sm text-blue-200">Load Time</div>
                  </div>
                  <div className="text-center">
                    <FaHeadset className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-2xl font-bold">Expert</div>
                    <div className="text-xs sm:text-sm text-blue-200">Team Support</div>
                  </div>
                </div>
              </div>
            </motion.div> */}
            <QuickConnectForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What&apos;s Included in Our <span className="text-blue-600">AMC Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance services to keep your digital assets secure, fast, and always up-to-date
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Plans Section */}
      <section id="plans" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Choose Your <span className="text-blue-600">AMC Plan</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible maintenance plans designed to meet your specific needs and budget
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {amcPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full p-6 sm:p-8 ${plan.popular ? 'border-2 border-purple-500 shadow-xl' : ''}`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-${plan.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${plan.color}-600`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <FaCheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Choose {plan.name}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Our <span className="text-blue-600">AMC Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the peace of mind that comes with professional website maintenance
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our AMC <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure your digital assets are always protected and optimized
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Get Your Custom <span className="text-blue-600">AMC Quote</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Tell us about your requirements and we&apos;ll create a personalized maintenance plan for you
            </p>
          </motion.div>

          <Card className="p-6 sm:p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Email Address" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Input placeholder="Company Name" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <Select 
                placeholder="Current Platform"
                options={[
                  { value: 'wordpress', label: 'WordPress' },
                  { value: 'react', label: 'React/Next.js' },
                  { value: 'angular', label: 'Angular' },
                  { value: 'vue', label: 'Vue.js' },
                  { value: 'custom', label: 'Custom Development' },
                  { value: 'other', label: 'Other' }
                ]}
              />
              <Textarea 
                placeholder="Tell us about your current website/app and what kind of maintenance support you need..."
                rows={4}
              />
              <Button type="submit" className="w-full" size="lg">
                Get Custom AMC Quote
                <FaArrowRight className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses who trust us with their website and application maintenance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto !bg-white !text-blue-600 hover:!bg-gray-100">
                  Start Your AMC Today
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-blue-600">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <PopUpForm />
    </div>
  );
};

export default AMCPage;