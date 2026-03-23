import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-carvix-bg border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4">
            <Link to="/">
              <Logo variant="full" iconClassName="w-6 h-6" textClassName="text-lg" />
            </Link>
          </div>
          <p className="text-sm text-gray-500">The next-generation AI-powered automotive design studio.</p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/#features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link to="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/build" className="hover:text-white transition-colors">Builder</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">© 2026 Carvix AI. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-white transition-colors"><Shield className="w-4 h-4" /></a>
          <a href="#" className="text-gray-600 hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
