import React from 'react';
import { Code, Palette, Cloud, Smartphone, Database, Shield, ArrowRight, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to solve your unique business challenges and scale with your growth.",
      features: ["Web Applications", "Enterprise Software", "API Development", "System Integration"],
      gradient: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design & Branding",
      description: "Beautiful, intuitive designs that create exceptional user experiences and strengthen your brand identity across all touchpoints.",
      features: ["User Interface Design", "User Experience Research", "Brand Identity", "Design Systems"],
      gradient: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and DevOps practices that ensure your applications are reliable, secure, and performant.",
      features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Monitoring & Analytics"],
      gradient: "from-green-500 to-green-600",
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      gradient: "from-orange-500 to-orange-600",
      popular: false
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics, machine learning, and business intelligence solutions.",
      features: ["Data Engineering", "Business Intelligence", "Machine Learning", "Data Visualization"],
      gradient: "from-indigo-500 to-indigo-600",
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Security Training"],
      gradient: "from-red-500 to-red-600",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 translate-y-32 -translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-red-600 mr-2" />
            <span className="text-red-800 font-semibold text-sm tracking-wide">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Tech
            <span className="block text-red-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end technology services that drive innovation 
            and accelerate your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 relative overflow-hidden"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600 transition-colors"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Learn More Link */}
              <button className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.
              </p>
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;