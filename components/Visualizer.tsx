import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, Maximize2, RefreshCw, ZoomIn, Sun, Moon, Activity, 
  Layers, Scan, Smartphone, Video, Play, Pause, Crosshair, Sparkles, Box, Car
} from 'lucide-react';

interface VisualizerProps {
  imageUrl: string | null;
  loading: boolean;
  onGenerate: () => void;
  isInitial: boolean;
}

const CAMERAS = [
  { id: 'Front 3/4', icon: Video },
  { id: 'Rear 3/4', icon: Video },
  { id: 'Top View', icon: Video },
  { id: 'Wheel Close-up', icon: Crosshair },
  { id: 'Interior', icon: Car },
];

const MODES = [
  { id: 'Default', icon: Box, label: 'Standard View' },
  { id: 'Exploded', icon: Layers, label: 'Exploded View' },
  { id: 'X-Ray', icon: Scan, label: 'X-Ray Mode' },
  { id: 'AR', icon: Smartphone, label: 'AR Preview' },
];

const ENVS = ['Studio', 'Night City', 'Outdoor', 'Track'];

const Visualizer: React.FC<VisualizerProps> = ({ imageUrl, loading, onGenerate, isInitial }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [fps, setFps] = useState(60);
  
  // 3D Interaction States
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rawMousePos, setRawMousePos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [activeCamera, setActiveCamera] = useState('Front 3/4');
  const [activeMode, setActiveMode] = useState('Default');
  const [env, setEnv] = useState('Studio');
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Simulated FPS
  useEffect(() => {
    if (!loading && imageUrl) {
      const interval = setInterval(() => setFps(Math.floor(Math.random() * 3) + 58), 1000);
      return () => clearInterval(interval);
    }
  }, [loading, imageUrl]);

  // Auto-rotate animation
  useEffect(() => {
    if (!isAutoRotate || loading || !imageUrl) return;
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.005;
      setMousePos({ x: Math.sin(angle) * 0.15, y: Math.cos(angle) * 0.05 });
    }, 16);
    return () => clearInterval(interval);
  }, [isAutoRotate, loading, imageUrl]);

  const getTooltipContent = (x: number, y: number) => {
    if (y > 0.15 && x > 0.15) return 'Rear Alloy Wheels';
    if (y > 0.15 && x < -0.15) return 'Front Alloy Wheels';
    if (y > 0.2 && Math.abs(x) <= 0.15) return 'Front Splitter & Bumper';
    if (y < -0.1 && Math.abs(x) < 0.2) return 'Panoramic Glass Roof';
    if (Math.abs(y) <= 0.1 && Math.abs(x) < 0.2) return 'Main Body / Chassis';
    return null;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (loading || !imageUrl) return;
    if (isAutoRotate) setIsAutoRotate(false);
    
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    setMousePos({ x, y });
    setRawMousePos({ x: e.clientX, y: e.clientY });

    const tooltip = getTooltipContent(x, y);
    if (tooltip) {
      setTooltipText(tooltip);
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (loading || !imageUrl) return;
    setZoom(prev => Math.min(Math.max(prev - e.deltaY * 0.002, 0.8), 3));
  };

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
      ref={containerRef}
      className="relative w-full h-full bg-carvix-bg rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setShowTooltip(false);
      }}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
    >
      {/* 3D Grid Floor */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-end justify-center pb-10 overflow-hidden">
        <div 
          className="w-[200%] h-[60%] opacity-15"
          style={{ 
            backgroundImage: 'linear-gradient(#2F80ED 1px, transparent 1px), linear-gradient(90deg, #2F80ED 1px, transparent 1px)', 
            backgroundSize: '60px 60px',
            transform: 'perspective(600px) rotateX(75deg)',
            maskImage: 'radial-gradient(ellipse at top, black 10%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top, black 10%, transparent 70%)'
          }} 
        />
      </div>

      {/* Performance Indicators */}
      {imageUrl && !loading && (
        <div className="absolute top-6 left-6 z-20 flex flex-col gap-2 transition-opacity duration-500">
          <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-mono text-carvix-accent border border-carvix-accent/20 shadow-neon">
            <Activity className="w-3 h-3" />
            {fps} FPS | Carvix 3D Engine
          </div>
          <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-mono text-gray-400 border border-white/5">
            <Layers className="w-3 h-3" />
            PBR Materials Active
          </div>
        </div>
      )}

      {/* AI Smart Camera Badge */}
      {imageUrl && !loading && (
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
          <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold text-carvix-purple border border-carvix-purple/30 shadow-[0_0_10px_rgba(138,43,226,0.3)] bg-carvix-purple/10">
            <Sparkles className="w-3 h-3" />
            AI Smart Camera
          </div>
        </div>
      )}

      {/* Advanced Modes (Top Right) */}
      {imageUrl && !loading && (
        <div className={`absolute top-20 right-6 z-20 flex flex-col gap-2 transition-all duration-500 ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          {MODES.map(m => (
            <button 
              key={m.id}
              onClick={() => setActiveMode(m.id)}
              className={`p-2.5 rounded-xl transition-all group relative border ${activeMode === m.id ? 'bg-carvix-accent/20 text-carvix-accent border-carvix-accent shadow-neon' : 'glass-panel text-gray-400 hover:text-white hover:bg-white/10 border-white/5'}`}
            >
              <m.icon className="w-4 h-4" />
              <span className="absolute right-full mr-3 px-2 py-1 bg-carvix-panel text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                {m.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Camera Presets (Left) */}
      {imageUrl && !loading && (
        <div className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 transition-all duration-500 ${isHovering ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-4'}`}>
          {CAMERAS.map(c => (
            <button 
              key={c.id}
              onClick={() => setActiveCamera(c.id)}
              className={`p-2.5 rounded-xl transition-all group relative border ${activeCamera === c.id ? 'bg-white/20 text-white border-white/30 shadow-glass' : 'glass-panel text-gray-400 hover:text-white hover:bg-white/10 border-white/5'}`}
            >
              <c.icon className="w-4 h-4" />
              <span className="absolute left-full ml-3 px-2 py-1 bg-carvix-panel text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                {c.id}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Zoom Slider (Right) */}
      {imageUrl && !loading && (
        <div className={`absolute right-6 top-1/2 -translate-y-1/2 z-20 glass-panel p-2 rounded-full flex flex-col items-center gap-3 transition-all duration-500 border border-white/5 ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <ZoomIn className="w-4 h-4 text-gray-400" />
          <input 
            type="range" 
            min="0.8" max="3" step="0.05" 
            value={zoom} 
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="w-1 h-24 appearance-none bg-white/10 rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-carvix-accent [&::-webkit-slider-thumb]:rounded-full cursor-ns-resize"
            style={{ writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical' } as any}
          />
        </div>
      )}

      {/* Environments (Bottom Center) */}
      {imageUrl && !loading && (
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 glass-panel p-1.5 rounded-2xl flex items-center gap-1 transition-all duration-500 border border-white/5 ${isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {ENVS.map(e => (
            <button 
              key={e}
              onClick={() => setEnv(e)}
              className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${env === e ? 'bg-white/10 text-white shadow-glass' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
            >
              {e}
            </button>
          ))}
        </div>
      )}

      {/* Actions (Bottom Right) */}
      {imageUrl && !loading && (
        <div className={`absolute bottom-8 right-6 z-20 flex gap-2 transition-all duration-500 ${isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <button 
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`p-3 rounded-xl transition-all border ${isAutoRotate ? 'bg-carvix-accent/20 text-carvix-accent border-carvix-accent shadow-neon' : 'glass-panel text-gray-400 hover:text-white border-white/5'}`}
            title="Auto Rotate"
          >
            {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button 
            onClick={handleDownload}
            className="p-3 glass-panel text-white rounded-xl hover:bg-carvix-accent hover:border-carvix-accent transition-all shadow-glass border border-white/5"
            title="Export 8K Render"
          >
            <Download className="w-4 h-4" />
          </button>
          <button 
            className="p-3 glass-panel text-white rounded-xl hover:bg-white/10 transition-all shadow-glass border border-white/5"
            title="Cinematic Fullscreen"
            onClick={() => window.open(imageUrl, '_blank')}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Contextual Tooltip */}
      {showTooltip && isHovering && !loading && imageUrl && (
        <div 
          className="fixed z-50 glass-panel px-3 py-1.5 rounded-lg border border-carvix-accent/50 text-[10px] font-bold uppercase tracking-wider text-white shadow-neon pointer-events-none transition-opacity duration-200"
          style={{ left: rawMousePos.x + 15, top: rawMousePos.y + 15 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-carvix-accent animate-pulse"></div>
            {tooltipText}
          </div>
        </div>
      )}

      {/* Main Content */}
      {loading ? (
        <div className="z-10 flex flex-col items-center justify-center gap-6">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-carvix-panel rounded-full"></div>
            <div className="absolute inset-0 border-2 border-t-carvix-accent border-r-carvix-purple border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <CarIconLoader />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white font-bold tracking-wider animate-pulse">RENDERING 3D SCENE</p>
            <p className="text-xs text-gray-500">Compiling PBR materials & HDRI lighting...</p>
          </div>
        </div>
      ) : imageUrl ? (
        <div 
          className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out z-10 cursor-move"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 20}deg) rotateX(${-mousePos.y * 20}deg) scale(${zoom})`
          }}
        >
          <img 
            src={imageUrl} 
            alt="Generated Car Build" 
            className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500"
            style={{
              filter: activeMode === 'X-Ray' ? 'invert(1) hue-rotate(180deg) opacity(0.8) contrast(1.2)' : 
                      activeMode === 'Exploded' ? 'contrast(1.2) saturate(1.5) drop-shadow(0 0 20px rgba(47,128,237,0.3))' : 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
            }}
            draggable={false}
          />
        </div>
      ) : (
        <div className="z-10 text-center max-w-lg px-4">
          <div className="glass-panel p-10 rounded-3xl backdrop-blur-xl border border-white/10 shadow-glass">
            <div className="w-16 h-16 bg-carvix-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon">
              <Box className="w-8 h-8 text-carvix-accent" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Carvix 3D Engine</h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">Experience ultra-realistic, real-time 3D rendering. Configure your vehicle and let our AI engine build the scene.</p>
            <button 
              onClick={onGenerate}
              className="px-8 py-4 bg-carvix-accent hover:bg-carvix-accentHover text-white rounded-xl font-bold transition-all shadow-neon flex items-center justify-center gap-3 mx-auto w-full"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Initialize 3D Viewport</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

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