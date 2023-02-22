import { IItem } from "./interface/item";

export class Item implements IItem {
    name: string;
    sellIn: number;
    quality: number;
  
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }