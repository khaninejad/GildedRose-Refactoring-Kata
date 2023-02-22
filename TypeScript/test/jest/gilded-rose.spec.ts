import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

describe('Gilded Rose Legecy Tests', () => {
  it('sellin quality update', () => {
    const gildedRose = new GildedRose([new Item('foo', -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
  it('sellin quality update if its Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });

  it('sellin quality update if its Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
  });

  it('sellin quality update if its Backstage passes to a TAFKAL80ETC concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('quality update if its not Aged & Backstage and quality bigger than 0', () => {
    const gildedRose = new GildedRose([new Item('foo', -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });
});
