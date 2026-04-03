import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Play, CheckCircle, Zap, Shield, Rocket, Users, Award, 
  TrendingUp, Code, Palette, Cloud, Star, Globe, Calendar, Target, 
  Heart, Lightbulb, ShoppingCart, GraduationCap, BarChart3, BookOpen,
  Briefcase, Sparkles, Layers, Cpu, Database, Figma, GitBranch, Terminal
} from 'lucide-react';

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
    animatedElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const stats = [
    { icon: <Users className="w-5 h-5" />, label: "Happy Clients", value: "500+", description: "Across 15+ countries" },
    { icon: <Award className="w-5 h-5" />, label: "Projects Delivered", value: "800+", description: "Successfully completed" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Years Experience", value: "5+", description: "In the industry" },
    { icon: <Globe className="w-5 h-5" />, label: "Global Reach", value: "15+", description: "Countries served" }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Development",
      description: "Tailored software solutions built with cutting-edge technologies to solve your unique business challenges.",
      highlights: ["Web Applications", "Enterprise Software", "API Development"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create exceptional user experiences and strengthen brand identity.",
      highlights: ["User Research", "Visual Design", "Design Systems"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps practices for modern, reliable, and secure applications.",
      highlights: ["Cloud Migration", "DevOps", "Infrastructure"]
    }
  ];

  const products = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      name: "RedStock",
      tagline: "Smart POS & Inventory Management",
      description: "Complete point-of-sale and inventory management solution for modern businesses.",
      features: ["Real-time Analytics", "Multi-user Support", "Cloud-based", "Mobile Ready"],
      gradient: "from-red-600 to-red-700",
      link: "/products"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: "RedSchool",
      tagline: "Complete School Management System",
      description: "Comprehensive school management solution covering academics and administration.",
      features: ["Student Management", "Fee Management", "Parent Portal", "Academic Tracking"],
      gradient: "from-red-600 to-red-700",
      link: "/products"
    }
  ];

  const skillPrograms = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Front-End Development",
      description: "Master modern web technologies and frameworks",
      duration: "3 months",
      level: "Beginner to Advanced"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UX/UI Design",
      description: "Create stunning user experiences and interfaces",
      duration: "3 months",
      level: "All Levels"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Learn modern marketing strategies and tools",
      duration: "3 months",
      level: "Comprehensive"
    }
  ];

  const companyValues = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Client-Centric",
      description: "Your success is our priority through exceptional service."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Results Driven",
      description: "We deliver measurable outcomes that drive business growth."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend", icon: <Code className="w-4 h-4" /> },
    { name: "Angular", category: "Frontend", icon: <Code className="w-4 h-4" /> },
    { name: "Java Spring Boot", category: "Backend", icon: <Terminal className="w-4 h-4" /> },
    { name: "MySQL", category: "Database", icon: <Database className="w-4 h-4" /> },
    { name: "Node.js", category: "Backend", icon: <Terminal className="w-4 h-4" /> },
    { name: "WordPress", category: "CMS", icon: <Layers className="w-4 h-4" /> },
    { name: "AWS", category: "Cloud", icon: <Cloud className="w-4 h-4" /> },
    { name: "Docker", category: "DevOps", icon: <GitBranch className="w-4 h-4" /> },
    { name: "MongoDB", category: "Database", icon: <Database className="w-4 h-4" /> },
    { name: "PostgreSQL", category: "Database", icon: <Database className="w-4 h-4" /> },
    { name: "TypeScript", category: "Language", icon: <Code className="w-4 h-4" /> },
    { name: "Figma", category: "Design", icon: <Figma className="w-4 h-4" /> }
  ];

  const clientLogos = [
    "TechCorp", "InnovateLab", "FutureSync", "DataFlow", "CloudVision", "NextGen Solutions"
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition",
      description: "Winner of 'Best Tech Solutions Provider 2024'"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Client Satisfaction",
      description: "99% client satisfaction rate with 95% repeat business"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Leader",
      description: "Featured in top 10 emerging tech companies"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-red-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          
          {/* Subtle geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-red-200 rounded-lg opacity-20 animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-red-200 rounded-full opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-red-300 transform rotate-45 opacity-20 animate-float animation-delay-1500"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            {/* Announcement Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md border border-red-100 mb-8 animate-fade-in-up">
              <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
              <span className="text-red-700 font-medium text-sm tracking-wide">🚀 Transforming Ideas into Digital Reality Since 2019</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Build the
              <span className="block text-red-600 mt-2">
                Future
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-500 font-light mt-4 animate-fade-in-up animation-delay-400">
                with Redmetic
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-600">
              We craft innovative technology solutions that drive business growth. From custom software development 
              to cutting-edge design, we turn your vision into powerful digital experiences.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20 animate-fade-in-up animation-delay-800">
              <Link 
                to="/services"
                className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products"
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-300 bg-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center"
              >
                <Play className="w-5 h-5 mr-3" />
                View Our Products
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-red-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-red-600 transition-colors cursor-pointer">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6">
              <span className="text-red-700 font-semibold text-sm tracking-wide">OUR FLAGSHIP PRODUCTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our flagship products designed to streamline operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 animate-on-scroll">
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${product.gradient} text-white mb-6`}>
                    {product.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-semibold text-red-600 mb-4">{product.tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={product.link}
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link 
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Explore All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions covering every aspect of your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 animate-on-scroll">
                <div className="inline-flex p-3 bg-red-50 rounded-xl mb-6">
                  <div className="text-red-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link 
              to="/services"
              className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skill Development Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 font-semibold text-sm tracking-wide">SKILL DEVELOPMENT</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Master In-Demand Digital Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your career with our comprehensive skill development programs designed by industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {skillPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100 animate-on-scroll-scale">
                <div className="inline-flex p-3 bg-red-50 rounded-xl mb-6">
                  <div className="text-red-600">
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-xs text-gray-500 block">Duration</span>
                    <span className="text-sm font-semibold text-gray-700">{program.duration}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Level</span>
                    <span className="text-sm font-semibold text-gray-700">{program.level}</span>
                  </div>
                  <span className="text-sm font-semibold text-red-600">Learn More →</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link 
              to="/skills"
              className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Redmetic?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Redmetic has grown from a small startup to a recognized leader in technology solutions. 
                We combine deep technical expertise with creative innovation to deliver exceptional results for our clients.
              </p>
              <div className="space-y-4">
                {[
                  "End-to-end digital transformation expertise",
                  "Agile development with transparent communication",
                  "24/7 support and maintenance services",
                  "Industry-leading security and compliance standards"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll-right">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Since 2019</div>
                    <div className="text-sm text-gray-500">Innovation Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group animate-on-scroll-scale">
                <div className="inline-flex p-3 bg-red-50 rounded-xl mb-5">
                  <div className="text-red-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to build scalable, secure, and high-performance solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl text-center hover:bg-red-50 hover:shadow-sm transition-all duration-300 animate-on-scroll-scale">
                <div className="flex items-center justify-center mb-2 text-red-600">
                  {tech.icon}
                </div>
                <div className="font-medium text-gray-800 text-sm">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">{tech.category}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link 
              to="/about"
              className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              View Our Full Tech Stack
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Recognition and milestones that define our journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-all duration-300 animate-on-scroll-scale">
                <div className="inline-flex p-3 bg-yellow-50 rounded-xl mb-5">
                  <div className="text-yellow-600">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      {/* <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {clientLogos.map((company, index) => (
                <div key={index} className="text-gray-400 font-medium text-lg hover:text-gray-600 transition-colors">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-5">Ready to Transform Your Business?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join 500+ satisfied clients who have transformed their businesses with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;