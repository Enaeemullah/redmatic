import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Star, Calendar, Users, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filters = ['All', 'Web Apps', 'Mobile Apps', 'Enterprise', 'E-commerce', 'SaaS', 'Design'];
  
  const projects = [
    {
      title: "FinanceFlow - Banking Platform",
      description: "Modern digital banking platform with real-time transactions, advanced security, and AI-powered financial insights for next-generation banking.",
      longDescription: "FinanceFlow revolutionizes digital banking with a comprehensive platform that includes real-time transaction processing, advanced fraud detection, personalized financial insights powered by AI, and a seamless user experience across web and mobile platforms. The platform handles over 1 million transactions daily and serves customers across 15 countries.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "AI/ML", "Redis"],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",
      category: "Web Apps",
      featured: true,
      metrics: { users: "50K+", rating: 4.9, duration: "8 months" },
      status: "Live",
      client: "FinanceFlow Inc.",
      year: "2024",
      challenges: [
        "Real-time transaction processing at scale",
        "Advanced security and fraud detection",
        "Regulatory compliance across multiple countries",
        "Seamless user experience across platforms"
      ],
      solutions: [
        "Microservices architecture for scalability",
        "AI-powered fraud detection system",
        "Automated compliance monitoring",
        "Progressive web app for mobile experience"
      ],
      results: [
        "50% reduction in transaction processing time",
        "99.9% uptime achieved",
        "40% increase in user engagement",
        "Zero security incidents since launch"
      ]
    },
    {
      title: "HealthTech Mobile Suite",
      description: "Comprehensive healthcare management system with telemedicine, patient records, and appointment scheduling for modern healthcare providers.",
      longDescription: "A complete healthcare ecosystem that connects patients, doctors, and healthcare providers through secure telemedicine capabilities, comprehensive patient record management, intelligent appointment scheduling, and real-time health monitoring. The platform ensures HIPAA compliance while providing an intuitive user experience.",
      tech: ["React Native", "Firebase", "Node.js", "MongoDB", "WebRTC", "HIPAA"],
      image: "https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg",
      category: "Mobile Apps",
      featured: true,
      metrics: { users: "25K+", rating: 4.8, duration: "6 months" },
      status: "Live",
      client: "HealthTech Solutions",
      year: "2023",
      challenges: [
        "HIPAA compliance requirements",
        "Real-time video consultations",
        "Complex appointment scheduling",
        "Secure patient data management"
      ],
      solutions: [
        "End-to-end encryption for all communications",
        "WebRTC for high-quality video calls",
        "AI-powered scheduling optimization",
        "Blockchain for secure health records"
      ],
      results: [
        "25,000+ patients onboarded",
        "95% patient satisfaction rate",
        "60% reduction in appointment no-shows",
        "Full HIPAA compliance achieved"
      ]
    },
    {
      title: "RetailMax E-commerce Platform",
      description: "Enterprise-grade e-commerce solution with advanced inventory management, analytics dashboard, and multi-vendor marketplace capabilities.",
      longDescription: "RetailMax is a comprehensive e-commerce platform that supports multi-vendor marketplaces, advanced inventory management, real-time analytics, and personalized shopping experiences. The platform integrates with multiple payment gateways, shipping providers, and third-party services to create a seamless retail ecosystem.",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis", "Stripe", "AWS"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      category: "E-commerce",
      featured: false,
      metrics: { users: "100K+", rating: 4.7, duration: "10 months" },
      status: "Live",
      client: "RetailMax Corp",
      year: "2023",
      challenges: [
        "Multi-vendor marketplace complexity",
        "Real-time inventory synchronization",
        "Payment processing across regions",
        "Scalable architecture for growth"
      ],
      solutions: [
        "Microservices for vendor management",
        "Event-driven inventory updates",
        "Multi-gateway payment processing",
        "Auto-scaling cloud infrastructure"
      ],
      results: [
        "100,000+ active users",
        "500+ vendors onboarded",
        "300% increase in transaction volume",
        "99.8% payment success rate"
      ]
    },
    {
      title: "CloudSync Enterprise Suite",
      description: "Comprehensive business management platform with CRM, project management, and team collaboration tools for enterprise clients.",
      longDescription: "CloudSync is an all-in-one enterprise solution that combines customer relationship management, project management, team collaboration, and business intelligence into a unified platform. Designed for large organizations, it provides advanced workflow automation, real-time reporting, and seamless integration with existing enterprise systems.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "Elasticsearch"],
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      category: "Enterprise",
      featured: false,
      metrics: { users: "15K+", rating: 4.9, duration: "12 months" },
      status: "Live",
      client: "Enterprise Solutions Ltd",
      year: "2022",
      challenges: [
        "Complex enterprise integrations",
        "Scalable multi-tenant architecture",
        "Advanced security requirements",
        "Custom workflow automation"
      ],
      solutions: [
        "API-first architecture for integrations",
        "Kubernetes for container orchestration",
        "Role-based access control system",
        "Visual workflow builder"
      ],
      results: [
        "15,000+ enterprise users",
        "50% improvement in project delivery",
        "80% reduction in manual processes",
        "Enterprise-grade security certification"
      ]
    },
    {
      title: "EduLearn SaaS Platform",
      description: "Interactive learning management system with video streaming, progress tracking, and AI-powered personalized learning paths.",
      longDescription: "EduLearn transforms online education with an intelligent learning management system that adapts to individual learning styles. The platform features high-quality video streaming, interactive assessments, progress tracking, and AI-powered recommendations to create personalized learning experiences for students and educators.",
      tech: ["React", "Python", "Django", "AWS", "Machine Learning", "WebRTC"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      category: "SaaS",
      featured: false,
      metrics: { users: "75K+", rating: 4.8, duration: "9 months" },
      status: "Live",
      client: "EduLearn Technologies",
      year: "2023",
      challenges: [
        "Personalized learning algorithms",
        "High-quality video streaming",
        "Real-time collaboration features",
        "Scalable content delivery"
      ],
      solutions: [
        "Machine learning for personalization",
        "CDN for global video delivery",
        "WebSocket for real-time features",
        "Microservices architecture"
      ],
      results: [
        "75,000+ active learners",
        "90% course completion rate",
        "45% improvement in learning outcomes",
        "Global content delivery network"
      ]
    },
    {
      title: "PropTech Real Estate App",
      description: "Modern real estate platform with virtual tours, property management, and advanced search capabilities powered by machine learning.",
      longDescription: "PropTech revolutionizes the real estate industry with immersive virtual tours, intelligent property matching, comprehensive property management tools, and advanced analytics. The platform uses machine learning to provide personalized property recommendations and market insights for buyers, sellers, and real estate professionals.",
      tech: ["React Native", "Node.js", "MongoDB", "AWS", "AR/VR", "TensorFlow"],
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
      category: "Mobile Apps",
      featured: false,
      metrics: { users: "30K+", rating: 4.6, duration: "7 months" },
      status: "Live",
      client: "PropTech Innovations",
      year: "2024",
      challenges: [
        "Immersive virtual tour technology",
        "Real-time property data synchronization",
        "Advanced search and filtering",
        "Mobile AR integration"
      ],
      solutions: [
        "360° virtual tour technology",
        "Real-time MLS data integration",
        "Elasticsearch for advanced search",
        "ARKit/ARCore for mobile AR"
      ],
      results: [
        "30,000+ property listings",
        "85% user engagement with virtual tours",
        "40% faster property discovery",
        "Industry-leading mobile experience"
      ]
    },
    {
      title: "BrandCraft Design System",
      description: "Comprehensive design system and brand identity for a Fortune 500 company, including guidelines, components, and digital assets.",
      longDescription: "BrandCraft is a complete design system that unifies the visual identity and user experience across all digital touchpoints for a Fortune 500 company. The project included brand strategy, visual identity design, component library creation, and implementation guidelines for consistent brand application.",
      tech: ["Figma", "Adobe Creative Suite", "Storybook", "React", "SCSS", "Design Tokens"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      category: "Design",
      featured: false,
      metrics: { users: "10K+", rating: 4.9, duration: "5 months" },
      status: "Live",
      client: "Fortune 500 Company",
      year: "2024",
      challenges: [
        "Unifying disparate brand elements",
        "Scalable design system architecture",
        "Cross-platform consistency",
        "Developer-friendly implementation"
      ],
      solutions: [
        "Comprehensive brand audit and strategy",
        "Atomic design methodology",
        "Design token system",
        "Automated component documentation"
      ],
      results: [
        "50% reduction in design inconsistencies",
        "300% faster design-to-development handoff",
        "Unified brand experience across platforms",
        "Award-winning design system"
      ]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">OUR PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Success Stories &
              <span className="block text-red-600">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that have transformed businesses and delighted users across various industries.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-16 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                    <span className="text-gray-500 text-sm">{project.year}</span>
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
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-gray-700 rotate-45" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
                <span className="text-gray-500">{selectedProject.year}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{selectedProject.longDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    {selectedProject.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="bg-green-50 p-4 rounded-2xl border border-green-200">
                      <span className="text-green-800 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                  View Live Project
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-red-500 hover:text-red-600 transition-colors">
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and let us help you build something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;