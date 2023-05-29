/* -- Understanding the problem
Input: Array of strings

Output: A new array where strings are sorted to the highest number of adjacent consonants a particular string contains 

Rules: 
Explicit:
If 2 strings contain the same highest number of adjacent consonants they should retain their original order in relation to other
Consonants are adjacent
-if they are next to each other in the sampe word 
-if there is a space bet. two consonants in adjacent words

Implicit:
- All words are not case sensitive ?
-There will be at least 2 words in the input array of strings
-Strings can contain multiple words

Questions:
 What is a consonant? Everything except vowels (a, e, i, o, u)
 Do strings always contain multiple words?
 Can strings be empty? 
 Is it possible for a string to contain a no adjacent cosonants 
 Sort in ascending or desending order?  

 -- Examples and test cases
Has to be in descending order 
Strings can be both single and multiple words separated by spcae
Strings are not empty 
Array contains more than 2 strings 

--Data Structure 
 Arrays 

 --Algorithms 
 1. Declared a 'consonants' array that contains all the consonants 
 2. Declared a 'returned array' initialized it to empty array
    -Delcared a 'consonant count' variable
    -Set 'consonant count' to 0
    - Iterate each string inside the input array
3. Count the consonants of each string
    -Iterate each letter inside each string
      If 
      -the first letter of the string is inside the 'consonants' array
      -increment the 'consonant count' by 1 
      else 
      -reassign the 'consonant count' to 0 
      -return the 'consonant count' 
  8. Sort the 'returned array' in the descending order 
    - return the returned array 


const consonants = [ 'b', 'c', 'd', 'f', 'g', 'h',
                     'j', 'k', 'l', 'm', 'n', 'p',
                    'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function sortStringsByConsonants (input) {
  let returnedArray = [];
  

  for (let i = 0; i < input.length; i += 1) {
    let consonantCount = 0;

    for (let j = 0; j < input[i].length; j += 1) {
      if (consonants.includes(input[i][j])) {
        consonantCount += 1;
      }
      else {
        continue; 
      }
    }
    console.log(consonantCount);
   }
  }
 
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); */

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempString = '';
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempString += letter;
    } else if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
      }
    }
    return count;
  }

console.log(countMaxAdjacentConsonants('dddaa')); // 3
console.log(countMaxAdjacentConsonants('ccaa')); // 2
console.log(countMaxAdjacentConsonants('baa')); // 0
console.log(countMaxAdjacentConsonants('aa')); // 0