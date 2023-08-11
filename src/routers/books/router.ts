import { Router, Request, Response } from "express";
import { booksDummy } from "./dummy";
import { TBookDetailResponse, TBookResponse } from "./types";

export const bookRouter = Router();

bookRouter.get(
  "/books",
  (_req: Request, res: Response<TBookResponse>): void => {
    res.status(200).send(booksDummy);
  },
);

bookRouter.get(
  "/books/:id",
  (req: Request, res: Response<TBookDetailResponse>): void => {
    const id = req.params?.id;
    res.status(200).send({
      data: booksDummy?.data?.filter((x) => x.id === id)?.[0],
    });
  },
);
