import React from 'react';
import { LayoutDashboard, Car, Image as ImageIcon, Sparkles, ShoppingBag, Settings } from 'lucide-react';
import Logo from './Logo';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: Car, label: 'My Builds', active: false },
    { icon: ImageIcon, label: 'Explore Gallery', active: false },
    { icon: Sparkles, label: 'AI Builder', active: true },
    { icon: ShoppingBag, label: 'Marketplace', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside className="w-64 h-full bg-carvix-bg border-r border-white/5 flex flex-col">
      <div className="p-6">
        <Logo variant="full" iconClassName="w-8 h-8" textClassName="text-xl" />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              item.active 
                ? 'bg-carvix-accent/10 text-carvix-accent shadow-[inset_2px_0_0_0_#2F80ED]' 
                : 'text-gray-400 hover:bg-carvix-panel hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6">
        <div className="glass-panel p-4 rounded-2xl flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">Pro Plan</span>
            <span className="text-xs text-carvix-accent font-bold">Active</span>
          </div>
          <div className="w-full bg-carvix-panel rounded-full h-1.5 mt-2">
            <div className="bg-neon-purple h-1.5 rounded-full w-3/4"></div>
          </div>
          <span className="text-[10px] text-gray-500 mt-1">75/100 AI Renders used</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
