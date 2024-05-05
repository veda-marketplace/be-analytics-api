import express, { type Request, type Response } from "express";
import type { VerifyRes } from "./verify.interface";
import * as VerifySvc from "./verify.service";

export const verificationRouter = express.Router();

verificationRouter.get("/:ipfsHash", async (req: Request, res: Response) => {
	const ipfsHash: string = req.params.ipfsHash;

	try {
		const verifyRes: VerifyRes = await VerifySvc.verify(ipfsHash);
		res.status(200).json(verifyRes);
	} catch (e) {
		res.status(500).send(e);
	}
});
