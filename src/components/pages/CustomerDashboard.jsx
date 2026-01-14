'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaFileInvoiceDollar, 
  FaComments, 
  FaCalendarAlt,
  FaBell,
  FaDownload,
  FaEye,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaUser,
  FaChartLine,
  FaFile
} from 'react-icons/fa';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Image from 'next/image';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - would come from API
  const userData = {
    name: 'John Smith',
    company: 'TechStart Inc.',
    email: 'john@techstart.com',
    avatar: '/api/placeholder/80/80'
  };

  const projects = [
    {
      id: 1,
      name: 'E-commerce Website',
      type: 'Web Development',
      status: 'In Progress',
      progress: 75,
      startDate: '2024-01-15',
      expectedCompletion: '2024-03-01',
      lastUpdate: '2024-02-20',
      description: 'Modern e-commerce platform with payment integration',
      manager: 'Sarah Chen'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      type: 'Mobile Development',
      status: 'Planning',
      progress: 25,
      startDate: '2024-02-01',
      expectedCompletion: '2024-05-15',
      lastUpdate: '2024-02-18',
      description: 'iOS and Android app for customer engagement',
      manager: 'Michael Rodriguez'
    },
    {
      id: 3,
      name: 'Digital Marketing Campaign',
      type: 'Marketing',
      status: 'Completed',
      progress: 100,
      startDate: '2023-11-01',
      expectedCompletion: '2024-01-31',
      lastUpdate: '2024-01-31',
      description: 'SEO optimization and social media marketing',
      manager: 'Lisa Wang'
    }
  ];

  const invoices = [
    {
      id: 'INV-001',
      amount: '$2,500',
      date: '2024-02-15',
      status: 'Paid',
      description: 'Website Development - Phase 1',
      dueDate: '2024-02-28'
    },
    {
      id: 'INV-002',
      amount: '$1,800',
      date: '2024-02-01',
      status: 'Pending',
      description: 'Mobile App Design - Initial Phase',
      dueDate: '2024-02-15'
    },
    {
      id: 'INV-003',
      amount: '$3,200',
      date: '2024-01-15',
      status: 'Paid',
      description: 'Marketing Campaign - Monthly Fee',
      dueDate: '2024-01-30'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      message: 'The e-commerce platform is ready for your review. Please check the staging environment.',
      timestamp: '2024-02-20 14:30',
      unread: true
    },
    {
      id: 2,
      sender: 'Michael Rodriguez',
      message: 'Mobile app wireframes have been completed. Would you like to schedule a review meeting?',
      timestamp: '2024-02-19 11:15',
      unread: true
    },
    {
      id: 3,
      sender: 'Lisa Wang',
      message: 'Marketing campaign results are excellent! 40% increase in website traffic.',
      timestamp: '2024-02-18 16:45',
      unread: false
    }
  ];

  const documents = [
    {
      id: 1,
      name: 'Project Proposal - E-commerce',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Mobile App Wireframes',
      type: 'Figma',
      size: '8.1 MB',
      date: '2024-02-10'
    },
    {
      id: 3,
      name: 'Marketing Analytics Report',
      type: 'PDF',
      size: '1.8 MB',
      date: '2024-02-18'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'In Progress': return 'text-blue-600 bg-blue-100';
      case 'Planning': return 'text-yellow-600 bg-yellow-100';
      case 'Paid': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FaChartLine },
    { id: 'projects', name: 'Projects', icon: FaProjectDiagram },
    { id: 'invoices', name: 'Invoices', icon: FaFileInvoiceDollar },
    { id: 'messages', name: 'Messages', icon: FaComments },
    { id: 'documents', name: 'Documents', icon: FaFile }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Image
                src={userData.avatar}
                alt={userData.name}
                className="w-12 h-12 rounded-full mr-4"
                width={48}
                height={48}
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {userData.name}</h1>
                <p className="text-gray-600">{userData.company}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <FaBell className="w-6 h-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              <Button variant="outline" size="sm">
                <FaUser className="mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="mr-2 w-4 h-4" />
                {tab.name}
                {tab.id === 'messages' && (
                  <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                    {messages.filter(m => m.unread).length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaProjectDiagram className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <FaCheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">1</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <FaFileInvoiceDollar className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pending Invoices</p>
                    <p className="text-2xl font-bold text-gray-900">1</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <FaBell className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">New Messages</p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Project Updates</h3>
                <div className="space-y-4">
                  {projects.slice(0, 2).map((project) => (
                    <div key={project.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{project.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">{project.progress}% Complete</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Messages</h3>
                <div className="space-y-4">
                  {messages.slice(0, 3).map((message) => (
                    <div key={message.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-gray-900">{message.sender}</span>
                        {message.unread && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{message.message}</p>
                      <p className="text-xs text-gray-400">{message.timestamp}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {projects.map((project) => (
              <Card key={project.id}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mr-4">{project.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>Type: {project.type}</span>
                      <span>Manager: {project.manager}</span>
                      <span>Started: {project.startDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Expected completion: {project.expectedCompletion}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <FaEye className="mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <FaComments className="mr-2" />
                      Message Team
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Invoices Tab */}
        {activeTab === 'invoices' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Invoice ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Due Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b">
                        <td className="py-3 px-4 font-medium">{invoice.id}</td>
                        <td className="py-3 px-4">{invoice.description}</td>
                        <td className="py-3 px-4 font-semibold">{invoice.amount}</td>
                        <td className="py-3 px-4">{invoice.date}</td>
                        <td className="py-3 px-4">{invoice.dueDate}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                            {invoice.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <FaEye className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <FaDownload className="w-3 h-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {messages.map((message) => (
              <Card key={message.id} className={message.unread ? 'border-l-4 border-l-blue-500' : ''}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-900 mr-3">{message.sender}</span>
                      {message.unread && (
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{message.message}</p>
                    <p className="text-sm text-gray-500">{message.timestamp}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Reply
                  </Button>
                </div>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <FaFile className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{doc.name}</h4>
                        <p className="text-sm text-gray-500">{doc.type} • {doc.size} • {doc.date}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <FaEye className="mr-2 w-3 h-3" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <FaDownload className="mr-2 w-3 h-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;