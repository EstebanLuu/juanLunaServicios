import { Router } from "express";
import { createUser, loginUser } from "../controllers/index.controllers.js";

const auth = Router();

auth.post("/login", loginUser);
auth.post("/register", createUser);

export default auth;
