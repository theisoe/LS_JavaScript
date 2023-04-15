/* 
Understanding the [P]roblem
Function which takes 2 arrays as argumetns and returns an new array with combined arrays. But the elements in the array should be unique.
Input:
2 arrays
Output:
1 array
Rules/Goals:
The numbers inside the returned array should be unique
[E]xamples and Test Cases
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
[D]ata Structure
Arrays
[A]lgorithm
-SET finalArray to an empty array
-Concat the 2 arrays from function arguments 
-Filter the array using array iteration method 

[C]ode with Intent
*/

function union(arr1, arr2) {
  let finalArray = [];
  let unionArray = arr1.concat(arr2);

  unionArray.forEach(element => {
    if (!finalArray.includes(element)) {
      finalArray.push(element);
    }
  });
  
  return finalArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));