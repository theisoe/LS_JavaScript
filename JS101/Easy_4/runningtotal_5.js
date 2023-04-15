/* function 
input- array of numbers 
output - an array with same number of elements, with each element value is total from original array
Iterate the array using for loop 
At each iteration, add value at index 0 and 1
Return the new value 
Replace the returned value at index 1 
Repeat 
*/


function runningTotal(array) {
  let newArray = []; 
  let newValue = 0;
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(newValue += array[i])
  }
  return newArray;
}

console.log(runningTotal([2, 5, 13]));