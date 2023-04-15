/*let numbers = [1, 2, 3, 4];

//solution 1
for (let i = 0; i < numbers.length; i += 1) {
  while (numbers[i] < 4) {
    numbers.pop(i);
  }
}
console.log(numbers); 

//solution 2
let numbers = [1, 2, 3, 4];
numbers.splice(0, 4);

console.log(numbers);*/

//solution 3
let numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

