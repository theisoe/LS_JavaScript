/* 
Understanding the [P]roblem
Find a duplicate value in an array and returns its value
Input:
an array 
Output:
number 
Rules/Goals:
one value in an array has at least one duplicate
[E]xamples and Test Cases
findDup([1, 5, 3, 1]);                                // 1
[D]ata Structure
Arrays
[A]lgorithm
-sort the array
-set a varible, duplicate
-iterate the array using for loop 
-if the index of the array is equal to the next index,
-reassign the duplicate variable to the equal number 
[C]ode with Intent
*/

function findDup (array) {
  sortedArray = array.sort();
  let duplicate = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      duplicate = sortedArray[i];
    }
  }
  return duplicate;
}

console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));