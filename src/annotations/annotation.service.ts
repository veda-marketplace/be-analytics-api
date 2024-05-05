import axios from 'axios';
import { Annotations } from './annotation.interfaces';

function createRequest(imageContent: string) {
    return {
        requests: [
            {
                image: {
                    content: imageContent
                },
                features: [
                    {
                        type: "LABEL_DETECTION",
                        maxResults: 10
                    },
                    {
                        type: "WEB_DETECTION",
                        maxResults: 10
                    }
                ]
            }
        ]
    }
};

const GCP_IMAGE_ANNOTATE_URL = "https://vision.googleapis.com/v1/images:annotate";

export async function annotate(imageContent: string): Promise<Annotations> {
    const request = createRequest(imageContent);
    const response = await axios.post(GCP_IMAGE_ANNOTATE_URL, request, {
        headers: {
            'X-goog-api-key': process.env.GCP_VISION_API_KEY
        }
    });
    if(response.status == 200) {
        const annotations: Annotations =  response.data;
        return annotations;
    }
    
    throw new Error(response.statusText);
}