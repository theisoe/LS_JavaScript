/* 
Understanding the [P]roblem
Input:
Output:
Rules/Goals:
[E]xamples and Test Cases
Mental Model 
[D]ata Structure
[A]lgorithm
[C]ode with Intent
*/

function interleave (arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    result.push(arr1[i], arr2[i]);
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));