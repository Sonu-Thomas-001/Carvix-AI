import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Target, Zap, Users, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const values = [
    { icon: Lightbulb, title: "Innovation", desc: "Pushing the boundaries of what's possible with generative AI and 3D rendering." },
    { icon: Target, title: "Precision", desc: "Delivering pixel-perfect, photorealistic results that match your exact vision." },
    { icon: Zap, title: "Performance", desc: "Lightning-fast generation and rendering, optimized for real-time creativity." },
    { icon: Users, title: "User Experience", desc: "Intuitive, seamless interfaces designed for both enthusiasts and professionals." }
  ];

  const team = [
    { name: "Alex Mercer", role: "Founder & CEO", image: "https://picsum.photos/seed/alex/400/400", bio: "Former lead designer at a major EV manufacturer. Visionary behind Carvix AI." },
    { name: "Sarah Chen", role: "CTO", image: "https://picsum.photos/seed/sarah/400/400", bio: "AI researcher specializing in generative models and real-time 3D rendering." },
    { name: "Marcus Johnson", role: "Head of Product", image: "https://picsum.photos/seed/marcus/400/400", bio: "Product strategist with a passion for automotive design and user experience." },
    { name: "Elena Rodriguez", role: "Lead AI Engineer", image: "https://picsum.photos/seed/elena/400/400", bio: "Expert in neural networks and computer vision, building our core engine." }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-carvix-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Redefining Car Customization with <span className="text-transparent bg-clip-text bg-neon-purple">AI</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            We are merging the art of automotive design with the power of artificial intelligence to give everyone the tools to build their dream ride.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 bg-carvix-panel/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="space-y-6"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold">Our Story</motion.h2>
            <motion.p variants={fadeIn} className="text-gray-400 leading-relaxed">
              Carvix AI was born from a simple frustration: customizing a car digitally was either too complex (requiring professional 3D software) or too limited (basic web configurators).
            </motion.p>
            <motion.p variants={fadeIn} className="text-gray-400 leading-relaxed">
              In 2024, our founders realized that generative AI could bridge this gap. By combining advanced neural networks with real-time 3D rendering, we created a platform where imagination is the only limit. Today, Carvix AI empowers thousands of enthusiasts, designers, and brands to visualize automotive perfection in seconds.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden glass-panel"
          >
            <img src="https://picsum.photos/seed/carvix-story/800/600" alt="Carvix AI Vision" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-carvix-bg to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that drive our engineering and design decisions every day.</p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-carvix-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-carvix-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-carvix-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-carvix-panel/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The minds behind the machine learning models and rendering engines.</p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeIn} className="group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 glass-panel">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-carvix-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-carvix-accent mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 line-clamp-3">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-purple opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to shape the future?</h2>
          <p className="text-xl text-gray-400 mb-10">Experience the power of Carvix AI today.</p>
          <Link to="/build" className="inline-flex items-center gap-3 px-8 py-4 bg-carvix-accent hover:bg-carvix-accentHover text-white rounded-xl font-bold text-lg transition-all shadow-neon hover:scale-105">
            Start Building Your Dream Car <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
