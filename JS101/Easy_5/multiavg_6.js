/* 
Understanding the [P]roblem
Input:
Output:
Rules/Goals:
[E]xamples and Test Cases
Mental Model 
[D]ata Structure
[A]lgorithm
-use reduce method to mulptiply the array
-Set a variable, multiplication
-set a variable, result 
-Divide the multiplication by the array.length
-Set to 3 decimals
-
[C]ode with Intent
*/

function multiplicativeAverage (array) {
  let multiplcation = array.reduce((accumulator, element) => accumulator * element, 1);
  let result = (multiplcation / array.length).toFixed(3);
  return String(result);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"