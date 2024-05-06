import * as dotenv from "dotenv";
import app from "./app";

dotenv.config();

/**
 * App Variables
 */

const PORT: number = Number.parseInt(process.env.PORT || "7000", 10);

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
