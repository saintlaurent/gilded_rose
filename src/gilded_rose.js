class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
const maxQuality = 60;
class Shop {
  
  constructor(items=[]){
    this.items = items;
  }

  static get MAX_QUALITY(){
    return 50;
  }

  static get MIN_QUALITY(){
    return 0;
  }

  updateQuality() { 
    for (var i = 0; i < this.items.length; i++) { 
      let currentItem = this.items[i];
      
      if(currentItem.name === 'Sulfuras, Hand of Ragnaros') { 
        currentItem.quality = 80;
        continue;
      };
      
      if(currentItem.name === 'Aged Brie') {
        currentItem.quality++;
      } else if(currentItem.name === 'Backstage passes to a TAFKAL80ETC concert') {
        switch(true) {
          case (currentItem.sellIn < 0):    
            currentItem.quality = Shop.MIN_QUALITY;
            break;
          case (currentItem.sellIn <= 5):  
            currentItem.quality = currentItem.quality + 3;
            break;
          case (currentItem.sellIn <= 10):
            currentItem.quality = currentItem.quality + 2;
            break;
          default:
            currentItem.quality++;
            break;            
        }
      } else if(currentItem.name === 'Conjured') {
        currentItem.quality = currentItem.sellIn < 0 ? currentItem.quality - 4 : currentItem.quality - 2;
      } else {
        currentItem.quality = currentItem.sellIn < 0 ? currentItem.quality - 2 : currentItem.quality - 1;
      }
      
      if(currentItem.quality > Shop.MAX_QUALITY) {
        currentItem.quality = Shop.MAX_QUALITY;
      } else if (currentItem.quality < Shop.MIN_QUALITY) {
        currentItem.quality = Shop.MIN_QUALITY;
      }
      
      this.items[i].sellIn--;
    }  
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
