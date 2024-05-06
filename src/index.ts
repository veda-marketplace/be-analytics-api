/**
 * Required External Modules
 */

import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { identificationRouter } from "./identification/identify.router";
import { verificationRouter } from "./verification/verify.router";

dotenv.config();

/**
 * App Variables
 */

const PORT: number = Number.parseInt(process.env.PORT || "7000", 10);

const app = express();
/**
 *  App Configuration
 */

app.use(morgan('[:date[clf]] ":method :url" :status - :response-time ms'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/identify", identificationRouter);
app.use("/api/verify", verificationRouter);

/**
 * Server Activation
 */

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

/**
 * Server Shutdown
 */

function shutDown() {
	console.log("Shutting Server down gracefully");

	server.close(() => {
		console.log("Server closed");
		process.exit(0);
	});
}

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
