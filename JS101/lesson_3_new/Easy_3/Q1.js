/* Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

Understanding the [P]roblem
Input:
- array 
Output:
- empty array
Rules/Goals:
- All the elements in the array should be eliminated
[E]xamples and Test Cases
Mental Model 
- [1, 2, 3, 4] => [1, 2, 3] => [1, 2] => [1] => []
[D]ata Structure
- Array 
[A]lgorithm
First way 
- Iterate througt the array 
- Remove each element in the array from the end 
- Return the final array 
Second way
- Iterate through the array
-Remove each element in the array from the front 
-Return the final array
Third way 
- Make the length of the array to zero
[C]ode with Intent
*/

//First way
/* let numbers = [1, 2, 3, 4];
 function removeElement (array) {
  for (let i = 0; i < array.length; i += 1) {
    while (array[i] < 4) {
      array.pop();
    }
  }
  return array;
}
  
console.log(removeElement(numbers)); */

//Second way

/* let numbers = [1, 2, 3, 4];
function removeElement (array) {
  for (let i = 0; i < array.length; i += 1) {
    while (array[i] < 5) {
    array.shift();
    }
  }
  return array;
}

console.log(removeElement(numbers));
*/

//Third way 
 let numbers = [1, 2, 3, 4];
  numbers.length = 0;

  console.log(numbers);
