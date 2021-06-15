import { Sheet } from "../Elements/Sheet";
import { createCanvas } from "canvas";
import { Border } from "../Elements/Border";
import { StarMap } from "../Elements/StarMap";
import { Description } from "../Elements/Description";

export const classic_1 = () => {
  const options = {
    width: 600,
    height: 700,
  };

  const sheet = new Sheet(
    { width: options.width, height: options.height },
    "black",
    null
  );

  const border = new Border(2, 40, "black");
  const starMap = new StarMap(
    "circle",
    300,
    300,
    { color: "gray", width: 10, image: null },
    { color: "black", height: 10 },
    { color: "black", height: 10 },
    50
  );
  const description = new Description(
    "Verdana",
    "#000000",
    60,
    "center",
    30,
    "День, когда все sdfsf sdf sdf sd fsdfdddd остановилось..."
  );

  const canvas = createCanvas(sheet.size.width, sheet.size.height);
  const ctx = canvas.getContext("2d");

  sheet.draw(ctx);
  border.draw(ctx, sheet);
  starMap.draw(ctx, sheet, border);
  description.draw(ctx, sheet, border, starMap);

  return canvas;
};
