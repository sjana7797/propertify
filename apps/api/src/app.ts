import express from "express";
import type { Express } from "express";
import { routes } from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const app: Express = express();

app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);

export { app };
