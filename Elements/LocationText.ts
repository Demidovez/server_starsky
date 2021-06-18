import { NodeCanvasRenderingContext2D } from "canvas";
import { Position } from "../types";
import { Border } from "./Border";
import { Sheet } from "./Sheet";

export class LocationText {
  fontFamily: string;
  color: string;
  size: number;
  align: CanvasTextAlign;
  margin: number;
  text: string;
  position: number;
  width: number;
  heigth: number;
  x: number;
  y: number;

  constructor(
    fontFamily = "Verdana",
    color = "#000000",
    size = 16,
    align = "center" as CanvasTextAlign,
    margin = 50,
    text = "Здесь будет Ваш текст",
    position = 100
  ) {
    this.fontFamily = fontFamily;
    this.color = color;
    this.size = size;
    this.align = align;
    this.margin = margin;
    this.text = text;
    this.position = position;

    this.width = 0;
    this.heigth = 0;
    this.x = 0;
    this.y = 0;
  }

  getPosition(): Position {
    return {
      width: this.width,
      height: this.heigth,
      x: this.x,
      y: this.y - this.size,
    };
  }

  _wrapText(
    ctx: NodeCanvasRenderingContext2D,
    text: String,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) {
    const words = text.split(" ");
    let line = "";
    let totalY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, totalY);
        line = words[n] + " ";
        totalY += lineHeight;
      } else {
        line = testLine;
      }
    }

    ctx.fillText(line, x, totalY);

    this.heigth = totalY - this.size;
  }

  draw(
    ctx: NodeCanvasRenderingContext2D,
    sheet: Sheet,
    parentPosition: Position
  ) {
    this.x = sheet.size.width / 2;
    this.y = parentPosition.y + parentPosition.height + this.margin;
    this.width = sheet.size.width - this.margin * 2;

    ctx.font = this.size + "px " + this.fontFamily;
    ctx.textAlign = this.align;

    this._wrapText(ctx, this.text, this.x, this.y, this.width, this.size * 1.3);
  }
}
