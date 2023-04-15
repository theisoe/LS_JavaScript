let alphabets = "abcdefghijklmnopqrstuvwxyz";
let uppercaseAlphabets = alphabets.toUpperCase();

let alphaberArray = alphabets.split('');
let uppercaseAlphabetsArray = uppercaseAlphabets.split('');

let combinedAlphabetArray = alphaberArray.concat(uppercaseAlphabetsArray);
let cleanUpArray = [];

function cleanUp(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (combinedAlphabetArray.includes(string[i])) {
      cleanUpArray.push(string[i]);
    } else if (cleanUpArray[cleanUpArray.length-1] !== " ") {
      cleanUpArray.push(' ');
    } 
  }
  return cleanUpArray.join('');

}

console.log(cleanUp("---what's my +*& line?"));