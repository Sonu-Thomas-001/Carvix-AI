export interface CarConfig {
  make: string;
  model: string;
  year: string;
  color: string;
  finish: 'Gloss' | 'Matte' | 'Metallic' | 'Pearlescent' | 'Satin' | 'Chrome';
  bodyKit: string;
  wheels: string;
  wheelColor: string;
  interiorColor: string;
  background: string;
  accessories: string[];
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  config: CarConfig;
  timestamp: number;
}

export type CarCategory = 'Vehicle' | 'Exterior' | 'Wheels' | 'Interior' | 'Scene';

export interface SelectOption {
  label: string;
  value: string;
  image?: string;
}