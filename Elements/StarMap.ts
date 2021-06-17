import { NodeCanvasRenderingContext2D } from "canvas";
import { Border } from "./Border";
import { Sheet } from "./Sheet";

export class StarMap {
  shape: string;
  height: number;
  width: number;
  border: { color: string; width: number; image: any };
  margin: number;
  x: number;
  y: number;

  constructor(
    shape = "circle",
    width = 100,
    height = 100,
    border = { color: "gray", width: 5, image: null },
    margin = 50
  ) {
    this.shape = shape;
    this.width = width;
    this.height = height;
    this.border = border;
    this.margin = margin;

    this.x = 0;
    this.y = 0;
  }

  draw(
    ctx: NodeCanvasRenderingContext2D,
    sheet: Sheet,
    prevElemPositionY: number
  ) {
    this.x = sheet.size.width / 2;
    this.y =
      prevElemPositionY + this.margin + this.border.width + this.height / 2;
    const radius = this.width / 2;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;

    ctx.strokeStyle = "#000000";

    // Рисуем подложку с выступом (для рамки)
    ctx.beginPath();
    ctx.fillStyle = this.border.color;
    if (this.shape == "circle") {
      ctx.arc(this.x, this.y, radius + this.border.width, startAngle, endAngle);
    } else {
      ctx.arc(this.x, this.y, radius + this.border.width, startAngle, endAngle);
    }
    ctx.fill();
    ctx.closePath();

    // Рисуем карту
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    if (this.shape == "circle") {
      ctx.arc(this.x, this.y, radius, startAngle, endAngle);
    } else {
      ctx.arc(this.x, this.y, radius, startAngle, endAngle);
    }
    ctx.fill();
    ctx.closePath();
  }
}
