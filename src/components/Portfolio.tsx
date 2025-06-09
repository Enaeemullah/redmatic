import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Star, Calendar, Users } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web Apps', 'Mobile Apps', 'Enterprise', 'E-commerce', 'SaaS'];
  
  const projects = [
    {
      title: "FinanceFlow - Banking Platform",
      description: "Modern digital banking platform with real-time transactions, advanced security, and AI-powered financial insights for next-generation banking.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "AI/ML"],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",
      category: "Web Apps",
      featured: true,
      metrics: { users: "50K+", rating: 4.9, duration: "8 months" },
      status: "Live"
    },
    {
      title: "HealthTech Mobile Suite",
      description: "Comprehensive healthcare management system with telemedicine, patient records, and appointment scheduling for modern healthcare providers.",
      tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
      image: "https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg",
      category: "Mobile Apps",
      featured: true,
      metrics: { users: "25K+", rating: 4.8, duration: "6 months" },
      status: "Live"
    },
    {
      title: "RetailMax E-commerce Platform",
      description: "Enterprise-grade e-commerce solution with advanced inventory management, analytics dashboard, and multi-vendor marketplace capabilities.",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis", "Stripe"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      category: "E-commerce",
      featured: false,
      metrics: { users: "100K+", rating: 4.7, duration: "10 months" },
      status: "Live"
    },
    {
      title: "CloudSync Enterprise Suite",
      description: "Comprehensive business management platform with CRM, project management, and team collaboration tools for enterprise clients.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      category: "Enterprise",
      featured: false,
      metrics: { users: "15K+", rating: 4.9, duration: "12 months" },
      status: "Live"
    },
    {
      title: "EduLearn SaaS Platform",
      description: "Interactive learning management system with video streaming, progress tracking, and AI-powered personalized learning paths.",
      tech: ["React", "Python", "Django", "AWS", "Machine Learning"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      category: "SaaS",
      featured: false,
      metrics: { users: "75K+", rating: 4.8, duration: "9 months" },
      status: "Live"
    },
    {
      title: "PropTech Real Estate App",
      description: "Modern real estate platform with virtual tours, property management, and advanced search capabilities powered by machine learning.",
      tech: ["React Native", "Node.js", "MongoDB", "AWS", "AR/VR"],
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
      category: "Mobile Apps",
      featured: false,
      metrics: { users: "30K+", rating: 4.6, duration: "7 months" },
      status: "Live"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-800 font-semibold text-sm tracking-wide">OUR PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories &
            <span className="block text-red-600">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that have transformed businesses and delighted users across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-red-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    {project.status}
                  </span>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
                
                {/* Hover Actions */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                    <Github className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-gray-500 mr-1" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{project.metrics.users}</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{project.metrics.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="w-4 h-4 text-gray-500 mr-1" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{project.metrics.duration}</div>
                    <div className="text-xs text-gray-500">Timeline</div>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View Case Study Link */}
                <button className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-300">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let us help you build something amazing.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;