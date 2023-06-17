/*let words = ['go', 'ahead', 'and', 'jump'];
words = words.map(element => element.length).sort();

console.log(words);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});

function disemvowel(str) {
  str = str.replace(/[^]/g,'');
  return str;
}


console.log(disemvowel('LOL'));
*/
console.log([[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
}));
