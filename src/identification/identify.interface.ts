export interface IdentityRes {
	label: string,
	bestGuessLabels: string[];
	confidence: number;
	uniqueness: number;
	tags: string[];
}
