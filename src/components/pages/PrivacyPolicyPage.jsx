'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaFileAlt } from 'react-icons/fa';
import Card from '../ui/Card';

const PrivacyPolicyPage = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      icon: FaFileAlt,
      content: `We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:
      
      • Personal information (name, email address, phone number)
      • Company information (company name, industry, size)
      • Project details and requirements
      • Communication preferences
      • Payment information (processed securely through third-party processors)
      
      We also automatically collect certain information about your device and usage of our services, including IP address, browser type, operating system, and pages visited.`
    },
    {
      title: 'How We Use Your Information',
      icon: FaUserShield,
      content: `We use the information we collect to:
      
      • Provide, maintain, and improve our services
      • Process transactions and send related information
      • Send technical notices, updates, and support messages
      • Respond to your comments, questions, and requests
      • Communicate with you about products, services, and events
      • Monitor and analyze trends, usage, and activities
      • Detect, investigate, and prevent fraudulent transactions
      • Comply with legal obligations
      
      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.`
    },
    {
      title: 'Information Sharing and Disclosure',
      icon: FaLock,
      content: `We may share your information in the following circumstances:
      
      • With service providers who perform services on our behalf
      • To comply with legal obligations or respond to legal requests
      • To protect the rights, property, and safety of Trygon, our users, or others
      • In connection with a merger, acquisition, or sale of assets
      • With your consent or at your direction
      
      We require third parties to respect the security of your personal data and treat it in accordance with the law.`
    },
    {
      title: 'Data Security',
      icon: FaShieldAlt,
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
      
      • Encryption of data in transit and at rest
      • Regular security assessments and updates
      • Access controls and authentication procedures
      • Employee training on data protection
      • Secure data centers and infrastructure
      
      However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      title: 'Data Retention',
      icon: FaFileAlt,
      content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. We will also retain and use your information as necessary to:
      
      • Comply with legal obligations
      • Resolve disputes
      • Enforce our agreements
      • Maintain business records
      
      When we no longer need your personal information, we will securely delete or anonymize it.`
    },
    {
      title: 'Your Rights and Choices',
      icon: FaUserShield,
      content: `Depending on your location, you may have certain rights regarding your personal information:
      
      • Access: Request access to your personal information
      • Correction: Request correction of inaccurate information
      • Deletion: Request deletion of your personal information
      • Portability: Request a copy of your information in a portable format
      • Restriction: Request restriction of processing
      • Objection: Object to certain processing activities
      
      To exercise these rights, please contact us using the information provided below.`
    },
    {
      title: 'Cookies and Tracking Technologies',
      icon: FaLock,
      content: `We use cookies and similar tracking technologies to collect and track information and improve our services. You can control cookies through your browser settings. Types of cookies we use:
      
      • Essential cookies: Necessary for the website to function
      • Analytics cookies: Help us understand how visitors use our website
      • Marketing cookies: Used to deliver relevant advertisements
      • Preference cookies: Remember your choices and settings
      
      For more information, please see our Cookie Policy.`
    },
    {
      title: 'International Data Transfers',
      icon: FaShieldAlt,
      content: `Your information may be transferred to and processed in countries other than your own. We ensure that such transfers are subject to appropriate safeguards, such as:
      
      • Standard contractual clauses approved by regulatory authorities
      • Adequacy decisions by regulatory authorities
      • Other lawful transfer mechanisms
      
      We take steps to ensure your information receives an adequate level of protection in the countries where we process it.`
    },
    {
      title: 'Children\'s Privacy',
      icon: FaUserShield,
      content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
      
      If you are a parent or guardian and believe your child has provided us with personal information, please contact us.`
    },
    {
      title: 'Changes to This Policy',
      icon: FaFileAlt,
      content: `We may update this privacy policy from time to time. We will notify you of any material changes by:
      
      • Posting the new policy on this page
      • Sending you an email notification
      • Providing notice through our services
      
      We encourage you to review this policy periodically for the latest information on our privacy practices.`
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
            <FaShieldAlt className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              We are committed to protecting your privacy and personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <p className="text-blue-200 mt-4">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
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
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12"
          >
            <Card className="bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
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

export default PrivacyPolicyPage;