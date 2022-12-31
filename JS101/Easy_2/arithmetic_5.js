/* Ask user for 2 integers
Use readline sync method for the user input; make sure to coerce it from string to number or integer
operate addition, subtraction, product, quotient, remainder and power
Use Math.floor in quotient operation to produce a whole number
print the result */

let rlsync = require("readline-sync");
let num1 = parseInt(rlsync.question("==> Enter the first number: "));
let num2 = parseInt(rlsync.question("==> Enter the second number: "));

let addition = num1 + num2;
console.log(`==> ${num1} + ${num2} = ${addition}`);

let subtraction = num1 - num2;
console.log(`==> ${num1} - ${num2} = ${subtraction}`);

let product = num1 * num2;
console.log(`==> ${num1} * ${num2} = ${product}`);

let quotient = num1 / num2;
console.log(`==> ${num1} / ${num2} = ${Math.floor(quotient)}`);

let remainder = num1 % num2;
console.log(`==> ${num1} % ${num2} = ${remainder}`);

let power = num1 ** num2;
console.log(`==> ${num1} ** ${num2} = ${power}`);