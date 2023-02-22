import { IItemUpdate } from "./interface/item.update";
import { AgedQualityUpdate } from "./items/aged.update";
import { BackStageQualityUpdate } from "./items/backstage.update";
import { ConjuredUpdate } from "./items/conjured.update";
import { NormalUpdate } from "./items/normal.update";
import { SulfurasQualityUpdate } from "./items/sulfuras.update";

export class ItemUpdateFactory {
    static getItemUpdate(name: string): IItemUpdate {
      // Some people think the switch case is a code smell but anyway we used it.
      switch (name) {
        case 'Aged Brie':
          return new AgedQualityUpdate();
        case 'Backstage passes to a TAFKAL80ETC concert':
          return new BackStageQualityUpdate();
        case 'Sulfuras, Hand of Ragnaros':
          return new SulfurasQualityUpdate();
          case 'Conjured Mana Cake':
          return new ConjuredUpdate();
        default:
          return new NormalUpdate();
      }
    }
  }