import { NodeCanvasRenderingContext2D } from "canvas";
import { DEFAULT_SIZE } from "../constants/Constants";
import { Border } from "./Border";
import { Sheet } from "./Sheet";

export class Separator {
  size: { width: number; height: number };
  margin: number;
  backgroundColor: string;
  image: any;

  constructor(
    size = DEFAULT_SIZE,
    margin = 30,
    backgroundColor = "#000000",
    image = null
  ) {
    this.size = size;
    this.margin = margin;
    this.backgroundColor = backgroundColor;
    this.image = image;
  }

  draw(
    ctx: NodeCanvasRenderingContext2D,
    sheet: Sheet,
    prevElemPositionY: number
  ) {
    ctx.moveTo(
      (sheet.size.width - this.size.width) / 2,
      prevElemPositionY + this.margin
    );
    ctx.lineTo(
      (sheet.size.width - this.size.width) / 2 + this.size.width,
      prevElemPositionY + this.margin
    );
    ctx.stroke();
  }
}
