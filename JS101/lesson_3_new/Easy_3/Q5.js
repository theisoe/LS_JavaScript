/* The following function unnecessarily uses two return statements to return boolean values. 
Can you rewrite this function so it only has one return statement and does not explicitly use either true or false? */

//First solution
/*function isColorValid(color) {
  return (color === "blue" || color === "green") 
}
console.log(isColorValid('red'));*/

//Second solution 
/* const isColorValid = color => color === "blue" || color === "green";
console.log(isColorValid('red')); */

const isColorValid = color => ['blue', 'green'].includes(color);
console.log(isColorValid('red'));