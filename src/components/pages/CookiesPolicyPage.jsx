'use client';

import { motion } from 'framer-motion';
import { FaCookie, FaCog, FaChartLine, FaBullhorn, FaShieldAlt } from 'react-icons/fa';
import Card from '../ui/Card';

const CookiesPolicyPage = () => {
  const lastUpdated = 'January 1, 2024';

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: FaCog,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Session management',
        'Load balancing'
      ],
      duration: 'Session or up to 1 year'
    },
    {
      title: 'Analytics Cookies',
      icon: FaChartLine,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      duration: 'Up to 2 years'
    },
    {
      title: 'Marketing Cookies',
      icon: FaBullhorn,
      description: 'Used to deliver relevant advertisements and measure campaign effectiveness.',
      examples: [
        'Google Ads tracking',
        'Facebook Pixel',
        'Remarketing pixels',
        'Conversion tracking'
      ],
      duration: 'Up to 1 year'
    },
    {
      title: 'Preference Cookies',
      icon: FaShieldAlt,
      description: 'Remember your choices and settings to provide a personalized experience.',
      examples: [
        'Language preferences',
        'Theme settings',
        'User interface preferences',
        'Accessibility options'
      ],
      duration: 'Up to 1 year'
    }
  ];

  const sections = [
    {
      title: 'What Are Cookies?',
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
      
      Cookies allow websites to recognize your device and store some information about your preferences or past actions. This helps provide a better, more personalized experience for users.`
    },
    {
      title: 'How We Use Cookies',
      content: `We use cookies for several purposes:
      
      • To ensure our website functions properly
      • To improve website performance and user experience
      • To analyze how our website is used
      • To provide personalized content and advertisements
      • To remember your preferences and settings
      • To measure the effectiveness of our marketing campaigns
      
      We only collect cookie data that helps us improve our services and your browsing experience.`
    },
    {
      title: 'Third-Party Cookies',
      content: `Some cookies on our website are set by third-party services that we use:
      
      • Google Analytics: To analyze website traffic and user behavior
      • Google Ads: To track conversions and show relevant advertisements
      • Facebook Pixel: To measure the effectiveness of social media advertising
      • Other marketing platforms: For advertising and remarketing purposes
      
      These third parties may use cookies to collect information about your online activities across different websites.`
    },
    {
      title: 'Managing Your Cookie Preferences',
      content: `You have several options for managing cookies:
      
      Browser Settings:
      • Most browsers allow you to view, delete, and block cookies
      • You can usually find these options in your browser's privacy or security settings
      • Blocking all cookies may affect website functionality
      
      Opt-Out Tools:
      • Google Analytics Opt-out: Use Google's browser add-on
      • Google Ads Settings: Manage ad personalization
      • Facebook Ad Preferences: Control Facebook advertising
      • Industry opt-out pages: Visit aboutads.info or youronlinechoices.eu`
    },
    {
      title: 'Cookie Consent',
              content: `When you first visit our website, we&apos;ll ask for your consent to use certain types of cookies. You can:
      
      • Accept all cookies
      • Accept only essential cookies
      • Customize your preferences by cookie type
      • Change your preferences at any time
      
      Essential cookies are necessary for basic website functionality and are always active. For all other cookie types, we&apos;ll only use them with your explicit consent.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCookie className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Cookies Policy</h1>
            <p className="text-xl text-blue-100">
              Learn about how we use cookies and similar technologies to improve 
              your browsing experience and our services.
            </p>
            <p className="text-blue-200 mt-4">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use different types of cookies for various purposes to enhance your experience on our website.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Duration:</strong> {type.duration}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Browser Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Browser-Specific Instructions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Chrome</h3>
                  <p className="text-sm text-gray-600">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Firefox</h3>
                  <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Safari</h3>
                  <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Edge</h3>
                  <p className="text-sm text-gray-600">Settings → Site permissions → Cookies and site data</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12"
          >
            <Card className="bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@trygon.com</p>
                <p><strong>Phone:</strong> +91 8851285655</p>
                <p><strong>Address:</strong> Delhi, India</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPolicyPage;