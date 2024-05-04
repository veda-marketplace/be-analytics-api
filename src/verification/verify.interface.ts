export interface VerifyReq {
	ipfsHash: string;
	ipfsUrl: string;
}

export interface VerifyRes extends VerifyReq {
	uniqueness: number;
	metadata: object;
}
