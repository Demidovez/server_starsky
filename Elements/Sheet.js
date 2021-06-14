const { DEFAULT_SIZE } = require("../constants/Constants");

export default class Sheet {
  constructor(size = DEFAULT_SIZE, backgroundColor = "#FFFFFF", image = null) {
    this.size = size;
    this.backgroundColor = backgroundColor;
    this.image = image;
  }
}
