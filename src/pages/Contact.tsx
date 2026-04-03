import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  Calendar,
  ArrowRight,
  Globe,
  Users,
  Award,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      timeline: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Hello! I'm interested in your services.\n\nName: ${formData.name || "Not provided"}\nEmail: ${formData.email || "Not provided"}\nCompany: ${formData.company || "Not provided"}\nService: ${formData.service || "Not provided"}\nBudget: ${formData.budget || "Not provided"}\nTimeline: ${formData.timeline || "Not provided"}\n\nMessage: ${formData.message || "I would like to know more about your services."}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923435146644?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      content: "info@redmetic.com",
      description: "Send us an email anytime",
      link: "mailto:info@redmetic.com",
      available: "24/7",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      content: "+92 341 4841372",
      description: "Mon-Fri from 9am to 6pm PST",
      link: "tel:+923435146644",
      available: "Business Hours",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "WhatsApp",
      content: "Chat with our team",
      description: "Available during business hours",
      link: "https://wa.me/923435146644",
      available: "Business Hours",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Schedule Meeting",
      content: "Book a consultation",
      description: "Free 30-minute strategy call",
      link: "#",
      available: "By Appointment",
    },
  ];

  const offices = [
    {
      city: "Gahkuch City",
      address: "DC Chowk, Gahkuch District Ghizer, Gilgit-Baltistan, Pakistan",
      phone: "+92 341 4841372",
      email: "info@redmetic.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      isHeadquarters: true,
    },
    {
      city: "Karachi",
      address: "Old Saleemabad JK-01, Karachi, Pakistan",
      phone: "+92 301 234 5678",
      email: "info@redmetic.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      isHeadquarters: false,
    },
    {
      city: "Islamabad",
      address: "I-9/3 Industrial Area, Islamabad, Pakistan",
      phone: "+92 302 345 6789",
      email: "info@redmetic.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      isHeadquarters: false,
    },
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and scope. Simple projects typically take 4-8 weeks, while complex enterprise solutions may take 12-24 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we provide comprehensive support and maintenance packages. Our standard package includes 24/7 monitoring, regular updates, security patches, and technical support for 12 months post-launch.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Node.js, Python, cloud platforms (AWS, Azure, GCP), mobile development (React Native, Flutter), and emerging technologies like AI/ML and blockchain.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "We use agile methodologies with regular sprint reviews, daily standups, and weekly client check-ins. You'll have access to our project management tools and a dedicated project manager as your main point of contact.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-white via-white to-red-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-700 font-semibold text-sm tracking-wide">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Build Something
              <span className="block text-red-600 mt-1">Amazing Together</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? We'd love to hear
              about your project and discuss how we can help.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="inline-flex p-2 bg-red-50 rounded-lg mb-3">
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-0.5">500+</div>
              <div className="text-gray-500 text-sm">Happy Clients</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="inline-flex p-2 bg-red-50 rounded-lg mb-3">
                <Award className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-0.5">800+</div>
              <div className="text-gray-500 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="inline-flex p-2 bg-red-50 rounded-lg mb-3">
                <Globe className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-0.5">15+</div>
              <div className="text-gray-500 text-sm">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.title === "WhatsApp" ? "_blank" : "_self"}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : ""}
                className="group block p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-all duration-300 text-center"
              >
                <div className="text-red-600 mb-2 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-0.5">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-xs">{method.content}</p>
                <span className="text-xs text-gray-400 mt-1 block">
                  {method.available}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Project
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <div>
                    <div className="font-medium text-green-800 text-sm">
                      Message sent successfully!
                    </div>
                    <div className="text-green-700 text-xs">
                      We'll get back to you within 24 hours.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-development">
                        Custom Software Development
                      </option>
                      <option value="ui-ux-design">
                        UI/UX Design & Branding
                      </option>
                      <option value="cloud-solutions">
                        Cloud Solutions & DevOps
                      </option>
                      <option value="mobile-development">
                        Mobile App Development
                      </option>
                      <option value="data-analytics">Data & Analytics</option>
                      <option value="cybersecurity">
                        Cybersecurity & Compliance
                      </option>
                      <option value="skill-development">
                        Skill Development Programs
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project goals, requirements, and any specific challenges..."
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Our Offices
                </h2>
                <p className="text-gray-500 text-sm">
                  Visit us at one of our locations or schedule a virtual
                  meeting.
                </p>
              </div>

              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {office.city}
                    </h3>
                    {office.isHeadquarters && (
                      <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded-full text-xs font-medium">
                        HQ
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-xs">
                        {office.hours}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Get quick answers to common questions
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800 text-sm">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="text-red-100 text-sm mb-4">
            Let's discuss how we can help transform your business.
          </p>
          <a
            href="tel:+923435146644"
            className="inline-flex items-center justify-center px-5 py-2 bg-white text-red-600 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 text-sm"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;