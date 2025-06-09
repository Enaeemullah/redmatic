import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, Calendar, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', budget: '', timeline: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Hello! I'm interested in your services.

Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Budget: ${formData.budget || 'Not provided'}
Timeline: ${formData.timeline || 'Not provided'}

Message: ${formData.message || 'I would like to know more about your services.'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923435146644?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "info@redmetic.com",
      description: "Send us an email anytime",
      link: "mailto:info@redmetic.com",
      color: "text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+92 343 514 6644",
      description: "Mon-Fri from 9am to 6pm",
      link: "tel:+923435146644",
      color: "text-green-600"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      content: "Chat with us instantly",
      description: "Available during business hours",
      link: "https://wa.me/923435146644",
      color: "text-green-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Meeting",
      content: "Book a consultation",
      description: "Free 30-minute strategy call",
      link: "#",
      color: "text-red-600"
    }
  ];

  const officeInfo = {
    address: "123 Innovation Drive, Tech District, Lahore, Pakistan",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
    timezone: "Pakistan Standard Time (PST)"
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-800 font-semibold text-sm tracking-wide">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Something
            <span className="block text-red-600">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? We'd love to hear about your project and discuss 
            how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.title === 'WhatsApp' ? '_blank' : '_self'}
                  rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                  className="group block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${method.color} group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{method.title}</h4>
                      <p className="text-gray-700 font-medium mb-1">{method.content}</p>
                      <p className="text-gray-500 text-sm">{method.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              ))}
            </div>

            {/* Office Information */}
            <div className="bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-3xl border border-gray-100">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-red-600 mr-3" />
                <h4 className="font-bold text-gray-900">Our Office</h4>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="leading-relaxed">{officeInfo.address}</p>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm">{officeInfo.hours}</span>
                </div>
                <p className="text-sm text-gray-500">{officeInfo.timezone}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              {isSubmitted && (
                <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold text-green-800">Message sent successfully!</div>
                    <div className="text-green-700 text-sm">We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-3">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-gray-900"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="over-250k">Over $250,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-bold text-gray-700 mb-3">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-gray-900"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 placeholder-gray-500"
                    placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-8 rounded-2xl text-lg font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-2xl text-lg font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    <MessageSquare className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    WhatsApp Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;