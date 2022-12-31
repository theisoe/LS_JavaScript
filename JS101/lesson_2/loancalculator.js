/*START
GET the loan amount
Validate the number
IF the user input is not a number or less than zero, ask again
ELSE proceed
SET loan amount
GET the annual percentage rate in %
Validate the percentage
IF the input is not between 0 and 100, ask again
ELSE proceed
SET monthly interest rate: annual percentage rate / 12
GET loan duration in months
Validate the number; if the user input is not a number, ask again
SET loan duration in months

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

PRINT monthly payment in $ and cents
END*/

const rlsync = require ("readline-sync");
function prompt(message) {
  console.log(`${message}`);
}

prompt("Enter the loan amount in $: ");
let loanAmount = rlsync.question();

function invalidNumber(loanAmount) {
  return loanAmount.trimStart() === "" || Number.isNaN(Number(loanAmount));
}
while (invalidNumber(loanAmount) || loanAmount <= 0) {
  prompt("Please enter a valid amount: ");
  loanAmount = rlsync.question();
}

prompt("Enter the annual percentage rate in %: ");
let annualPercentRate = rlsync.question();
while ((invalidNumber (annualPercentRate)) || (annualPercentRate < 0)
      || (annualPercentRate >= 100)) {
  prompt("Please enter a valid percentage: ");
  annualPercentRate = rlsync.question();
}
annualPercentRate /= 100;
console.log(annualPercentRate);

let monthlyInterestRate = (annualPercentRate / 12);
console.log(`Your monthly interest rate is ${monthlyInterestRate}`);

prompt("Enter the loan duaration in months: ");
let monthlyDuration = rlsync.question();
while (invalidNumber(monthlyDuration) || monthlyDuration <= 0) {
  prompt("Please enter a valid duration.");
  monthlyDuration = rlsync.question();
}

let monthlyPayment = (loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-monthlyDuration))))).toFixed(2);
console.log(`Your monthly payment is $${monthlyPayment}. `);
