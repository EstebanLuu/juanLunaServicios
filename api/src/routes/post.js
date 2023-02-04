import { Router } from "express";
import { getPosts, createPosts } from "../controllers/index.controllers.js";


const Post = Router();

Post.get("/", getPosts);

Post.post("/", createPosts)

export default Post;
