let munstersDescription = "The Munsters are creepy and spooky.";

let array = munstersDescription.split("");
let array2 = [];
array.forEach(function(alphabet) {
  if (alphabet === alphabet.toUpperCase()) {
    array2.push(alphabet.toLowerCase());
  } else {
    array2.push(alphabet.toUpperCase());
  }
});

console.log(array2.join(''));