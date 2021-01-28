var {Shop, Item} = require('./src/gilded_rose.js');
// constructor(name, sellIn, quality)
const gildedRose = new Shop([ new Item("Conjured", -2, 42) ]);
const items = gildedRose.updateQuality();

console.log(items);