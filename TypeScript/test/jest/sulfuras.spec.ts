import { IItem } from "@/interface/item";
import { SulfurasQualityUpdate } from "@/items/sulfuras.update";


describe("SulfurasQualityUpdate", () => {
  it("zero sellin in with positive quality", () => {
    const item: IItem = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 };
    const sulfurasQualityUpdate = new SulfurasQualityUpdate();

    sulfurasQualityUpdate.updateQuality(item);

    expect(item.quality).toBe(79);
  });

  it("negative sellin in with positive quality", () => {
    const item: IItem = { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 };
    const sulfurasQualityUpdate = new SulfurasQualityUpdate();

    sulfurasQualityUpdate.updateQuality(item);

    expect(item.quality).toBe(79);
  });

  it("negative sellin in with negative quality", () => {
    const item: IItem = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 20 };
    const sulfurasQualityUpdate = new SulfurasQualityUpdate();

    sulfurasQualityUpdate.updateQuality(item);

    expect(item.quality).toBe(21);
  });

});