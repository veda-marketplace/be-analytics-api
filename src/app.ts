import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { identificationRouter } from "./identification/identify.router";
import { verificationRouter } from "./verification/verify.router";

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

export default app;
