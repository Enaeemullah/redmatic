import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Award, Coffee, Heart, Zap, Search, Filter, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const departments = ['All', 'Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'Operations'];
  const levels = ['All', 'Entry Level', 'Mid Level', 'Senior Level', 'Lead/Principal'];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO policy"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Growth & Learning",
      description: "$3,000 annual learning budget, conference attendance, and mentorship programs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Culture",
      description: "Regular team events, hackathons, and collaborative work environment"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Compensation",
      description: "Market-rate salaries, equity options, and performance bonuses"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cutting-Edge Tech",
      description: "Latest tools, technologies, and equipment to do your best work"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      level: "Senior Level",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of database design and optimization",
        "Experience with agile development methodologies"
      ],
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with cross-functional teams",
        "Mentor junior developers",
        "Participate in code reviews and technical discussions",
        "Contribute to architectural decisions"
      ],
      posted: "2 days ago"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      level: "Mid Level",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences for our clients' digital products.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, and Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking",
        "Experience with user research and testing",
        "Understanding of front-end development principles"
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with developers and product managers",
        "Present design concepts to clients"
      ],
      posted: "1 week ago"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      level: "Senior Level",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Expertise in AWS, Docker, and Kubernetes",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Strong scripting skills (Python, Bash)",
        "Knowledge of CI/CD best practices"
      ],
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement CI/CD pipelines",
        "Monitor system performance and reliability",
        "Automate deployment and scaling processes",
        "Ensure security and compliance standards"
      ],
      posted: "3 days ago"
    },
    {
      title: "Product Manager",
      department: "Product",
      level: "Mid Level",
      location: "Remote",
      type: "Full-time",
      description: "Drive product strategy and execution for our client projects and internal tools.",
      requirements: [
        "3+ years of product management experience",
        "Experience with agile development methodologies",
        "Strong analytical and problem-solving skills",
        "Excellent communication and leadership abilities",
        "Technical background preferred"
      ],
      responsibilities: [
        "Define product roadmaps and strategy",
        "Work closely with engineering and design teams",
        "Gather and prioritize product requirements",
        "Analyze user feedback and market trends",
        "Coordinate product launches and releases"
      ],
      posted: "5 days ago"
    },
    {
      title: "Junior Frontend Developer",
      department: "Engineering",
      level: "Entry Level",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Start your career building modern web applications with our supportive team.",
      requirements: [
        "1-2 years of frontend development experience",
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with React or similar frameworks",
        "Understanding of responsive design principles",
        "Eagerness to learn and grow"
      ],
      responsibilities: [
        "Develop user interfaces for web applications",
        "Collaborate with designers and backend developers",
        "Write clean, maintainable code",
        "Participate in code reviews",
        "Learn new technologies and best practices"
      ],
      posted: "1 day ago"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      level: "Mid Level",
      location: "New York, NY / Remote",
      type: "Full-time",
      description: "Lead our marketing efforts to grow brand awareness and generate leads.",
      requirements: [
        "4+ years of marketing experience",
        "Experience with digital marketing channels",
        "Strong content creation and copywriting skills",
        "Analytics and data-driven mindset",
        "B2B marketing experience preferred"
      ],
      responsibilities: [
        "Develop and execute marketing strategies",
        "Create content for various marketing channels",
        "Manage social media and online presence",
        "Analyze marketing performance and ROI",
        "Collaborate with sales team on lead generation"
      ],
      posted: "1 week ago"
    }
  ];

  const filteredPositions = openPositions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         position.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || position.department === selectedDepartment;
    const matchesLevel = selectedLevel === 'All' || position.level === selectedLevel;
    
    return matchesSearch && matchesDepartment && matchesLevel;
  });

  const [selectedPosition, setSelectedPosition] = useState<typeof openPositions[0] | null>(null);

  const companyStats = [
    { number: "25+", label: "Team Members" },
    { number: "5+", label: "Years Growing" },
    { number: "15+", label: "Countries" },
    { number: "98%", label: "Employee Satisfaction" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">JOIN OUR TEAM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build Your Career
              <span className="block text-red-600">With Redmetic</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a team of passionate innovators who are shaping the future of technology. 
              We're looking for talented individuals who share our vision and values.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive, grow, and do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-red-50 rounded-2xl mb-6 group-hover:bg-red-100 transition-colors duration-300">
                  <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next opportunity with us</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Positions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPositions.map((position, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPosition(position)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                        {position.department}
                      </span>
                      <span>{position.level}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{position.posted}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    {position.type}
                  </div>
                  {/* <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                    {position.salary}
                  </div> */}
                </div>

                <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300">
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No positions found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Position Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPosition(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPosition.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                      {selectedPosition.department}
                    </span>
                    <span>{selectedPosition.level}</span>
                    <span>{selectedPosition.type}</span>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {selectedPosition.location}
                    </div>
                    {/* <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {selectedPosition.salary}
                    </div> */}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPosition(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{selectedPosition.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedPosition.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedPosition.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                  Apply Now
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:border-red-500 hover:text-red-600 transition-colors">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster a collaborative, inclusive, and innovative environment where everyone can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative Environment</h3>
              <p className="text-gray-600">Work together on challenging projects with talented teammates from diverse backgrounds.</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Learning and growth"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-600">Grow your skills with our learning budget, mentorship programs, and conference attendance.</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                alt="Work-life balance"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">Enjoy flexible hours, remote work options, and unlimited PTO to maintain a healthy balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for exceptional talent. 
            Send us your resume and let's talk about opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Send Your Resume
            </button>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Contact HR Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;