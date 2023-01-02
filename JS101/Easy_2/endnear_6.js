//function that returns next to last word 
// string is passed in an argument 

function penultimate (word) {
  let array = word.split(" ");
  return array[array.length - 2];
}

console.log(penultimate("last word"))
