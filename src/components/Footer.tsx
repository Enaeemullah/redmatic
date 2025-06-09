import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Github, Instagram, Heart, BookOpen, ShoppingCart, GraduationCap, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Custom Software Development',
    'UI/UX Design & Branding',
    'Cloud Solutions & DevOps',
    'Mobile App Development',
    'Data & Analytics',
    'Cybersecurity & Compliance'
  ];

  const products = [
    { name: 'RedStock - POS & Inventory', icon: <ShoppingCart className="w-4 h-4" />, path: '/products' },
    { name: 'RedSchool - School Management', icon: <GraduationCap className="w-4 h-4" />, path: '/products' }
  ];

  const skillPrograms = [
    'Front-End Development',
    'UX/UI Design',
    'Digital Marketing',
    'React with Advanced JavaScript',
    'Accounting & Bookkeeping',
    'Video Editing'
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Skill Programs', path: '/skills' },
    { name: 'Tech Insights', path: '/blog' },
    // { name: 'API Documentation', path: '#' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook', color: 'hover:text-pink-600' },
    { icon: <Github className="w-5 h-5" />, href: '#', name: 'GitHub', color: 'hover:text-gray-600' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram', color: 'hover:text-pink-600' }
  ];

  // Custom Logo Component
  const RedmaticLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg 
      className={className}
      viewBox="0 0 400 400" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon 
        fill="currentColor" 
        points="356.45 99.63 335.05 197.58 312.6 300.37 267.9 245.54 43.55 300.37 87.42 272.22 356.45 99.63"
      />
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <RedmaticLogo className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-3xl font-bold">Redmatic</span>
                  <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                    Tech Solutions & Skills
                  </div>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                Transforming businesses through innovative technology solutions and empowering individuals 
                with in-demand digital skills.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-red-500 group-hover:text-red-400" />
                  <span>hello@redmatic.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-red-500 group-hover:text-red-400" />
                  <span>+92 343 514 6644</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                  <MapPin className="w-5 h-5 text-red-500 group-hover:text-red-400" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Products</h3>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index}>
                    <Link 
                      to={product.path}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 cursor-pointer text-sm flex items-center group"
                    >
                      <div className="text-red-500 mr-2 group-hover:text-red-400">
                        {product.icon}
                      </div>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold mb-6 mt-8">Services</h3>
              <ul className="space-y-3">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index} className="text-gray-300 hover:text-red-400 transition-colors duration-300 cursor-pointer text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Programs */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-red-500" />
                Skill Programs
              </h3>
              <ul className="space-y-3">
                {skillPrograms.map((program, index) => (
                  <li key={index}>
                    <Link 
                      to="/skills"
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 cursor-pointer text-sm"
                    >
                      {program}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      to={resource.path}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 cursor-pointer text-sm"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Ahead of the Curve</h3>
                <p className="text-gray-300">Get the latest insights on technology trends, course updates, and industry innovations.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
                <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                <p className="text-gray-400 mb-2 md:mb-0 md:mr-6">
                  © {new Date().getFullYear()} Redmatic. All rights reserved.
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 mx-1" />
                  <span>in Pakistan</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-gray-800 rounded-xl text-gray-400 hover:bg-gray-700 ${social.color} transition-all duration-300 group`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Accessibility</a>
              <Link to="/skills" className="hover:text-red-400 transition-colors">Skill Development</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;