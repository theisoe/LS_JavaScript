/* 
Understanding the [P]roblem: Ask 6 numbers from user. Logs a message whether the 6th number appears among the first 5 numbers. 
Input: 6 numbers
Output: 1 message that shows the 6th number appars in the first 5 numbers or otherwise. 
Rules/Goals:
==========================
[E]xamples and Test Cases
17 appears in 25, 15, 20, 17, 23
18 does not appear in 25, 15, 20, 17, 23
==========================
Mental Model 

==========================
[D]ata Structure
Arrays 
==========================
[A]lgorithm
-Declare an empty array
-Declare a prompt function readline-sync question to ask number 
-Ask for 6 numbers 
-Assign num1, num2, num3, num4, num5, num6 to the user input 
-Push the num1-num5 to the empty array 
-Check if num6 is included in the array
-IF num6 is in the array, print "num 6  appears in the first 5 numbers"
-ELSE, prints "num 6 does not appears in the first 5 numbers"
==========================
[C]ode with Intent
*/

let numbers = [];
let rlsync = require("readline-sync");

function prompt(message) {
  console.log(`${message}`);
}

prompt("Enter the 1st number: ");
let num1 = rlsync.question();

prompt("Enter the 2nd number: ");
let num2 = rlsync.question();

prompt("Enter the 3rd number: ");
let num3 = rlsync.question();

prompt("Enter the 4th number: ");
let num4 = rlsync.question();

prompt("Enter the 5th number: ");
let num5 = rlsync.question();

prompt("Enter the 6th number: ");
let num6 = rlsync.question();

numbers.push(num1, num2, num3, num4, num5);
//console.log(numbers);

if (numbers.includes(num6)) {
  console.log(`The number ${num6} appears in ${numbers.join(", ")}.`);
} else {
  console.log(`The number ${num6} does not appear in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`);
}

