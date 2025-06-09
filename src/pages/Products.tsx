import React, { useState } from 'react';
import { ShoppingCart, GraduationCap, BarChart3, Users, Shield, Zap, CheckCircle, ArrowRight, Star, Download, Play, Monitor, Smartphone, Cloud, Database, Calendar, BookOpen, Calculator, TrendingUp, Award, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<'redstock' | 'redschool' | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const products = [
    {
      id: 'redstock',
      name: 'RedStock',
      tagline: 'Smart POS & Inventory Management',
      description: 'Complete point-of-sale and inventory management solution designed for modern businesses.',
      longDescription: 'RedStock is a comprehensive POS and inventory management system that streamlines your business operations. From sales tracking to inventory control, RedStock provides real-time insights and automated processes to help your business grow efficiently.',
      icon: <ShoppingCart className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
      gradient: 'from-blue-500 to-blue-600',
      category: 'Business Management',
      pricing: {
        starter: { price: 15000, features: ['Basic POS', 'Inventory Tracking', 'Sales Reports', 'Up to 2 Users'] },
        professional: { price: 25000, features: ['Advanced POS', 'Multi-location', 'Advanced Reports', 'Up to 10 Users', 'Customer Management'] },
        enterprise: { price: 45000, features: ['Full POS Suite', 'Unlimited Users', 'Custom Reports', 'API Access', 'Priority Support'] }
      },
      features: [
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: 'Real-time Analytics',
          description: 'Get instant insights into sales performance, inventory levels, and business trends.'
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Multi-user Support',
          description: 'Role-based access control for staff members with different permission levels.'
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: 'Secure Transactions',
          description: 'End-to-end encryption and secure payment processing for all transactions.'
        },
        {
          icon: <Cloud className="w-6 h-6" />,
          title: 'Cloud-based',
          description: 'Access your data from anywhere with automatic backups and synchronization.'
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: 'Mobile Ready',
          description: 'Works seamlessly on tablets and mobile devices for on-the-go management.'
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: 'Inventory Control',
          description: 'Advanced inventory tracking with low-stock alerts and automated reordering.'
        }
      ],
      benefits: [
        'Reduce inventory costs by up to 30%',
        'Increase sales efficiency by 40%',
        'Real-time business insights',
        'Streamlined checkout process',
        'Automated inventory management',
        'Comprehensive reporting suite'
      ],
      industries: ['Retail Stores', 'Restaurants', 'Pharmacies', 'Supermarkets', 'Fashion Boutiques', 'Electronics Stores'],
      testimonials: [
        {
          name: 'Ahmed Khan',
          company: 'Khan Electronics',
          text: 'RedStock transformed our inventory management. We reduced stock-outs by 80% and increased our profit margins significantly.',
          rating: 5
        },
        {
          name: 'Fatima Ali',
          company: 'Fashion Hub',
          text: 'The POS system is incredibly user-friendly. Our staff learned it in just one day, and checkout times have improved dramatically.',
          rating: 5
        }
      ]
    },
    {
      id: 'redschool',
      name: 'RedSchool',
      tagline: 'Complete School Management System',
      description: 'Comprehensive school management solution covering academics, administration, and communication.',
      longDescription: 'RedSchool is an all-in-one school management system that digitizes every aspect of educational administration. From student enrollment to fee management, academic tracking to parent communication, RedSchool streamlines operations for educational institutions of all sizes.',
      icon: <GraduationCap className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg',
      gradient: 'from-green-500 to-green-600',
      category: 'Education Management',
      pricing: {
        basic: { price: 20000, features: ['Student Management', 'Basic Reports', 'Up to 500 Students', 'Email Support'] },
        standard: { price: 35000, features: ['Full Academic Module', 'Fee Management', 'Up to 1500 Students', 'Parent Portal', 'SMS Integration'] },
        premium: { price: 55000, features: ['Complete Suite', 'Unlimited Students', 'Mobile App', 'Advanced Analytics', 'Priority Support'] }
      },
      features: [
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Student Management',
          description: 'Complete student lifecycle management from admission to graduation.'
        },
        {
          icon: <BookOpen className="w-6 h-6" />,
          title: 'Academic Tracking',
          description: 'Comprehensive academic management including grades, attendance, and progress tracking.'
        },
        {
          icon: <Calculator className="w-6 h-6" />,
          title: 'Fee Management',
          description: 'Automated fee collection, payment tracking, and financial reporting.'
        },
        {
          icon: <Calendar className="w-6 h-6" />,
          title: 'Timetable Management',
          description: 'Smart scheduling system for classes, exams, and school events.'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Performance Analytics',
          description: 'Detailed analytics on student performance and institutional metrics.'
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: 'Parent Portal',
          description: 'Dedicated portal for parents to track their child\'s progress and communicate with teachers.'
        }
      ],
      benefits: [
        'Reduce administrative workload by 60%',
        'Improve parent-school communication',
        'Streamline fee collection process',
        'Enhanced academic tracking',
        'Automated report generation',
        'Better student engagement'
      ],
      industries: ['Primary Schools', 'Secondary Schools', 'Colleges', 'Universities', 'Training Institutes', 'Coaching Centers'],
      testimonials: [
        {
          name: 'Dr. Sarah Ahmed',
          company: 'Green Valley School',
          text: 'RedSchool has revolutionized our school administration. Parents love the transparency and teachers appreciate the streamlined processes.',
          rating: 5
        },
        {
          name: 'Muhammad Hassan',
          company: 'Future Academy',
          text: 'The fee management module alone has saved us countless hours. The automated reminders and payment tracking are excellent.',
          rating: 5
        }
      ]
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Active Clients", color: "text-blue-600" },
    { icon: <Award className="w-8 h-8" />, number: "99%", label: "Client Satisfaction", color: "text-green-600" },
    { icon: <Target className="w-8 h-8" />, number: "24/7", label: "Support Available", color: "text-purple-600" },
    { icon: <Globe className="w-8 h-8" />, number: "15+", label: "Cities Covered", color: "text-red-600" }
  ];

  const handleWhatsAppContact = (productName: string) => {
    const message = `Hello! I'm interested in ${productName}. Can you provide more information about pricing and features?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923435146644?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden logo-background-multiple">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">OUR PRODUCTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful Solutions for
              <span className="block text-red-600">Modern Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our flagship products designed to streamline operations, boost efficiency, 
              and drive growth for businesses and educational institutions.
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
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24 bg-white logo-background-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 cursor-pointer"
                onClick={() => setSelectedProduct(product.id as 'redstock' | 'redschool')}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Product Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`p-4 bg-gradient-to-br ${product.gradient} text-white rounded-2xl shadow-lg`}>
                      {product.icon}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>

                  {/* Hover Action */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-3 rounded-xl font-semibold hover:bg-white transition-colors flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-lg font-semibold text-red-600 mb-4">{product.tagline}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Key Features Preview */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Preview */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-2xl">
                    <div>
                      <div className="text-sm text-gray-600">Starting from</div>
                      <div className="text-2xl font-bold text-gray-900">
                        PKR {Object.values(product.pricing)[0].price.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {Object.keys(product.pricing).length} plans available
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product.id as 'redstock' | 'redschool');
                      }}
                      className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                    >
                      Learn More
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppContact(product.name);
                      }}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-red-500 hover:text-red-600 transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const product = products.find(p => p.id === selectedProduct)!;
              
              return (
                <>
                  {/* Modal Header */}
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button 
                      onClick={() => setSelectedProduct(null)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                    >
                      ✕
                    </button>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className={`inline-flex p-3 bg-gradient-to-br ${product.gradient} rounded-2xl mb-4`}>
                        {product.icon}
                      </div>
                      <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
                      <p className="text-xl text-red-200">{product.tagline}</p>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8">
                    {/* Tabs */}
                    <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-xl">
                      {['overview', 'features', 'pricing', 'testimonials'].map((tab) => (
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
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Overview</h3>
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {product.longDescription}
                          </p>

                          <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                          <ul className="space-y-2 mb-6">
                            {product.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">Perfect For</h4>
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {product.industries.map((industry, index) => (
                              <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                                <span className="text-gray-700 font-medium text-sm">{industry}</span>
                              </div>
                            ))}
                          </div>

                          <div className="bg-red-50 p-6 rounded-2xl">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Get Started Today</h4>
                            <p className="text-gray-600 mb-4">
                              Ready to transform your business? Contact us for a personalized demo and pricing.
                            </p>
                            <div className="flex gap-3">
                              <button 
                                onClick={() => handleWhatsAppContact(product.name)}
                                className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                              >
                                Get Quote
                              </button>
                              <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-red-500 hover:text-red-600 transition-colors">
                                Schedule Demo
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'features' && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {product.features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                              <div className="flex items-start space-x-4">
                                <div className={`p-3 bg-gradient-to-br ${product.gradient} text-white rounded-xl`}>
                                  {feature.icon}
                                </div>
                                <div>
                                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                                  <p className="text-gray-600">{feature.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'pricing' && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing Plans</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {Object.entries(product.pricing).map(([plan, details], index) => (
                            <div key={plan} className={`bg-white p-6 rounded-2xl border-2 transition-all duration-300 ${
                              index === 1 ? 'border-red-500 shadow-xl scale-105' : 'border-gray-200 hover:border-red-300 hover:shadow-lg'
                            }`}>
                              {index === 1 && (
                                <div className="text-center mb-4">
                                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                  </span>
                                </div>
                              )}
                              
                              <div className="text-center mb-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-2 capitalize">{plan}</h4>
                                <div className="text-3xl font-bold text-red-600 mb-2">
                                  PKR {details.price.toLocaleString()}
                                </div>
                                <div className="text-gray-500">per month</div>
                              </div>

                              <ul className="space-y-3 mb-6">
                                {details.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>

                              <button 
                                onClick={() => handleWhatsAppContact(`${product.name} ${plan} plan`)}
                                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                                  index === 1
                                    ? 'bg-red-600 text-white hover:bg-red-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600'
                                }`}
                              >
                                Get Started
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'testimonials' && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Clients Say</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {product.testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                              <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                              <div>
                                <div className="font-bold text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-600">{testimonial.company}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white logo-background-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have streamlined their operations with RedStock and RedSchool. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Free Demo
            </Link>
            <button 
              onClick={() => handleWhatsAppContact('RedStock and RedSchool products')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              WhatsApp Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;