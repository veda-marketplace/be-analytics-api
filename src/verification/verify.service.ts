/**
 * Data Model Interfaces
 */

import type { VerifyRes } from "./verify.interface";

/**
 * In-Memory Store
 */
const verifyRes: VerifyRes = {
	uniqueness: 100,
	metadata: {
		modelVersion: "string",
		captionResult: {
			text: "string",
			confidence: 0.0,
		},
		denseCaptionsResult: {
			values: [
				{
					text: "string",
					confidence: 0.0,
					boundingBox: {
						x: 0,
						y: 0,
						w: 0,
						h: 0,
					},
				},
			],
		},
		metadata: {
			width: 0,
			height: 0,
		},
		tagsResult: {
			values: [
				{
					name: "string",
					confidence: 0.0,
				},
			],
		},
		objectsResult: {
			values: [
				{
					id: "string",
					boundingBox: {
						x: 0,
						y: 0,
						w: 0,
						h: 0,
					},
					tags: [
						{
							name: "string",
							confidence: 0.0,
						},
					],
				},
			],
		},
		readResult: {
			blocks: [
				{
					lines: [
						{
							text: "string",
							boundingPolygon: [
								{
									x: 0,
									y: 0,
								},
							],
							words: [
								{
									text: "string",
									boundingPolygon: [
										{
											x: 0,
											y: 0,
										},
									],
									confidence: 0.0,
								},
							],
						},
					],
				},
			],
		},
		smartCropsResult: {
			values: [
				{
					aspectRatio: 0.0,
					boundingBox: {
						x: 0,
						y: 0,
						w: 0,
						h: 0,
					},
				},
			],
		},
		peopleResult: {
			values: [
				{
					boundingBox: {
						x: 0,
						y: 0,
						w: 0,
						h: 0,
					},
					confidence: 0.0,
				},
			],
		},
	},
};

/**
 * Service Methods
 */

export const verify = async (ipfsHash: string): Promise<VerifyRes> => {
	const response = { ...verifyRes };
	return response;
};
