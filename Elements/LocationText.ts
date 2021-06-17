import { NodeCanvasRenderingContext2D } from "canvas";
import { Border } from "./Border";
import { Sheet } from "./Sheet";

export class LocationText {
  fontFamily: string;
  color: string;
  size: number;
  align: CanvasTextAlign;
  margin: number;
  text: string;
  bottomPositionY: number;

  constructor(
    fontFamily = "Verdana",
    color = "#000000",
    size = 16,
    align = "center" as CanvasTextAlign,
    margin = 50,
    text = "Здесь будет Ваш текст"
  ) {
    this.fontFamily = fontFamily;
    this.color = color;
    this.size = size;
    this.align = align;
    this.margin = margin;
    this.text = text;

    this.bottomPositionY = 0;
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

    this.bottomPositionY = totalY;
  }

  draw(
    ctx: NodeCanvasRenderingContext2D,
    sheet: Sheet,
    prevElemPositionY: number
  ) {
    const x = sheet.size.width / 2;
    const y = sheet.size.height - prevElemPositionY - this.margin;
    const width = sheet.size.width - prevElemPositionY - this.margin * 2;

    ctx.font = this.size + "px " + this.fontFamily;
    ctx.textAlign = this.align;

    this._wrapText(ctx, this.text, x, y, width, this.size * 1.3);
  }
}
