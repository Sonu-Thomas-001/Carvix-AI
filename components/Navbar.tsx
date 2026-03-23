import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getLink = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-carvix-bg/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/">
          <Logo variant="full" iconClassName="w-8 h-8" textClassName="text-xl" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to={getLink('#features')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</Link>
          <Link to={getLink('#ai')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">AI Power</Link>
          <Link to={getLink('#gallery')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Gallery</Link>
          <Link to={getLink('#pricing')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</Link>
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
          <Link to={getLink('#features')} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300">Features</Link>
          <Link to={getLink('#ai')} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300">AI Power</Link>
          <Link to={getLink('#gallery')} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300">Gallery</Link>
          <Link to={getLink('#pricing')} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-gray-300">Pricing</Link>
          <div className="h-px bg-white/10 my-2"></div>
          <Link to="/build" className="w-full py-3 text-center bg-carvix-accent text-white rounded-xl font-bold shadow-neon">Start Building</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
