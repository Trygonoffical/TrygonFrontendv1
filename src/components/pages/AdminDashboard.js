'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaUsers, 
  FaFileInvoiceDollar, 
  FaChartLine,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaFilter,
  FaSearch,
  FaDownload,
  FaBell,
  FaCalendarAlt,
  FaCog,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle
} from 'react-icons/fa';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Input, Select } from '../ui/Form';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - would come from API
  const adminData = {
    name: 'Admin User',
    role: 'System Administrator',
    avatar: '/api/placeholder/80/80'
  };

  const dashboardStats = [
    {
      title: 'Total Projects',
      value: '24',
      change: '+12%',
      icon: FaProjectDiagram,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Clients',
      value: '18',
      change: '+8%',
      icon: FaUsers,
      color: 'bg-green-500'
    },
    {
      title: 'Revenue This Month',
      value: '$45,200',
      change: '+15%',
      icon: FaFileInvoiceDollar,
      color: 'bg-purple-500'
    },
    {
      title: 'Pending Invoices',
      value: '7',
      change: '-5%',
      icon: FaExclamationTriangle,
      color: 'bg-yellow-500'
    }
  ];

  const projects = [
    {
      id: 1,
      name: 'TechCorp E-commerce Platform',
      client: 'TechCorp Inc.',
      manager: 'Sarah Chen',
      status: 'In Progress',
      progress: 75,
      budget: '$12,000',
      deadline: '2024-03-15',
      team: ['John Doe', 'Jane Smith', 'Mike Wilson'],
      priority: 'High'
    },
    {
      id: 2,
      name: 'FitLife Mobile App',
      client: 'FitLife Technologies',
      manager: 'Michael Rodriguez',
      status: 'Planning',
      progress: 25,
      budget: '$18,000',
      deadline: '2024-05-20',
      team: ['Alice Johnson', 'Bob Brown'],
      priority: 'Medium'
    },
    {
      id: 3,
      name: 'StartupXYZ Website',
      client: 'StartupXYZ',
      manager: 'Emily Davis',
      status: 'Completed',
      progress: 100,
      budget: '$8,500',
      deadline: '2024-02-28',
      team: ['Chris Lee', 'Diana Martinez'],
      priority: 'Low'
    }
  ];

  const clients = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      contact: 'John Smith',
      email: 'john@techcorp.com',
      phone: '+91 8851285655',
      projects: 3,
      totalValue: '$45,000',
      status: 'Active',
      joinDate: '2023-08-15'
    },
    {
      id: 2,
      name: 'FitLife Technologies',
      contact: 'Sarah Wilson',
      email: 'sarah@fitlife.com',
      phone: '+1 (555) 987-6543',
      projects: 2,
      totalValue: '$28,000',
      status: 'Active',
      joinDate: '2023-11-22'
    },
    {
      id: 3,
      name: 'StartupXYZ',
      contact: 'Mike Chen',
      email: 'mike@startupxyz.com',
      phone: '+1 (555) 456-7890',
      projects: 1,
      totalValue: '$12,000',
      status: 'Completed',
      joinDate: '2024-01-10'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'New project created',
      details: 'Mobile App Development for FitLife',
      user: 'Sarah Chen',
      timestamp: '2024-02-20 14:30',
      type: 'project'
    },
    {
      id: 2,
      action: 'Invoice sent',
      details: 'Invoice #INV-2024-045 sent to TechCorp',
      user: 'System',
      timestamp: '2024-02-20 11:15',
      type: 'invoice'
    },
    {
      id: 3,
      action: 'Client meeting scheduled',
      details: 'Meeting with StartupXYZ for project review',
      user: 'Emily Davis',
      timestamp: '2024-02-19 16:45',
      type: 'meeting'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'In Progress': return 'text-blue-600 bg-blue-100';
      case 'Planning': return 'text-yellow-600 bg-yellow-100';
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FaChartLine },
    { id: 'projects', name: 'Projects', icon: FaProjectDiagram },
    { id: 'clients', name: 'Clients', icon: FaUsers },
    { id: 'invoices', name: 'Invoices', icon: FaFileInvoiceDollar }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img
                src={adminData.avatar}
                alt={adminData.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">{adminData.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <FaBell className="w-6 h-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              <Button variant="outline" size="sm">
                <FaCog className="mr-2" />
                Settings
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {dashboardStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mr-4`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <div className="flex items-center">
                          <p className="text-2xl font-bold text-gray-900 mr-2">{stat.value}</p>
                          <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity and Quick Actions */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.details}</p>
                          <p className="text-xs text-gray-400 mt-1">by {activity.user} • {activity.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="flex flex-col items-center py-6">
                    <FaPlus className="w-6 h-6 mb-2" />
                    New Project
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center py-6">
                    <FaUsers className="w-6 h-6 mb-2" />
                    Add Client
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center py-6">
                    <FaFileInvoiceDollar className="w-6 h-6 mb-2" />
                    Create Invoice
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center py-6">
                    <FaDownload className="w-6 h-6 mb-2" />
                    Export Data
                  </Button>
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
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Project Management</h2>
              <Button>
                <FaPlus className="mr-2" />
                New Project
              </Button>
            </div>

            <div className="mb-6 flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                placeholder="Filter by status"
                options={[
                  { value: 'all', label: 'All Statuses' },
                  { value: 'planning', label: 'Planning' },
                  { value: 'in-progress', label: 'In Progress' },
                  { value: 'completed', label: 'Completed' }
                ]}
              />
            </div>

            <div className="space-y-6">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 mr-4">{project.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                          {project.priority}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Client:</span> {project.client}
                        </div>
                        <div>
                          <span className="font-medium">Manager:</span> {project.manager}
                        </div>
                        <div>
                          <span className="font-medium">Budget:</span> {project.budget}
                        </div>
                        <div>
                          <span className="font-medium">Deadline:</span> {project.deadline}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm text-gray-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Team:</span>
                      {project.team.slice(0, 3).map((member, idx) => (
                        <span key={idx} className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                          {member.split(' ').map(n => n[0]).join('')}
                        </span>
                      ))}
                      {project.team.length > 3 && (
                        <span className="text-sm text-gray-500">+{project.team.length - 3}</span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <FaEye className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <FaEdit className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
              <Button>
                <FaPlus className="mr-2" />
                Add Client
              </Button>
            </div>

            <Card>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Client</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Contact</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Projects</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Total Value</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Join Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr key={client.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-gray-900">{client.name}</div>
                            <div className="text-sm text-gray-500">{client.email}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <div className="text-gray-900">{client.contact}</div>
                            <div className="text-sm text-gray-500">{client.phone}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium">{client.projects}</td>
                        <td className="py-3 px-4 font-semibold">{client.totalValue}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">{client.joinDate}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <FaEye className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <FaEdit className="w-3 h-3" />
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

        {/* Invoices Tab */}
        {activeTab === 'invoices' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Invoice Management</h2>
              <Button>
                <FaPlus className="mr-2" />
                Create Invoice
              </Button>
            </div>

            <Card>
              <div className="text-center py-20">
                <FaFileInvoiceDollar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Invoice Management</h3>
                <p className="text-gray-500 mb-6">
                  Comprehensive invoice management system would be implemented here with features like:
                </p>
                <div className="text-left max-w-md mx-auto space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Create and send invoices
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Track payment status
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated reminders
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Financial reporting
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;