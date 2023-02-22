import { IItem } from "@/interface/item";
import { IItemUpdate } from "@/interface/item.update";

export class AgedQualityUpdate implements IItemUpdate {
    updateQuality(item: IItem): void {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
  
      item.sellIn = item.sellIn - 1;
      if (item.sellIn < 0 && item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
  
  } 