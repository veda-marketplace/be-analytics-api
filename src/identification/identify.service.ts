/**
 * Data Model Interfaces
 */

import type {
	Annotations,
	BestGuessLabel,
	LabelAnnotation,
	Response,
	VisuallySimilarImage,
	WebEntity,
} from "../annotations/annotation.interfaces";
import * as AnnotationSvc from "../annotations/annotation.service";
import * as ImageSvc from "../shared/image.service";
import type { IdentityRes } from "./identify.interface";

/**
 * Service Methods
 */

export const identify = async (ipfsHash: string): Promise<IdentityRes> => {
	const imageContent: string = await ImageSvc.downloadImageToBytes(`https://ipfs.io/ipfs/${ipfsHash}`);
	const annotations: Annotations = await AnnotationSvc.annotate(imageContent);
	return mapAnnotations(annotations);
};

function mapAnnotations(annotations: Annotations): IdentityRes {
	const response: Response = annotations.responses[0];
	return {
		label: getBestLabel(response.labelAnnotations),
		confidence: getBestScore(response.labelAnnotations),
		bestGuessLabels: getBestGuessLabels(response.webDetection.bestGuessLabels),
		tags: getTags(response.webDetection.webEntities),
		uniqueness: getUniquenessScore(response.webDetection.visuallySimilarImages),
	};
}

function getBestScore(labelAnnotations: LabelAnnotation[]): number {
	let score = 0;
	for (const la of labelAnnotations) {
		if (score < la.score) {
			score = la.score;
		}
	}

	return score;
}

function getBestLabel(labelAnnotations: LabelAnnotation[]): string {
	let score = 0;
	let label = "";
	for (const la of labelAnnotations) {
		if (score < la.score) {
			score = la.score;
			label = la.description;
		}
	}
	return label;
}

function getBestGuessLabels(bestGuessLabels: BestGuessLabel[]): string[] {
	return bestGuessLabels.map((bgl) => bgl.label);
}

function getUniquenessScore(visuallySimilarImages: VisuallySimilarImage[]): number {
	return (10 - visuallySimilarImages.length) * 0.1;
}

function getTags(webEntities: WebEntity[]): string[] {
	return webEntities.filter((we) => we.score > 0.5).map((we) => we.description);
}
