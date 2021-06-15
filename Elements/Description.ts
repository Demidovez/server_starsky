import { NodeCanvasRenderingContext2D } from "canvas";
import { Border } from "./Border";
import { Sheet } from "./Sheet";
import { StarMap } from "./StarMap";

export class Description {
  fontFamily: string;
  color: string;
  size: number;
  align: CanvasTextAlign;
  margin: number;
  text: string;

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
  }

  draw(
    ctx: NodeCanvasRenderingContext2D,
    sheet: Sheet,
    border: Border,
    starMap: StarMap
  ) {
    const x = sheet.size.width / 2;
    const y =
      border.margin +
      border.width +
      starMap.margin * 2 +
      starMap.border.width * 2 +
      starMap.height +
      this.size / 2;
    const width =
      sheet.size.width - border.margin * 2 - border.width * 2 - this.margin * 2;

    ctx.font = this.size + "px " + this.fontFamily;
    ctx.textAlign = this.align;
    ctx.fillText(this.text, x, y, width);
  }
}
