import express, { type Request, type Response } from "express";
import type { VerifyReq, VerifyRes } from "./verify.interface";
import * as VerifySvc from "./verify.service";

export const verificationRouter = express.Router();

verificationRouter.post("/", async (req: Request, res: Response) => {
	const verifyReq: VerifyReq = req.body;

	try {
		const verifyRes: VerifyRes = await VerifySvc.verify(verifyReq);
		res.status(200).json(verifyRes);
	} catch (e) {
		res.status(500).send(e);
	}
});
