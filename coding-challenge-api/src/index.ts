import express, { Request, Response } from "express";

import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());
app.get("/user", getUser);

app.get("/sales", (req, res) => {
  /** Write an api for the widget */
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export function getUser(req: any, res: any) {
  res.json({
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@email.com",
    id: 1,
  });
}
