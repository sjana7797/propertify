import express from "express";
import type { Express } from "express";
import { routes } from "./routes";

const app: Express = express();

app.use(routes);

export { app };
