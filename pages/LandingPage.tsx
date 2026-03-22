import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Car, Sparkles, Layers, Palette, Share2, Globe, 
  MessageSquare, ChevronRight, Play, CheckCircle2, 
  Star, Zap, Shield, Menu, X, Activity, Scan 
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-carvix-bg text-white font-sans overflow-x-hidden selection:bg-carvix-accent/30 selection:text-carvix-accent">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-carvix-bg/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neon-purple flex items-center justify-center shadow-neon">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Carvix <span className="text-carvix-accent">AI</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#ai" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">AI Power</a>
            <a href="#gallery" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Gallery</a>
            <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/build" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</Link>
            <Link to="/build" className="px-5 py-2.5 bg-carvix-accent hover:bg-carvix-accentHover text-white rounded-xl text-sm font-bold transition-all shadow-neon hover:scale-105">
              Start Building
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-carvix-panel border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300">Features</a>
            <a href="#ai" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300">AI Power</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300">Gallery</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300">Pricing</a>
            <div className="h-px bg-white/10 my-2"></div>
            <Link to="/build" className="w-full py-3 text-center bg-carvix-accent text-white rounded-xl font-bold shadow-neon">Start Building</Link>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-carvix-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-carvix-purple/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-carvix-accent/30 bg-carvix-accent/10 w-fit">
              <Sparkles className="w-4 h-4 text-carvix-accent" />
              <span className="text-xs font-bold text-carvix-accent uppercase tracking-wider">Carvix Engine 2.0 is Live</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Design Your Dream Car with <span className="text-transparent bg-clip-text bg-neon-purple">AI Precision</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
              Customize, visualize, and build cars in real-time with intelligent 3D rendering and generative AI styling.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/build" className="px-8 py-4 bg-carvix-accent hover:bg-carvix-accentHover text-white rounded-xl font-bold transition-all shadow-neon hover:scale-105 flex items-center gap-2">
                Start Building <ChevronRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 glass-panel hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10 flex items-center gap-2 group">
                <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" /> Watch Demo
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }} 
            animate={{ opacity: 1, scale: 1, rotateY: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full rounded-3xl glass-panel border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200" 
              alt="3D Car Render" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carvix-bg via-transparent to-transparent"></div>
            
            {/* Floating UI Elements */}
            <div className="absolute top-8 right-8 glass-panel p-3 rounded-xl border border-white/10 shadow-glass animate-float">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-bold">Paint Finish</span>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-white shadow-neon"></div>
                <div className="w-6 h-6 rounded-full bg-red-600 border border-white/20"></div>
                <div className="w-6 h-6 rounded-full bg-blue-600 border border-white/20"></div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 glass-panel p-4 rounded-xl border border-carvix-accent/30 shadow-neon animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-carvix-accent/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-carvix-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">AI Suggestion</p>
                  <p className="text-sm font-bold text-white">Carbon Fiber Aero Kit</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Features */}
      <section id="features" className="py-24 bg-carvix-panel/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineered for Perfection</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to design, visualize, and share your ultimate automotive masterpiece.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Layers, title: 'Real-time 3D Configurator', desc: 'Interact with high-fidelity models in a smooth 60FPS WebGL environment.' },
              { icon: Sparkles, title: 'AI Build Assistant', desc: 'Let our AI suggest complementary parts, colors, and styles based on your taste.' },
              { icon: Globe, title: 'Photoreal Rendering', desc: 'PBR materials and HDRI lighting create stunning, lifelike visualizations.' },
              { icon: Palette, title: 'Modular Customization', desc: 'Swap body kits, wheels, and interiors with thousands of combinations.' },
              { icon: Share2, title: 'Save & Share Builds', desc: 'Export 8K renders or share your unique configuration link with the world.' },
              { icon: Car, title: 'Multi-Environment', desc: 'Preview your car in the studio, on the track, or in a neon-lit night city.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-carvix-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-carvix-bg border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-neon transition-shadow">
                  <feature.icon className="w-6 h-6 text-carvix-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI Power Section */}
      <section id="ai" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Talk to your garage.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Carvix AI understands natural language. Describe the vibe, the style, or specific parts, and watch the 3D model update instantly.
            </p>
            
            <ul className="space-y-4">
              {[
                'Text-to-car generation in seconds',
                'Smart recommendations for wheel fitment',
                'Auto-styling based on aesthetic prompts (e.g. "Cyberpunk")',
                'Intelligent camera framing for renders'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-carvix-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-carvix-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-neon-purple opacity-20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl relative z-10">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-full bg-carvix-accent flex items-center justify-center shadow-neon">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Carvix Assistant</h4>
                  <p className="text-xs text-carvix-accent">AI Active</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-end">
                  <div className="bg-carvix-panel text-white p-4 rounded-2xl rounded-tr-sm text-sm border border-white/5 max-w-[80%]">
                    "Create a matte black sports car with aggressive aero and red accents."
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-carvix-accent text-white p-4 rounded-2xl rounded-tl-sm text-sm shadow-neon max-w-[80%]">
                    Applying Matte Black finish, installing the Track Aero Kit, and adding Crimson Red brake calipers. Rendering now...
                  </div>
                </div>
              </div>

              <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" alt="AI Generated Car" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 glass-panel px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-2">
                  <Activity className="w-3 h-3 text-carvix-accent" /> Rendered
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Interactive Experience / 3D Mockup */}
      <section className="py-24 bg-carvix-panel/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Immersive 3D Interaction</h2>
          
          <div className="relative h-[500px] md:h-[700px] w-full rounded-3xl glass-panel border border-white/10 shadow-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1503376712351-1f25f714a905?auto=format&fit=crop&q=80&w=1600" 
              alt="Interactive 3D" 
              className="w-full h-full object-cover opacity-60"
            />
            
            {/* Mock UI Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="glass-panel px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-carvix-accent" />
                  <span className="text-sm font-mono">60 FPS | Studio Lighting</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 glass-panel rounded-xl border border-white/10 flex items-center justify-center"><Layers className="w-5 h-5" /></div>
                  <div className="w-12 h-12 glass-panel rounded-xl border border-white/10 flex items-center justify-center"><Scan className="w-5 h-5" /></div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="glass-panel px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-8">
                  <span className="text-sm font-bold text-white">Studio</span>
                  <span className="text-sm font-medium text-gray-500">Street</span>
                  <span className="text-sm font-medium text-gray-500">Track</span>
                </div>
              </div>
            </div>

            {/* Simulated Interaction Points */}
            <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-carvix-accent rounded-full shadow-neon animate-ping"></div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-carvix-accent rounded-full border-2 border-white"></div>
            <div className="absolute top-[45%] left-[35%] glass-panel px-3 py-1.5 rounded-lg border border-carvix-accent/50 text-xs font-bold text-white shadow-neon">
              Forged Alloy Wheel
            </div>
          </div>
        </div>
      </section>

      {/* 5. Showcase Gallery */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Community Builds</h2>
              <p className="text-gray-400">Discover what others are creating with Carvix AI.</p>
            </div>
            <Link to="/build" className="hidden md:flex items-center gap-2 text-carvix-accent hover:text-white transition-colors font-bold">
              View Gallery <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1611821064430-0d4022cb4fac?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img src={img} alt="Gallery Car" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-white">View Build</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pricing */}
      <section id="pricing" className="py-24 bg-carvix-panel/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400">Start for free, upgrade when you need more power.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Enthusiast</h3>
              <div className="text-4xl font-extrabold mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> 10 AI Renders/month</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> Standard 3D Models</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> 1080p Export</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-colors border border-white/10">Get Started</button>
            </div>

            {/* Pro */}
            <div className="glass-panel p-8 rounded-3xl border border-carvix-accent shadow-[0_0_30px_rgba(47,128,237,0.15)] flex flex-col relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-carvix-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-neon">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Pro Builder</h3>
              <div className="text-4xl font-extrabold mb-6">$29<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> Unlimited AI Renders</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> Premium Body Kits</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> 4K PBR Export</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> Priority Rendering</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-carvix-accent hover:bg-carvix-accentHover text-white font-bold transition-colors shadow-neon">Upgrade to Pro</button>
            </div>

            {/* Studio */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Studio</h3>
              <div className="text-4xl font-extrabold mb-6">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> Everything in Pro</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> Commercial License</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> Custom 3D Uploads</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-carvix-accent" /> API Access</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-colors border border-white/10">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-purple opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Start Building Your Dream Car Today</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join thousands of enthusiasts and designers using Carvix AI to bring their automotive visions to life.</p>
          <Link to="/build" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105">
            Get Started Free <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-carvix-bg border-t border-white/5 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-neon-purple flex items-center justify-center">
                <Car className="w-3 h-3 text-white" />
              </div>
              <span className="text-lg font-bold">Carvix AI</span>
            </div>
            <p className="text-sm text-gray-500">The next-generation AI-powered automotive design studio.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2026 Carvix AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Shield className="w-4 h-4" /></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
