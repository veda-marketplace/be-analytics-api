import axios from 'axios';

export async function downloadImageToBytes(url: string): Promise<string> {
    try {
        // Fetch the image data
        const response = await axios.get(url, {
            responseType: 'arraybuffer' // Tell Axios to treat response as ArrayBuffer
        });

        // Convert the ArrayBuffer to Buffer (Node.js)
        const imageBytes = Buffer.from(response.data);
        return imageBytes.toString('base64');
    } catch (error) {
        console.error('Error downloading image:', error);
        throw error;
    }
}
