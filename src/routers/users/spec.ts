import request from "supertest";
import { app } from "@/main";
import { usersDummy } from "./dummy";

describe("Test User routes", () => {
  test("Get all users", async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual(usersDummy);
  });
});
