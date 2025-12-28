import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Visualizer from './components/Visualizer';
import ControlPanel from './components/ControlPanel';
import { CarConfig, GeneratedImage } from './types';
import { DEFAULT_CONFIG } from './constants';
import { generateCarImage } from './services/geminiService';
import { History, Sparkles } from 'lucide-react';

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
    <div className="flex flex-col h-screen bg-black text-white font-sans overflow-hidden">
      <Header />
      
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Visualizer */}
        <div className="flex-1 relative flex flex-col p-4 md:p-6 gap-4 bg-gradient-to-b from-gray-900 to-black">
          <Visualizer 
            imageUrl={currentImage} 
            loading={loading} 
            onGenerate={handleGenerate}
            isInitial={!currentImage && !loading}
          />
          
          {/* History Strip */}
          {history.length > 0 && (
            <div className="h-24 w-full flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
              <div className="flex items-center justify-center min-w-[3rem] h-full text-gray-500">
                <History className="w-5 h-5" />
              </div>
              {history.map((entry) => (
                <button 
                  key={entry.id}
                  onClick={() => restoreFromHistory(entry)}
                  className={`relative min-w-[5rem] h-20 rounded-lg overflow-hidden border-2 transition-all ${currentImage === entry.url ? 'border-apex-accent' : 'border-gray-700 hover:border-gray-500'}`}
                >
                  <img src={entry.url} alt="History" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-1">
                    <span className="text-[9px] text-white truncate w-full">{entry.config.model}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {error && (
             <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-md z-50 animate-bounce shadow-lg border border-red-500/50">
               {error}
             </div>
          )}
        </div>

        {/* Right Side: Controls */}
        <div className="w-full md:w-[400px] h-[45vh] md:h-full z-10 shadow-xl">
           <ControlPanel 
             config={config} 
             updateConfig={updateConfig} 
             onGenerate={handleGenerate}
             loading={loading}
           />
        </div>
      </main>
    </div>
  );
};

export default App;