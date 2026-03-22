import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateLogo() {
  console.log("Generating logo...");
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A premium, futuristic logo for a brand named "Carvix AI", an AI-powered car customization and 3D visualization platform. Style: Modern, minimal, and high-end SaaS aesthetic. Blend automotive design with artificial intelligence elements. Inspired by Tesla, NVIDIA, and high-end tech startups. Icon Concept: Abstract car silhouette combined with AI circuitry or geometric neural patterns. Sharp, aerodynamic lines representing speed and precision. Subtle integration of motion or forward movement. Typography: Clean, bold, modern sans-serif font (tech style). Slightly spaced lettering for a premium feel. Emphasize "Carvix" with subtle distinction for "AI". Color Palette: Primary: Deep black (#0B0E11), Accent: Electric blue (#2F80ED), Secondary: Neon purple gradient. Background: Dark, minimal studio background with soft glow. Effects: Subtle neon glow, Glassmorphism or metallic finish, High contrast, sharp edges. Centered composition.',
          },
        ],
      },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir);
        }
        fs.writeFileSync(path.join(publicDir, 'carvix-logo.png'), Buffer.from(base64Data, 'base64'));
        console.log('Logo saved to ./public/carvix-logo.png');
      }
    }
  } catch (e) {
    console.error("Error generating logo:", e);
  }
}

generateLogo();
