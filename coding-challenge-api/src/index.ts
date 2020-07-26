import cors from "cors";
import express from "express";

const app = express();
const port = 8080;

app.use(cors());
app.get("/user", (req, res) => {
  res.json({
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@email.com",
    id: 1,
  });
});

app.get("/sales", (req, res) => {
  /** Write an api for the widget */
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
