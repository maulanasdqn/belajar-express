import request from "supertest";
import { app } from "@/main";
import { booksDummy } from "./dummy";

describe("Test Book routes", () => {
  test("Get all books", async () => {
    const res = await request(app).get("/books");
    expect(res.body).toEqual(booksDummy);
  });
});
