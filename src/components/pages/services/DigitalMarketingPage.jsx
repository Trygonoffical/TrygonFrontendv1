'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaSearch, 
  FaFacebook, 
  FaGoogle, 
  FaChartLine,
  FaBullhorn,
  FaEdit,
  FaEnvelope,
  FaInstagram,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaTargetArrow,
  FaUsers,
  FaEye
} from 'react-icons/fa';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import QuickConnectForm from '@/components/quickconnect/QuickConnectForm';
import PopUpForm from '@/components/quickconnect/PopUpForm';

const DigitalMarketingPage = () => {
  const services = [
    { 
      icon: FaSearch, 
      name: 'Search Engine Optimization', 
      description: 'Improve your website\'s visibility and ranking on search engines',
      color: 'bg-green-500'
    },
    { 
      icon: FaGoogle, 
      name: 'Pay-Per-Click Advertising', 
      description: 'Targeted ads on Google, Bing, and other search platforms',
      color: 'bg-blue-500'
    },
    { 
      icon: FaFacebook, 
      name: 'Social Media Marketing', 
      description: 'Engage your audience across all major social platforms',
      color: 'bg-purple-500'
    },
    { 
      icon: FaEdit, 
      name: 'Content Marketing', 
      description: 'Create valuable content that attracts and converts customers',
      color: 'bg-orange-500'
    }
  ];

  const channels = [
    {
      icon: FaSearch,
      title: 'Search Engine Optimization (SEO)',
      description: 'Increase organic traffic and improve search engine rankings with our proven SEO strategies.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building', 'Local SEO']
    },
    {
      icon: FaGoogle,
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Drive immediate traffic and conversions with targeted advertising campaigns.',
      features: ['Google Ads', 'Bing Ads', 'Display Advertising', 'Remarketing', 'Shopping Ads']
    },
    {
      icon: FaInstagram,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience across social platforms.',
      features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Social Advertising', 'Analytics']
    },
    {
      icon: FaEnvelope,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns.',
      features: ['Email Automation', 'Newsletter Design', 'List Segmentation', 'A/B Testing', 'Performance Tracking']
    },
    {
      icon: FaEdit,
      title: 'Content Marketing',
      description: 'Create valuable content that educates, engages, and converts your target audience.',
      features: ['Blog Writing', 'Video Marketing', 'Infographics', 'Whitepapers', 'Case Studies']
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Reporting',
      description: 'Track performance and optimize campaigns with detailed analytics and insights.',
      features: ['Google Analytics', 'Conversion Tracking', 'ROI Analysis', 'Custom Dashboards', 'Monthly Reports']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Strategy Development',
      description: 'We analyze your business, competition, and target audience to create a comprehensive marketing strategy.'
    },
    {
      step: 2,
      title: 'Campaign Setup',
      description: 'Set up tracking, create campaigns, and implement necessary tools and integrations.'
    },
    {
      step: 3,
      title: 'Content Creation',
      description: 'Develop compelling content, ad creatives, and marketing materials that resonate with your audience.'
    },
    {
      step: 4,
      title: 'Launch & Optimize',
      description: 'Launch campaigns and continuously optimize based on performance data and insights.'
    },
    {
      step: 5,
      title: 'Report & Scale',
      description: 'Provide detailed reporting and scale successful campaigns for maximum ROI.'
    }
  ];

  const results = [
    {
      title: 'TechStartup Inc.',
      industry: 'Technology',
      challenge: 'Low online visibility and lead generation',
      solution: 'Comprehensive SEO and PPC strategy',
      results: [
        '300% increase in organic traffic',
        '150% increase in qualified leads',
        '45% reduction in cost per acquisition',
        'First page rankings for 50+ keywords'
      ]
    },
    {
      title: 'RetailPlus',
      industry: 'E-commerce',
      challenge: 'Poor social media engagement and low sales',
      solution: 'Social media marketing and influencer partnerships',
      results: [
        '500% increase in social media followers',
        '200% increase in online sales',
        '80% increase in brand awareness',
        '25% increase in customer retention'
      ]
    },
    {
      title: 'ServicePro',
      industry: 'Professional Services',
      challenge: 'Inconsistent lead flow and high marketing costs',
      solution: 'Content marketing and marketing automation',
      results: [
        '250% increase in website traffic',
        '180% increase in lead quality',
        '60% reduction in marketing costs',
        '40% increase in conversion rates'
      ]
    }
  ];

  const tools = [
    { category: 'SEO Tools', items: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog'] },
    { category: 'PPC Platforms', items: ['Google Ads', 'Microsoft Ads', 'Facebook Ads', 'LinkedIn Ads'] },
    { category: 'Analytics', items: ['Google Analytics', 'Google Tag Manager', 'Hotjar', 'Mixpanel'] },
    { category: 'Social Media', items: ['Hootsuite', 'Buffer', 'Sprout Social', 'Later'] },
    { category: 'Email Marketing', items: ['Mailchimp', 'Klaviyo', 'ConvertKit', 'ActiveCampaign'] },
    { category: 'Content Tools', items: ['WordPress', 'Canva', 'Adobe Creative Suite', 'Loom'] }
  ];

  const pricing = [
    {
      name: 'Starter Package',
      price: '$1,499/month',
      description: 'Perfect for small businesses starting their digital marketing journey',
      features: [
        'SEO audit and optimization',
        'Google Ads management',
        'Social media management (2 platforms)',
        'Monthly reporting',
        'Email support'
      ]
    },
    {
      name: 'Growth Package',
      price: '$2,999/month',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Full SEO optimization',
        'Multi-platform PPC management',
        'Social media marketing (4 platforms)',
        'Content creation',
        'Email marketing campaigns',
        'Bi-weekly strategy calls',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: 'Custom',
      description: 'Advanced solutions for large organizations',
      features: [
        'Custom marketing strategy',
        'Dedicated account manager',
        'Advanced automation',
        'Custom integrations',
        'Priority support',
        'Weekly strategy sessions',
        'Advanced reporting & insights'
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
                Digital <span className="text-blue-400">Marketing</span> Services
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Grow your business online with data-driven digital marketing strategies that deliver measurable results and ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <PopUpForm webbtn={true} />
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:!bg-white hover:!text-blue-900">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm">{service.name}</h3>
                    <p className="text-xs text-blue-100">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}
            <QuickConnectForm />
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Marketing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to reach your audience across all channels and drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <channel.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{channel.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{channel.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {channel.features.map((feature, idx) => (
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
              Our Marketing <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that drives results and maximizes your marketing ROI.
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
                    <FaChartLine className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              Real results we&apos;ve achieved for our clients across different industries and marketing channels.
            </p>
          </motion.div>

          <div className="space-y-8">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.title}</h3>
                      <p className="text-blue-600 font-medium mb-4">{result.industry}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{result.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{result.solution}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-4">Results Achieved:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {result.results.map((achievement, idx) => (
                          <div key={idx} className="flex items-center p-4 bg-green-50 rounded-lg">
                            <FaCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="font-medium text-gray-900">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tools & <span className="text-blue-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools and platforms to maximize the effectiveness of your marketing campaigns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Marketing <span className="text-blue-600">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right digital marketing package for your business size and goals.
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
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a digital marketing strategy that drives real results and grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Marketing Proposal
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
      <PopUpForm />
    </div>
  );
};

export default DigitalMarketingPage;