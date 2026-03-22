import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <header className="h-20 px-8 flex items-center justify-between bg-carvix-bg/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-40">
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search cars, parts, builds..." 
          className="w-full bg-carvix-panel/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-carvix-accent/50 focus:bg-carvix-panel transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-carvix-accent rounded-full shadow-neon"></span>
        </button>

        <div className="h-8 w-px bg-white/10"></div>

        <button className="flex items-center gap-2 bg-carvix-panel hover:bg-carvix-panelHover border border-white/10 px-4 py-2 rounded-xl transition-all">
          <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-6 h-6 rounded-full" />
          <span className="text-sm font-medium text-white">Alex D.</span>
        </button>

        <button className="flex items-center gap-2 bg-carvix-accent hover:bg-carvix-accentHover text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-neon">
          <Plus className="w-4 h-4" />
          New Build
        </button>
      </div>
    </header>
  );
};

export default TopBar;
