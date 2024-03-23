import express, { Request, Response } from "express";

import cors from "cors";
import { getUser } from "./user";
import { getOrders } from "./orders";

const app = express();
const port = 8080;

app.use(cors());
app.get("/user", getUser);

app.get("/sales", (req, res) => {
  /** Write an api for the widget */
  getOrders(req, res);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
