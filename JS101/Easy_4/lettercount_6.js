/*
-Create an empty object 
-Split the string into words of array using split method with ' '
-Iterate the words using for loop 
- element[word.length] = another function 
-return the object 
*/

function wordSizes(string) {
  let emptyObject = {};
  let wordArray = string.split(' ');

  for (let i = 0; i < wordArray.length; i += 1) {
      let wordLength = wordArray[i].length;
      if (wordLength === 0) {
        continue;
      }

      if(!emptyObject[wordLength]) {
        emptyObject[wordLength] = 0;
      }
      emptyObject[wordLength] += 1;
    }

 return emptyObject;
}






console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}