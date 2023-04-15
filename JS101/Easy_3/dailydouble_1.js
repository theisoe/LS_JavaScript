/*function crunch (string) {
  let array = string.split("");
  for (let i = 0; i < array.length; i += 1) {
    let index = i + 1; 

    if (array[index] === array[i]) {
    array.splice(index, 1);
    }
  }
  return array.join("");
}



console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a
console.log(crunch(''));                           // "" 
*/

function crunch(string) {
  let array = string.split('');
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    let index = i + 1;

    if (array[i] !== array[index]) {
      newArray.push(array[i]);
    }
  }
  return newArray.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log (crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

