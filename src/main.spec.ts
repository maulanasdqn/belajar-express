import request from "supertest";
import { app } from "@/main";

describe("Test main.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: "Test" });
  });
});
