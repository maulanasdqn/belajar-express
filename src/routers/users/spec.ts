import request from "supertest";
import { app } from "@/main";
import { getDetailUser, getUsers } from "@/services";

describe("Test User routes", () => {
  test("Get all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.body).toEqual(await getUsers());
  });

  test("Get user by id", async () => {
    const id = "67b42cce-c088-4d71-8c35-b692b3bbf2af"
    const res = await request(app).get("/api/users/" + id);
    expect(res.body).toEqual(await getDetailUser(id));
  });

});
