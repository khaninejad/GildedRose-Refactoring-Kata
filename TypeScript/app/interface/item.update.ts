import { IItem } from "./item";

export interface IItemUpdate {
    updateQuality(item: IItem): void;
  }