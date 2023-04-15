function wordSizes(string) {
  string = string.replace(/['?!,.]/g, '');
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


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}