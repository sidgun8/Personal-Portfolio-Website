import fs from 'fs';
import { Readable } from 'stream';


export const ensureTempDir = (): string => {
    const tmpDir = process.platform === 'win32' ? 'C:\\tmp' : '/tmp';
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
    }
    return tmpDir;
};

export const saveBufferToFile = (buffer: Buffer, filePath: string): Promise<void> => {
    const stream = Readable.from(buffer);
    const writeStream = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
        stream.pipe(writeStream);
        writeStream.on('finish', () => resolve());
        writeStream.on('error', (error) => reject(error));
    });
};