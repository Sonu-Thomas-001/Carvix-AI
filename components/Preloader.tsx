import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing AI Builder...");

  useEffect(() => {
    // Simulate loading progress
    const duration = 3000; // 3 seconds
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Use ease-out curve for progress
      const progressRatio = currentStep / steps;
      const easeOutProgress = 1 - Math.pow(1 - progressRatio, 3);
      const newProgress = Math.min(easeOutProgress * 100, 100);
      
      setProgress(newProgress);

      if (newProgress > 25 && newProgress < 50) {
        setLoadingText("Loading Neural Assets...");
      } else if (newProgress >= 50 && newProgress < 80) {
        setLoadingText("Applying Photoreal Materials...");
      } else if (newProgress >= 80) {
        setLoadingText("Generating Your Dream Ride...");
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 600); // Wait a bit before completing to show 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-carvix-bg overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-carvix-accent/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-carvix-purple/20 rounded-full blur-[80px]" />
        
        {/* Subtle particle movement in background */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`bg-particle-${i}`}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.8 + 0.2, Math.random() * 0.5 + 0.1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-8">
        
        {/* AI Car Formation Animation */}
        <div className="relative w-full h-48 mb-8 flex items-center justify-center">
          <svg viewBox="0 0 500 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(47,128,237,0.4)]">
            <defs>
              <linearGradient id="car-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2F80ED" />
                <stop offset="100%" stopColor="#B026FF" />
              </linearGradient>
              <linearGradient id="solid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(47,128,237,0.2)" />
                <stop offset="100%" stopColor="rgba(176,38,255,0.05)" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Car Wireframe Outline */}
            <motion.path
              d="M 60 130 C 40 130, 30 110, 40 95 C 50 80, 80 70, 110 65 C 130 60, 150 50, 170 40 C 200 25, 240 20, 280 20 L 320 20 C 370 20, 410 40, 440 60 C 460 70, 480 80, 480 100 C 480 120, 460 130, 440 130 L 410 130 A 35 35 0 0 0 340 130 L 180 130 A 35 35 0 0 0 110 130 Z"
              fill="none"
              stroke="url(#car-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Solid Fill Transition (Glossy Silhouette) */}
            <motion.path
              d="M 60 130 C 40 130, 30 110, 40 95 C 50 80, 80 70, 110 65 C 130 60, 150 50, 170 40 C 200 25, 240 20, 280 20 L 320 20 C 370 20, 410 40, 440 60 C 460 70, 480 80, 480 100 C 480 120, 460 130, 440 130 L 410 130 A 35 35 0 0 0 340 130 L 180 130 A 35 35 0 0 0 110 130 Z"
              fill="url(#solid-gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            />

            {/* Light Sweep Effect */}
            <motion.path
              d="M 60 130 C 40 130, 30 110, 40 95 C 50 80, 80 70, 110 65 C 130 60, 150 50, 170 40 C 200 25, 240 20, 280 20 L 320 20 C 370 20, 410 40, 440 60 C 460 70, 480 80, 480 100 C 480 120, 460 130, 440 130 L 410 130 A 35 35 0 0 0 340 130 L 180 130 A 35 35 0 0 0 110 130 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              filter="url(#glow)"
              initial={{ pathLength: 0, pathOffset: 1, opacity: 0 }}
              animate={{ pathLength: 0.1, pathOffset: 0, opacity: [0, 1, 0] }}
              transition={{ duration: 2, delay: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Rear Wheel */}
            <motion.circle
              cx="145" cy="130" r="25"
              fill="none"
              stroke="#B026FF"
              strokeWidth="3"
              initial={{ pathLength: 0, rotate: -90, opacity: 0 }}
              animate={{ pathLength: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
            <motion.circle
              cx="145" cy="130" r="8"
              fill="#2F80ED"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "backOut" }}
            />

            {/* Front Wheel */}
            <motion.circle
              cx="375" cy="130" r="25"
              fill="none"
              stroke="#B026FF"
              strokeWidth="3"
              initial={{ pathLength: 0, rotate: -90, opacity: 0 }}
              animate={{ pathLength: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            />
            <motion.circle
              cx="375" cy="130" r="8"
              fill="#2F80ED"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7, ease: "backOut" }}
            />

            {/* AI Neural Nodes connecting */}
            {[
              { cx: 110, cy: 65, delay: 1.0 },
              { cx: 170, cy: 40, delay: 1.2 },
              { cx: 280, cy: 20, delay: 1.4 },
              { cx: 440, cy: 60, delay: 1.6 },
              { cx: 480, cy: 100, delay: 1.8 }
            ].map((node, i) => (
              <motion.circle
                key={`node-${i}`}
                cx={node.cx} cy={node.cy} r="4"
                fill="#FFFFFF"
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
                transition={{ duration: 0.8, delay: node.delay, ease: "easeOut" }}
              />
            ))}

            {/* AI Processing Lines (Internal) */}
            <motion.path
              d="M 110 65 L 170 40 L 280 20 L 440 60 L 480 100"
              fill="none"
              stroke="#2F80ED"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Futuristic Progress Bar */}
        <div className="w-full max-w-md space-y-3">
          <div className="flex justify-between items-end px-1">
            <motion.span 
              key={loadingText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono text-carvix-accent uppercase tracking-widest"
            >
              {loadingText}
            </motion.span>
            <span className="text-xs font-mono text-white/80 font-bold">
              {Math.round(progress)}%
            </span>
          </div>
          
          <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-carvix-accent to-carvix-purple shadow-neon"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
            {/* Light sweep effect on progress bar */}
            <motion.div 
              className="absolute top-0 left-0 h-full w-24 bg-white/40 blur-[4px]"
              animate={{ x: ["-100%", "500%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Branding */}
        <motion.div 
          className="mt-12 opacity-50 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Carvix AI</span>
          <span className="text-[8px] uppercase tracking-widest text-gray-500">System Boot Sequence</span>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Preloader;
