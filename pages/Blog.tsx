import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User } from 'lucide-react';
import Layout from '../components/Layout';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI', 'Automotive', 'Product Updates', 'Tutorials'];

  const posts = [
    {
      id: 1,
      title: "The Future of Generative AI in Automotive Design",
      excerpt: "How neural networks are revolutionizing the way we conceptualize and render vehicles in real-time.",
      category: "AI",
      author: "Sarah Chen",
      date: "Oct 24, 2026",
      image: "https://picsum.photos/seed/blog1/800/500",
      featured: true
    },
    {
      id: 2,
      title: "Carvix Engine 2.0: What's New",
      excerpt: "A deep dive into our latest rendering engine update, featuring photorealistic materials and faster generation.",
      category: "Product Updates",
      author: "Marcus Johnson",
      date: "Oct 18, 2026",
      image: "https://picsum.photos/seed/blog2/800/500",
      featured: false
    },
    {
      id: 3,
      title: "Mastering the Prompt: Tips for Better Car Generations",
      excerpt: "Learn how to structure your text prompts to get exactly the car design you envision.",
      category: "Tutorials",
      author: "Elena Rodriguez",
      date: "Oct 12, 2026",
      image: "https://picsum.photos/seed/blog3/800/500",
      featured: false
    },
    {
      id: 4,
      title: "Aerodynamics and AI: Designing for Efficiency",
      excerpt: "Using our new aero-simulation tools to ensure your AI-generated designs are physically viable.",
      category: "Automotive",
      author: "Alex Mercer",
      date: "Oct 05, 2026",
      image: "https://picsum.photos/seed/blog4/800/500",
      featured: false
    },
    {
      id: 5,
      title: "Integrating Carvix AI with Unreal Engine 5",
      excerpt: "A step-by-step guide to exporting your 3D models directly into UE5 for game development.",
      category: "Tutorials",
      author: "Sarah Chen",
      date: "Sep 28, 2026",
      image: "https://picsum.photos/seed/blog5/800/500",
      featured: false
    },
    {
      id: 6,
      title: "The Rise of Cyberpunk Aesthetics in Modern Car Design",
      excerpt: "Analyzing the trend of neon, sharp angles, and futuristic elements in recent community builds.",
      category: "Automotive",
      author: "Marcus Johnson",
      date: "Sep 20, 2026",
      image: "https://picsum.photos/seed/blog6/800/500",
      featured: false
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || activeCategory !== 'All');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Insights & <span className="text-transparent bg-clip-text bg-neon-purple">Innovations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The latest news, tutorials, and deep dives into AI and automotive technology from the Carvix team.
          </motion.p>
        </div>
      </section>

      {/* Featured Post (Only show if 'All' is selected) */}
      {activeCategory === 'All' && featuredPost && (
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-carvix-accent/50 transition-all duration-500 cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-[300px] md:h-[400px] overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-carvix-accent/20 text-carvix-accent text-xs font-bold rounded-full uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-carvix-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" /> {featuredPost.author}
                    </div>
                    <span className="text-carvix-accent font-medium flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                      Read Article <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="px-6 pb-12 sticky top-20 z-40 bg-carvix-bg/90 backdrop-blur-md py-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex overflow-x-auto hide-scrollbar gap-2 pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category 
                  ? 'bg-carvix-accent text-white shadow-neon' 
                  : 'bg-carvix-panel text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-24 pt-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {regularPosts.map((post) => (
              <motion.div 
                key={post.id} 
                variants={fadeIn}
                className="group glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-carvix-accent/30 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-carvix-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <User className="w-3 h-3" /> {post.author}
                    </div>
                    <span className="text-carvix-accent text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      Read <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 glass-panel hover:bg-white/10 text-white rounded-xl font-medium transition-all border border-white/10">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
