import { Router, Request, Response } from "express";
import { users } from "./dummy";

const bookRouter = Router();

bookRouter.get("/", (_req: Request, res: Response): void => {
  res.status(200).send(users);
});

export { bookRouter };
