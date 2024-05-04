import express, { type Request, type Response } from "express";
import type { IdentityReq, IdentityRes } from "./identify.interface";
import * as IdentifySvc from "./identify.service";

export const identificationRouter = express.Router();

identificationRouter.post("/", async (req: Request, res: Response) => {
	const identityReq: IdentityReq = req.body;

	try {
		const identityRes: IdentityRes = await IdentifySvc.identify(identityReq.ipfsUrl);
		res.status(200).json(identityRes);
	} catch (e) {
		res.status(500).send(e);
	}
});
