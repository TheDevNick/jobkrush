import type { Workspace } from "@jobkrush/types";
import cors from "cors";
import type { Express, Request, Response } from "express";
import express, { json, urlencoded } from "express";
import { StatusCodes } from "http-status-codes";
import morgan from "morgan";
import { pino } from "pino";

export const logger = pino({
  name: "jobkrush-api",
  transport: {
    target: "pino-pretty",
  },
});

export const createServer = (): Express => {
  const app = express();

  app.disable("x-powered-by");
  app.use(morgan("dev"));
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.get("/message/:name", (req: Request, res: Response) => {
    res.json({ message: `hello ${req.params.name}` });
  });

  app.get("/status", (_, res: Response) => {
    res.json({ status: StatusCodes.OK });
  });

  app.get("/workspaces", (_, response: Response) => {
    const workspaces: Workspace[] = [
      { name: "@jobkrush/api", version: "1.0.0" },
      { name: "@jobkrush/types", version: "1.0.0" },
      { name: "@jobkrush/web", version: "1.0.0" },
    ];
    response.json({ data: workspaces });
  });

  return app;
};
