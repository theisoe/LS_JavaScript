let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.slice(0);

newNumbers.reverse();
console.log(newNumbers); // [ 5, 4, 3, 2, 1 ]*/

numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(sortedArray)

