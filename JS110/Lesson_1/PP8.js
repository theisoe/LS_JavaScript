/* Problem 8- Take a look at the following array.
Write a program that uses this array to create an object 
where the names are the keys and the values are the positions in the array:
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstoneObj = {};

flintstones.forEach((name, index) => {
  console.log(name, index);
  flintstoneObj[name] = index;
})

console.log(flintstoneObj); 


