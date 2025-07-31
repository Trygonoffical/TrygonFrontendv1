'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  FaUsers,
  FaRocket,
  FaGlobe,
  FaHeart,
  FaCode,
  FaPalette,
  FaChartLine,
  FaUpload,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaSearch,
  FaFilter,
  FaBriefcase,
  FaGraduationCap,
  FaHandshake,
  FaStar
} from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { SimpleInput as Input, SimpleTextarea as Textarea, SimpleSelect as Select } from '@/components/ui/Form';

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const benefits = [
    { icon: FaHeart, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs' },
    { icon: FaRocket, title: 'Career Growth', description: 'Continuous learning opportunities and clear career progression' },
    { icon: FaGlobe, title: 'Remote Flexibility', description: 'Work from anywhere with flexible hours and remote options' },
    { icon: FaDollarSign, title: 'Competitive Salary', description: 'Market-leading compensation with performance bonuses' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$80,000 - $120,000',
      description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will work on cutting-edge projects using React, Node.js, and modern web technologies.',
      requirements: [
        '4+ years of experience with React and Node.js',
        'Strong knowledge of JavaScript, TypeScript, and modern web technologies',
        'Experience with databases (MongoDB, PostgreSQL)',
        'Familiarity with cloud platforms (AWS, Google Cloud)',
        'Excellent problem-solving and communication skills'
      ],
      responsibilities: [
        'Develop and maintain web applications using React and Node.js',
        'Collaborate with cross-functional teams to deliver high-quality software',
        'Write clean, maintainable, and well-documented code',
        'Participate in code reviews and technical discussions',
        'Stay up-to-date with the latest web development trends'
      ],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$65,000 - $90,000',
      description: 'Join our design team to create beautiful and intuitive user experiences for web and mobile applications.',
      requirements: [
        '3+ years of experience in UI/UX design',
        'Proficiency in Figma, Sketch, and Adobe Creative Suite',
        'Strong portfolio showcasing web and mobile designs',
        'Understanding of responsive design principles',
        'Experience with prototyping and user testing'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Create wireframes, prototypes, and high-fidelity designs',
        'Conduct user research and usability testing',
        'Collaborate with developers to ensure design implementation',
        'Maintain and evolve design systems'
      ],
      posted: '2024-01-12'
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Los Angeles',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$50,000 - $70,000',
      description: 'We are seeking a creative Digital Marketing Specialist to develop and execute marketing campaigns across various digital channels.',
      requirements: [
        '2+ years of experience in digital marketing',
        'Knowledge of SEO, SEM, and social media marketing',
        'Experience with Google Analytics and marketing tools',
        'Strong analytical and communication skills',
        'Bachelor\'s degree in Marketing or related field'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media accounts and content creation',
        'Analyze campaign performance and optimize strategies',
        'Collaborate with design team for marketing materials',
        'Stay current with digital marketing trends'
      ],
      posted: '2024-01-10'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$75,000 - $110,000',
      description: 'Looking for a DevOps Engineer to help build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        '3+ years of experience in DevOps or infrastructure',
        'Strong knowledge of AWS, Docker, and Kubernetes',
        'Experience with CI/CD pipelines and automation',
        'Proficiency in scripting languages (Python, Bash)',
        'Understanding of monitoring and logging systems'
      ],
      responsibilities: [
        'Design and maintain cloud infrastructure',
        'Implement and optimize CI/CD pipelines',
        'Monitor system performance and reliability',
        'Automate deployment and scaling processes',
        'Ensure security and compliance standards'
      ],
      posted: '2024-01-08'
    },
    {
      id: 5,
      title: 'Junior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '1+ years',
      salary: '$45,000 - $65,000',
      description: 'Perfect opportunity for a junior developer to grow their skills in a supportive environment with mentorship from senior developers.',
      requirements: [
        '1+ years of experience with JavaScript and React',
        'Understanding of HTML, CSS, and responsive design',
        'Familiarity with Git and version control',
        'Basic knowledge of web performance optimization',
        'Eagerness to learn and grow'
      ],
      responsibilities: [
        'Develop user interfaces using React and modern CSS',
        'Collaborate with senior developers on feature development',
        'Write and maintain unit tests',
        'Participate in code reviews and team meetings',
        'Learn and apply best practices in web development'
      ],
      posted: '2024-01-05'
    },
    {
      id: 6,
      title: 'Project Manager',
      department: 'Management',
      location: 'Chicago',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$70,000 - $95,000',
      description: 'Experienced Project Manager needed to lead cross-functional teams and ensure successful project delivery.',
      requirements: [
        '4+ years of project management experience',
        'PMP or similar certification preferred',
        'Experience with Agile/Scrum methodologies',
        'Strong leadership and communication skills',
        'Experience in technology or software projects'
      ],
      responsibilities: [
        'Lead project teams and coordinate deliverables',
        'Manage project timelines, budgets, and resources',
        'Communicate with stakeholders and clients',
        'Ensure quality standards and best practices',
        'Identify risks and develop mitigation strategies'
      ],
      posted: '2024-01-03'
    }
  ];

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Design', label: 'Design' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Management', label: 'Management' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'Remote', label: 'Remote' },
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' }
  ];

  // Filter jobs based on search, department, and location
  useEffect(() => {
    let filtered = jobOpenings;

    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(job => job.department === selectedDepartment);
    }

    if (selectedLocation !== 'all') {
      filtered = filtered.filter(job => job.location === selectedLocation);
    }

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [searchTerm, selectedDepartment, selectedLocation]);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Join Our <span className="text-blue-400">Amazing Team</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                View Open Positions
                <FaArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Work <span className="text-blue-600">With Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive, grow, and do their best work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Perfect Role</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Search */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12"
                />
              </div>

              {/* Department Filter */}
              <Select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                options={departments}
              />

              {/* Location Filter */}
              <Select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                options={locations}
              />
            </div>

            {/* Results Info */}
            <div className="text-gray-600 mb-8">
              Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
              {selectedDepartment !== 'all' && ` in ${selectedDepartment}`}
              {selectedLocation !== 'all' && ` - ${selectedLocation}`}
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Job Info */}
                      <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {job.department}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <FaClock className="w-4 h-4 mr-2" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <FaBriefcase className="w-4 h-4 mr-2" />
                            {job.experience}
                          </div>
                          <div className="flex items-center">
                            <FaDollarSign className="w-4 h-4 mr-2" />
                            {job.salary}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {job.description}
                        </p>
                        
                        <div className="text-sm text-gray-500">
                          Posted: {new Date(job.posted).toLocaleDateString()}
                        </div>
                      </div>
                      
                      {/* Apply Section */}
                      <div className="flex flex-col justify-center">
                        <Button 
                          onClick={() => handleApply(job)}
                          className="w-full mb-4"
                          size="lg"
                        >
                          Apply Now
                          <FaArrowRight className="ml-2" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => {
                            // Show job details modal or expand section
                            console.log('View details for:', job.title);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedDepartment('all'); setSelectedLocation('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Apply for {selectedJob.title}
                </h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ✕
                </button>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <Input placeholder="Enter your last name" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+91 8851285655" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                  <Input placeholder="https://linkedin.com/in/yourprofile" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/Website URL</label>
                  <Input placeholder="https://yourportfolio.com" />
                </div>
                
                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                    <FaUpload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
                  <Textarea
                    placeholder="Tell us why you're interested in this position and why you'd be a great fit for our team..."
                    rows={6}
                    required
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Submit Application
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* General Application Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Don't See Your Perfect Role? <span className="text-blue-600">Apply Anyway!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and tell us how you'd like to contribute.
            </p>
          </motion.div>

          <Card className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">General Application</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <Input placeholder="Enter your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+91 8851285655" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Role/Department</label>
                  <Select 
                    placeholder="Select department of interest"
                    options={[
                      { value: 'engineering', label: 'Engineering' },
                      { value: 'design', label: 'Design' },
                      { value: 'marketing', label: 'Marketing' },
                      { value: 'management', label: 'Management' },
                      { value: 'sales', label: 'Sales' },
                      { value: 'other', label: 'Other' }
                    ]}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                  <Input placeholder="https://linkedin.com/in/yourprofile" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/Website</label>
                  <Input placeholder="https://yourportfolio.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                <Select 
                  placeholder="Select your experience level"
                  options={[
                    { value: '0-1', label: '0-1 years (Entry Level)' },
                    { value: '2-3', label: '2-3 years (Junior)' },
                    { value: '4-6', label: '4-6 years (Mid-Level)' },
                    { value: '7-10', label: '7-10 years (Senior)' },
                    { value: '10+', label: '10+ years (Expert/Lead)' }
                  ]}
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                  <FaUpload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Yourself *</label>
                <Textarea
                  placeholder="Tell us about your background, skills, and what kind of role you're looking for. What interests you about working at Trygon?"
                  rows={6}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Start Date</label>
                <Select 
                  placeholder="When can you start?"
                  options={[
                    { value: 'immediately', label: 'Immediately' },
                    { value: '2-weeks', label: 'Within 2 weeks' },
                    { value: '1-month', label: 'Within 1 month' },
                    { value: '2-months', label: 'Within 2 months' },
                    { value: 'flexible', label: 'Flexible' }
                  ]}
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <FaHandshake className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">We'll keep your information on file</p>
                    <p>Even if we don't have an immediate opening, we'll reach out when a suitable position becomes available that matches your skills and interests.</p>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                Submit General Application
                <FaArrowRight className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Join Our <span className="text-yellow-400">Journey</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you see your perfect role above or want to explore opportunities, we'd love to hear from you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="!bg-white !text-blue-600 hover:!bg-gray-100 hover:!text-blue-700">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-blue-600">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;