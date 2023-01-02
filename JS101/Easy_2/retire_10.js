//Ask user the age.
//Ask the desired retired age.
//log the current year. 
//Subtract the age from retired age. 
//log the retired year and the how many more years left 

const rlsync = require("readline-sync");
function prompt(msg) {
  console.log(msg);
}

prompt("What is your age? ");
let age = rlsync.question();

prompt("At what age would you like to retire? ");
let retiredAge = rlsync.question();

const currentYear = new Date().getFullYear();
let yearsLeft = Number(retiredAge - age);

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsLeft}. 
You have only ${yearsLeft} of work to go!`);
