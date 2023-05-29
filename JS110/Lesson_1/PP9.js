/* Problem 9 - Add up all of the ages from the Munster family object:*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

/*
Pseudocode 
// get all the values from the object in an array 
// Use a method that transform each element in the array 
//return the final sum age 
*/

let ageArray = Object.values(ages); //[ 32, 30, 5843, 10, 22, 237]
let sumAge = 0; 

/*for (let i = 0; i < ageArray.length; i += 1) {
   sumAge = sumAge + ageArray[i];
}*/


ageArray.forEach(age => {
  sumAge = sumAge + age;
  return sumAge;
})

console.log(sumAge);
