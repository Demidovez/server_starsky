import { NodeCanvasRenderingContext2D } from "canvas";
import { DEFAULT_SIZE } from "../constants/Constants";
import { Position } from "../types";
import { Border } from "./Border";
import { Sheet } from "./Sheet";

export class Separator {
  size: { width: number; height: number };
  margin: number;
  backgroundColor: string;
  image: any;
  position: number;
  x: number;
  y: number;

  constructor(
    size = DEFAULT_SIZE,
    margin = 30,
    backgroundColor = "#000000",
    image = null,
    position = 100
  ) {
    this.size = size;
    this.margin = margin;
    this.backgroundColor = backgroundColor;
    this.image = image;
    this.position = position;

    this.x = 0;
    this.y = 0;
  }

  getPosition(): Position {
    return {
      width: this.size.width,
      height: this.size.height,
      x: this.x,
      y: this.y,
    };
  }

  draw(
    ctx: NodeCanvasRenderingContext2D,
    sheet: Sheet,
    parentPosition: Position
  ) {
    this.x = (sheet.size.width - this.size.width) / 2;
    this.y = parentPosition.y + parentPosition.height + this.margin;

    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.size.width, this.y);
    ctx.stroke();
  }
}
