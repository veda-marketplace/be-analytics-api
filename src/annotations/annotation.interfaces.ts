export interface Annotations {
	responses: Response[];
}

export interface Response {
	labelAnnotations: LabelAnnotation[];
	webDetection: WebDetection;
}

export interface WebDetection {
	webEntities: WebEntity[];
	visuallySimilarImages: VisuallySimilarImage[];
	bestGuessLabels: BestGuessLabel[];
}

export interface WebEntity {
	score: number;
	description: string;
}

export interface VisuallySimilarImage {
	url: string;
}

export interface BestGuessLabel {
	label: string;
}

export interface LabelAnnotation {
	mid: string;
	topicality: string;
	description: string;
	score: number;
}
