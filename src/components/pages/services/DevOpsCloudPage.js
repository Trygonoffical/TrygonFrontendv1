'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaCloud, 
  FaDocker, 
  FaAws, 
  FaServer,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaTools,
  FaNetworkWired,
  FaDatabase,
  FaLock
} from 'react-icons/fa';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const DevOpsCloudPage = () => {
  const cloudProviders = [
    { 
      icon: FaAws, 
      name: 'Amazon Web Services', 
      description: 'Comprehensive AWS cloud infrastructure and services',
      color: 'bg-orange-500'
    },
    { 
      icon: FaCloud, 
      name: 'Microsoft Azure', 
      description: 'Enterprise-grade Azure cloud solutions',
      color: 'bg-blue-500'
    },
    { 
      icon: FaCloud, 
      name: 'Google Cloud Platform', 
      description: 'Scalable GCP infrastructure and AI services',
      color: 'bg-red-500'
    },
    { 
      icon: FaServer, 
      name: 'Private Cloud', 
      description: 'Custom private cloud and hybrid solutions',
      color: 'bg-purple-500'
    }
  ];

  const services = [
    {
      icon: FaCloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Refactoring', 'Testing & Validation']
    },
    {
      icon: FaCogs,
      title: 'CI/CD Pipelines',
      description: 'Automate your software delivery with robust continuous integration and deployment.',
      features: ['Pipeline Design', 'Automated Testing', 'Deployment Automation', 'Release Management']
    },
    {
      icon: FaDocker,
      title: 'Containerization',
      description: 'Package and deploy applications using Docker and Kubernetes orchestration.',
      features: ['Docker Implementation', 'Kubernetes Setup', 'Container Registry', 'Scaling Solutions']
    },
    {
      icon: FaNetworkWired,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code for consistency and repeatability.',
      features: ['Terraform Setup', 'CloudFormation', 'Infrastructure Automation', 'Version Control']
    },
    {
      icon: FaChartLine,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring, logging, and alerting for your infrastructure.',
      features: ['Performance Monitoring', 'Log Management', 'Alert Configuration', 'Dashboards']
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Compliance',
      description: 'Implement security best practices and compliance frameworks.',
      features: ['Security Scanning', 'Compliance Audits', 'Access Management', 'Encryption']
    }
  ];

  const benefits = [
    { icon: FaRocket, title: 'Faster Deployment', description: 'Reduce deployment time from hours to minutes' },
    { icon: FaChartLine, title: 'Improved Scalability', description: 'Scale resources automatically based on demand' },
    { icon: FaShieldAlt, title: 'Enhanced Security', description: 'Implement enterprise-grade security measures' },
    { icon: FaCogs, title: 'Operational Efficiency', description: 'Automate repetitive tasks and reduce manual errors' }
  ];

  const technologies = [
    { category: 'Cloud Platforms', tools: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'] },
    { category: 'Containerization', tools: ['Docker', 'Kubernetes', 'OpenShift', 'Rancher'] },
    { category: 'CI/CD Tools', tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps'] },
    { category: 'Infrastructure as Code', tools: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi'] },
    { category: 'Monitoring', tools: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog'] },
    { category: 'Security Tools', tools: ['HashiCorp Vault', 'AWS IAM', 'Twistlock', 'Aqua Security'] }
  ];

  const process = [
    {
      step: 1,
      title: 'Assessment & Strategy',
      description: 'Evaluate current infrastructure and define cloud strategy and migration roadmap.'
    },
    {
      step: 2,
      title: 'Architecture Design',
      description: 'Design scalable, secure, and cost-effective cloud architecture.'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy infrastructure, set up pipelines, and configure monitoring.'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Test all systems and optimize for performance and cost-efficiency.'
    },
    {
      step: 5,
      title: 'Training & Support',
      description: 'Train your team and provide ongoing support and maintenance.'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Migration',
      client: 'RetailCorp',
      challenge: 'Legacy infrastructure causing downtime and scalability issues',
      solution: 'Migrated to AWS with auto-scaling and CI/CD pipeline',
      results: [
        '99.9% uptime improvement',
        '50% reduction in infrastructure costs',
        '10x faster deployment cycles',
        'Zero-downtime deployments'
      ]
    },
    {
      title: 'Startup DevOps Transformation',
      client: 'TechStartup',
      challenge: 'Manual deployments and lack of monitoring',
      solution: 'Implemented full DevOps pipeline with Kubernetes',
      results: [
        '95% reduction in deployment time',
        'Automated testing and quality gates',
        'Comprehensive monitoring setup',
        'Improved developer productivity'
      ]
    }
  ];

  const pricing = [
    {
      name: 'Consultation',
      price: '$199/hour',
      description: 'Expert advice and planning sessions',
      features: [
        'Infrastructure assessment',
        'Cloud strategy planning',
        'Architecture recommendations',
        'Technology selection',
        'Cost optimization advice'
      ]
    },
    {
      name: 'Migration Project',
      price: '$15,000+',
      description: 'Complete cloud migration service',
      features: [
        'Migration planning',
        'Infrastructure setup',
        'Application migration',
        'Testing & validation',
        'Documentation',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'DevOps Pipeline',
      price: '$25,000+',
      description: 'Full DevOps implementation',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Monitoring & alerting',
        'Security implementation',
        'Team training',
        '6 months support'
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
                DevOps & <span className="text-blue-400">Cloud</span> Services
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Accelerate your development cycles and scale your infrastructure with modern DevOps practices and cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Cloud Journey <FaArrowRight className="ml-2" />
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
                {cloudProviders.map((provider, index) => (
                  <motion.div
                    key={provider.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className={`w-12 h-12 ${provider.color} rounded-lg flex items-center justify-center mb-4`}>
                      <provider.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm">{provider.name}</h3>
                    <p className="text-xs text-blue-100">{provider.description}</p>
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
              Our <span className="text-blue-600">DevOps & Cloud</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud and DevOps solutions to modernize your infrastructure and streamline your development process.
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
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Our <span className="text-blue-600">DevOps</span> Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your development and operations with proven benefits that drive business success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              Technologies & <span className="text-blue-600">Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools and technologies to deliver robust DevOps and cloud solutions.
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
                  <div className="grid grid-cols-2 gap-2">
                    {tech.tools.map((tool, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md text-center">
                        {tool}
                      </span>
                    ))}
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
              Our <span className="text-blue-600">Implementation</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to DevOps and cloud transformation that ensures successful outcomes.
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
                    <FaCloud className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results achieved through our DevOps and cloud transformation services.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              DevOps & Cloud <span className="text-blue-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options for DevOps consulting and cloud transformation projects.
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
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's modernize your development process and scale your applications with cloud-native solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Cloud Journey
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
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

export default DevOpsCloudPage;