function digitList (num) {
  numToString = String(num);
  let array = numToString.split('');
  return array.map(x => Number(x));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]