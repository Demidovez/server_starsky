import { NodeCanvasRenderingContext2D } from "canvas";
import { Sheet } from "./Sheet";

export class Border {
  width: number;
  margin: number;
  color: string;
  image: any;

  constructor(width = 10, margin = 50, color = "#000000", image = null) {
    this.width = width;
    this.margin = margin;
    this.color = color;
    this.image = image;
  }

  draw(ctx: NodeCanvasRenderingContext2D, sheet: Sheet) {
    const x = this.margin;
    const y = this.margin;
    const width = sheet.size.width - 2 * this.margin;
    const height = sheet.size.height - 2 * this.margin;

    ctx.lineWidth = this.width;
    ctx.strokeRect(x, y, width, height);
  }
}
