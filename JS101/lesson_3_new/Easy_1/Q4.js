//Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";

function sentence (str) {
  let lowerCase = str.toLowerCase();
   return lowerCase[0].toUpperCase() + lowerCase.slice(1);
}

console.log(sentence(munstersDescription));


// => The munsters are creepy and spooky.