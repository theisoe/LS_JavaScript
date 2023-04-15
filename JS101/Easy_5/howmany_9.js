/*
input: array 
output : string and number 

Rules: words are case sensitive 

Data types: arrays, objects 

Algorithm 
- Declare a variable 'object' and initialized to empty object 
- Declare a variable 'count' and initialized to zero
-Delcare a variable 'array' and initialized to empty array
-Iterate each element through the parameter array 
-if each element is not in the 'array', add the element in the 'array'  
-Iterate each element throught the 'array'
-if elemnet in the 'array' is equal to element in the parameter array
-increment the count 
- Add the each element of the 'array' to the object and set the property to count 
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurences (vehicles) {
  let object = {};
  let array = [];

  for (let i = 0; i < vehicles.length ; i += 1) {
    if (!array.includes(vehicles[i])) {
      array.push(vehicles[i]);
    }
}

  for (let i = 0; i < array.length; i += 1) {
  let count = 0;
   for (let j = 0; j < vehicles.length; j += 1) {
    if (array[i] === vehicles[j]) {
      count += 1;
    }
   }
    
    object[array[i]] = count; 
 }
 for (const [key, value] of Object.entries(object)) {
  console.log(`${key}=> ${value}`);
}
}
countOccurences (vehicles);