'use client';

import { motion } from 'framer-motion';
import { FaFileContract, FaHandshake, FaGavel, FaShieldAlt } from 'react-icons/fa';
import Card from '../ui/Card';

const TermsOfServicePage = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FaHandshake,
      content: `By accessing and using Trygon's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
      
      These Terms of Service ("Terms") govern your use of our website located at trygon.com (the "Service") operated by Trygon ("us", "we", or "our").
      
      These Terms apply to all visitors, users, and others who access or use the Service.`
    },
    {
      title: 'Description of Services',
      icon: FaFileContract,
      content: `Trygon provides IT consulting and development services including but not limited to:
      
      • Website development and design
      • Mobile application development
      • E-commerce platform development
      • Digital marketing services
      • DevOps and cloud services
      • UI/UX design services
      • Software consulting
      
      All services are provided subject to these Terms and any additional agreements between Trygon and the client.`
    },
    {
      title: 'User Accounts and Registration',
      icon: FaShieldAlt,
      content: `To access certain features of our Service, you may be required to create an account. You agree to:
      
      • Provide accurate, current, and complete information
      • Maintain the security of your password and account
      • Promptly update account information to keep it accurate
      • Accept responsibility for all activities under your account
      • Notify us immediately of any unauthorized use
      
      We reserve the right to suspend or terminate accounts that violate these Terms.`
    },
    {
      title: 'Acceptable Use Policy',
      icon: FaGavel,
      content: `You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree NOT to use the Service:
      
      • To violate any applicable laws or regulations
      • To transmit harmful, threatening, or offensive content
      • To impersonate any person or entity
      • To interfere with or disrupt the Service
      • To attempt unauthorized access to our systems
      • To collect information about other users
      • For any commercial purpose without our consent
      
      Violation of this policy may result in termination of your access.`
    },
    {
      title: 'Intellectual Property Rights',
      icon: FaFileContract,
      content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Trygon and its licensors. The Service is protected by copyright, trademark, and other laws.
      
      Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
      
      For client projects, intellectual property rights are typically transferred to the client upon full payment, unless otherwise specified in the project agreement.`
    },
    {
      title: 'Service Terms and Payment',
      icon: FaHandshake,
      content: `Service-specific terms are outlined in individual project agreements. General terms include:
      
      • Project scope, timeline, and deliverables are defined in writing
      • Payment terms are typically 50% upfront, 50% upon completion
      • Changes to project scope may result in additional charges
      • Late payment may result in project delays or service suspension
      • All prices are in USD unless otherwise specified
      
      Detailed payment terms are provided in individual project proposals.`
    },
    {
      title: 'Cancellation and Refund Policy',
      icon: FaGavel,
      content: `Project cancellation and refund policies vary by service type:
      
      • Cancellations must be requested in writing
      • Work completed up to cancellation point is billable
      • Upfront payments may be refunded minus work completed
      • No refunds for completed deliverables
      • Custom development work is generally non-refundable
      
      Specific refund terms are outlined in individual project agreements.`
    },
    {
      title: 'Limitation of Liability',
      icon: FaShieldAlt,
      content: `In no event shall Trygon, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      
      Our total liability for any claim arising out of or relating to these Terms or our Service shall not exceed the amount paid by you for the specific service giving rise to the claim.
      
      Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so the above limitations may not apply to you.`
    },
    {
      title: 'Indemnification',
      icon: FaGavel,
      content: `You agree to defend, indemnify, and hold harmless Trygon and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
      
      This includes claims arising from:
      • Your use of and access to the Service
      • Your violation of any term of these Terms
      • Your violation of any third party right
      • Any content you submit or transmit through the Service`
    },
    {
      title: 'Governing Law and Jurisdiction',
      icon: FaFileContract,
      content: `These Terms shall be interpreted and governed by the laws of the State of California, USA, without regard to its conflict of law provisions.
      
      Any disputes arising from these Terms or your use of the Service will be resolved in the courts of California.
      
      If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.`
    },
    {
      title: 'Changes to Terms',
      icon: FaHandshake,
      content: `We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
      
      Changes will be posted on this page with an updated "Last Modified" date. Your continued use of the Service after any changes constitute acceptance of the new Terms.
      
      It is your responsibility to check this page periodically for changes.`
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
            <FaFileContract className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-blue-100">
              Please read these terms and conditions carefully before using our services.
              By using our services, you agree to be bound by these terms.
            </p>
            <p className="text-blue-200 mt-4">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@trygon.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94105</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;