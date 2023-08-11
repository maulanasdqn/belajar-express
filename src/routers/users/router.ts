import { Router, Request, Response } from "express";
import { TUserDetailResponse, TUserResponse } from "./types";
import { getDetailUser, getUsers } from "@/services";

export const userRouter = Router();

userRouter.get(
  "/users",
  async (_req: Request, res: Response<TUserResponse>): Promise<void> => {
    res.status(200).send(await getUsers());
  },
);

userRouter.get(
  "/users/:id",
  async (req: Request, res: Response<TUserDetailResponse>): Promise<void> => {
    const id = req.params?.id
    res.status(200).send(await getDetailUser(id));
  },
);
