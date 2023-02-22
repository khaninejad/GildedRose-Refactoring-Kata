import { IItem } from "@/interface/item";
import { IItemUpdate } from "@/interface/item.update";

export class BackStageQualityUpdate implements IItemUpdate {
    updateQuality(item: IItem): void {
      if (item.quality < 50) {
        item.quality++;
  
        if (item.sellIn < 11) {
          item.quality++;
        }
  
      }
  
      item.sellIn--;
  
      if (item.sellIn < 0) {
        item.quality = item.quality - item.quality;
      }
    }
  
  }