import { NodeCanvasRenderingContext2D } from "canvas";
import { DEFAULT_SIZE } from "../constants/Constants";

export class Sheet {
  size: { width: number; height: number };
  backgroundColor: string;
  image: any;

  constructor(size = DEFAULT_SIZE, backgroundColor = "#FFFFFF", image = null) {
    this.size = size;
    this.backgroundColor = backgroundColor;
    this.image = image;
  }

  draw(ctx: NodeCanvasRenderingContext2D) {}
}
