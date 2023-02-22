import { IItem } from "@/interface/item"
import { IItemUpdate } from "@/interface/item.update"

export class SulfurasQualityUpdate implements IItemUpdate {
    updateQuality(item: IItem): void {
      if (item.quality < 50 && item.quality > 0) {
        item.quality++;
      }else{
        item.quality--;
      }
    }
  }