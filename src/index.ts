/**
 * Required External Modules
 */

import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { identificationRouter } from "./identification/identify.router";
import { verificationRouter } from "./verification/verify.router";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = Number.parseInt(process.env.PORT as string, 10);

const app = express();
/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/identify", identificationRouter);
app.use("/api/verify", verificationRouter);

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
