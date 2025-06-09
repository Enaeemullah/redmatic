import React, { useState } from 'react';
import { Code, Palette, Cloud, Smartphone, Database, Shield, ArrowRight, Zap, CheckCircle, Star, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to solve your unique business challenges and scale with your growth.",
      features: ["Web Applications", "Enterprise Software", "API Development", "System Integration"],
      technologies: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
      gradient: "from-blue-500 to-blue-600",
      popular: false,
      pricing: "Starting from $15,000",
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
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design & Branding",
      description: "Beautiful, intuitive designs that create exceptional user experiences and strengthen your brand identity across all touchpoints.",
      features: ["User Interface Design", "User Experience Research", "Brand Identity", "Design Systems"],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer"],
      gradient: "from-purple-500 to-purple-600",
      popular: true,
      pricing: "Starting from $8,000",
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
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and DevOps practices that ensure your applications are reliable, secure, and performant.",
      features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Monitoring & Analytics"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      gradient: "from-green-500 to-green-600",
      popular: false,
      pricing: "Starting from $12,000",
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
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "App Store Connect"],
      gradient: "from-orange-500 to-orange-600",
      popular: false,
      pricing: "Starting from $20,000",
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
      icon: <Database className="w-8 h-8" />,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics, machine learning, and business intelligence solutions.",
      features: ["Data Engineering", "Business Intelligence", "Machine Learning", "Data Visualization"],
      technologies: ["Python", "R", "TensorFlow", "Power BI", "Tableau", "Apache Spark"],
      gradient: "from-indigo-500 to-indigo-600",
      popular: false,
      pricing: "Starting from $18,000",
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
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Security Training"],
      technologies: ["OWASP", "ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI DSS"],
      gradient: "from-red-500 to-red-600",
      popular: false,
      pricing: "Starting from $10,000",
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
      price: "$5,000",
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
      price: "$15,000",
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
      price: "$50,000+",
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden logo-background-multiple">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <Zap className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-800 font-semibold text-sm tracking-wide">OUR SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Tech
              <span className="block text-red-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end technology services that drive innovation 
              and accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white logo-background-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 relative overflow-hidden cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.timeline}
                  </div>
                  <div className="font-semibold text-red-600">{service.pricing}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-red-50 hover:text-red-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-gray-50 logo-background-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${services[activeService].gradient} text-white mb-6`}>
                  {services[activeService].icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{services[activeService].title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].details.overview}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process</h3>
                <ul className="space-y-3 mb-8">
                  {services[activeService].details.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {services[activeService].details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {services[activeService].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{services[activeService].pricing}</div>
                      <div className="text-gray-600">Timeline: {services[activeService].timeline}</div>
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-white logo-background-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your project needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-lg border-2 transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-red-500 shadow-2xl scale-105' 
                    : 'border-gray-100 hover:border-red-200 hover:shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.duration}</div>
                  <p className="text-gray-600 mt-4">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact"
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 text-center block ${
                    pkg.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white logo-background-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;