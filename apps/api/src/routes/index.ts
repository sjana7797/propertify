import { Router } from "express";
import { authRoute } from "./auth";

const routes: Router = Router();

routes.get("/health", (req, res) => {
  return res.status(200).send("OK");
});

routes.use("/auth", authRoute);

export { routes };
