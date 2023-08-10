import express, { Application, Request, Response, NextFunction } from "express";
import { userRouter } from "@/routers";

export const app: Application = express();

app.use("/users", userRouter)

app.use("/", (_req: Request, res: Response, _next: NextFunction): void => {
  res.json({ message: "Test" });
});

