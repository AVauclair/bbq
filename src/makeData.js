var products = [
  { product: 'Огурчик'},
  { product: 'Перчик'},
  { product: 'Помидорчик'},
  { product: 'Пивасик'},
  { product: 'Арматура'},
];

var persons = [
  { name: 'Олег'},
  { name: 'Арина'},
  { name: 'Влад'},
  { name: 'Кристина'},
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getOrderList(count) {
  var data = [];
  for(var i = 0; i < count; i++) {
    let productIdx = randomInt(0, products.length - 1);
    let nameIdx = randomInt(0, persons.length - 1);
    data.push({
      product: products[productIdx].product,
      price: 10,
      persons: persons[nameIdx].name,
    });
  }
  return data;
}