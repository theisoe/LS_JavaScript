//Write two distinct ways of reversing the array without mutating the original array. 

let numbers = [1, 2, 3, 4, 5];
let newNumber = numbers.slice();
newNumber.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let spreadArray = [...numbers];
spreadArray.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

