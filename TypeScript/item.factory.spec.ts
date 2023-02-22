import { IItemUpdate } from "@/interface/item.update";
import { ItemUpdateFactory } from "@/item.factory";
import { AgedQualityUpdate } from "@/items/aged.update";
import { BackStageQualityUpdate } from "@/items/backstage.update";
import { ConjuredUpdate } from "@/items/conjured.update";
import { NormalUpdate } from "@/items/normal.update";
import { SulfurasQualityUpdate } from "@/items/sulfuras.update";

describe("ItemUpdateFactory", () => {
  describe("getItemUpdate", () => {
    it("should return AgedQualityUpdate instance for 'Aged Brie' item name", () => {
      const result: IItemUpdate = ItemUpdateFactory.getItemUpdate("Aged Brie");
      expect(result).toBeInstanceOf(AgedQualityUpdate);
    });

    it("should return BackStageQualityUpdate instance for 'Backstage passes to a TAFKAL80ETC concert' item name", () => {
      const result: IItemUpdate = ItemUpdateFactory.getItemUpdate("Backstage passes to a TAFKAL80ETC concert");
      expect(result).toBeInstanceOf(BackStageQualityUpdate);
    });

    it("should return SulfurasQualityUpdate instance for 'Sulfuras, Hand of Ragnaros' item name", () => {
      const result: IItemUpdate = ItemUpdateFactory.getItemUpdate("Sulfuras, Hand of Ragnaros");
      expect(result).toBeInstanceOf(SulfurasQualityUpdate);
    });

    it("should return ConjuredUpdate instance for 'Conjured Mana Cake' item name", () => {
      const result: IItemUpdate = ItemUpdateFactory.getItemUpdate("Conjured Mana Cake");
      expect(result).toBeInstanceOf(ConjuredUpdate);
    });

    it("should return NormalUpdate instance for any other item name", () => {
      const result: IItemUpdate = ItemUpdateFactory.getItemUpdate("any other item name");
      expect(result).toBeInstanceOf(NormalUpdate);
    });
  });
});