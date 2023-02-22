import { Item } from "@/item";
import { GildedRose } from "@/gilded-rose";

describe("GildedRose", () => {
  it("should update quality of normal item by NormalUpdate instance", () => {
    const normalItem = new Item("foo", 10, 10);
    const gildedRose = new GildedRose([normalItem]);
    gildedRose.updateQuality();
    expect(normalItem.quality).toBe(9);
  });

  it("should update quality of aged item by AgedQualityUpdate instance", () => {
    const agedItem = new Item("Aged Brie", 10, 10);
    const gildedRose = new GildedRose([agedItem]);
    gildedRose.updateQuality();
    expect(agedItem.quality).toBe(11);
  });

  it("should update quality of sulfuras item by SulfurasQualityUpdate instance", () => {
    const sulfurasItem = new Item("Sulfuras, Hand of Ragnaros", 10, 80);
    const gildedRose = new GildedRose([sulfurasItem]);
    gildedRose.updateQuality();
    expect(sulfurasItem.quality).toBe(79);
  });

  it("should update quality of backstage item by BackStageQualityUpdate instance", () => {
    const backstageItem = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    const gildedRose = new GildedRose([backstageItem]);
    gildedRose.updateQuality();
    expect(backstageItem.quality).toBe(21);
  });

  it("should update quality of conjured item by ConjuredUpdate instance", () => {
    const conjuredItem = new Item("Conjured Mana Cake", 10, 10);
    const gildedRose = new GildedRose([conjuredItem]);
    gildedRose.updateQuality();
    expect(conjuredItem.quality).toBe(18);
  });
});
