import { SelectOption, CarConfig } from './types';

export const MAKES: SelectOption[] = [
  { label: 'Porsche', value: 'Porsche' },
  { label: 'Nissan', value: 'Nissan' },
  { label: 'Toyota', value: 'Toyota' },
  { label: 'BMW', value: 'BMW' },
  { label: 'Mercedes-Benz', value: 'Mercedes-Benz' },
  { label: 'Ford', value: 'Ford' },
  { label: 'Chevrolet', value: 'Chevrolet' },
  { label: 'Lamborghini', value: 'Lamborghini' },
  { label: 'Ferrari', value: 'Ferrari' },
  { label: 'Audi', value: 'Audi' },
  { label: 'Dodge', value: 'Dodge' },
  { label: 'McLaren', value: 'McLaren' },
];

export const MODELS: Record<string, SelectOption[]> = {
  'Porsche': [
    { label: '911 GT3 RS', value: '911 GT3 RS' },
    { label: 'Taycan Turbo S', value: 'Taycan Turbo S' },
    { label: 'Cayman GT4', value: 'Cayman GT4' },
    { label: '918 Spyder', value: '918 Spyder' },
  ],
  'Nissan': [
    { label: 'GT-R R35 Nismo', value: 'GT-R R35 Nismo' },
    { label: 'Skyline GT-R R34', value: 'Skyline GT-R R34' },
    { label: 'Silvia S15', value: 'Silvia S15' },
    { label: '400Z', value: '400Z' },
  ],
  'Toyota': [
    { label: 'Supra MK5', value: 'GR Supra' },
    { label: 'Supra MK4', value: 'Supra MK4' },
    { label: 'GR86', value: 'GR86' },
    { label: 'AE86 Trueno', value: 'AE86 Trueno' },
  ],
  'BMW': [
    { label: 'M3 Competition', value: 'M3 Competition' },
    { label: 'M4 CSL', value: 'M4 CSL' },
    { label: 'M5 CS', value: 'M5 CS' },
    { label: 'i8', value: 'i8' },
  ],
  'Mercedes-Benz': [
    { label: 'AMG GT Black Series', value: 'AMG GT Black Series' },
    { label: 'C63 AMG', value: 'C63 AMG' },
    { label: 'G63 AMG', value: 'G-Wagon' },
  ],
  'Ford': [
    { label: 'Mustang GT500', value: 'Mustang Shelby GT500' },
    { label: 'GT', value: 'Ford GT' },
    { label: 'F-150 Raptor', value: 'F-150 Raptor' },
  ],
  'Chevrolet': [
    { label: 'Corvette C8 Z06', value: 'Corvette C8 Z06' },
    { label: 'Camaro ZL1', value: 'Camaro ZL1' },
  ],
  'Lamborghini': [
    { label: 'Aventador SVJ', value: 'Aventador SVJ' },
    { label: 'Huracán STO', value: 'Huracán STO' },
    { label: 'Urus', value: 'Urus' },
    { label: 'Countach LPI 800-4', value: 'Countach LPI 800-4' },
  ],
  'Ferrari': [
    { label: 'SF90 Stradale', value: 'SF90 Stradale' },
    { label: '488 Pista', value: '488 Pista' },
    { label: 'F40', value: 'F40' },
  ],
  'Audi': [
    { label: 'R8 V10 Performance', value: 'R8 V10 Performance' },
    { label: 'RS6 Avant', value: 'RS6 Avant' },
    { label: 'RS e-tron GT', value: 'RS e-tron GT' },
  ],
  'Dodge': [
    { label: 'Challenger SRT Demon', value: 'Challenger SRT Demon' },
    { label: 'Viper ACR', value: 'Viper ACR' },
    { label: 'Charger Hellcat', value: 'Charger Hellcat' },
  ],
  'McLaren': [
    { label: '765LT', value: '765LT' },
    { label: 'P1', value: 'P1' },
    { label: 'Senna', value: 'Senna' },
  ],
};

