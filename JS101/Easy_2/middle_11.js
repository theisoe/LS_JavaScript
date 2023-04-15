/* function that takes a non-empty string argument 
get the length of the string 
get the modulo 
if the result is odd, return 1 character 
if the reesult is even, return 2 characters
*/

function centerOf(sentence) {
  let sentenceLength = sentence.length; 
  let oddLength = 0;
  let evenLength = 0;
  if (sentenceLength % 2 !== 0) {
    oddLength = Math.floor(sentenceLength / 2);
    return sentence[oddLength];
  }else if (sentenceLength % 2 === 0) {
    evenLength = parseInt(sentenceLength / 2);
    return sentence.slice((evenLength-1), (evenLength+1));
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"