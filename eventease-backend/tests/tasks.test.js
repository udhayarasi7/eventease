import request from "supertest";
import { app } from "../server.js";
import mongoose from "mongoose";

describe("Server Test", () => {
  it("should respond from root route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});