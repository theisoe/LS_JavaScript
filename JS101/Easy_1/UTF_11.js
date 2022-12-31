//function determines the UTF-16 string value
// UTF-16 = sume of UTF-16 values of every character in the string 
//set a variable for the sum of the string UTF characters 
//iterate each string charater from the argument
//Use String.prototype.charchodeAt() for each character; set a variable for the each UTF-16 character 
// Add the number to sum variable
//Return the sum 

function utf16Value (string) {
  let result = 0; 
  let code = 0;
  for (let i = 0; i < string.length ; i += 1) {
    code = string.charCodeAt(i);
    result += code;
  }
  return result;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
