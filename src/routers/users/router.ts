import { Router, Request, Response } from "express";
import { usersDummy } from "./dummy";
import { TUserResponse } from "./types";

export const userRouter = Router();

userRouter.get("/", (_req: Request, res: Response<TUserResponse>): void => {
  res.status(200).send(usersDummy);
});
