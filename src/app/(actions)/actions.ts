"use server"

import { OpenAI } from 'openai';
import { prompt } from './prompt';
import { ensureTempDir, saveBufferToFile } from './stt';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function getAnswer(question: string) {

    try {

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: prompt
                },
                { role: "user", content: question }
            ],
            store: false,
        });

        const ans = completion.choices[0].message.content;

        return { message: ans };
    } catch (error) {
        console.error('Error handling request:', error);
        return { message: 'Error getting response' };
    }
}

export async function speechToText(formData: FormData) {
    try {

        const audioFile = formData.get('file');

        if (!(audioFile instanceof File)) {
            return { error : "Audio file not found or invalid" };
        }

        const fileBuffer = Buffer.from(await audioFile.arrayBuffer());
        const tmpDir = ensureTempDir();
        const audioPath = path.join(tmpDir, 'audio.webm');
        await saveBufferToFile(fileBuffer, audioPath);

        const transcription = await openai.audio.transcriptions.create({
            file: fs.createReadStream(audioPath) as unknown as File,
            model: 'whisper-1',
        });

        return { success : true, message: transcription.text };
    } catch (error: unknown) {
        console.error('Error handling request:', error);
        const message = error instanceof Error ? error.message : 'Internal server error';
        return { success : false, message : message};
    }
}