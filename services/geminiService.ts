import { GoogleGenAI } from "@google/genai";
import { CarConfig } from "../types";

export const generateCarImage = async (config: CarConfig): Promise<string> => {
  // Create a new instance for each request to ensure the API key is current and valid
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
    Generate a photorealistic, high-definition 8k image of a car with the following specifications:
    
    Vehicle: ${config.year} ${config.make} ${config.model}.
    Color: ${config.color} paint with a ${config.finish} finish.
    Body Kit: ${config.bodyKit} style.
    Wheels: ${config.wheels} rims painted in ${config.wheelColor}.
    Accessories: ${config.accessories.length > 0 ? config.accessories.join(', ') : 'No extra external accessories'}.
    Interior: ${config.interiorColor} interior visible through windows.
    
    Environment/Background: ${config.background}.
    
    Lighting & Composition: Cinematic lighting, professional automotive photography, sharp focus, highly detailed textures, realistic reflections. 
    View angle: 3/4 front view showcasing the vehicle stance and wheels.
    
    Ensure the car looks realistic and not cartoonish.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "4:3",
        }
      }
    });

    // Iterate through parts to find the image
    const candidates = response.candidates;
    if (candidates && candidates[0] && candidates[0].content && candidates[0].content.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64Data}`;
        }
      }
    }

    throw new Error("No image data found in response");

  } catch (error: any) {
    console.error("Gemini Image Generation Error:", error);
    if (error.message && error.message.includes('Rpc failed')) {
      throw new Error("Network connection to AI service failed. Please try again.");
    }
    throw error;
  }
};