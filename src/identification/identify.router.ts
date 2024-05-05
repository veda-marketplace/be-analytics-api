import express, { type Request, type Response } from "express";
import { IdentityRes } from './identify.interface';
import * as IdentifySvc from "./identify.service";

export const identificationRouter = express.Router();

identificationRouter.get("/:ipfsHash", async (req: Request, res: Response) => {
	const ipfsHash: string = req.params.ipfsHash;

	try {
		const identityRes: IdentityRes = await IdentifySvc.identify(ipfsHash);
		console.log("IdentityRes: " + identityRes);
		res.status(200).json(identityRes);
	} catch (e) {
		res.status(500).send(e);
	}
});
