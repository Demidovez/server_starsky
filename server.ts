import express from "express";
const app = express();
const port = 3000;
import { classic_1 } from "./templates/classic_1";

app.get("/classic", (req, res) => {
  res.setHeader("Content-Type", "image/png");

  classic_1().createPNGStream().pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
