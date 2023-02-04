import { Router } from "express";
import express from "express";
import Post from "./post.js";
import Users from "./users.js";
import auth from "./auth.js";

const router = Router();

router.get("/");
router.use(express.json());

//Analiza las requests entrantes codificadas en urlencoded y se basa a body-parser
router.use(express.urlencoded({ extended: true }));

router.use("/posts", Post);
router.use("/users", Users);
router.use("/auth", auth);

export default router;
