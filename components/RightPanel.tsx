import React from 'react';
import { CarConfig, CarCategory, SelectOption } from '../types';
import { MAKES, MODELS, BODY_KITS, WHEELS, COLORS, BACKGROUNDS, ACCESSORIES, STYLE_PRESETS, CAMERA_ANGLES } from '../constants';
import { ChevronRight, Layers, Palette, Circle, Settings, Image as ImageIcon, Sparkles, Wand2 } from 'lucide-react';

interface RightPanelProps {
  config: CarConfig;
  updateConfig: (key: keyof CarConfig, value: any) => void;
  onGenerate: () => void;
  loading: boolean;
}

const CATEGORIES: { id: CarCategory | 'Advanced'; icon: React.FC<any>; label: string }[] = [
  { id: 'Vehicle', icon: Layers, label: 'Base Model' },
  { id: 'Exterior', icon: Palette, label: 'Exterior' },
  { id: 'Wheels', icon: Circle, label: 'Wheels' },
  { id: 'Interior', icon: Settings, label: 'Interior' },
  { id: 'Scene', icon: ImageIcon, label: 'Scene' },
  { id: 'Advanced', icon: Sparkles, label: 'AI Assist' },
];

const RightPanel: React.FC<RightPanelProps> = ({ config, updateConfig, onGenerate, loading }) => {
  const [activeCategory, setActiveCategory] = React.useState<CarCategory | 'Advanced'>('Vehicle');

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
    <div className="flex flex-col h-full bg-carvix-panel border-l border-white/5 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
      {/* Category Tabs */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-6 border-b border-white/5 bg-carvix-bg/50">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex flex-col items-center justify-center p-4 min-w-[70px] transition-all relative ${
              activeCategory === cat.id 
                ? 'text-carvix-accent' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
            }`}
          >
            <cat.icon className={`w-5 h-5 mb-1.5 ${activeCategory === cat.id ? 'drop-shadow-[0_0_8px_rgba(47,128,237,0.8)]' : ''}`} />
            <span className="text-[10px] uppercase font-bold tracking-wider">{cat.label}</span>
            {activeCategory === cat.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-carvix-accent shadow-neon"></div>
            )}
          </button>
        ))}
      </div>

      {/* Controls Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        
        {activeCategory === 'Vehicle' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-carvix-accent" /> Base Configuration
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-xs font-medium mb-2 block">Manufacturer</label>
                  <select 
                    value={config.make} 
                    onChange={(e) => {
                      updateConfig('make', e.target.value);
                      updateConfig('model', MODELS[e.target.value][0].value);
                    }}
                    className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
                  >
                    {MAKES.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-medium mb-2 block">Model</label>
                  <select 
                    value={config.model} 
                    onChange={(e) => updateConfig('model', e.target.value)}
                    className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
                  >
                    {currentModels.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-medium mb-2 block">Model Year</label>
                  <input 
                    type="number" 
                    value={config.year} 
                    onChange={(e) => updateConfig('year', e.target.value)}
                    className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeCategory === 'Exterior' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Palette className="w-4 h-4 text-carvix-accent" /> Paint Color
                </h3>
                <span className="text-xs text-carvix-accent font-mono bg-carvix-accent/10 px-2 py-1 rounded-md">
                  {COLORS.find(c => c.value === config.color)?.hex || '#000000'}
                </span>
              </div>
              
              <div className="grid grid-cols-5 gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => updateConfig('color', c.value)}
                    className={`w-full aspect-square rounded-full border-2 shadow-sm transition-all hover:scale-110 ${config.color === c.value ? 'border-white ring-2 ring-carvix-accent scale-110 shadow-neon' : 'border-white/10'}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl space-y-4">
               <h3 className="text-sm font-bold text-white uppercase tracking-wider">Paint Finish</h3>
               <div className="grid grid-cols-3 gap-2">
                 {['Gloss', 'Matte', 'Metallic', 'Satin', 'Chrome', 'Pearlescent'].map(finish => (
                   <button
                    key={finish}
                    onClick={() => updateConfig('finish', finish)}
                    className={`p-2 text-xs font-medium rounded-xl border transition-all ${config.finish === finish ? 'bg-carvix-accent/20 border-carvix-accent text-carvix-accent shadow-[inset_0_0_10px_rgba(47,128,237,0.2)]' : 'bg-carvix-bg border-white/5 text-gray-400 hover:border-white/20 hover:text-white'}`}
                   >
                     {finish}
                   </button>
                 ))}
               </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Body Kit Style</h3>
              <select 
                value={config.bodyKit} 
                onChange={(e) => updateConfig('bodyKit', e.target.value)}
                className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
              >
                {BODY_KITS.map(k => <option key={k.value} value={k.value}>{k.label}</option>)}
              </select>
            </div>
          </div>
        )}

        {activeCategory === 'Wheels' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Circle className="w-4 h-4 text-carvix-accent" /> Rim Style
              </h3>
              <select 
                value={config.wheels} 
                onChange={(e) => updateConfig('wheels', e.target.value)}
                className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
              >
                {WHEELS.map(w => <option key={w.value} value={w.value}>{w.label}</option>)}
              </select>
            </div>
            
            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Rim Color</h3>
              <select 
                value={config.wheelColor} 
                onChange={(e) => updateConfig('wheelColor', e.target.value)}
                className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
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
           <div className="space-y-6 animate-fadeIn">
            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Settings className="w-4 h-4 text-carvix-accent" /> Interior Color
              </h3>
              <select 
                value={config.interiorColor} 
                onChange={(e) => updateConfig('interiorColor', e.target.value)}
                className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
              >
                 <option value="Black">Black Leather/Alcantara</option>
                 <option value="Tan">Tan Leather</option>
                 <option value="Red">Red Racing</option>
                 <option value="White">White Luxury</option>
                 <option value="Blue">Blue Accent</option>
              </select>
            </div>

            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Accessories & Mods</h3>
              <div className="space-y-2">
                {ACCESSORIES.map(acc => (
                  <label key={acc.value} className="flex items-center space-x-3 p-3 rounded-xl bg-carvix-bg border border-white/5 hover:border-white/20 cursor-pointer transition-all group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${config.accessories.includes(acc.value) ? 'bg-carvix-accent border-carvix-accent' : 'border-gray-600 group-hover:border-gray-400'}`}>
                      {config.accessories.includes(acc.value) && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{acc.label}</span>
                  </label>
                ))}
              </div>
            </div>
           </div>
        )}

        {activeCategory === 'Scene' && (
          <div className="space-y-6 animate-fadeIn">
             <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-carvix-accent" /> Environment
              </h3>
              <select 
                value={config.background} 
                onChange={(e) => updateConfig('background', e.target.value)}
                className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
              >
                {BACKGROUNDS.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
              </select>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Environment lighting automatically interacts with the car paint finish for maximum realism.
              </p>
            </div>
          </div>
        )}

        {activeCategory === 'Advanced' && (
          <div className="space-y-6 animate-fadeIn">
            
            <button className="w-full py-3 rounded-xl bg-neon-purple text-white font-bold text-sm flex items-center justify-center gap-2 shadow-neon hover:opacity-90 transition-opacity">
              <Wand2 className="w-4 h-4" /> Recommend Style
            </button>

            <div className="glass-panel p-5 rounded-2xl space-y-4 border-carvix-accent/30">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-carvix-accent" /> AI Style Preset
              </h3>
              <select 
                value={config.stylePreset || ''} 
                onChange={(e) => updateConfig('stylePreset', e.target.value)}
                className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
              >
                {STYLE_PRESETS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </div>

            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Camera Angle</h3>
              <select 
                value={config.cameraAngle || ''} 
                onChange={(e) => updateConfig('cameraAngle', e.target.value)}
                className="w-full bg-carvix-bg border border-white/10 rounded-xl p-3 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none transition-all"
              >
                {CAMERA_ANGLES.map(a => <option key={a.value} value={a.value}>{a.label}</option>)}
              </select>
            </div>

            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Custom AI Prompt</h3>
              <textarea 
                value={config.customPrompt || ''} 
                onChange={(e) => updateConfig('customPrompt', e.target.value)}
                placeholder="E.g., Aggressive matte black widebody with red accents and glowing neon wheels..."
                className="w-full bg-carvix-bg border border-white/10 rounded-xl p-4 text-sm text-white focus:border-carvix-accent focus:ring-1 focus:ring-carvix-accent focus:outline-none min-h-[120px] resize-y transition-all"
              />
              <p className="text-xs text-gray-500">
                Use this to override or add specific details not covered by the standard options.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Action Footer */}
      <div className="p-6 border-t border-white/5 bg-carvix-panel/80 backdrop-blur-md">
        <button
          onClick={onGenerate}
          disabled={loading}
          className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all transform flex items-center justify-center gap-2 ${
            loading 
              ? 'bg-carvix-bg text-gray-500 cursor-not-allowed border border-white/5'
              : 'bg-carvix-accent hover:bg-carvix-accentHover text-white shadow-neon hover:scale-[1.02] active:scale-95'
          }`}
        >
          {loading ? 'Processing...' : (
            <>
              Generate Render <ChevronRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
