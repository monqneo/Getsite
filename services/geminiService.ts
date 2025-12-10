import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Generates a market sentiment analysis mimicking the "AI Trading Bot".
 */
export const getAiMarketInsight = async (): Promise<string> => {
  if (!apiKey) return "API Key not found. Demo mode active.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          { 
            text: "Ты - продвинутый AI-трейдер для DeFi протокола на блокчейне TON. Сгенерируй краткий (2-3 предложения) технический анализ рынка TON и прогноз для токена управления ликвидностью. Используй профессиональный сленг (TVL, APY, Bullish, Bearish, Resistance). Звучи оптимистично, но сдержанно." 
          }
        ]
      }
    });

    return response.text || "Рынок анализируется...";
  } catch (error) {
    console.error("AI Analysis failed", error);
    return "AI-модуль временно недоступен. Ведутся технические работы.";
  }
};
