let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

/*function selectFruit(obj) {
  let keyArray = Object.keys(obj);
  let selectedFruits = {};

  for (let i = 0; i < keyArray.length; i += 1) {
    let currentKey = keyArray[i];
    let currentValue = obj[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue
    }
  }

  return selectedFruits;

}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
*/

function selectType(produceList, selectionCriterion) {
  let produceKeys = Object.keys(produceList);
  let selectedItems = {};

  for (let counter = 0; counter < produceKeys.length; counter += 1) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];


    if (currentValue === selectionCriterion) {
      selectedItems[currentKey] = currentValue;
    }

  }
  return selectedItems;

}

console.log(selectType(produce, 'Fruit'));
console.log(selectType(produce, 'Vegetable'));
console.log(selectType(produce, 'Meat'));