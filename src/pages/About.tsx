import React from 'react';
import { 
  Target, Users, Award, TrendingUp, CheckCircle, Lightbulb, 
  Heart, Zap, Calendar, MapPin, Globe, Rocket, Briefcase, 
  Star, Shield, Coffee, Sparkles, Layers, Cpu, Database, 
  Figma, GitBranch, Terminal, Linkedin, Twitter, Mail 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients", color: "text-red-600" },
    { icon: <Award className="w-8 h-8" />, number: "800+", label: "Projects Delivered", color: "text-red-600" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "5+", label: "Years Experience", color: "text-red-600" },
    { icon: <Target className="w-8 h-8" />, number: "99%", label: "Success Rate", color: "text-red-600" }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through exceptional service."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Agile Excellence",
      description: "Fast, flexible, and efficient delivery without compromising on quality or security."
    }
  ];

  const timeline = [
    { year: "2019", title: "Company Founded", description: "Started with a vision to democratize access to cutting-edge technology solutions." },
    { year: "2020", title: "First Major Client", description: "Delivered our first enterprise-scale solution, establishing our reputation for excellence." },
    { year: "2021", title: "Team Expansion", description: "Grew our team to 20+ specialists across development, design, and strategy." },
    { year: "2022", title: "International Reach", description: "Expanded services globally, serving clients across North America, Europe, and Asia." },
    { year: "2023", title: "Innovation Lab", description: "Launched our R&D division focusing on AI, blockchain, and emerging technologies." },
    { year: "2024", title: "Industry Recognition", description: "Recognized as a leading tech solutions provider with multiple industry awards." }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure Expert",
    "Certified Scrum Master",
    "ISO 27001 Compliance",
    "SOC 2 Type II Certified"
  ];

  const leadership = [
    { name: "Naeem Ullah", role: "CEO & Founder", bio: "15+ years in tech innovation", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" },
    { name: "Sarah Chen", role: "CTO", bio: "Ex-Google, AI specialist", image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg" },
    { name: "Michael Roberts", role: "Head of Design", bio: "Award-winning UX designer", image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-white to-red-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-6">
              <span className="text-red-700 font-semibold text-sm tracking-wide">ABOUT REDMETIC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovating Tomorrow's
              <span className="block text-red-600 mt-2">Technology Today</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of technologists, designers, and strategists dedicated to transforming 
              businesses through innovative digital solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
                <div className={`${stat.color} flex justify-center mb-3`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019 with a vision to bridge the gap between complex technology and business success, 
                Redmetic has grown into a trusted partner for companies seeking digital transformation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our multidisciplinary team combines deep technical expertise with creative problem-solving 
                to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To democratize access to cutting-edge technology by creating intuitive, scalable, 
                  and impactful digital solutions that drive measurable business growth.
                </p>
              </div>

              <div className="space-y-3">
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

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Innovation Driven</div>
                    <div className="text-sm text-gray-500">Since 2019</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that have shaped our growth and defined our success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-200 hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="flex-1 text-center md:text-right md:pr-12 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold z-10">
                    {item.year.slice(-2)}
                  </div>
                  <div className="flex-1 text-center md:text-left md:pl-12">
                    <span className="text-sm font-semibold text-red-600">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-3 bg-red-50 rounded-xl mb-5 group-hover:bg-red-100 transition-colors duration-300">
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

      {/* Leadership Team */}
      {/* <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving innovation and excellence at Redmetic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{leader.role}</p>
                  <p className="text-gray-500 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team maintains industry-leading certifications and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl text-center hover:bg-red-50 transition-all duration-300">
                <Award className="w-5 h-5 text-red-600 mx-auto mb-2" />
                <span className="text-gray-800 font-medium text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-red-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
            <Mail className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;