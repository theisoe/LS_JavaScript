const shortLongShort = function (str1, str2) {
  let str1Length = str1.length;
  let str2Length = str2.length;
  if(str1Length > str2Length) {
    return str2.concat(str1, str2)
  } else if(str1Length < str2Length) {
    return str1.concat(str2, str1)
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"