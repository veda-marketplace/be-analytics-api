export interface IdentityReq {
	ipfsHash: string;
	ipfsUrl: string;
}

export interface IdentityRes extends IdentityReq {
	metadata: object;
}
