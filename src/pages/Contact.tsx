import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, Calendar, ArrowRight, Globe, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', budget: '', timeline: '', service: '', message: '' });
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
Service: ${formData.service || 'Not provided'}
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
      color: "text-blue-600",
      available: "24/7"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+92 343 514 6644",
      description: "Mon-Fri from 9am to 6pm PST",
      link: "tel:+923435146644",
      color: "text-green-600",
      available: "Business Hours"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      content: "Chat with our team",
      description: "Available during business hours",
      link: "https://wa.me/923435146644",
      color: "text-green-600",
      available: "Business Hours"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Meeting",
      content: "Book a consultation",
      description: "Free 30-minute strategy call",
      link: "#",
      color: "text-red-600",
      available: "By Appointment"
    }
  ];

  const offices = [
    {
      city: "Lahore",
      address: "123 Innovation Drive, Tech District, Lahore, Pakistan",
      phone: "+92 343 514 6644",
      email: "lahore@redmetic.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      timezone: "Pakistan Standard Time (PST)",
      isHeadquarters: true
    },
    {
      city: "Karachi",
      address: "456 Business Bay, Clifton, Karachi, Pakistan",
      phone: "+92 301 234 5678",
      email: "karachi@redmetic.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      timezone: "Pakistan Standard Time (PST)",
      isHeadquarters: false
    },
    {
      city: "Islamabad",
      address: "789 Tech Hub, Blue Area, Islamabad, Pakistan",
      phone: "+92 302 345 6789",
      email: "islamabad@redmetic.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      timezone: "Pakistan Standard Time (PST)",
      isHeadquarters: false
    }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. Simple projects typically take 4-8 weeks, while complex enterprise solutions may take 12-24 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we provide comprehensive support and maintenance packages. Our standard package includes 24/7 monitoring, regular updates, security patches, and technical support for 12 months post-launch."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, Python, cloud platforms (AWS, Azure, GCP), mobile development (React Native, Flutter), and emerging technologies like AI/ML and blockchain."
    },
    {
      question: "How do you handle project communication?",
      answer: "We use agile methodologies with regular sprint reviews, daily standups, and weekly client check-ins. You'll have access to our project management tools and a dedicated project manager as your main point of contact."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something
              <span className="block text-red-600">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? We'd love to hear about your project and discuss 
              how we can help you achieve your goals.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
            <p className="text-lg text-gray-600">Choose the best way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.title === 'WhatsApp' ? '_blank' : '_self'}
                rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : ''}
                className="group block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${method.color} group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-700 font-medium mb-2">{method.content}</p>
                  <p className="text-gray-500 text-sm mb-2">{method.description}</p>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {method.available}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Project</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              {isSubmitted && (
                <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold text-green-800">Message sent successfully!</div>
                    <div className="text-green-700 text-sm">We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-3">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-development">Custom Software Development</option>
                    <option value="ui-ux-design">UI/UX Design & Branding</option>
                    <option value="cloud-solutions">Cloud Solutions & DevOps</option>
                    <option value="mobile-development">Mobile App Development</option>
                    <option value="data-analytics">Data & Analytics</option>
                    <option value="cybersecurity">Cybersecurity & Compliance</option>
                    <option value="skill-development">Skill Development Programs</option>
                    <option value="consultation">General Consultation</option>
                  </select>
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
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
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
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2  focus:ring-red-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
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

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Offices</h2>
                <p className="text-gray-600 mb-8">Visit us at one of our locations or schedule a virtual meeting.</p>
              </div>

              {offices.map((office, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                    {office.isHeadquarters && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Headquarters
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                    <div className="text-sm text-gray-500 ml-8">
                      {office.timezone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ArrowRight className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Free Consultation
            </button>
            <a 
              href="https://wa.me/923435146644"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp: +92 343 514 6644
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;