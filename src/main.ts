import express, { Express, Request, Response, NextFunction } from "express";
import { bookRouter, userRouter } from "@/routers";

type TRootResponse = {
  message: string;
}

export const app: Express = express();

app.use("/api", userRouter)
app.use("/api", bookRouter)

app.use("/", (_req: Request, res: Response<TRootResponse>, _next: NextFunction): void => {
  res.json({ message: "Test" });
});

