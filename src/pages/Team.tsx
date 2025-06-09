import React, { useState } from 'react';
import { Linkedin, Twitter, Github, Award, Users, Code, Palette, Mail, MapPin, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Chief Technology Officer",
      bio: "Full-stack architect with 10+ years building scalable enterprise solutions. Passionate about emerging technologies and team leadership.",
      longBio: "Alex is a seasoned technology leader with over a decade of experience in building scalable enterprise solutions. He has led development teams at Fortune 500 companies and startups alike, specializing in cloud architecture, microservices, and DevOps practices. Alex holds a Master's degree in Computer Science from Stanford University and is a certified AWS Solutions Architect.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      skills: ["System Architecture", "Cloud Computing", "Team Leadership", "DevOps", "Microservices", "AWS"],
      experience: "10+ years",
      education: "MS Computer Science, Stanford",
      certifications: ["AWS Solutions Architect", "Certified Scrum Master"],
      achievements: [
        "Led development of platform serving 1M+ users",
        "Reduced infrastructure costs by 40% through cloud optimization",
        "Built and managed teams of 20+ engineers"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "alex@redmetic.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "Lead UI/UX Designer",
      bio: "Award-winning designer specializing in user-centered design and brand identity. Creates beautiful, functional experiences that users love.",
      longBio: "Sarah is a creative visionary with 8+ years of experience in digital design and user experience. She has worked with leading brands to create compelling digital experiences that drive engagement and conversion. Sarah's work has been recognized with multiple design awards and featured in design publications worldwide.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      skills: ["User Experience", "Visual Design", "Design Systems", "Prototyping", "Brand Identity", "User Research"],
      experience: "8+ years",
      education: "BFA Design, RISD",
      certifications: ["Google UX Design Certificate", "Adobe Certified Expert"],
      achievements: [
        "Won 3 international design awards",
        "Increased user engagement by 60% through redesign",
        "Created design systems used by 50+ products"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@redmetic.com"
      }
    },
    {
      name: "Michael Thompson",
      role: "Senior Full-Stack Developer",
      bio: "Expert in modern web technologies with a focus on performance optimization and clean code. Loves solving complex technical challenges.",
      longBio: "Michael is a passionate full-stack developer with 7+ years of experience building high-performance web applications. He specializes in React, Node.js, and modern JavaScript frameworks. Michael is known for his attention to detail, clean code practices, and ability to solve complex technical challenges.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      skills: ["React/Node.js", "Database Design", "DevOps", "Performance Optimization", "TypeScript", "GraphQL"],
      experience: "7+ years",
      education: "BS Computer Science, MIT",
      certifications: ["MongoDB Certified Developer", "React Certified"],
      achievements: [
        "Optimized app performance by 300%",
        "Built real-time systems handling 100K+ concurrent users",
        "Open source contributor with 1000+ GitHub stars"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "michael@redmetic.com"
      }
    },
    {
      name: "Emily Davis",
      role: "Mobile Development Lead",
      bio: "iOS and Android specialist with expertise in cross-platform development. Passionate about creating seamless mobile experiences.",
      longBio: "Emily is a mobile development expert with 6+ years of experience creating native and cross-platform mobile applications. She has published multiple apps on both iOS and Android app stores, with several reaching top rankings. Emily is passionate about mobile UX and performance optimization.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      skills: ["React Native", "iOS/Android", "Mobile UX", "Swift", "Kotlin", "Flutter"],
      experience: "6+ years",
      education: "BS Software Engineering, UC Berkeley",
      certifications: ["Apple Certified iOS Developer", "Google Android Certified"],
      achievements: [
        "Published 10+ apps with 1M+ downloads",
        "Led mobile team for Fortune 500 client",
        "Speaker at 5+ mobile development conferences"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "emily@redmetic.com"
      }
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      bio: "Cloud infrastructure expert focused on automation, security, and scalability. Ensures our solutions are robust and reliable.",
      longBio: "David is a DevOps specialist with 8+ years of experience in cloud infrastructure, automation, and security. He has designed and implemented CI/CD pipelines for organizations of all sizes, from startups to enterprise. David is passionate about infrastructure as code and security best practices.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      skills: ["AWS/Azure", "Kubernetes", "CI/CD", "Infrastructure as Code", "Security", "Monitoring"],
      experience: "8+ years",
      education: "MS Information Security, Carnegie Mellon",
      certifications: ["AWS DevOps Professional", "Kubernetes Certified Administrator"],
      achievements: [
        "Achieved 99.99% uptime for critical systems",
        "Reduced deployment time by 90% through automation",
        "Implemented security practices preventing 100% of incidents"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david@redmetic.com"
      }
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      bio: "Agile methodology expert who ensures projects are delivered on time and exceed client expectations. Bridge between technical and business teams.",
      longBio: "Lisa is an experienced project manager with 9+ years of experience leading complex technology projects. She is a certified Scrum Master and PMP, with expertise in agile methodologies, stakeholder management, and risk mitigation. Lisa has successfully delivered over 100 projects on time and within budget.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
      skills: ["Agile/Scrum", "Client Relations", "Process Optimization", "Risk Management", "Stakeholder Management", "Budget Planning"],
      experience: "9+ years",
      education: "MBA, Wharton School",
      certifications: ["PMP Certified", "Certified Scrum Master", "Agile Certified Practitioner"],
      achievements: [
        "Delivered 100+ projects with 98% on-time rate",
        "Improved team productivity by 45% through process optimization",
        "Maintained 99% client satisfaction rate"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "lisa@redmetic.com"
      }
    },
    {
      name: "James Wilson",
      role: "Data Scientist",
      bio: "Machine learning expert specializing in AI solutions and data analytics. Transforms complex data into actionable business insights.",
      longBio: "James is a data science leader with 7+ years of experience in machine learning, artificial intelligence, and advanced analytics. He has developed ML models that have generated millions in business value and holds a PhD in Machine Learning from MIT. James is passionate about making AI accessible and practical for businesses.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      skills: ["Machine Learning", "Python/R", "Data Analytics", "AI/ML", "Deep Learning", "Statistical Modeling"],
      experience: "7+ years",
      education: "PhD Machine Learning, MIT",
      certifications: ["Google Cloud ML Engineer", "AWS ML Specialty"],
      achievements: [
        "Built ML models generating $10M+ in business value",
        "Published 15+ research papers in top-tier journals",
        "Led AI initiatives for 3 Fortune 500 companies"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "james@redmetic.com"
      }
    },
    {
      name: "Maria Garcia",
      role: "Quality Assurance Lead",
      bio: "Testing expert ensuring our solutions meet the highest quality standards. Passionate about automation and continuous improvement.",
      longBio: "Maria is a QA professional with 6+ years of experience in software testing, test automation, and quality assurance processes. She has implemented testing frameworks that have reduced bugs by 80% and improved release cycles. Maria is certified in multiple testing methodologies and tools.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      skills: ["Test Automation", "Quality Assurance", "Selenium", "Performance Testing", "API Testing", "Mobile Testing"],
      experience: "6+ years",
      education: "BS Computer Science, UCLA",
      certifications: ["ISTQB Certified", "Selenium Certified"],
      achievements: [
        "Reduced production bugs by 80% through automation",
        "Implemented testing frameworks used across 20+ projects",
        "Improved release cycle time by 50%"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "maria@redmetic.com"
      }
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "25+", label: "Team Members", color: "text-blue-600" },
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Certifications", color: "text-green-600" },
    { icon: <Code className="w-8 h-8" />, number: "15+", label: "Technologies", color: "text-purple-600" },
    { icon: <Palette className="w-8 h-8" />, number: "100+", label: "Designs Created", color: "text-red-600" }
  ];

  const departments = [
    { name: "Engineering", count: 12, color: "bg-blue-100 text-blue-800" },
    { name: "Design", count: 4, color: "bg-purple-100 text-purple-800" },
    { name: "Project Management", count: 3, color: "bg-green-100 text-green-800" },
    { name: "DevOps", count: 3, color: "bg-orange-100 text-orange-800" },
    { name: "Data Science", count: 2, color: "bg-indigo-100 text-indigo-800" },
    { name: "Quality Assurance", count: 2, color: "bg-red-100 text-red-800" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full opacity-20 -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 translate-y-32 translate-x-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">OUR TEAM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet the Innovators
              <span className="block text-red-600">Behind Redmetic</span>
            </h1>
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
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-lg text-gray-600">Specialized teams working together to deliver excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${dept.color}`}>
                  {dept.count} members
                </div>
                <div className="font-semibold text-gray-900">{dept.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.social.linkedin}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-4 h-4 text-gray-700" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="w-4 h-4 text-gray-700" />
                    </a>
                    <a 
                      href={member.social.github}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {member.bio}
                  </p>
                  
                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    {member.experience} experience
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                  <p className="text-xl text-red-600 font-semibold mb-4">{selectedMember.role}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {selectedMember.experience}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      San Francisco, CA
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <a 
                    href={selectedMember.social.email}
                    className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href={selectedMember.social.linkedin}
                    className="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={selectedMember.social.github}
                    className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{selectedMember.longBio}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Certifications</h3>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-semibold text-gray-900">{selectedMember.education}</div>
                    </div>
                    {selectedMember.certifications.map((cert, index) => (
                      <div key={index} className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <Award className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-green-800 font-medium">{cert}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                <div className="space-y-3">
                  {selectedMember.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Amazing Team</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence. 
            Come build the future with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/careers"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Open Positions
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Learn About Our Culture
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;