/*
take 2 arguments which are arrays
return a new array that is a product of 2 arrays of the same index 
*/

function multiplyList (arr1, arr2) {
let finalArray = []; 
let product = 0;
 for (let i = 0; i < arr1.length; i += 1) {
  product = arr1[i] * arr2[i];
  finalArray.push(product);
 }
 return finalArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]