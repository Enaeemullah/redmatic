import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle, Zap, Shield, Rocket, Users, Award, TrendingUp, Code, Palette, Cloud, Star, Globe, Calendar, Target, Heart, Lightbulb, ShoppingCart, GraduationCap, BarChart3, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
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

    // Observe all elements with animation classes
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
      gradient: "from-blue-500 to-blue-600",
      link: "/products"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: "RedSchool",
      tagline: "Complete School Management System",
      description: "Comprehensive school management solution covering academics and administration.",
      features: ["Student Management", "Fee Management", "Parent Portal", "Academic Tracking"],
      gradient: "from-green-500 to-green-600",
      link: "/products"
    }
  ];

  const skillPrograms = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Front-End Development",
      description: "Master modern web technologies and frameworks",
      duration: "3 months"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UX/UI Design",
      description: "Create stunning user experiences and interfaces",
      duration: "3 months"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Learn modern marketing strategies and tools",
      duration: "3 months"
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
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "MongoDB", category: "Database" },
    { name: "TypeScript", category: "Language" },
    { name: "Kubernetes", category: "DevOps" }
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50 logo-background-multiple">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-200 rounded-lg opacity-20 animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-red-300 rounded-full opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-red-400 transform rotate-45 opacity-25 animate-float animation-delay-1500"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center">
            {/* Animated Announcement Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg border border-red-100 mb-8 animate-fade-in-up hover-glow">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-700 font-semibold text-sm">🚀 Transforming Ideas into Digital Reality Since 2019</span>
            </div>
            
            {/* Animated Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in-up animation-delay-200">
              Build the
              <span className="block gradient-text animate-gradient-shift">
                Future
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-600 font-light mt-4 animate-fade-in-up animation-delay-400">
                with Redmatic
              </span>
            </h1>
            
            {/* Animated Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-600">
              We craft innovative technology solutions that drive business growth. From custom software development 
              to cutting-edge design, we turn your vision into powerful digital experiences that scale.
            </p>
            
            {/* Animated CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-800">
              <Link 
                to="/services"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover-glow"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-red-500 hover:text-red-600 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center group hover-lift"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                View Our Products
              </Link>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto stagger-animation">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group hover-lift">
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-red-600 group-hover:scale-110 transition-transform animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-red-500 transition-colors cursor-pointer">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-white logo-background-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">OUR FLAGSHIP PRODUCTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our flagship products designed to streamline operations and drive growth for businesses and educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 animate-on-scroll">
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {product.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
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
                    className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors"
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
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 logo-background-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions that cover every aspect of your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 stagger-animation">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover-lift animate-on-scroll">
                <div className="inline-flex p-4 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                  <div className="text-red-600 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 0.4}s` }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 animate-pulse"></div>
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
              className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skill Development Programs */}
      <section className="py-24 bg-white logo-background-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-800 font-semibold text-sm tracking-wide">SKILL DEVELOPMENT</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Master In-Demand Digital Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your career with our comprehensive skill development programs designed by industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 stagger-animation">
            {skillPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 animate-on-scroll-scale">
                <div className="inline-flex p-4 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                  <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{program.duration}</span>
                  <span className="text-sm font-semibold text-red-600">Learn More →</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link 
              to="/skills"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gray-50 logo-background-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Redmatic?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Redmatic has grown from a small startup to a recognized leader in technology solutions. 
                We combine deep technical expertise with creative innovation to deliver exceptional results for our clients.
              </p>
              <div className="space-y-4 stagger-animation">
                {[
                  "End-to-end digital transformation expertise",
                  "Agile development with transparent communication",
                  "24/7 support and maintenance services",
                  "Industry-leading security and compliance standards"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll-right">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Since 2019</div>
                    <div className="text-sm text-gray-600">Innovation Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group animate-on-scroll-scale">
                <div className="inline-flex p-4 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300 hover-lift">
                  <div className="text-red-600 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white logo-background-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to build scalable, secure, and high-performance solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-animation">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-red-50 hover:shadow-lg transition-all duration-300 group hover-lift animate-on-scroll-scale">
                <div className="font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                  {tech.name}
                </div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link 
              to="/about"
              className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group"
            >
              View Our Full Tech Stack
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gray-50 logo-background-floating">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Recognition and milestones that define our journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover-lift animate-on-scroll-scale">
                <div className="inline-flex p-4 bg-yellow-100 rounded-2xl mb-6 animate-pulse-glow">
                  <div className="text-yellow-600 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white logo-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-gray-500 text-sm mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 stagger-animation">
              {clientLogos.map((company, index) => (
                <div key={index} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors hover:scale-110 transform duration-300">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white relative overflow-hidden logo-background-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join 500+ satisfied clients who have transformed their businesses with our innovative technology solutions and skill development programs. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-animation">
              <Link 
                to="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-glow"
              >
                Get Started Today
              </Link>
              <Link 
                to="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 hover-lift"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;