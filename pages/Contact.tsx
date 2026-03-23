import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Twitter, Linkedin, Github } from 'lucide-react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-carvix-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-carvix-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Get in <span className="text-transparent bg-clip-text bg-neon-purple">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Have questions about Carvix AI? Want to discuss enterprise licensing or partnership opportunities? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <motion.div variants={fadeIn} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-carvix-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-carvix-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-1">For general inquiries and support:</p>
                  <a href="mailto:hello@carvix.ai" className="text-carvix-accent hover:underline font-medium">hello@carvix.ai</a>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-carvix-purple/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-carvix-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enterprise Sales</h3>
                  <p className="text-gray-400 mb-1">Looking for custom API integrations?</p>
                  <a href="mailto:sales@carvix.ai" className="text-carvix-purple hover:underline font-medium">sales@carvix.ai</a>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                  <p className="text-gray-400 leading-relaxed">
                    100 Innovation Drive<br />
                    Suite 400<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeIn} className="pt-8 border-t border-white/5">
              <h3 className="text-lg font-bold mb-6">Connect with us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-carvix-accent/20 hover:border-carvix-accent/50 transition-all group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-carvix-accent/20 hover:border-carvix-accent/50 transition-all group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-carvix-accent/20 hover:border-carvix-accent/50 transition-all group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-carvix-accent to-carvix-purple"></div>
            
            <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-8">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Full Name</label>
                    <input 
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                    <input 
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                  <input 
                    type="text" id="subject" name="subject" required
                    value={formData.subject} onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    id="message" name="message" rows={5} required
                    value={formData.message} onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-carvix-accent hover:bg-carvix-accentHover text-white rounded-xl font-bold transition-all shadow-neon flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
