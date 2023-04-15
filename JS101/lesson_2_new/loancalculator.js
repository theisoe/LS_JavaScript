//Ask for loan amount
//Ask for annual percent rate
//loan duration
//calculate the monthly interest rate
//calculate the loan duration in months

let rlsync = require("readline-sync");

function prompt(message) {
  console.log(`${message}`);
}

function invalidInput(input) {
  return input.trimStart() === ''
        || Number.isNaN(Number(input))
        || Number(input) < 0;
}

function invalidPercentRate(input) {
  return input <= 0 || input > 100;
}

while (true) {

  console.clear();

  prompt("Welcome to the loan calculator!");
  prompt("What is the loan amount? ");
  let loanAmount = rlsync.question();

  while (invalidInput(loanAmount)) {
    prompt("Please enter a valid loan amount.");
    loanAmount = rlsync.question();
  }
  prompt(`You loan amount is $${loanAmount}.`);

  prompt("What is the annual percent rate in % ?");
  let annualPercentRate = rlsync.question();

  while (invalidInput(annualPercentRate)
        || invalidPercentRate(annualPercentRate)) {
    prompt("Please enter a valid percent rate!");
    annualPercentRate = rlsync.question();
  }
  prompt(`Your annual percent rate is ${annualPercentRate}%.`);

  let monthlyInterestRate = (annualPercentRate / 12) / 100;

  prompt("What is the loan duration in months?");
  let loanDuration = rlsync.question();

  while (invalidInput(loanDuration)) {
    prompt("Please enter a valid loan duration in months.");
    loanDuration = rlsync.question();
  }
  prompt(`The loan duration is ${loanDuration} months.`);

  const DENOMINATOR = 1 - Math.pow((1 + monthlyInterestRate), (-loanDuration));
  let monthlyPayment =  (loanAmount * DENOMINATOR).toFixed(2);

  prompt(`Your monthly payment is $${monthlyPayment}`);

  prompt("Whould you like to do another calculation?");
  let answer = rlsync.question().toLowerCase();

  while (answer !== "n" && answer !== "y") {
    prompt("Please enter 'y' or 'n'");
    answer = rlsync.question().toLowerCase();
  }

  if (answer[0] === "n") {
    prompt("See you again!");
    break;
  }

}