import express from "express";
import itemsRouter from "./items";

const app = express();
app.use(express.json());
app.use("/items", itemsRouter);

export default app;
