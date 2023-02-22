import { IItem } from "@/interface/item";
import { NormalUpdate } from "@/items/normal.update";


describe("NormalQualityUpdate", () => {
  it("+5 Dexterity Vest", () => {
    const item: IItem = { name: "+5 Dexterity Vest", sellIn: 10, quality: 20 };
    const normalUpdate = new NormalUpdate();

    normalUpdate.updateQuality(item);

    expect(item.quality).toBe(19);
  });

  it("Elixir of the Mongoose", () => {
    const item: IItem = { name: "Elixir of the Mongoose", sellIn: 5, quality: 7 };
    const normalUpdate = new NormalUpdate();

    normalUpdate.updateQuality(item);

    expect(item.quality).toBe(6);
  });

});