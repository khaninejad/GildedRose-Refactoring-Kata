import { IItem } from "@/interface/item";
import { AgedQualityUpdate } from "@/items/aged.update";

describe("AgedQualityUpdate", () => {
  it("should increase quality sellIn bigger", () => {
    const item: IItem = { name: "Aged Brie", sellIn: 5, quality: 10 };
    const agedQualityUpdate = new AgedQualityUpdate();

    agedQualityUpdate.updateQuality(item);

    expect(item.quality).toBe(11);
  });

  it("should increase the quality by 2  if sellfi less than zero", () => {
    const item: IItem = { name: "Aged Brie", sellIn: -5, quality: 10 };
    const agedQualityUpdate = new AgedQualityUpdate();

    agedQualityUpdate.updateQuality(item);

    expect(item.quality).toBe(12);
  });

  it("should not increase the quality above 50", () => {
    const item: IItem = { name: "Aged Brie", sellIn: -5, quality: 50 };
    const agedQualityUpdate = new AgedQualityUpdate();

    agedQualityUpdate.updateQuality(item);

    expect(item.quality).toBe(50);
  });
});