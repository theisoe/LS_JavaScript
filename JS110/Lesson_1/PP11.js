//Create an object that expresses the frequency with which each letter occurs in this string:


let statement = "The Flintstones Rock";
let statementArray = statement.split('').filter(char => char !== ' ');
let frequency = {};

statementArray.forEach(char => {
  frequency[char] = frequency[char] || 0;
  frequency[char] = frequency[char] + 1; 
})

console.log(frequency);

