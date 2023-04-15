/*
input: array of integers 
output: array of average integers of parameter array (round down)

Rules: array will not be empty, numbers will be positive 

Data structure: Arrays

Algoritms
-Iterate the elements throught the parameter array 
-Declare a variable 'sum' and add each element of the array 
-Declare a variable 'arrayLength' and set to the length of the parameter array 
-Declare a variable 'average' and divide the sum by arrayLength 
-Round down the average value 
-Return 'average'
*/

function average (array) {
  let sum = array.reduce((accumulator, element) => accumulator + element, 0);
  let arrayLength = array.length;
  let average = Math.floor( sum / arrayLength);

  return average;
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40