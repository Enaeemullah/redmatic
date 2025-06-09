import React, { useState } from 'react';
import { Code, Palette, TrendingUp, Calculator, Video, Zap, Clock, Calendar, Users, Star, CheckCircle, ArrowRight, Award, BookOpen, Target, Globe, Laptop, Play, Download, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    {
      id: 'frontend',
      title: 'Front-End Development',
      icon: <Code className="w-8 h-8" />,
      description: 'Master modern front-end technologies including HTML5, CSS3, JavaScript ES6+, and popular frameworks.',
      longDescription: 'Comprehensive front-end development course covering everything from basic HTML/CSS to advanced JavaScript frameworks. Learn responsive design, modern CSS techniques, JavaScript fundamentals, and popular libraries.',
      duration: '3 Months (12 weeks)',
      classTime: '1.5 hours',
      schedule: 'Mon - Fri',
      totalFee: 18000,
      monthlyFee: 6000,
      currency: 'PKR',
      level: 'Beginner to Intermediate',
      students: '150+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      gradient: 'from-blue-500 to-blue-600',
      popular: true,
      curriculum: [
        {
          week: 'Week 1-2',
          topics: ['HTML5 Fundamentals', 'CSS3 & Flexbox', 'Responsive Design Basics']
        },
        {
          week: 'Week 3-4',
          topics: ['JavaScript Fundamentals', 'DOM Manipulation', 'Event Handling']
        },
        {
          week: 'Week 5-6',
          topics: ['ES6+ Features', 'Async JavaScript', 'API Integration']
        },
        {
          week: 'Week 7-8',
          topics: ['React.js Basics', 'Components & Props', 'State Management']
        },
        {
          week: 'Week 9-10',
          topics: ['React Hooks', 'Context API', 'React Router']
        },
        {
          week: 'Week 11-12',
          topics: ['Final Project', 'Deployment', 'Portfolio Development']
        }
      ],
      features: [
        'Live coding sessions',
        'Real-world projects',
        'Industry mentorship',
        'Job placement assistance',
        'Certificate of completion',
        'Lifetime access to materials'
      ],
      prerequisites: ['Basic computer skills', 'No prior coding experience required'],
      outcomes: [
        'Build responsive websites from scratch',
        'Create interactive web applications',
        'Master modern JavaScript frameworks',
        'Deploy projects to production',
        'Build a professional portfolio'
      ]
    },
    {
      id: 'ux-ui',
      title: 'UX/UI Design',
      icon: <Palette className="w-8 h-8" />,
      description: 'Learn user experience design principles, interface design, and modern design tools to create stunning digital experiences.',
      longDescription: 'Complete UX/UI design course covering design thinking, user research, wireframing, prototyping, and visual design. Master industry-standard tools and create portfolio-worthy projects.',
      duration: '3 Months (12 weeks)',
      classTime: '1.5 hours',
      schedule: 'Mon - Fri',
      totalFee: 18000,
      monthlyFee: 6000,
      currency: 'PKR',
      level: 'Beginner to Intermediate',
      students: '120+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      gradient: 'from-purple-500 to-purple-600',
      popular: false,
      curriculum: [
        {
          week: 'Week 1-2',
          topics: ['Design Thinking', 'User Research Methods', 'Persona Development']
        },
        {
          week: 'Week 3-4',
          topics: ['Information Architecture', 'Wireframing', 'User Journey Mapping']
        },
        {
          week: 'Week 5-6',
          topics: ['Visual Design Principles', 'Color Theory', 'Typography']
        },
        {
          week: 'Week 7-8',
          topics: ['Figma Mastery', 'Prototyping', 'Design Systems']
        },
        {
          week: 'Week 9-10',
          topics: ['Usability Testing', 'Design Handoff', 'Collaboration']
        },
        {
          week: 'Week 11-12',
          topics: ['Portfolio Development', 'Case Study Creation', 'Industry Presentation']
        }
      ],
      features: [
        'Hands-on design projects',
        'Industry-standard tools training',
        'Portfolio development',
        'Design critique sessions',
        'Client project simulation',
        'Design system creation'
      ],
      prerequisites: ['Creative mindset', 'Basic computer skills', 'No design experience required'],
      outcomes: [
        'Create user-centered designs',
        'Master Figma and design tools',
        'Build a professional portfolio',
        'Conduct user research',
        'Design complete digital products'
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Master digital marketing strategies, social media marketing, SEO, content marketing, and analytics.',
      longDescription: 'Comprehensive digital marketing course covering all aspects of online marketing including SEO, social media, content marketing, email marketing, and analytics. Learn to create and execute successful marketing campaigns.',
      duration: '3 Months (12 weeks)',
      classTime: '1.5 hours',
      schedule: 'Mon - Fri',
      totalFee: 18000,
      monthlyFee: 6000,
      currency: 'PKR',
      level: 'Beginner to Advanced',
      students: '200+',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      gradient: 'from-green-500 to-green-600',
      popular: false,
      curriculum: [
        {
          week: 'Week 1-2',
          topics: ['Digital Marketing Fundamentals', 'Market Research', 'Target Audience Analysis']
        },
        {
          week: 'Week 3-4',
          topics: ['SEO & SEM', 'Keyword Research', 'Google Ads']
        },
        {
          week: 'Week 5-6',
          topics: ['Social Media Marketing', 'Content Strategy', 'Facebook & Instagram Ads']
        },
        {
          week: 'Week 7-8',
          topics: ['Email Marketing', 'Marketing Automation', 'Lead Generation']
        },
        {
          week: 'Week 9-10',
          topics: ['Analytics & Reporting', 'Google Analytics', 'Performance Tracking']
        },
        {
          week: 'Week 11-12',
          topics: ['Campaign Development', 'ROI Optimization', 'Final Project']
        }
      ],
      features: [
        'Real campaign creation',
        'Google Ads certification prep',
        'Social media strategy development',
        'Analytics and reporting',
        'Industry case studies',
        'Marketing tools training'
      ],
      prerequisites: ['Basic internet knowledge', 'Social media familiarity', 'No marketing experience required'],
      outcomes: [
        'Create effective marketing campaigns',
        'Master Google Ads and Analytics',
        'Develop social media strategies',
        'Analyze marketing performance',
        'Generate leads and conversions'
      ]
    },
    {
      id: 'accounting',
      title: 'Accounting and Bookkeeping',
      icon: <Calculator className="w-8 h-8" />,
      description: 'Learn fundamental accounting principles, bookkeeping practices, and financial management using modern tools.',
      longDescription: 'Complete accounting and bookkeeping course covering financial statements, tax preparation, payroll, and modern accounting software. Perfect for entrepreneurs and finance professionals.',
      duration: '3 Months (12 weeks)',
      classTime: '1.5 hours',
      schedule: 'Mon - Fri',
      totalFee: 30000,
      monthlyFee: 10000,
      currency: 'PKR',
      level: 'Beginner to Intermediate',
      students: '80+',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg',
      gradient: 'from-indigo-500 to-indigo-600',
      popular: false,
      curriculum: [
        {
          week: 'Week 1-2',
          topics: ['Accounting Fundamentals', 'Chart of Accounts', 'Double Entry System']
        },
        {
          week: 'Week 3-4',
          topics: ['Journal Entries', 'Ledger Management', 'Trial Balance']
        },
        {
          week: 'Week 5-6',
          topics: ['Financial Statements', 'Income Statement', 'Balance Sheet']
        },
        {
          week: 'Week 7-8',
          topics: ['QuickBooks Training', 'Payroll Processing', 'Tax Preparation']
        },
        {
          week: 'Week 9-10',
          topics: ['Financial Analysis', 'Budgeting', 'Cash Flow Management']
        },
        {
          week: 'Week 11-12',
          topics: ['Advanced Reporting', 'Audit Preparation', 'Final Assessment']
        }
      ],
      features: [
        'QuickBooks certification',
        'Real business scenarios',
        'Tax preparation training',
        'Financial analysis tools',
        'Industry best practices',
        'Professional certification'
      ],
      prerequisites: ['Basic math skills', 'Computer literacy', 'No accounting background required'],
      outcomes: [
        'Manage complete bookkeeping cycles',
        'Prepare financial statements',
        'Use accounting software proficiently',
        'Handle payroll and taxes',
        'Provide financial analysis'
      ]
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      icon: <Video className="w-8 h-8" />,
      description: 'Master professional video editing techniques using industry-standard software and create compelling visual content.',
      longDescription: 'Professional video editing course covering Adobe Premiere Pro, After Effects, color grading, audio editing, and motion graphics. Create stunning videos for various platforms and purposes.',
      duration: '3 Months (12 weeks)',
      classTime: '1.5 hours',
      schedule: 'Mon - Fri',
      totalFee: 18000,
      monthlyFee: 6000,
      currency: 'PKR',
      level: 'Beginner to Advanced',
      students: '90+',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg',
      gradient: 'from-orange-500 to-orange-600',
      popular: false,
      curriculum: [
        {
          week: 'Week 1-2',
          topics: ['Video Editing Basics', 'Premiere Pro Interface', 'Timeline Management']
        },
        {
          week: 'Week 3-4',
          topics: ['Cutting Techniques', 'Transitions', 'Audio Synchronization']
        },
        {
          week: 'Week 5-6',
          topics: ['Color Correction', 'Color Grading', 'Visual Effects']
        },
        {
          week: 'Week 7-8',
          topics: ['After Effects Basics', 'Motion Graphics', 'Text Animation']
        },
        {
          week: 'Week 9-10',
          topics: ['Audio Editing', 'Sound Design', 'Music Integration']
        },
        {
          week: 'Week 11-12',
          topics: ['Export Settings', 'Platform Optimization', 'Portfolio Creation']
        }
      ],
      features: [
        'Adobe Creative Suite training',
        'Professional project creation',
        'Color grading techniques',
        'Motion graphics design',
        'Audio post-production',
        'Portfolio development'
      ],
      prerequisites: ['Creative interest', 'Basic computer skills', 'No video experience required'],
      outcomes: [
        'Edit professional videos',
        'Create motion graphics',
        'Master color grading',
        'Design visual effects',
        'Build video portfolio'
      ]
    },
    {
      id: 'react-advanced',
      title: 'React with Advanced JavaScript',
      icon: <Zap className="w-8 h-8" />,
      description: 'Advanced React development course with modern JavaScript, state management, testing, and performance optimization.',
      longDescription: 'Advanced React course for experienced developers covering hooks, context, testing, performance optimization, and modern development practices. Build production-ready applications.',
      duration: '3 Months (12 weeks)',
      classTime: '1.5 hours',
      schedule: 'Mon - Fri',
      totalFee: 30000,
      monthlyFee: 10000,
      currency: 'PKR',
      level: 'Intermediate to Advanced',
      students: '60+',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
      gradient: 'from-red-500 to-red-600',
      popular: true,
      curriculum: [
        {
          week: 'Week 1-2',
          topics: ['Advanced JavaScript ES6+', 'Async/Await', 'Module Systems']
        },
        {
          week: 'Week 3-4',
          topics: ['React Hooks Deep Dive', 'Custom Hooks', 'Performance Optimization']
        },
        {
          week: 'Week 5-6',
          topics: ['State Management', 'Redux Toolkit', 'Context API Advanced']
        },
        {
          week: 'Week 7-8',
          topics: ['Testing with Jest', 'React Testing Library', 'E2E Testing']
        },
        {
          week: 'Week 9-10',
          topics: ['Next.js Framework', 'SSR/SSG', 'API Routes']
        },
        {
          week: 'Week 11-12',
          topics: ['Production Deployment', 'Performance Monitoring', 'Final Project']
        }
      ],
      features: [
        'Advanced React patterns',
        'Production-ready projects',
        'Testing methodologies',
        'Performance optimization',
        'Modern tooling',
        'Industry best practices'
      ],
      prerequisites: ['JavaScript fundamentals', 'Basic React knowledge', '6+ months coding experience'],
      outcomes: [
        'Build complex React applications',
        'Implement advanced patterns',
        'Write comprehensive tests',
        'Optimize application performance',
        'Deploy production applications'
      ]
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Students Trained", color: "text-blue-600" },
    { icon: <Award className="w-8 h-8" />, number: "95%", label: "Job Placement Rate", color: "text-green-600" },
    { icon: <Star className="w-8 h-8" />, number: "4.8", label: "Average Rating", color: "text-yellow-600" },
    { icon: <Globe className="w-8 h-8" />, number: "6", label: "Course Categories", color: "text-purple-600" }
  ];

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Industry-Relevant Curriculum",
      description: "Courses designed with input from industry professionals and updated regularly."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Instructors",
      description: "Learn from experienced professionals with real-world industry experience."
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Hands-On Learning",
      description: "Practical projects and real-world scenarios to build your portfolio."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Job Placement Support",
      description: "Career guidance, interview preparation, and job placement assistance."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Certification",
      description: "Receive recognized certificates upon successful course completion."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "Evening and weekend batches available to fit your schedule."
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      course: "Front-End Development",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      rating: 5,
      text: "The front-end course completely transformed my career. I went from zero coding knowledge to landing a developer job in just 4 months!"
    },
    {
      name: "Fatima Khan",
      course: "UX/UI Design",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
      text: "Amazing course structure and supportive instructors. I'm now working as a UX designer at a leading tech company."
    },
    {
      name: "Ali Raza",
      course: "Digital Marketing",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      rating: 5,
      text: "The practical approach and real campaign experience helped me start my own digital marketing agency."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">SKILL DEVELOPMENT PROGRAMS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master In-Demand
              <span className="block text-red-600">Digital Skills</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your career with our comprehensive skill development programs. Learn from industry experts 
              and gain practical experience with real-world projects.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`${stat.color} flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Program Highlights */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">USDP 2024 - Upskill Development Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>15% Discount on upfront payment</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>All courses are paid programs</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Terms & conditions form required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Courses</h2>
            <p className="text-xl text-gray-600">Choose from our comprehensive range of skill development programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={course.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                {/* Course Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {course.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-2 rounded-lg font-semibold hover:bg-white transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${course.gradient} text-white`}>
                      {course.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">PKR {course.totalFee.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">Total Fee</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{course.schedule} • {course.classTime}/day</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{course.students} enrolled</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({course.rating})</span>
                    </div>
                    <div className="text-sm font-semibold text-red-600">
                      PKR {course.monthlyFee.toLocaleString()}/month
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCourse(null)}>
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="relative">
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{selectedCourse.title}</h2>
                <div className="flex items-center space-x-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {selectedCourse.duration}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {selectedCourse.level}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Tabs */}
              <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-xl">
                {['overview', 'curriculum', 'features'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      activeTab === tab
                        ? 'bg-white text-red-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {selectedCourse.longDescription}
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedCourse.prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{prereq}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Learning Outcomes</h4>
                    <ul className="space-y-2">
                      {selectedCourse.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <Target className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Course Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-semibold">{selectedCourse.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Class Time:</span>
                          <span className="font-semibold">{selectedCourse.classTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Schedule:</span>
                          <span className="font-semibold">{selectedCourse.schedule}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Level:</span>
                          <span className="font-semibold">{selectedCourse.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Students:</span>
                          <span className="font-semibold">{selectedCourse.students}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Pricing</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total Fee:</span>
                          <span className="text-2xl font-bold text-red-600">
                            PKR {selectedCourse.totalFee.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Monthly Fee:</span>
                          <span className="text-lg font-semibold text-gray-900">
                            PKR {selectedCourse.monthlyFee.toLocaleString()}
                          </span>
                        </div>
                        <div className="bg-green-100 p-3 rounded-lg">
                          <div className="text-green-800 font-semibold text-sm">
                            💰 Save 15% with upfront payment!
                          </div>
                          <div className="text-green-700 text-sm">
                            Pay PKR {Math.round(selectedCourse.totalFee * 0.85).toLocaleString()} instead
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                  <div className="space-y-4">
                    {selectedCourse.curriculum.map((week, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">{week.week}</h4>
                        <ul className="space-y-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center">
                              <Play className="w-4 h-4 text-red-500 mr-3" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedCourse.features.map((feature, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-2xl">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Link 
                  to="/contact"
                  className="flex-1 bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors text-center"
                >
                  Enroll Now
                </Link>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:border-red-500 hover:text-red-600 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl text-gray-600">Comprehensive learning experience designed for your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="inline-flex p-4 bg-red-50 rounded-2xl mb-6">
                  <div className="text-red-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our graduates who transformed their careers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.course}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their careers with our skill development programs. 
            Next batch starts soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Enroll Now
            </Link>
            <a 
              href="tel:+923001234567"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Info
            </a>
          </div>
          <div className="text-red-100 text-sm">
            📢 Follow us on social media for batch announcements and updates
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;