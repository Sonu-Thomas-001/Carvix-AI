import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Visualizer from './components/Visualizer';
import RightPanel from './components/RightPanel';
import AIAssistant from './components/AIAssistant';
import { CarConfig, GeneratedImage } from './types';
import { DEFAULT_CONFIG } from './constants';
import { generateCarImage } from './services/geminiService';
import { History, Share2, Save, Download } from 'lucide-react';

const App: React.FC = () => {
  const [config, setConfig] = useState<CarConfig>(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [history, setHistory] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const updateConfig = (key: keyof CarConfig, value: any) => {
    setConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleGenerate = async () => {
    if (!process.env.API_KEY) {
      setError("API Key is missing. Please check configuration.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const imageUrl = await generateCarImage(config);
      setCurrentImage(imageUrl);
      
      // Add to history
      const newEntry: GeneratedImage = {
        id: Date.now().toString(),
        url: imageUrl,
        prompt: `Custom ${config.make} ${config.model}`,
        config: { ...config },
        timestamp: Date.now()
      };
      setHistory(prev => [newEntry, ...prev]);
    } catch (err: any) {
      setError(err.message || "Failed to generate image. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const restoreFromHistory = (entry: GeneratedImage) => {
    setConfig(entry.config);
    setCurrentImage(entry.url);
  };

  return (
    <div className="flex h-screen bg-carvix-bg text-white font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <TopBar />
        
        <main className="flex-1 flex overflow-hidden">
          {/* Left Side: Visualizer Canvas */}
          <div className="flex-1 relative flex flex-col p-6 gap-6 bg-carvix-bg/50">
            <Visualizer 
              imageUrl={currentImage} 
              loading={loading} 
              onGenerate={handleGenerate}
              isInitial={!currentImage && !loading}
            />
            
            {/* Bottom Action Bar */}
            <div className="h-20 w-full glass-panel rounded-2xl border border-white/5 flex items-center justify-between px-6 shrink-0">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-carvix-panel hover:bg-white/10 rounded-xl text-sm font-medium transition-colors border border-white/5">
                  <Save className="w-4 h-4 text-gray-400" /> Save Build
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-carvix-panel hover:bg-white/10 rounded-xl text-sm font-medium transition-colors border border-white/5">
                  Compare
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-carvix-panel hover:bg-white/10 rounded-xl text-sm font-medium transition-colors border border-white/5">
                  <Share2 className="w-4 h-4 text-gray-400" /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-carvix-accent hover:bg-carvix-accentHover rounded-xl text-sm font-bold transition-colors shadow-neon">
                  <Download className="w-4 h-4" /> Export Render
                </button>
              </div>
            </div>

            {/* History Strip (Floating above bottom bar) */}
            {history.length > 0 && (
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 max-w-2xl w-[calc(100%-3rem)] glass-panel p-3 rounded-2xl border border-white/10 flex items-center gap-3 overflow-x-auto custom-scrollbar z-30 shadow-2xl">
                <div className="flex items-center justify-center min-w-[3rem] h-full text-gray-400">
                  <History className="w-5 h-5" />
                </div>
                {history.map((entry) => (
                  <button 
                    key={entry.id}
                    onClick={() => restoreFromHistory(entry)}
                    className={`relative min-w-[6rem] h-16 rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${currentImage === entry.url ? 'border-carvix-accent shadow-neon' : 'border-white/10 hover:border-white/30'}`}
                  >
                    <img src={entry.url} alt="History" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {error && (
               <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white px-6 py-3 rounded-xl text-sm backdrop-blur-md z-50 animate-bounce shadow-lg border border-red-500/50 flex items-center gap-2">
                 <span className="font-bold">Error:</span> {error}
               </div>
            )}
          </div>

          {/* Right Side: Customization Panel */}
          <div className="w-[420px] h-full shrink-0 z-40">
             <RightPanel 
               config={config} 
               updateConfig={updateConfig} 
               onGenerate={handleGenerate}
               loading={loading}
             />
          </div>
        </main>
      </div>

      {/* AI Assistant Chat Widget */}
      <AIAssistant />
    </div>
  );
};

export default App;