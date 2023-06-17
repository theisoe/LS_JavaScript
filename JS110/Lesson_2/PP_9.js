/*Given the following data structure, return a new array with the same structure,
 but with the values in each subarray ordered 
 -- alphabetically or numerically as appropriate -- in ascending order.*/


let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map (subArr => {
  if (typeof subArr[0] === 'string') {
  return subArr.slice().sort();
  } else {
  return subArr.slice().sort((a, b) => a - b);
  }
});

console.log(newArr);

//Question 4 (for interview)
/* Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".
  Note:
  All given inputs are in lowercase letters a-z. 
  
// Test Cases
console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspecies", "interstellar", "interstate"])  === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true

// 2
// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.


//Example:

console.log(sumPairs([4, 3, 2, 3, 4],         6));
//                    ^-----^         4 + 2 = 6, indices: 0, 2
//                       ^-----^      3 + 3 = 6, indices: 1, 3
//                          ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

// Negative numbers and duplicate numbers can and will appear.
*/
  
