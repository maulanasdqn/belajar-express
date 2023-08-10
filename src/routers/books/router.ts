import { Router, Request, Response } from "express";
import { booksDummy } from "./dummy";
import { TBookResponse } from "./types";

export const bookRouter = Router();

bookRouter.get("/", (_req: Request, res: Response<TBookResponse>): void => {
  res.status(200).send(booksDummy);
});
