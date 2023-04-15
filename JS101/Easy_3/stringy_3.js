function stringy (num) {
  let string1 = "1";
  let string2 = "0";

  if (num % 2 === 0) {
    return (string1.concat(string2).repeat(num / 2));
  } else {
    let oddNumber = Math.floor(num / 2);
    return (string1.concat(string2).repeat(oddNumber).concat(string1));
  }
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"