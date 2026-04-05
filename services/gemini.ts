import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateProfessionalAnalysis = async (input: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `You are a senior EU regulatory compliance advisor specializing in the Cyber Resilience Act and industrial AI. Analyze the following business question and provide a concise, professional response focused on practical compliance steps and business implications for Taiwan manufacturers: "${input}"`,
      config: {
        systemInstruction: "You are a senior compliance and business development advisor with deep expertise in EU cybersecurity regulations (CRA, NIS2) and industrial AI applications for Taiwan manufacturers. Be specific, practical, and concise.",
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    throw error;
  }
};
