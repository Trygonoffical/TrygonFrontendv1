'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaEye, 
  FaEyeSlash, 
  FaGoogle, 
  FaLinkedin, 
  FaGithub,
  FaLock,
  FaUser,
  FaCheckCircle
} from 'react-icons/fa';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Input } from '../ui/Form';
import Image from 'next/image';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard would happen here
      alert(`${isLogin ? 'Login' : 'Registration'} successful! Redirecting to dashboard...`);
    }, 2000);
  };

  const socialProviders = [
    { name: 'Google', icon: FaGoogle, color: 'bg-red-500 hover:bg-red-600' },
    { name: 'LinkedIn', icon: FaLinkedin, color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'GitHub', icon: FaGithub, color: 'bg-gray-800 hover:bg-gray-900' }
  ];

  const features = [
    'Track project progress in real-time',
    'View and download invoices',
    'Direct communication with our team',
    'Access project files and documents',
    'Receive instant notifications',
    'Mobile-friendly dashboard'
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <Link href="/" className="flex items-center justify-center mb-6">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Trygon</span> */}
              <Image src="/assets/logo/logo.svg" alt="Trygon Technologies" width={170} height={150} />

            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome back!' : 'Create your account'}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? 'Sign in to access your client dashboard'
                : 'Join us to track your projects and collaborate with our team'
              }
            </p>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="grid grid-cols-1 gap-4">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                  <Input
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                  />
                </div>
              )}

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />

              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                loading={isLoading}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {socialProviders.map((provider) => (
                  <button
                    key={provider.name}
                    className={`w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${provider.color} transition-colors`}
                  >
                    <provider.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 font-medium text-blue-600 hover:text-blue-500"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{' '}
              <Link href="/terms" className="text-blue-600 hover:text-blue-500">Terms of Service</Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-500">Privacy Policy</Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="flex flex-col justify-center px-12 py-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Your Project Dashboard Awaits
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Get full transparency and control over your projects with our comprehensive client portal.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <FaCheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h4 className="text-lg font-semibold mb-2">Need Help?</h4>
              <p className="text-blue-100 text-sm mb-4">
                Our support team is here to assist you 24/7
              </p>
              <Link href="/contact">
                <Button variant="secondary" size="sm">
                  Contact Support
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;