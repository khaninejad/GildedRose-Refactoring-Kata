import { IItem } from "@/interface/item";
import { ConjuredUpdate } from "@/items/conjured.update";


describe("ConjuredUpdate", () => {
  it("Conjured Mana Cake", () => {
    const item: IItem = { name: "Conjured Mana Cake", sellIn: 3, quality: 6 };
    const conjuredUpdate = new ConjuredUpdate();

    conjuredUpdate.updateQuality(item);

    expect(item.quality).toBe(10);
  });
});