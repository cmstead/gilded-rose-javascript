function Item(name, sell_in, quantity) {
  this.name = name;
  this.sell_in = sell_in;
  this.quantity = quantity;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function updateQuantity() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quantity > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quantity = items[i].quantity - 1
        }
      }
    } else {
      if (items[i].quantity < 50) {
        items[i].quantity = items[i].quantity + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quantity < 50) {
              items[i].quantity = items[i].quantity + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quantity < 50) {
              items[i].quantity = items[i].quantity + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quantity > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quantity = items[i].quantity - 1
            }
          }
        } else {
          items[i].quantity = items[i].quantity - items[i].quantity
        }
      } else {
        if (items[i].quantity < 50) {
          items[i].quantity = items[i].quantity + 1
        }
      }
    }
  }

  return items;
}

module.exports = {
  updateQuantity
};