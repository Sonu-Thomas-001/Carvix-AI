import React from 'react';
import { CarConfig, CarCategory, SelectOption } from '../types';
import { MAKES, MODELS, BODY_KITS, WHEELS, COLORS, BACKGROUNDS, ACCESSORIES } from '../constants';
import { ChevronRight, Layers, Palette, Circle, Settings, Image as ImageIcon } from 'lucide-react';

interface ControlPanelProps {
  config: CarConfig;
  updateConfig: (key: keyof CarConfig, value: any) => void;
  onGenerate: () => void;
  loading: boolean;
}

const CATEGORIES: { id: CarCategory; icon: React.FC<any>; label: string }[] = [
  { id: 'Vehicle', icon: Layers, label: 'Base Model' },
  { id: 'Exterior', icon: Palette, label: 'Paint & Body' },
  { id: 'Wheels', icon: Circle, label: 'Wheels & Stance' },
  { id: 'Interior', icon: Settings, label: 'Interior & Mods' },
  { id: 'Scene', icon: ImageIcon, label: 'Environment' },
];

const ControlPanel: React.FC<ControlPanelProps> = ({ config, updateConfig, onGenerate, loading }) => {
  const [activeCategory, setActiveCategory] = React.useState<CarCategory>('Vehicle');

  const currentModels = MODELS[config.make] || [];

  const handleAccessoryToggle = (value: string) => {
    const current = new Set(config.accessories);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    updateConfig('accessories', Array.from(current));
  };

  return (
    <div className="flex flex-col h-full bg-apex-800 border-l border-gray-700">
      {/* Category Tabs */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-5 border-b border-gray-700">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex flex-col items-center justify-center p-3 min-w-[70px] transition-colors ${
              activeCategory === cat.id 
                ? 'bg-apex-700 text-apex-accent border-b-2 border-apex-accent' 
                : 'text-gray-400 hover:text-white hover:bg-apex-700/50'
            }`}
          >
            <cat.icon className="w-5 h-5 mb-1" />
            <span className="text-[10px] uppercase font-bold tracking-wider">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Controls Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {activeCategory === 'Vehicle' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="form-group">
              <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Manufacturer</label>
              <select 
                value={config.make} 
                onChange={(e) => {
                  updateConfig('make', e.target.value);
                  updateConfig('model', MODELS[e.target.value][0].value);
                }}
                className="w-full bg-apex-900 border border-gray-600 rounded-lg p-3 text-white focus:border-apex-accent focus:outline-none transition-colors"
              >
                {MAKES.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Model</label>
              <select 
                value={config.model} 
                onChange={(e) => updateConfig('model', e.target.value)}
                className="w-full bg-apex-900 border border-gray-600 rounded-lg p-3 text-white focus:border-apex-accent focus:outline-none transition-colors"
              >
                {currentModels.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Model Year</label>
              <input 
                type="number" 
                value={config.year} 
                onChange={(e) => updateConfig('year', e.target.value)}
                className="w-full bg-apex-900 border border-gray-600 rounded-lg p-3 text-white focus:border-apex-accent focus:outline-none"
              />
            </div>
          </div>
        )}

        {activeCategory === 'Exterior' && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <label className="text-gray-400 text-xs uppercase font-bold mb-3 block">Paint Color</label>
              <div className="grid grid-cols-5 gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => updateConfig('color', c.value)}
                    className={`w-full aspect-square rounded-full border-2 shadow-sm transition-transform hover:scale-110 ${config.color === c.value ? 'border-white ring-2 ring-apex-accent scale-110' : 'border-gray-600'}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
               <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Paint Finish</label>
               <div className="grid grid-cols-2 gap-2">
                 {['Gloss', 'Matte', 'Metallic', 'Satin', 'Chrome', 'Pearlescent'].map(finish => (
                   <button
                    key={finish}
                    onClick={() => updateConfig('finish', finish)}
                    className={`p-2 text-sm rounded border ${config.finish === finish ? 'bg-apex-accent border-apex-accent text-white' : 'bg-apex-900 border-gray-600 text-gray-300 hover:border-gray-400'}`}
                   >
                     {finish}
                   </button>
                 ))}
               </div>
            </div>

            <div className="form-group">
              <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Body Kit Style</label>
              <select 
                value={config.bodyKit} 
                onChange={(e) => updateConfig('bodyKit', e.target.value)}
                className="w-full bg-apex-900 border border-gray-600 rounded-lg p-3 text-white focus:border-apex-accent focus:outline-none"
              >
                {BODY_KITS.map(k => <option key={k.value} value={k.value}>{k.label}</option>)}
              </select>
            </div>
          </div>
        )}

        {activeCategory === 'Wheels' && (
          <div className="space-y-4 animate-fadeIn">
             <div className="form-group">
              <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Rim Style</label>
              <select 
                value={config.wheels} 
                onChange={(e) => updateConfig('wheels', e.target.value)}
                className="w-full bg-apex-900 border border-gray-600 rounded-lg p-3 text-white focus:border-apex-accent focus:outline-none"
              >
                {WHEELS.map(w => <option key={w.value} value={w.value}>{w.label}</option>)}
              </select>
            </div>
            
            <div className="form-group">
              <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Rim Color</label>
              <select 
                value={config.wheelColor} 
                onChange={(e) => updateConfig('wheelColor', e.target.value)}
                className="w-full bg-apex-900 border border-gray-600 rounded-lg p-3 text-white focus:border-apex-accent focus:outline-none"
              >
                <option value="Silver">Silver</option>
                <option value="Chrome">Chrome</option>
                <option value="Black">Gloss Black</option>
                <option value="Matte Black">Matte Black</option>
                <option value="Bronze">Bronze</option>
                <option value="Gold">Gold</option>
                <option value="White">White</option>
                <option value="Body Color Match">Body Color Match</option>
              </select>
            </div>
          </div>
        )}

        {activeCategory === 'Interior' && (
           <div className="space-y-4 animate-fadeIn">
            <div className="form-group">
              <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Interior Color</label>
              <select 
                value={config.interiorColor} 
                onChange={(e) => updateConfig('interiorColor', e.target.value)}
                className="w-full bg-apex-900 border border-gray-600 rounded-lg p-3 text-white focus:border-apex-accent focus:outline-none"
              >
                 <option value="Black">Black Leather/Alcantara</option>
                 <option value="Tan">Tan Leather</option>
                 <option value="Red">Red Racing</option>
                 <option value="White">White Luxury</option>
                 <option value="Blue">Blue Accent</option>
              </select>
            </div>

            <div>
              <label className="text-gray-400 text-xs uppercase font-bold mb-3 block">Accessories & Mods</label>
              <div className="space-y-2">
                {ACCESSORIES.map(acc => (
                  <label key={acc.value} className="flex items-center space-x-3 p-3 rounded-lg bg-apex-900 border border-gray-700 hover:border-gray-500 cursor-pointer transition-colors">
                    <input 
                      type="checkbox"
                      checked={config.accessories.includes(acc.value)}
                      onChange={() => handleAccessoryToggle(acc.value)}
                      className="form-checkbox h-5 w-5 text-apex-accent rounded border-gray-600 bg-gray-700 focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-sm text-gray-200">{acc.label}</span>
                  </label>
                ))}
              </div>
            </div>
           </div>
        )}

        {activeCategory === 'Scene' && (
          <div className="space-y-4 animate-fadeIn">
             <div className="form-group">
              <label className="text-gray-400 text-xs uppercase font-bold mb-2 block">Background Environment</label>
              <select 
                value={config.background} 
                onChange={(e) => updateConfig('background', e.target.value)}
                className="w-full bg-apex-900 border border-gray-600 rounded-lg p-3 text-white focus:border-apex-accent focus:outline-none"
              >
                {BACKGROUNDS.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
              </select>
            </div>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              *The environment lighting will automatically interact with the car paint finish (reflections, shadows) for maximum realism.
            </p>
          </div>
        )}

      </div>

      {/* Action Footer */}
      <div className="p-6 border-t border-gray-700 bg-apex-900">
        <button
          onClick={onGenerate}
          disabled={loading}
          className={`w-full py-4 rounded-lg font-display font-bold text-lg uppercase tracking-wider transition-all transform flex items-center justify-center gap-2 ${
            loading 
              ? 'bg-gray-700 cursor-not-allowed text-gray-400'
              : 'bg-gradient-to-r from-apex-accent to-blue-600 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg hover:shadow-blue-500/25 active:scale-95'
          }`}
        >
          {loading ? 'Processing...' : (
            <>
              Generate Build <ChevronRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;