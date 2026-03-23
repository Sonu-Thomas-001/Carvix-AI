import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, Laptop, BookOpen, Coffee, Heart, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const Careers: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const benefits = [
    { icon: Laptop, title: "Remote-First", desc: "Work from anywhere in the world. We care about output, not office hours." },
    { icon: BookOpen, title: "Learning Budget", desc: "$2,000 annual stipend for courses, conferences, and books." },
    { icon: Clock, title: "Flexible Hours", desc: "Design your own schedule. As long as you overlap with core team hours." },
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision insurance for you and your family." },
    { icon: Coffee, title: "Modern Tech Stack", desc: "Work with the latest AI models, rendering engines, and web technologies." },
    { icon: Briefcase, title: "Equity Package", desc: "Competitive salary plus meaningful equity in a fast-growing startup." }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "Remote (US/EU)",
      type: "Full-time"
    },
    {
      id: 2,
      title: "3D Graphics Programmer (Unreal/WebGL)",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Product Designer (UI/UX)",
      department: "Design",
      location: "San Francisco, CA or Remote",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Automotive Concept Artist",
      department: "Design",
      location: "Remote (Global)",
      type: "Contract"
    },
    {
      id: 5,
      title: "Developer Advocate",
      department: "Marketing",
      location: "Remote (US)",
      type: "Full-time"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-carvix-purple/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-carvix-accent/30 bg-carvix-accent/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-carvix-accent animate-pulse"></span>
            <span className="text-sm font-bold text-carvix-accent uppercase tracking-wider">We're Hiring</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Build the Future of <span className="text-transparent bg-clip-text bg-neon-purple">Automotive AI</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Join a team of passionate engineers, designers, and car enthusiasts building the world's most advanced generative design platform.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeIn} className="md:col-span-2 h-[400px] rounded-3xl overflow-hidden glass-panel relative group">
              <img src="https://picsum.photos/seed/culture1/1200/800" alt="Team Collaboration" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-carvix-bg/90 via-carvix-bg/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold mb-2">Collaborative Innovation</h3>
                <p className="text-gray-300">We believe the best ideas come from diverse perspectives working together to solve hard problems.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="h-[400px] rounded-3xl overflow-hidden glass-panel relative group">
              <img src="https://picsum.photos/seed/culture2/600/800" alt="Remote Work" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-carvix-bg/90 via-carvix-bg/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-xl font-bold mb-2">Work Anywhere</h3>
                <p className="text-gray-300 text-sm">Our team spans 12 countries and 4 continents.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-carvix-panel/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perks & Benefits</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We take care of our team so they can focus on doing their best work.</p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeIn} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-carvix-purple/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-carvix-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-carvix-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 px-6" id="open-roles">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-400">Don't see a perfect fit? Send your resume to <a href="mailto:careers@carvix.ai" className="text-carvix-accent hover:underline">careers@carvix.ai</a></p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}
            className="space-y-4"
          >
            {jobs.map((job) => (
              <motion.div 
                key={job.id} 
                variants={fadeIn}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-carvix-accent/50 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:-translate-y-1 hover:shadow-neon"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-bold rounded-full uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-carvix-accent/10 text-carvix-accent text-xs font-bold rounded-full uppercase tracking-wider">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-carvix-accent transition-colors mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="w-full md:w-auto px-6 py-3 bg-white/5 hover:bg-carvix-accent text-white rounded-xl font-medium transition-all border border-white/10 group-hover:border-carvix-accent flex items-center justify-center gap-2">
                    Apply Now <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
