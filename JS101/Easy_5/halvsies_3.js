/* 
Understanding the [P]roblem
-function that takes array as an argument and returns an array that contains two elements, each of wich is an array 
-First half of orginal array elements in first element, second half of the orginal array elements in the second array 
Input:
-1 array
Output:
- 2 arrays
Rules/Goals:
if the original array contains an odd number, place the middle element in the first half array
[E]xamples and Test Cases
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []][D]ata Structure
[A]lgorithm
Set empty array 
[C]ode with Intent
*/

function halvsies(arr) {
  let finalArray = [];
  let index = arr.length / 2;

  let arr1 = [];
  let arr2 = [];

  if (arr.length % 2 === 0) {
    arr1  = arr.slice(0, index);
    arr2  = arr.slice(index);
    finalArray.push(arr1, arr2);

  } else {
    index = index + 1;
    arr1 = arr.slice(0, index);
    arr2 = arr.slice(index);
    finalArray.push(arr1, arr2);
  }

  return finalArray;

 }

 console.log(halvsies([1, 2, 3, 4]));
 console.log(halvsies([1, 2, 3, 4, 3]));
 console.log(halvsies([5]));
 console.log(halvsies([]));