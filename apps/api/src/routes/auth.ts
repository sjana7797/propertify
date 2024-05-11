import { Router } from "express";
import { signUp } from "~api/controller/auth";

const authRoute: Router = Router();

authRoute.post("/signup", signUp);

export { authRoute };
