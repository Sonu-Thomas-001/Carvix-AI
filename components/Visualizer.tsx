import React, { useState, useEffect } from 'react';
import { Download, Maximize2, RefreshCw, Rotate3D, ZoomIn, Sun, Moon, Camera, SplitSquareHorizontal, Activity } from 'lucide-react';

interface VisualizerProps {
  imageUrl: string | null;
  loading: boolean;
  onGenerate: () => void;
  isInitial: boolean;
}

const Visualizer: React.FC<VisualizerProps> = ({ imageUrl, loading, onGenerate, isInitial }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    if (!loading && imageUrl) {
      const interval = setInterval(() => setFps(Math.floor(Math.random() * 5) + 58), 1000);
      return () => clearInterval(interval);
    }
  }, [loading, imageUrl]);

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `carvix-build-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div 
      className="relative w-full h-full bg-carvix-bg rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#2F80ED 1px, transparent 1px), linear-gradient(90deg, #2F80ED 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }} 
      />

      {/* Performance Indicator */}
      {imageUrl && !loading && (
        <div className="absolute top-6 left-6 z-20 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-mono text-carvix-accent">
          <Activity className="w-3 h-3" />
          {fps} FPS | 4K PBR
        </div>
      )}

      {loading ? (
        <div className="z-10 flex flex-col items-center justify-center gap-6">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-carvix-panel rounded-full"></div>
            <div className="absolute inset-0 border-2 border-t-carvix-accent border-r-carvix-purple border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <CarIconLoader />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white font-bold tracking-wider animate-pulse">RENDERING BUILD</p>
            <p className="text-xs text-gray-500">Applying AI style presets...</p>
          </div>
        </div>
      ) : imageUrl ? (
        <img 
          src={imageUrl} 
          alt="Generated Car Build" 
          className="w-full h-full object-contain z-10 transition-transform duration-1000 ease-out hover:scale-[1.02]"
        />
      ) : (
        <div className="z-10 text-center max-w-lg px-4">
          <div className="glass-panel p-10 rounded-3xl backdrop-blur-xl border border-white/10 shadow-glass">
            <div className="w-16 h-16 bg-carvix-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon">
              <SparklesIcon className="w-8 h-8 text-carvix-accent" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Design Your Dream Spec</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">Select your vehicle base, modify parts, choose colors, and generate a photorealistic preview using Carvix AI.</p>
            <button 
              onClick={onGenerate}
              className="px-8 py-4 bg-carvix-accent hover:bg-carvix-accentHover text-white rounded-xl font-bold transition-all shadow-neon flex items-center justify-center gap-3 mx-auto w-full"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Start Visualization</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Controls */}
      {imageUrl && !loading && (
        <>
          {/* Left Controls */}
          <div className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 transition-all duration-500 ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <ControlButton icon={Rotate3D} tooltip="Rotate 360" />
            <ControlButton icon={ZoomIn} tooltip="Zoom" />
            <ControlButton icon={SplitSquareHorizontal} tooltip="Before/After" />
          </div>

          {/* Bottom Controls */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 glass-panel px-6 py-3 rounded-2xl flex items-center gap-6 transition-all duration-500 ${isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-4 border-r border-white/10 pr-6">
              <button className="text-gray-400 hover:text-white transition-colors"><Sun className="w-5 h-5" /></button>
              <button className="text-carvix-accent shadow-neon rounded-full p-1"><Moon className="w-5 h-5" /></button>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-lg">Studio</button>
              <button className="text-xs font-medium text-gray-400 hover:text-white transition-colors">Street</button>
              <button className="text-xs font-medium text-gray-400 hover:text-white transition-colors">Track</button>
            </div>
          </div>

          {/* Right Actions */}
          <div className={`absolute bottom-8 right-8 z-20 flex gap-3 transition-all duration-500 ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <button 
              onClick={handleDownload}
              className="p-4 glass-panel text-white rounded-2xl hover:bg-carvix-accent hover:border-carvix-accent transition-all shadow-glass group/btn"
              title="Download 8K Render"
            >
              <Download className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            </button>
            <button 
              className="p-4 glass-panel text-white rounded-2xl hover:bg-white/10 transition-all shadow-glass group/btn"
              title="Cinematic View"
              onClick={() => window.open(imageUrl, '_blank')}
            >
              <Maximize2 className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const ControlButton = ({ icon: Icon, tooltip }: { icon: any, tooltip: string }) => (
  <button className="p-3 glass-panel text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all group relative">
    <Icon className="w-5 h-5" />
    <span className="absolute left-full ml-3 px-2 py-1 bg-carvix-panel text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      {tooltip}
    </span>
  </button>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

const CarIconLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-80">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#neon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2F80ED" />
          <stop offset="100%" stopColor="#8A2BE2" />
        </linearGradient>
      </defs>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7.7c-.7 0-1.3.3-1.8.7L3.7 10s-2.7.6-4.5 1.1C-.3 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" transform="translate(2, 2)"/>
      <circle cx="7" cy="17" r="2" transform="translate(2, 2)"/>
      <circle cx="17" cy="17" r="2" transform="translate(2, 2)"/>
    </svg>
  </div>
);

export default Visualizer;