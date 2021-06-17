import express from "express";
const app = express();
const port = 3000;
import { classic_1 } from "./templates/classic_1";

// Создаем картину по шаблону №1 - Классический
app.get("/classic", (req, res) => {
  res.setHeader("Content-Type", "image/png");

  const options = {
    width: 2480,
    height: 3508,
    sheet: {
      color: "#ffffff",
    },
    border: {
      color: "#000000",
    },
    starmap: {
      shape: "circle",
      borderColor: "gray",
      index: 0,
    },
    description: {
      fontFamily: "Verdana",
      color: "#000000",
      align: "center" as CanvasTextAlign,
      text: "День, когда все sdfsf sdf sdf sd fsdfdddd остановилось...",
      index: 1,
    },
    separator: {
      color: "#000000",
      index: 2,
    },
    location: {
      fontFamily: "Verdana",
      color: "#000000",
      align: "center" as CanvasTextAlign,
      text: "Москва, 2021",
      index: 3,
    },
  };

  classic_1(options).createPNGStream().pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
