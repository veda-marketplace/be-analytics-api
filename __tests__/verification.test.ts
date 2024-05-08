import request from "supertest";

import app from "../src/app";

describe("NFT Verification", () => {
	describe("POST /verify", () => {
		test("Should return the NFT Uniqeness", async () => {
			const res = await request(app).get("/api/verify/0x50");
			expect(res.status).toEqual(200);
		});
	});
});
