import request from "supertest";

import app from "../src/app";

describe("NFT Identification", () => {
	describe("POST /identify", () => {
		test("Should return the NFT Annotations", async () => {
			const res = await request(app).get("/api/identify/0x50");
			expect(res.status).toEqual(200);
		});
	});
});
