let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let statement1_arr = statement1.split('').filter(char => char === "t").length;
let statement2_arr = statement2.split('').filter(char => char === "t").length;

console.log(statement1_arr);
console.log(statement2_arr);