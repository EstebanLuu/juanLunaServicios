import {
  getUsers,
  createUser,
  upDateUser,
  deleteUser,
  getUser,
} from "../controllers/index.controllers.js";
import { Router } from "express";

const Users = Router();

Users.get("/", getUsers);
Users.get("/:id", getUser);
Users.put("/:id", upDateUser);
Users.delete("/:id", deleteUser);

export default Users;
