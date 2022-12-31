// ask the user the first number.
// ask the user the second number.
// ask the user the type of operation: add, subtract, multiply or divide.
// perform the calculation of the two numbers.
// display the results.

const rlsync = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
prompt('Welcome to Calculator! ');

prompt('What is the first number? ');
let number1 = rlsync.question();

while (invalidNumber(number1)) {
  prompt("Please enter a valid number. ");
  number1 = rlsync.question();
}

prompt('What is the second number? ');
let number2 = rlsync.question();

while (invalidNumber(number2)) {
  prompt("Please enter a valid number. ");
  number2 = rlsync.question();
}

//console.log(`${number1} ${number2}`);

prompt('What operation would you like to perform?\n 1) Add, 2) Subtract, 3) Multiply, 4) Divide ');
let operation = rlsync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("You must choose 1, 2, 3, 4 ");
  operation = rlsync.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(`The result is ${output}.`);
