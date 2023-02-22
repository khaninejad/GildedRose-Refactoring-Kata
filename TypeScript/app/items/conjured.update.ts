import { IItem } from "@/interface/item";
import { IItemUpdate } from "@/interface/item.update";

export class ConjuredUpdate implements IItemUpdate {
    updateQuality(item: IItem): void {
      item.quality--
      item.sellIn--;
  
      if (item.sellIn < 0) {
        item.quality--;
      }
      item.quality*=2;
    }
  
  }