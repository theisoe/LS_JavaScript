let rlsync = require ("readline-sync");

let noun = rlsync.question("Enter a noun: ");
let verb = rlsync.question("Enter a verb: ");
let adj = rlsync.question("Enter an adjective: ");
let adv = rlsync.question("Enter an adverb: ")

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!
The ${adj} ${noun} ${verb+'s'} ${adv} over the lazy ${noun}.
The ${noun} ${adv} ${verb+'s'} up blue Joe's turtle.`);