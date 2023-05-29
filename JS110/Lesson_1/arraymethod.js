//console.log([1, 2, 3].filter(num => num + 1));

/*
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

  produceKeyValues.forEach(keyValue => {
  let [key, value] = keyValue;
  if (value === 'Vegetable') {
  onlyVegetables[key] = value;
  }
});

console.log(onlyVegetables);


let str = "What's up, Doc?";
str = str.split('')
   .filter(char => 'aeiou'.includes(char.toLowerCase()))
   .join('');

console.log(str);
//console.log(newStr);


let str = "What's up, Doc?";
str = str.split('')
         .map(char => char + char)
         .join('');

console.log(str);

console.log(Object.values(animals).some(animalName => animalName.length > 4));
console.log(Object.values(animals).some(animalName => animalName.length > 3));


console.log([1, 2, 3].every(num => num > 2))
console.log([4, 5, 3].every(num => num > 2))


let animals = { a: 'ant', b: 'bear', c: 'cat' };
console.log(Object.values(animals).every(animalName => animalName.length > 2));


console.log([2, 1, 4, 3, 5].findIndex(num => num > 2));
*/

console.log([1, 2, 3].every(num => {
  console.log (num = num * 2);
}));