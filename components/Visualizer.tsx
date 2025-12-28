import React, { useState } from 'react';
import { Download, Maximize2, RefreshCw } from 'lucide-react';

interface VisualizerProps {
  imageUrl: string | null;
  loading: boolean;
  onGenerate: () => void;
  isInitial: boolean;
}

const Visualizer: React.FC<VisualizerProps> = ({ imageUrl, loading, onGenerate, isInitial }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `apex-build-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div 
      className="relative w-full h-[50vh] md:h-full bg-black/50 rounded-xl overflow-hidden border border-gray-800 shadow-2xl flex items-center justify-center group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {loading ? (
        <div className="z-10 flex flex-col items-center justify-center gap-4">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-apex-accent border-r-apex-accent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <CarIconLoader />
          </div>
          <p className="text-apex-accent font-display animate-pulse tracking-wider">RENDERING BUILD...</p>
        </div>
      ) : imageUrl ? (
        <img 
          src={imageUrl} 
          alt="Generated Car Build" 
          className="w-full h-full object-contain z-10 transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="z-10 text-center max-w-md px-4">
          <div className="bg-apex-800/80 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-display font-bold text-white mb-2">Design Your Dream Spec</h2>
            <p className="text-gray-400 mb-6">Select your vehicle base, modify parts, choose colors, and generate a photorealistic preview using AI.</p>
            <button 
              onClick={onGenerate}
              className="px-6 py-3 bg-apex-accent hover:bg-apex-accentHover text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] flex items-center justify-center gap-2 mx-auto"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Start Visualization</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Actions */}
      {imageUrl && !loading && (
        <div className={`absolute bottom-6 right-6 z-20 flex gap-3 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
          <button 
            onClick={handleDownload}
            className="p-3 bg-black/60 backdrop-blur-md text-white rounded-full hover:bg-apex-accent border border-gray-600 hover:border-apex-accent transition-all"
            title="Download Image"
          >
            <Download className="w-5 h-5" />
          </button>
          <button 
            className="p-3 bg-black/60 backdrop-blur-md text-white rounded-full hover:bg-white/20 border border-gray-600 transition-all"
            title="Full Screen (Simulated)"
            onClick={() => window.open(imageUrl, '_blank')}
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

// Simple SVG loader graphic
const CarIconLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-50">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7.7c-.7 0-1.3.3-1.8.7L3.7 10s-2.7.6-4.5 1.1C-.3 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" transform="translate(2, 2)"/>
      <circle cx="7" cy="17" r="2" transform="translate(2, 2)"/>
      <circle cx="17" cy="17" r="2" transform="translate(2, 2)"/>
    </svg>
  </div>
);

export default Visualizer;