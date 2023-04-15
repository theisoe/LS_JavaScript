//show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
let frontWords = "Four score and "

console.log(`Four score and ${famousWords}`);
console.log(frontWords.concat(famousWords));