export const COLORS = [
  { name: 'Midnight Black', hex: '#000000', value: 'Midnight Black' },
  { name: 'Alpine White', hex: '#ffffff', value: 'Alpine White' },
  { name: 'Guards Red', hex: '#cc0000', value: 'Bright Red' },
  { name: 'Miami Blue', hex: '#00BFFF', value: 'Cyan Blue' },
  { name: 'British Racing Green', hex: '#004225', value: 'Dark Racing Green' },
  { name: 'Speed Yellow', hex: '#FFD700', value: 'Bright Yellow' },
  { name: 'Nardo Grey', hex: '#6D6E71', value: 'Flat Grey' },
  { name: 'Midnight Purple', hex: '#4B0082', value: 'Deep Purple' },
  { name: 'Sunset Orange', hex: '#FF4500', value: 'Metallic Orange' },
  { name: 'Rose Gold', hex: '#B76E79', value: 'Rose Gold' },
];

export const BODY_KITS: SelectOption[] = [
  { label: 'Stock / Factory', value: 'Factory Stock' },
  { label: 'Widebody (Riveted)', value: 'Riveted Widebody' },
  { label: 'Clean Widebody (Molded)', value: 'Molded Widebody' },
  { label: 'Time Attack Aero', value: 'Time Attack Aero with Canards and Large Splitter' },
  { label: 'Liberty Walk Style', value: 'Aggressive Stance Widebody' },
  { label: 'Rocket Bunny Style', value: 'Ducktail Spoiler and Wide Fenders' },
  { label: 'GT3 Racing', value: 'GT3 Spec Racing Aero' },
  { label: 'Cyberpunk / Future', value: 'Cyberpunk 2077 Futuristic Armor' },
];

export const WHEELS: SelectOption[] = [
  { label: 'Stock Alloy', value: 'Stock Manufacturers Alloy' },
  { label: 'TE37 Style (6-Spoke)', value: 'Volk TE37 Style 6-spoke racing' },
  { label: 'Multi-Spoke Mesh', value: 'BBS Super RS Style Mesh' },
  { label: '5-Spoke Deep Dish', value: 'Work Meister S1 Style 5-spoke Deep Dish' },
  { label: 'Turbofan', value: 'Retro Rally Turbofan' },
  { label: 'Carbon Fiber', value: 'Full Carbon Fiber Performance' },
  { label: 'Futuristic Disc', value: 'Aerodynamic Solid Disc' },
];

export const BACKGROUNDS: SelectOption[] = [
  { label: 'Studio Minimal (Dark)', value: 'Dark Minimalist Studio with Overhead Softbox' },
  { label: 'Cyberpunk City', value: 'Neon Lit Rainy Cyberpunk City Street at Night' },
  { label: 'Tokyo Highway', value: 'Tokyo Shuto Expressway at Night with Motion Blur' },
  { label: 'Salt Flats', value: 'Bonneville Salt Flats during Golden Hour' },
  { label: 'Race Track', value: 'Nürburgring Race Track Grid' },
  { label: 'Modern Mansion', value: 'Luxury Modern Concrete Mansion Driveway' },
  { label: 'Futuristic Garage', value: 'High Tech Sci-Fi Garage' },
];

export const ACCESSORIES: SelectOption[] = [
  { label: 'Large GT Wing', value: 'Large Carbon Fiber GT Wing' },
  { label: 'Roof Box', value: 'Aerodynamic Roof Box' },
  { label: 'Underglow (Neon)', value: 'Neon Underglow Lighting' },
  { label: 'Roll Cage', value: 'Visible Roll Cage' },
  { label: 'Carbon Hood', value: 'Exposed Carbon Fiber Hood' },
  { label: 'Tow Strap', value: 'Racing Tow Strap' },
  { label: 'Intercooler', value: 'Visible Front Mount Intercooler' },
];

export const DEFAULT_CONFIG: CarConfig = {
  make: 'Porsche',
  model: '911 GT3 RS',
  year: '2024',
  color: 'Nardo Grey',
  finish: 'Gloss',
  bodyKit: 'Stock / Factory',
  wheels: 'Stock Alloy',
  wheelColor: 'Black',
  interiorColor: 'Black',
  background: 'Studio Minimal (Dark)',
  accessories: [],
};