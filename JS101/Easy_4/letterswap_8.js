/*
Separate the string to words of array using split method
Iterate the array 
Pass each word to a function of swapping first and last letter 
Function of swapping first and last letter 
if the word has only 1 letter, return the word 
return the last letter and first letter swapped
Turn the array to string using join method
*/

function swap(string) {
  let newArray = string.split(' ');
  for (let i = 0; i < newArray.length; i += 1) {
    newArray[i] =swapFirstAndLastCharacters(newArray[i]); 
  }

  return newArray.join(' ');

  function swapFirstAndLastCharacters(word) {
    if (word.length === 1) {
      return word;
    }

    return word[word.length-1] + word.slice(1,-1) + word[0];

  }
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"