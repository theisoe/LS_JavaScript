function twice(number) {
  let stringNum = String(number);
  let index = stringNum.length / 2;

  if(stringNum.slice(0, index) === stringNum.slice(index)) {
    return number;
  } else if (stringNum.slice(0, index) !== stringNum.slice(index)) {
    return number * 2;
  }
}

console.log(twice(44));
console.log(twice(37));          // 74
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(763764));        // 7676
