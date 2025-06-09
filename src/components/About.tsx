import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle, Lightbulb, Heart, Zap } from 'lucide-react';

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

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-800 font-semibold text-sm tracking-wide">ABOUT REDMATIC</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Innovating Tomorrow's
            <span className="block text-red-600">Technology Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of technologists, designers, and strategists dedicated to transforming 
            businesses through innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Technology
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and business success, 
              Redmatic has grown into a trusted partner for companies seeking digital transformation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our multidisciplinary team combines deep technical expertise with creative problem-solving 
              to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-2xl border-l-4 border-red-500 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To democratize access to cutting-edge technology by creating intuitive, scalable, 
                and impactful digital solutions that drive measurable business growth.
              </p>
            </div>

            {/* Key Differentiators */}
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

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
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

        {/* Values Section */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;