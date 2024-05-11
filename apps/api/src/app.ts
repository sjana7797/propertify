import express from "express";
import type { Express } from "express";
import { routes } from "./routes";

const app: Express = express();

app.use(express.json());

app.use("/api", routes);

export { app };
