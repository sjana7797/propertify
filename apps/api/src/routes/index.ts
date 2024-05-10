import { Router } from "express";

const routes: Router = Router();

routes.get("/health", (req, res) => {
  return res.status(200).send("OK");
});

export { routes };
