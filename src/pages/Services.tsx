import React, { useState } from 'react';
import { 
  Code, Palette, Cloud, Smartphone, Database, Shield, 
  ArrowRight, Zap, CheckCircle, Star, Clock, Users, 
  Briefcase, TrendingUp, Award, Rocket, Sparkles, Layers,
  Figma, Terminal, GitBranch, Cpu, Mail 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Code className="w-7 h-7" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to solve your unique business challenges and scale with your growth.",
      features: ["Web Applications", "Enterprise Software", "API Development", "System Integration"],
      technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
      popular: false,
      timeline: "8-16 weeks",
      details: {
        overview: "Our custom software development services help businesses create unique solutions that perfectly fit their specific needs. We use agile methodologies and cutting-edge technologies to deliver scalable, maintainable, and secure applications.",
        process: [
          "Requirements Analysis & Planning",
          "System Architecture Design",
          "Development & Testing",
          "Deployment & Launch",
          "Ongoing Support & Maintenance"
        ],
        benefits: [
          "Tailored to your exact business needs",
          "Scalable architecture for future growth",
          "Modern, maintainable codebase",
          "Comprehensive testing and quality assurance",
          "Full documentation and training"
        ]
      }
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "UI/UX Design & Branding",
      description: "Beautiful, intuitive designs that create exceptional user experiences and strengthen your brand identity across all touchpoints.",
      features: ["User Interface Design", "User Experience Research", "Brand Identity", "Design Systems"],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer"],
      popular: true,
      timeline: "4-8 weeks",
      details: {
        overview: "We create stunning visual designs and intuitive user experiences that not only look great but also drive engagement and conversions. Our design process is user-centered and data-driven.",
        process: [
          "User Research & Analysis",
          "Wireframing & Prototyping",
          "Visual Design & Branding",
          "User Testing & Iteration",
          "Design System Creation"
        ],
        benefits: [
          "Increased user engagement and satisfaction",
          "Higher conversion rates",
          "Consistent brand experience",
          "Reduced development time with design systems",
          "Improved accessibility and usability"
        ]
      }
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and DevOps practices that ensure your applications are reliable, secure, and performant.",
      features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Monitoring & Analytics"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      popular: false,
      timeline: "6-12 weeks",
      details: {
        overview: "Transform your infrastructure with modern cloud solutions and DevOps practices. We help you achieve better scalability, reliability, and cost-efficiency while maintaining security and compliance.",
        process: [
          "Infrastructure Assessment",
          "Cloud Strategy & Planning",
          "Migration & Implementation",
          "Automation & Optimization",
          "Monitoring & Maintenance"
        ],
        benefits: [
          "Reduced infrastructure costs",
          "Improved scalability and reliability",
          "Faster deployment cycles",
          "Enhanced security and compliance",
          "24/7 monitoring and support"
        ]
      }
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "App Store Connect"],
      popular: false,
      timeline: "12-20 weeks",
      details: {
        overview: "Create powerful mobile applications that engage users and drive business growth. We develop both native and cross-platform solutions optimized for performance and user experience.",
        process: [
          "Platform Strategy & Planning",
          "UI/UX Design for Mobile",
          "Development & Testing",
          "App Store Optimization",
          "Launch & Post-Launch Support"
        ],
        benefits: [
          "Native performance and user experience",
          "Cross-platform compatibility",
          "App store optimization",
          "Push notifications and analytics",
          "Offline functionality support"
        ]
      }
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics, machine learning, and business intelligence solutions.",
      features: ["Data Engineering", "Business Intelligence", "Machine Learning", "Data Visualization"],
      technologies: ["Python", "R", "TensorFlow", "Power BI", "Tableau", "Apache Spark"],
      popular: false,
      timeline: "10-16 weeks",
      details: {
        overview: "Unlock the power of your data with comprehensive analytics solutions. We help you collect, process, and analyze data to make informed business decisions and predict future trends.",
        process: [
          "Data Assessment & Strategy",
          "Data Pipeline Development",
          "Analytics & ML Model Creation",
          "Dashboard & Visualization Setup",
          "Training & Knowledge Transfer"
        ],
        benefits: [
          "Data-driven decision making",
          "Predictive analytics capabilities",
          "Real-time insights and reporting",
          "Automated data processing",
          "Improved operational efficiency"
        ]
      }
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Security Training"],
      technologies: ["OWASP", "ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI DSS"],
      popular: false,
      timeline: "4-8 weeks",
      details: {
        overview: "Protect your business with comprehensive cybersecurity solutions. We provide security assessments, implementation of security measures, and ongoing monitoring to keep your data and systems safe.",
        process: [
          "Security Assessment & Risk Analysis",
          "Security Strategy Development",
          "Implementation & Configuration",
          "Testing & Validation",
          "Ongoing Monitoring & Support"
        ],
        benefits: [
          "Enhanced data protection",
          "Regulatory compliance",
          "Reduced security risks",
          "Employee security awareness",
          "Incident response planning"
        ]
      }
    }
  ];

  const packages = [
    {
      name: "Starter",
      duration: "2-4 weeks",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic web application or mobile app",
        "Simple UI/UX design",
        "Basic functionality",
        "1 month support",
        "Documentation"
      ],
      popular: false
    },
    {
      name: "Professional",
      duration: "6-10 weeks",
      description: "Ideal for growing businesses",
      features: [
        "Advanced web/mobile application",
        "Custom UI/UX design",
        "Advanced features & integrations",
        "3 months support",
        "Training & documentation",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      duration: "12+ weeks",
      description: "For large-scale enterprise solutions",
      features: [
        "Complex enterprise applications",
        "Custom architecture design",
        "Multiple integrations",
        "12 months support",
        "Dedicated project manager",
        "24/7 monitoring",
        "Security & compliance"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-white to-red-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6">
              <Zap className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 font-semibold text-sm tracking-wide">OUR SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Tech
              <span className="block text-red-600 mt-2">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end technology services that drive innovation 
              and accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border cursor-pointer ${
                  activeService === index ? 'border-red-300 shadow-md' : 'border-gray-100 hover:border-red-200'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex p-2 bg-red-50 rounded-lg text-red-600 mr-3">
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center text-xs text-gray-400 mb-4">
                  <Clock className="w-3 h-3 mr-1" />
                  {service.timeline}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 2).map((feature, featureIndex) => (
                    <span key={featureIndex} className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 2 && (
                    <span className="text-xs text-gray-400">+{service.features.length - 2} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div className="inline-flex p-3 bg-red-50 rounded-xl text-red-600 mb-5">
                  {services[activeService].icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{services[activeService].title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {services[activeService].details.overview}
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-3">Our Process</h3>
                <ul className="space-y-2 mb-6">
                  {services[activeService].details.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {services[activeService].details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-bold text-gray-900 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {services[activeService].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 text-sm">Timeline:</span>
                    <span className="font-medium text-gray-900">{services[activeService].timeline}</span>
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 text-center block text-sm"
                  >
                    Start Your Project
                    <ArrowRight className="w-3 h-3 inline ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your project needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl border-2 transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-red-500 shadow-md' 
                    : 'border-gray-100 hover:border-red-200 hover:shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-3">
                    <span className="bg-red-600 text-white px-3 py-0.5 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                  <div className="text-gray-500 text-sm">{pkg.duration}</div>
                  <p className="text-gray-500 text-sm mt-2">{pkg.description}</p>
                </div>

                <ul className="space-y-2 mb-5">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className={`w-full py-2 rounded-lg font-medium transition-all duration-300 text-center block text-sm ${
                    pkg.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-3 h-3 inline ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Redmetic?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine technical excellence with business acumen to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl text-center border border-gray-100">
              <div className="inline-flex p-2 bg-red-50 rounded-lg text-red-600 mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Expert Team</h3>
              <p className="text-gray-500 text-sm">20+ skilled professionals with deep industry expertise</p>
            </div>
            <div className="bg-white p-5 rounded-xl text-center border border-gray-100">
              <div className="inline-flex p-2 bg-red-50 rounded-lg text-red-600 mb-3">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Agile Delivery</h3>
              <p className="text-gray-500 text-sm">Fast, iterative development with transparent communication</p>
            </div>
            <div className="bg-white p-5 rounded-xl text-center border border-gray-100">
              <div className="inline-flex p-2 bg-red-50 rounded-lg text-red-600 mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Quality Assured</h3>
              <p className="text-gray-500 text-sm">Rigorous testing and industry best practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Business?</h2>
          <p className="text-base text-red-100 mb-5 max-w-xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-red-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-md inline-flex items-center justify-center text-sm"
            >
              Schedule a Consultation
              <Mail className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;