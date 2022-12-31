let rlsync = require("readline-sync");
let integer = parseInt(rlsync.question("Please enter an integer greater than 0: "));
let compute = rlsync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (compute === "s") {
  function sum(num) {
    if (num === 1) return 1;
    return num + sum(num-1);
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum(integer)}`);

}else if (compute === "p") {
  function multiply(num) {
    if (num === 1) return 1;
    return num * multiply(num-1);
  }
  console.log(`The product of the integers between 1 and ${integer} is ${multiply(integer)}.`);
}










