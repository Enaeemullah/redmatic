import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Tag, TrendingUp, Eye, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Design', 'Business', 'Development', 'AI/ML', 'Cloud', 'Mobile'];

  const blogPosts = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build software, from code generation to automated testing and deployment.",
      content: "Artificial Intelligence is transforming every aspect of software development. From intelligent code completion to automated bug detection, AI tools are becoming indispensable for modern developers...",
      author: "Alex Rodriguez",
      authorRole: "CTO",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI/ML",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      featured: true,
      views: 2500,
      comments: 24,
      tags: ["AI", "Machine Learning", "Development", "Future Tech"]
    },
    {
      title: "Building Scalable Cloud Architecture",
      excerpt: "Best practices for designing cloud-native applications that can handle millions of users while maintaining performance and cost efficiency.",
      content: "Scalable cloud architecture is crucial for modern applications. In this comprehensive guide, we'll explore the key principles and patterns for building systems that can grow with your business...",
      author: "David Kim",
      authorRole: "DevOps Engineer",
      authorImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Cloud",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      featured: false,
      views: 1800,
      comments: 18,
      tags: ["Cloud", "Architecture", "Scalability", "AWS"]
    },
    {
      title: "The Psychology of User Experience Design",
      excerpt: "Understanding how users think and behave is crucial for creating interfaces that are not just beautiful, but truly effective and engaging.",
      content: "Great UX design goes beyond aesthetics. It's about understanding human psychology and creating experiences that feel natural and intuitive...",
      author: "Sarah Chen",
      authorRole: "Lead UI/UX Designer",
      authorImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      featured: true,
      views: 3200,
      comments: 31,
      tags: ["UX", "Psychology", "Design", "User Research"]
    },
    {
      title: "React 18: What's New and Why It Matters",
      excerpt: "A deep dive into React 18's new features including concurrent rendering, automatic batching, and the new Suspense capabilities.",
      content: "React 18 introduces several groundbreaking features that improve performance and developer experience. Let's explore what's new and how to leverage these features in your applications...",
      author: "Michael Thompson",
      authorRole: "Senior Full-Stack Developer",
      authorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
      featured: false,
      views: 2100,
      comments: 19,
      tags: ["React", "JavaScript", "Frontend", "Web Development"]
    },
    {
      title: "Mobile-First Design: Beyond Responsive",
      excerpt: "Why mobile-first design is more than just responsive layouts and how to create truly mobile-optimized experiences.",
      content: "Mobile-first design has evolved beyond simple responsive layouts. Today, it's about understanding mobile user behavior and creating experiences optimized for touch, speed, and context...",
      author: "Emily Davis",
      authorRole: "Mobile Development Lead",
      authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Mobile",
      image: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg",
      featured: false,
      views: 1600,
      comments: 14,
      tags: ["Mobile", "Design", "UX", "Responsive"]
    },
    {
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "How the shift to remote work has changed the cybersecurity landscape and what organizations need to do to stay protected.",
      content: "The pandemic accelerated remote work adoption, fundamentally changing how we think about cybersecurity. Traditional perimeter-based security models are no longer sufficient...",
      author: "James Wilson",
      authorRole: "Security Consultant",
      authorImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      featured: false,
      views: 1900,
      comments: 22,
      tags: ["Security", "Remote Work", "Cybersecurity", "Enterprise"]
    },
    {
      title: "The Business Case for Digital Transformation",
      excerpt: "Why digital transformation is no longer optional and how to build a compelling business case for technology investments.",
      content: "Digital transformation has moved from a nice-to-have to a business imperative. Companies that fail to adapt risk being left behind in an increasingly digital world...",
      author: "Lisa Wang",
      authorRole: "Project Manager",
      authorImage: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
      date: "2024-01-01",
      readTime: "11 min read",
      category: "Business",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      featured: false,
      views: 2800,
      comments: 35,
      tags: ["Digital Transformation", "Business Strategy", "Technology", "ROI"]
    },
    {
      title: "Microservices vs Monoliths: Making the Right Choice",
      excerpt: "A practical guide to choosing between microservices and monolithic architectures based on your specific needs and constraints.",
      content: "The microservices vs monolith debate continues to divide the development community. The truth is, both architectures have their place, and the choice depends on various factors...",
      author: "Alex Rodriguez",
      authorRole: "CTO",
      authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      date: "2023-12-28",
      readTime: "13 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      featured: false,
      views: 2200,
      comments: 28,
      tags: ["Architecture", "Microservices", "Monolith", "Software Design"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const popularTags = ['React', 'AI', 'Cloud', 'UX', 'Security', 'Mobile', 'Architecture', 'JavaScript'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
              <span className="text-red-800 font-semibold text-sm tracking-wide">TECH INSIGHTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology
              <span className="block text-red-600">Insights & Trends</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest insights on technology trends, best practices, 
              and industry innovations from our team of experts.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-16 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <TrendingUp className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <article 
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative overflow-hidden rounded-3xl mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{post.author}</div>
                          <div className="text-sm text-gray-600">{post.authorRole}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <article 
                    key={index}
                    className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {post.featured && (
                          <div className="absolute top-3 left-3">
                            <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={post.authorImage} 
                              alt={post.author}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                              <div className="text-xs text-gray-600">{post.authorRole}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {post.views}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {post.comments}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-700 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post, index) => (
                    <div 
                      key={index}
                      className="flex space-x-3 cursor-pointer group"
                      onClick={() => setSelectedPost(post)}
                    >
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-red-100 mb-4 text-sm">
                  Get the latest tech insights and trends delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button className="w-full bg-white text-red-600 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                  {selectedPost.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(selectedPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedPost.readTime}
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={selectedPost.authorImage} 
                  alt={selectedPost.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{selectedPost.author}</div>
                  <div className="text-sm text-gray-600">{selectedPost.authorRole}</div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{selectedPost.excerpt}</p>
                <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology expertise can help you achieve your goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;