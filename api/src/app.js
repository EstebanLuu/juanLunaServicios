import express from "express";
import blogsRoutes from "./routes/index.js";

const app = express();

//middleware

app.use(blogsRoutes);

export default app;
