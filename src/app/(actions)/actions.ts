"use server"

import { prompt } from './prompt';

export async function getAnswer(question: string) {
    const fallback = `AI chat is currently disabled on this website to avoid external API dependencies. You asked: "${question}". Please use the contact section to reach Siddharth directly.`;
    // Keep prompt referenced so this module can be re-enabled later without dead exports.
    void prompt;
    return { message: fallback };
}

export async function speechToText(formData: FormData) {
    void formData;
    return {
        success: false,
        message: "Voice transcription is disabled because OpenAI-backed features have been removed."
    };
}