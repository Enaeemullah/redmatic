import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Custom Logo Component
  const RedmaticLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <RedmaticLogo className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                Redmatic
              </span>
              <div className="text-xs text-gray-500 font-medium tracking-wider">
                TECH SOLUTIONS & SKILLS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium relative group px-2 py-1 ${
                  isActive(item.path) ? 'text-red-600' : ''
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center group ml-4"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl">
            <nav className="py-6 space-y-1">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-6 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium ${
                    isActive(item.path) ? 'text-red-600 bg-red-50' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-6 pt-4">
                <Link 
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium text-center block"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;