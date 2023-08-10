import express, { Application, Request, Response, NextFunction } from "express";
import { bookRouter, userRouter } from "@/routers";

type TRootResponse = {
  message: string;
}

export const app: Application = express();

app.use("/users", userRouter)
app.use("/books", bookRouter)

app.use("/", (_req: Request, res: Response<TRootResponse>, _next: NextFunction): void => {
  res.json({ message: "Test" });
});

