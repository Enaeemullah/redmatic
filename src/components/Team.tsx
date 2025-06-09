import React from 'react';
import { Linkedin, Twitter, Github, Award, Users, Code, Palette } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Chief Technology Officer",
      bio: "Full-stack architect with 10+ years building scalable enterprise solutions. Passionate about emerging technologies and team leadership.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      skills: ["System Architecture", "Cloud Computing", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Lead UI/UX Designer",
      bio: "Award-winning designer specializing in user-centered design and brand identity. Creates beautiful, functional experiences that users love.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      skills: ["User Experience", "Visual Design", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Thompson",
      role: "Senior Full-Stack Developer",
      bio: "Expert in modern web technologies with a focus on performance optimization and clean code. Loves solving complex technical challenges.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      skills: ["React/Node.js", "Database Design", "DevOps"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emily Davis",
      role: "Mobile Development Lead",
      bio: "iOS and Android specialist with expertise in cross-platform development. Passionate about creating seamless mobile experiences.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      skills: ["React Native", "iOS/Android", "Mobile UX"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure expert focused on automation, security, and scalability. Ensures our solutions are robust and reliable.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      skills: ["AWS/Azure", "Kubernetes", "CI/CD"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      bio: "Agile methodology expert who ensures projects are delivered on time and exceed client expectations. Bridge between technical and business teams.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
      skills: ["Agile/Scrum", "Client Relations", "Process Optimization"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "25+", label: "Team Members", color: "text-blue-600" },
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Certifications", color: "text-green-600" },
    { icon: <Code className="w-8 h-8" />, number: "15+", label: "Technologies", color: "text-purple-600" },
    { icon: <Palette className="w-8 h-8" />, number: "100+", label: "Designs Created", color: "text-red-600" }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full opacity-20 -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 translate-y-32 translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-800 font-semibold text-sm tracking-wide">OUR TEAM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet the Innovators
            <span className="block text-red-600">Behind Redmatic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of passionate technologists, designers, and strategists work together to create 
            exceptional digital experiences that drive business success.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={member.social.linkedin}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-gray-700" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-gray-700" />
                  </a>
                  <a 
                    href={member.social.github}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Join Our Amazing Team</h3>
              <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and excellence. 
                Come build the future with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;