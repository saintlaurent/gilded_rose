var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("Quality never exceeds 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -2, 49), 
                                  new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49),
                                  new Item("None of the above", 3, 49)]);
   
    const shop = gildedRose.updateQuality();
    expect(shop[0].quality).to.equal(50);
    expect(shop[1].quality).to.equal(50);
    expect(shop[2].quality).to.equal(48);
  });

  it("Quality is never negative", function() {
    const gildedRose = new Shop([ new Item("Apple", -2, 0), 
                                  new Item("Oranges", 0, -6)]);
   
    const shop = gildedRose.updateQuality();
    expect(shop[0].quality).to.equal(0);
    expect(shop[1].quality).to.equal(0);
  });

  it("Quality degrades twice as fast after sell by date", function() {
    const gildedRose = new Shop([ new Item("Apples", 2, 15), 
                                  new Item("Bananas", -2, 49)]);
   
    const shop = gildedRose.updateQuality();
    expect(shop[0].quality).to.equal(14);
    expect(shop[1].quality).to.equal(47);
    
  });

  it("Backstage passes increase in value as sell by date approaches", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 2, 15), 
                                  new Item("Backstage passes to a TAFKAL80ETC concert", -1, 35),
                                  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 12)]);
   
    const shop = gildedRose.updateQuality();
    expect(shop[0].quality).to.equal(18);
    expect(shop[1].quality).to.equal(0);
    expect(shop[2].quality).to.equal(14);
  });

  it("Conjured items degrade twice as fast", function() {
    const gildedRose = new Shop([ new Item("Conjured", 2, 15), 
                                  new Item("Conjured", 0, 15),
                                  new Item("Conjured", -2, 15)]);
   
    const shop = gildedRose.updateQuality();
    expect(shop[0].quality).to.equal(13);
    expect(shop[1].quality).to.equal(13);
    expect(shop[2].quality).to.equal(11);
  });

});
