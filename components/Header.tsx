import React from 'react';
import { Car, Zap, Download } from 'lucide-react';
import { CarConfig } from '../types';

interface HeaderProps {
  config?: CarConfig;
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const handleExportConfig = () => {
    if (!config) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", `carvix-build-${Date.now()}.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-apex-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-apex-accent p-2 rounded-lg">
          <Car className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-display font-bold tracking-wide text-white">
            APEX <span className="text-apex-accent">AUTO</span>
          </h1>
          <p className="text-xs text-gray-400 font-sans tracking-widest">ARCHITECT</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {config && (
          <button 
            onClick={handleExportConfig}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors text-xs font-medium text-gray-300"
            title="Export Build Config (JSON)"
          >
            <Download className="w-4 h-4" />
            Export Config
          </button>
        )}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-apex-800 border border-gray-700">
           <Zap className="w-4 h-4 text-yellow-400" fill="currentColor" />
           <span className="text-xs font-medium text-gray-300">Powered by Gemini 2.5</span>
        </div>
      </div>
    </header>
  );
};

export default Header;