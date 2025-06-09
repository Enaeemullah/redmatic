import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle, Lightbulb, Heart, Zap, Calendar, MapPin, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "200+", label: "Happy Clients", color: "text-blue-600" },
    { icon: <Award className="w-8 h-8" />, number: "500+", label: "Projects Delivered", color: "text-green-600" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "5+", label: "Years Experience", color: "text-purple-600" },
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
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to democratize access to cutting-edge technology solutions."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Delivered our first enterprise-scale solution, establishing our reputation for excellence."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to 15+ specialists across development, design, and strategy."
    },
    {
      year: "2022",
      title: "International Reach",
      description: "Expanded services globally, serving clients across North America and Europe."
    },
    {
      year: "2023",
      title: "Innovation Lab",
      description: "Launched our R&D division focusing on AI, blockchain, and emerging technologies."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as a leading tech solutions provider with multiple industry awards."
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure Expert",
    "Certified Scrum Master",
    "ISO 27001 Compliance",
    "SOC 2 Type II Certified"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden logo-background-multiple">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">ABOUT REDMATIC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovating Tomorrow's
              <span className="block text-red-600">Technology Today</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of technologists, designers, and strategists dedicated to transforming 
              businesses through innovative digital solutions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
                <div className={`${stat.color} flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white logo-background-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019 with a vision to bridge the gap between complex technology and business success, 
                Redmatic has grown into a trusted partner for companies seeking digital transformation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our multidisciplinary team combines deep technical expertise with creative problem-solving 
                to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-2xl border-l-4 border-red-500 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To democratize access to cutting-edge technology by creating intuitive, scalable, 
                  and impactful digital solutions that drive measurable business growth.
                </p>
              </div>

              <div className="space-y-4">
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

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Innovation Driven</div>
                    <div className="text-sm text-gray-600">Since 2019</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50 logo-background-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a recognized leader in technology solutions, here's how we've grown.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-red-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white logo-background-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                  <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">
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

      {/* Certifications & Partnerships */}
      <section className="py-24 bg-gray-50 logo-background-floating">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team maintains industry-leading certifications and partnerships with major technology providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <Award className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white logo-background-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and let us help you transform your business with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </Link>
            <Link 
              to="/team"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;