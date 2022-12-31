let rlsync = require("readline-sync");
let bill = Number(rlsync.question("What is the bill? "));
let tipPercent = Number(rlsync.question("What is the tip percentage? "));

let tip = bill * (tipPercent / 100);
let roundTip = tip.toFixed(2);
let total = bill + tip; 
let roundTotal = total.toFixed(2);

console.log(`The tip is $${roundTip}`);
console.log(`The total is $${roundTotal}`);
