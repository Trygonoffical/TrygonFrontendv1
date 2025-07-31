'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaShoppingCart, 
  FaCreditCard, 
  FaBoxes, 
  FaShippingFast,
  FaMobile,
  FaChartLine,
  FaShieldAlt,
  FaSearch,
  FaCheckCircle,
  FaArrowRight,
  FaStore,
  FaUsers,
  FaCog,
  FaTruck
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const EcommerceDevelopmentPage = () => {
  const platforms = [
    { 
      icon: FaShoppingCart, 
      name: 'Custom E-commerce', 
      description: 'Fully customized online stores built from scratch',
      color: 'bg-blue-600'
    },
    { 
      icon: FaStore, 
      name: 'Shopify Development', 
      description: 'Professional Shopify stores with custom themes',
      color: 'bg-green-500'
    },
    { 
      icon: FaCog, 
      name: 'WooCommerce', 
      description: 'WordPress-based e-commerce solutions',
      color: 'bg-purple-500'
    },
    { 
      icon: FaUsers, 
      name: 'Multi-vendor', 
      description: 'Marketplace platforms for multiple sellers',
      color: 'bg-orange-500'
    }
  ];

  const features = [
    {
      icon: FaCreditCard,
      title: 'Payment Integration',
      description: 'Secure payment gateways including Stripe, PayPal, and more for seamless transactions.',
      details: ['Multiple Payment Methods', 'Secure Checkout', 'Recurring Payments', 'International Support']
    },
    {
      icon: FaBoxes,
      title: 'Inventory Management',
      description: 'Advanced inventory tracking with real-time stock updates and automated alerts.',
      details: ['Real-time Tracking', 'Low Stock Alerts', 'Bulk Import/Export', 'Variant Management']
    },
    {
      icon: FaShippingFast,
      title: 'Order Management',
      description: 'Complete order processing from purchase to delivery with tracking capabilities.',
      details: ['Order Tracking', 'Shipping Integration', 'Return Management', 'Order Analytics']
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to track sales, customer behavior, and business performance.',
      details: ['Sales Reports', 'Customer Analytics', 'Product Performance', 'Custom Dashboards']
    }
  ];

  const ecommerceTypes = [
    {
      icon: FaStore,
      title: 'B2C E-commerce',
      description: 'Direct-to-consumer online stores with modern shopping experiences.',
      features: ['Product Catalogs', 'Wishlist & Favorites', 'Customer Reviews', 'Social Shopping']
    },
    {
      icon: FaUsers,
      title: 'B2B E-commerce',
      description: 'Business-to-business platforms with wholesale pricing and bulk ordering.',
      features: ['Bulk Pricing', 'Quote Requests', 'Account Management', 'Custom Catalogs']
    },
    {
      icon: FaTruck,
      title: 'Marketplace',
      description: 'Multi-vendor platforms connecting buyers with multiple sellers.',
      features: ['Vendor Management', 'Commission System', 'Product Approval', 'Seller Analytics']
    },
    {
      icon: FaMobile,
      title: 'Mobile Commerce',
      description: 'Mobile-first e-commerce apps for iOS and Android platforms.',
      features: ['Native Apps', 'Push Notifications', 'Mobile Payments', 'Offline Support']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Business Analysis',
      description: 'We analyze your business model, target audience, and competition to create a strategic plan.'
    },
    {
      step: 2,
      title: 'Platform Selection',
      description: 'Choose the best e-commerce platform based on your requirements and budget.'
    },
    {
      step: 3,
      title: 'Design & UX',
      description: 'Create conversion-focused designs that enhance the shopping experience.'
    },
    {
      step: 4,
      title: 'Development & Integration',
      description: 'Build your store with payment gateways, shipping, and third-party integrations.'
    },
    {
      step: 5,
      title: 'Testing & Launch',
      description: 'Thorough testing followed by launch with marketing and SEO optimization.'
    }
  ];

  const integrations = [
    { name: 'Payment Gateways', items: ['Stripe', 'PayPal', 'Square', 'Authorize.net'] },
    { name: 'Shipping Partners', items: ['FedEx', 'UPS', 'DHL', 'USPS'] },
    { name: 'Marketing Tools', items: ['Mailchimp', 'Klaviyo', 'Google Analytics', 'Facebook Pixel'] },
    { name: 'Inventory Systems', items: ['QuickBooks', 'TradeGecko', 'Cin7', 'Zoho Inventory'] }
  ];

  const portfolio = [
    {
      title: 'FreshMart Grocery',
      category: 'Grocery E-commerce',
      description: 'Complete online grocery platform with delivery tracking and subscription services.',
      revenue: '$2M+ Annual',
      orders: '10K+ Monthly',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'StyleHub Fashion',
      category: 'Fashion Retail',
      description: 'Modern fashion e-commerce with AR try-on and social shopping features.',
      revenue: '$5M+ Annual',
      orders: '25K+ Monthly',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'TechMart Electronics',
      category: 'Electronics Store',
      description: 'B2B electronics marketplace with bulk ordering and custom pricing.',
      revenue: '$10M+ Annual',
      orders: '50K+ Monthly',
      image: '/api/placeholder/400/300'
    }
  ];

  const pricing = [
    {
      name: 'Starter Store',
      price: '$4,999',
      description: 'Perfect for small businesses starting online',
      features: [
        'Up to 100 products',
        'Responsive design',
        'Payment gateway integration',
        'Basic inventory management',
        'SSL certificate',
        '3 months support'
      ]
    },
    {
      name: 'Professional Store',
      price: '$12,999',
      description: 'Complete solution for growing businesses',
      features: [
        'Unlimited products',
        'Custom design & branding',
        'Advanced features',
        'Multi-payment options',
        'Shipping integrations',
        'Analytics & reporting',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Store',
      price: 'Custom',
      description: 'Advanced solution for large businesses',
      features: [
        'Custom functionality',
        'Multi-vendor capability',
        'Advanced integrations',
        'Performance optimization',
        'Priority support',
        'Training & documentation',
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
                E-commerce <span className="text-blue-400">Development</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Build powerful online stores that drive sales and deliver exceptional shopping experiences for your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Store <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900">
                    View E-commerce Sites
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              E-commerce <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features that power successful online stores and drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
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

      {/* E-commerce Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Types of <span className="text-blue-600">E-commerce</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build various types of e-commerce platforms tailored to different business models and industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
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
              Our Development <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your e-commerce store is optimized for sales and growth.
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
                    <FaShoppingCart className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Third-Party <span className="text-blue-600">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with popular services to enhance your store's functionality and streamline operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Successful <span className="text-blue-600">E-commerce</span> Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              E-commerce stores we've built that are driving significant revenue and growth for our clients.
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
                <Card className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-500">Annual Revenue</div>
                      <div className="font-semibold text-green-600">{project.revenue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Monthly Orders</div>
                      <div className="font-semibold text-blue-600">{project.orders}</div>
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
              E-commerce <span className="text-blue-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for e-commerce development projects that scale with your business needs.
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
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's build an e-commerce platform that drives sales and grows your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Your E-commerce Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-blue-600">
                  View E-commerce Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDevelopmentPage;