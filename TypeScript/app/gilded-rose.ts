
import { Item } from "./item";
import { ItemUpdateFactory } from "./item.factory";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      const update = ItemUpdateFactory.getItemUpdate(item.name);
      if(update)
       update.updateQuality(item);
    });

    return this.items;
  }
}
