import { Sheet } from "../Elements/Sheet";
import { createCanvas } from "canvas";
import { Border } from "../Elements/Border";
import { StarMap } from "../Elements/StarMap";
import { Description } from "../Elements/Description";
import { Separator } from "../Elements/Separator";
import { LocationText } from "../Elements/LocationText";

export const classic_1 = (options: any) => {
  // Создаем холст
  const sheet = new Sheet(
    { width: options.width, height: options.height },
    options.sheet.color,
    null
  );

  // Создаем рамку
  const border = new Border(
    options.width * 0.004,
    options.width * 0.08,
    options.border.color
  );

  // Создаем звездную карту
  const starMap = new StarMap(
    options.starmap.shape,
    options.width / 2,
    options.width / 2,
    {
      color: options.starmap.borderColor,
      width: options.width * 0.02,
      image: null,
    },
    options.width * 0.2,
    options.starmap.position
  );

  // Создаем описание (текст пользователя)
  const description = new Description(
    options.description.fontFamily,
    options.description.color,
    options.width * 0.04,
    options.description.align,
    options.width * 0.09,
    options.description.text,
    options.description.position
  );

  // Создаем разделитель (полоска)
  const separator = new Separator(
    { width: sheet.size.width * 0.6, height: 10 },
    options.width * 0.2,
    options.separator.color,
    null,
    options.separator.position
  );

  // Создаем расположение (город, широта и долгота, и пр.)
  const locationText = new LocationText(
    options.location.fontFamily,
    options.location.color,
    options.width * 0.02,
    options.location.align,
    options.width * 0.06,
    options.location.text,
    options.location.position
  );

  const canvas = createCanvas(sheet.size.width, sheet.size.height);
  const ctx = canvas.getContext("2d");

  // Рисуем холст и рамку
  sheet.draw(ctx);
  border.draw(ctx, sheet);

  // Создаем список елементов отрисовки
  const elements = new Map<number, any>();
  elements.set(options.starmap.index, starMap);
  elements.set(options.description.index, description);
  elements.set(options.separator.index, separator);
  elements.set(options.location.index, locationText);

  // Сортируем элементы согласно порядку, определенным пользователем
  const sortedElements = [...elements.entries()].sort((a, b) => a[0] - b[0]);

  // Рисуем все элементы (3й параметр - позиция предыдущего элемента)
  sortedElements.map((elem, index) =>
    elem[1].draw(
      ctx,
      sheet,
      index - 1 >= 0
        ? sortedElements[index - 1][1].getPosition()
        : { width: 0, height: 0, x: 0, y: 0 }
    )
  );

  return canvas;
};
